'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export interface SpotlightAgent {
  name: string;
  emoji: string;
  action: string;
}

/** Brand gradient stops — blue → purple → pink. Used for every animated
 *  element in the ring (active glow, connecting lines, pulse) instead of
 *  per-agent colors, so the whole visual reads as one on-brand animation. */
const BRAND_STOPS = ['#6366F1', '#A855F7', '#EC4899'];

function brandColorAt(index: number, total: number) {
  const t = (index / Math.max(total - 1, 1)) * (BRAND_STOPS.length - 1);
  const i = Math.min(Math.floor(t), BRAND_STOPS.length - 2);
  return BRAND_STOPS[i];
}

/**
 * AgentSpotlightRing — the 8-agent ring, alive: one agent brightens at a
 * time on a rotating interval with a live-style caption. No card, no border,
 * no background box — floats directly in whatever section it's placed in.
 * The AISC logo (full lockup, tagline included) sits in the true center.
 */
export function AgentSpotlightRing({ agents, size = 480, logoWidth = 38 }: { agents: SpotlightAgent[]; size?: number; logoWidth?: number }) {
  const [active, setActive] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mq.matches);
    if (mq.matches) return;
    const interval = setInterval(() => setActive((a) => (a + 1) % agents.length), 2400);
    return () => clearInterval(interval);
  }, [agents.length]);

  const vb = 520;
  const centerX = vb / 2;
  const centerY = vb / 2;
  const radius = 210;
  const angleStep = (2 * Math.PI) / agents.length;

  return (
    <div className="mx-auto w-full" style={{ maxWidth: size }}>
      <div className="relative">
        <svg viewBox={`0 0 ${vb} ${vb}`} className="w-full" role="img" aria-label="Eight coordinated AI employees animated around the AISC platform">
          <defs>
            <radialGradient id="spotlight-ring-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#A855F7" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx={centerX} cy={centerY} r={radius + 40} fill="url(#spotlight-ring-glow)" />
          <circle cx={centerX} cy={centerY} r={radius} fill="none" stroke="#D8DDE6" strokeWidth="1" strokeDasharray="2 6" />

          {agents.map((agent, i) => {
            const angle = i * angleStep - Math.PI / 2;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            const isActive = !reduceMotion && i === active;
            const brandColor = brandColorAt(i, agents.length);

            return (
              <g key={agent.name}>
                <motion.line
                  x1={centerX}
                  y1={centerY}
                  x2={x}
                  y2={y}
                  stroke={brandColor}
                  strokeWidth={isActive ? 2 : 1}
                  animate={{ opacity: isActive ? 0.55 : 0.15 }}
                  transition={{ duration: 0.4 }}
                />
                {isActive && (
                  <motion.circle
                    cx={x}
                    cy={y}
                    r={30}
                    fill="none"
                    stroke={brandColor}
                    strokeWidth={2}
                    initial={{ r: 30, opacity: 0.7 }}
                    animate={{ r: 48, opacity: 0 }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
                  />
                )}
                {/* Real HTML node (not a flat SVG circle) so it can carry genuine
                    backdrop-filter glass — a plain SVG fill can only ever fake
                    translucency, it can't actually blur what's behind it. */}
                <foreignObject x={x - 34} y={y - 34} width={68} height={68} style={{ overflow: 'visible' }}>
                  <div className="flex h-full w-full items-center justify-center">
                    <motion.div
                      className="glass flex items-center justify-center rounded-full"
                      animate={{
                        width: isActive ? 64 : 52,
                        height: isActive ? 64 : 52,
                        backgroundColor: isActive ? `${brandColor}CC` : 'rgba(255,255,255,0.72)',
                        borderColor: brandColor,
                      }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      style={{ borderWidth: 2, borderStyle: 'solid' }}
                    >
                      <span style={{ fontSize: isActive ? 20 : 16 }}>{agent.emoji}</span>
                    </motion.div>
                  </div>
                </foreignObject>
                <text x={x} y={y + 50} textAnchor="middle" className="fill-ink" style={{ fontFamily: 'var(--font-poppins)', fontSize: 12, fontWeight: isActive ? 700 : 600 }}>
                  {agent.name}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Full logo, tagline included, centered inside the ring */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: `${logoWidth}%` }}>
          <Image src="/logo-light.png" alt="AI Solution Company — Eight Agents. One Platform. Intelligent Solutions." width={540} height={265} className="w-full h-auto" />
        </div>
      </div>

      <div className="glass mx-auto mt-6 min-h-[52px] max-w-sm rounded-token px-4 py-3">
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
