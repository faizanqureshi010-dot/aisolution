'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';

/** ScrollProgress — thin progress bar tied to page scroll, one shared implementation */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (scrolled / max) * 100 : 0);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed left-0 top-0 z-[250] h-[2px] w-full bg-transparent">
      <div className="h-full bg-brand-gradient transition-[width] duration-100" style={{ width: `${progress}%` }} />
    </div>
  );
}

/**
 * StickyProductNav + SectionSpy combined — a sticky in-page nav that highlights
 * whichever section is currently in view. Sections are passed as {id,label} pairs;
 * the page is responsible for rendering elements with matching ids.
 */
export function StickyProductNav({ sections }: { sections: { id: string; label: string }[] }) {
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="Section navigation"
      className="sticky top-[64px] z-30 flex gap-1 overflow-x-auto border-b border-line bg-paper/90 px-8 py-3 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-container gap-1">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            data-cursor-hover
            className={cn(
              'whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors',
              active === s.id ? 'bg-panel2 text-ink' : 'text-slate hover:text-ink'
            )}
          >
            {s.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

/** PinnedSection — sticky-within-viewport section for content that should stay visible while a sibling scrolls */
export function PinnedSection({ pinned, scrolling }: { pinned: React.ReactNode; scrolling: React.ReactNode }) {
  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <div className="lg:sticky lg:top-24 lg:self-start">{pinned}</div>
      <div>{scrolling}</div>
    </div>
  );
}

/** HighlightPanel — emphasis block, distinct visual weight from a plain Card */
export function HighlightPanel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('rounded-token border border-purple/30 bg-purple/5 p-6', className)}>{children}</div>
  );
}

/** ExpandableInfoPanel — click-to-expand detail block, distinct from Accordion (single standalone panel, not a list) */
export function ExpandableInfoPanel({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-token border-2 border-purple/50 bg-panel shadow-[0_8px_24px_-8px_rgba(168,85,247,0.35)]">
      <button
        data-cursor-hover
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className="font-display font-semibold">{title}</span>
        <ChevronDown className={cn('h-4 w-4 text-slate transition-transform', open && 'rotate-180')} />
      </button>
      {open && <div className="border-t border-line px-5 py-4 text-sm text-slate">{children}</div>}
    </div>
  );
}
