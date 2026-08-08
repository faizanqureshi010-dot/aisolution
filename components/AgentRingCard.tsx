'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface RingCardAgent {
  name: string;
  emoji: string;
  colorHex: string;
  action: string;
}

/**
 * AgentRingCard — the original card-wrapped agent ring (per-agent colors,
 * text hub). Kept as its own distinct component from AgentSpotlightRing
 * (the newer, larger, brand-colored, logo-centered, no-card version used on
 * the homepage) so the two pages can each keep a genuinely different ring
 * rather than sharing one component.
 */
export function AgentRingCard({ agents }: { agents: RingCardAgent[] }) {
  const [active, setActive] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    if (mq.matches) return;
    const interval = setInterval(() => setActive((a) => (a + 1) % agents.length), 2400);
    return () => clearInterval(interval);
  }, [agents.length]);

  const centerX = 220;
  const centerY = 190;
  const radius = 150;
  const angleStep = (2 * Math.PI) / agents.length;

  return (
    <div className="rounded-2xl border border-line bg-panel2/90 p-6">
      <div className="font-mono-label mb-2 flex items-center gap-2 text-xs text-slate">
        <span className="h-1.5 w-1.5 rounded-full bg-positive" />
        Eight AI Employees — one coordinated team
      </div>

      <svg viewBox="0 0 440 380" className="w-full" role="img" aria-label="Eight coordinated AI employees, one currently highlighted">
        <defs>
          <radialGradient id="ringcard-hub-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A855F7" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx={centerX} cy={centerY} r="95" fill="url(#ringcard-hub-glow)" />

        {agents.map((agent, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          const isActive = !reduceMotion && i === active;

          return (
            <g key={agent.name}>
              <line x1={centerX} y1={centerY} x2={x} y2={y} stroke={isActive ? agent.colorHex : '#D8DDE6'} strokeWidth={isActive ? 1.5 : 1} />
              <motion.circle
                cx={x}
                cy={y}
                r={isActive ? 34 : 28}
                fill={isActive ? agent.colorHex : '#FFFFFF'}
                stroke={agent.colorHex}
                strokeWidth="2"
                animate={{ r: isActive ? 34 : 28 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
              <text x={x} y={y + 6} textAnchor="middle" style={{ fontSize: isActive ? 20 : 16 }}>
                {agent.emoji}
              </text>
              <text x={x} y={y + 48} textAnchor="middle" className="fill-ink" style={{ fontFamily: 'var(--font-poppins)', fontSize: 11, fontWeight: isActive ? 700 : 600 }}>
                {agent.name}
              </text>
            </g>
          );
        })}

        <circle cx={centerX} cy={centerY} r="46" fill="#1F2430" />
        <text x={centerX} y={centerY - 4} textAnchor="middle" className="fill-white" style={{ fontFamily: 'var(--font-poppins)', fontSize: 13, fontWeight: 700 }}>
          {agents.length}
        </text>
        <text x={centerX} y={centerY + 13} textAnchor="middle" className="fill-white" style={{ fontSize: 9, opacity: 0.75 }}>
          AI Front Office
        </text>
      </svg>

      <div className="min-h-[52px] rounded-xl border border-line bg-panel px-4 py-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={reduceMotion ? 'static' : active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2.5 text-sm"
          >
            <span className="h-2 w-2 flex-shrink-0 rounded-full bg-positive" />
            <span className="font-semibold text-ink">{reduceMotion ? 'All employees' : agents[active].name}</span>
            <span className="text-slate">{reduceMotion ? 'ready and coordinated' : agents[active].action}</span>
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="mt-3 text-center text-xs text-slate">Illustrative — not a real-time call log</p>
    </div>
  );
}
