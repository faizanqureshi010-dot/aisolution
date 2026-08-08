'use client';

import { useEffect, useRef, useState } from 'react';

type CursorMode = 'default' | 'pill' | 'card' | 'text' | 'diagram';

/**
 * Guesses a short contextual label for card/diagram hover targets — the kind of
 * surface that doesn't already carry its own visible button copy. Buttons and
 * links already say "Book a Pilot" etc., so we don't double up a label on top
 * of them; labels only appear for `pill` targets that opt in explicitly via
 * data-cursor-label, and for card/diagram targets where a label adds context
 * that isn't already on screen.
 */
function guessLabel(el: HTMLElement, mode: CursorMode): string | null {
  const explicit = el.closest('[data-cursor-label]')?.getAttribute('data-cursor-label');
  if (explicit) return explicit;

  if (mode === 'diagram') return 'Explore';
  if (mode === 'card') {
    const href = el.closest('a')?.getAttribute('href') || '';
    const text = (el.textContent || '').toLowerCase();
    if (href.includes('demo') || text.includes('demo')) return 'Book Demo';
    if (text.includes('play') || el.closest('video, [data-cursor-play]')) return 'Play';
    if (text.includes('learn') || href.includes('why-aisc') || href.includes('about')) return 'Learn';
    if (el.closest('a')) return 'View';
    return null; // static info cards don't need a label
  }
  return null;
}

function resolveMode(target: HTMLElement | null): { mode: CursorMode; magnet: HTMLElement | null; premium: boolean } {
  if (!target) return { mode: 'default', magnet: null, premium: false };

  const pill = target.closest<HTMLElement>('a, button, [role="button"], input, select, textarea, [data-cursor-hover]');
  if (pill) return { mode: 'pill', magnet: pill, premium: !!pill.closest('[data-cursor-premium]') };

  const diagram = target.closest<HTMLElement>('[data-cursor="diagram"], svg[data-diagram]');
  if (diagram) {
    const rect = diagram.getBoundingClientRect();
    // Guard against small lucide icons rendered as bare <svg> — only treat
    // genuinely large diagram/illustration surfaces as "diagram".
    if (rect.width > 100 && rect.height > 60) return { mode: 'diagram', magnet: null, premium: false };
  }

  const card = target.closest<HTMLElement>('[data-cursor="card"]');
  if (card) return { mode: 'card', magnet: card, premium: false };

  const text = target.closest<HTMLElement>('p, [data-cursor="text"]');
  if (text) return { mode: 'text', magnet: null, premium: false };

  return { mode: 'default', magnet: null, premium: false };
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const rippleLayerRef = useRef<HTMLDivElement>(null);

  const [mode, setMode] = useState<CursorMode>('default');
  const [premium, setPremium] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;
    setEnabled(true);

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let mouseX = 0;
    let mouseY = 0;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let velX = 0;
    let velY = 0;

    const magnetRect = { current: null as DOMRect | null };
    const modeRef = { current: 'default' as CursorMode };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate(${mouseX}px, ${mouseY + 34}px) translate(-50%, 0)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const { mode: nextMode, magnet, premium: isPremium } = resolveMode(target);
      modeRef.current = nextMode;
      setMode(nextMode);
      setPremium(isPremium);
      setLabel(guessLabel(target, nextMode));
      magnetRect.current = magnet ? magnet.getBoundingClientRect() : null;
    };

    const onDown = (e: MouseEvent) => {
      const layer = rippleLayerRef.current;
      if (!layer || reduce) return;
      const ripple = document.createElement('span');
      ripple.className = 'cursor-ripple';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      layer.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    };

    let raf: number;
    const tick = () => {
      // Velocity, for the subtle motion-stretch on the ring.
      velX = mouseX - prevMouseX;
      velY = mouseY - prevMouseY;
      prevMouseX = mouseX;
      prevMouseY = mouseY;

      if (reduce) {
        ringX = mouseX;
        ringY = mouseY;
      } else {
        const magnet = magnetRect.current;
        const targetX = magnet ? mouseX * 0.7 + (magnet.left + magnet.width / 2) * 0.3 : mouseX;
        const targetY = magnet ? mouseY * 0.7 + (magnet.top + magnet.height / 2) * 0.3 : mouseY;
        // Spring-style easing toward the (possibly magnet-biased) target.
        ringX += (targetX - ringX) * 0.16;
        ringY += (targetY - ringY) * 0.16;
      }

      if (ringRef.current) {
        const speed = Math.min(Math.hypot(velX, velY), 40);
        const stretch = reduce ? 1 : 1 + speed / 70;
        const velocityAngle = reduce ? 0 : (Math.atan2(velY, velX) * 180) / Math.PI;
        // Diamonds sit rotated 45deg at rest; text mode stays an unrotated bar.
        const baseAngle = modeRef.current === 'text' ? 0 : 45;
        ringRef.current.style.transform =
          `translate(${ringX}px, ${ringY}px) translate(-50%, -50%) rotate(${baseAngle + velocityAngle * 0.15}deg) scale(${stretch}, ${1 / Math.sqrt(stretch)})`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mousedown', onDown);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!enabled) return null;

  const shapeSize = { default: 12, pill: 26, card: 32, text: 4, diagram: 20 }[mode];
  const shapeCorner = mode === 'text' ? 'rounded-sm' : 'rounded-[3px]'; // near-square corners read as a diamond once rotated
  const shapeHeight = mode === 'text' ? 22 : shapeSize;

  const shapeBackground =
    mode === 'pill' ? (premium ? 'rgba(236,72,153,0.82)' : 'rgba(99,102,241,0.82)') :
    mode === 'card' ? 'rgba(168,85,247,0.82)' :
    mode === 'diagram' ? 'rgba(0,168,200,0.82)' :
    mode === 'text' ? 'rgba(99,102,241,0.82)' :
    'rgba(168,85,247,0.55)'; // default/moving state — small, semi-transparent, purple identity per spec (also fixes a stale pre-rebrand hex left over from the earlier sitewide color swap)

  const shapeShadow =
    mode === 'pill' ? (premium ? '0 0 16px 1px rgba(229,57,158,0.4)' : '0 0 10px 1px rgba(31,123,212,0.3)') :
    mode === 'diagram' ? '0 0 10px 1px rgba(0,168,200,0.3)' :
    mode === 'default' ? '0 0 8px 1px rgba(120,62,213,0.25)' :
    'none';

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[300] h-1.5 w-1.5 rounded-full bg-blue transition-opacity duration-200 hidden md:block"
        style={{ opacity: isVisible && mode !== 'text' ? 1 : 0 }}
      />
      <div
        ref={ringRef}
        className={`pointer-events-none fixed left-0 top-0 z-[300] transition-[width,height,background-color,border-radius,box-shadow] duration-300 ease-premium hidden md:block ${shapeCorner}`}
        style={{
          width: shapeSize,
          height: shapeHeight,
          background: shapeBackground,
          boxShadow: shapeShadow,
          opacity: isVisible ? 1 : 0,
        }}
      />
      {label && (
        <div
          ref={labelRef}
          className="pointer-events-none fixed left-0 top-0 z-[300] hidden md:block rounded-full bg-navy px-2.5 py-1 text-[10px] font-medium tracking-wide text-white opacity-0 animate-[fadeIn_150ms_ease-out_forwards]"
        >
          {label}
        </div>
      )}
      <div ref={rippleLayerRef} className="pointer-events-none fixed inset-0 z-[299] hidden md:block" />
    </>
  );
}
