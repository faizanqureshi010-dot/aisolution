'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

type Line = { who: 'caller' | 'agent'; text: string };
type VisibleLine = Line & { id: number };

const script: Line[] = [
  { who: 'caller', text: 'Hi, do you have anything open Thursday afternoon?' },
  { who: 'agent', text: 'I have 2:00 or 3:30 Thursday. Which works better?' },
  { who: 'caller', text: '3:30 is perfect.' },
  { who: 'agent', text: "You're booked for 3:30pm Thursday. Confirmation sent." },
];

export default function LiveCallDemo() {
  const [visible, setVisible] = useState<VisibleLine[]>([]);
  const [typing, setTyping] = useState(false);
  const nextId = useRef(0);

  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let i = 0;
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const schedule = (fn: () => void, delay: number) => {
      const id = setTimeout(() => {
        if (!cancelled) fn();
      }, delay);
      timeouts.push(id);
      return id;
    };

    function step() {
      if (cancelled) return;
      if (i >= script.length) {
        schedule(() => {
          setVisible([]);
          i = 0;
          step();
        }, 1800);
        return;
      }
      setTyping(true);
      schedule(
        () => {
          setTyping(false);
          const line = script[i];
          if (line) {
            setVisible((v) => [...v, { ...line, id: nextId.current++ }]);
          }
          i++;
          schedule(step, reduce ? 100 : 1400);
        },
        reduce ? 50 : 650
      );
    }
    step();
    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="glow-ring w-full max-w-sm rounded-2xl border border-line bg-panel2/90 backdrop-blur-xl p-5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="mb-4 flex items-center gap-2 border-b border-line pb-3">
        <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-brand-gradient">
          <PhoneCall className="h-3.5 w-3.5 text-paper" />
          <span
            className="absolute inset-0 rounded-full border-2 border-blue/60"
            style={{ animation: 'pulseRing 1.8s ease-out infinite' }}
          />
        </span>
        <span className="font-mono-label text-xs text-slate">Live Call — AISC Booking Agent</span>
        <span className="ml-auto flex items-center gap-1.5 text-xs text-blue">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue" /> answering
        </span>
      </div>
      <div className="mb-4 flex items-end justify-center gap-1 h-8">
        {Array.from({ length: 28 }).map((_, i) => (
          <span
            key={i}
            className="w-1 rounded-full bg-blue/40"
            style={{
              height: '100%',
              animation: `waveform ${0.6 + (i % 5) * 0.12}s ease-in-out ${i * 0.03}s infinite`,
              opacity: typing || visible.length > 0 ? 1 : 0.35,
              transition: 'opacity 0.3s',
            }}
          />
        ))}
      </div>
      <div className="flex min-h-[180px] flex-col gap-2.5">
        <AnimatePresence initial={false}>
          {visible.map((line) => {
            if (!line) return null;
            return (
              <motion.div
                key={line.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`max-w-[80%] rounded-xl px-3.5 py-2 text-sm ${
                  line.who === 'agent'
                    ? 'self-start bg-panel text-ink'
                    : 'self-end bg-blue/10 text-ink'
                }`}
              >
                {line.text}
              </motion.div>
            );
          })}
        </AnimatePresence>
        {typing && (
          <div className="flex gap-1 self-start rounded-xl bg-panel px-3.5 py-2.5">
            {[0, 1, 2].map((d) => (
              <span
                key={d}
                className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate"
                style={{ animationDelay: `${d * 0.15}s` }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
