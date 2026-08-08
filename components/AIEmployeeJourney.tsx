'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Brain, GitBranch, Plug, Server, CheckCircle2 } from 'lucide-react';
import { EASE_PREMIUM } from '@/lib/motion';

const STAGES = [
  { icon: MessageSquare, label: 'Conversation', detail: 'A real exchange takes place — spoken or written, understood in context.' },
  { icon: Brain, label: 'Reasoning', detail: 'What\'s actually being asked is worked out, not pattern-matched from a script.' },
  { icon: GitBranch, label: 'Decision', detail: 'The right next step is chosen against this business\'s specific rules.' },
  { icon: Plug, label: 'Connector', detail: 'The correct connected system is identified and engaged directly.' },
  { icon: Server, label: 'Business Systems', detail: 'The system of record — PMS, EHR, calendar, or POS — is read and written to.' },
  { icon: CheckCircle2, label: 'Completed Work', detail: 'The task is closed out, logged, and confirmed back to the people who need to know.' },
];

export default function AIEmployeeJourney() {
  const [active, setActive] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const interval = setInterval(() => setActive((a) => (a + 1) % STAGES.length), 2400);
    return () => clearInterval(interval);
  }, []);

  const nodeCount = STAGES.length;
  const width = 900;
  const height = 220;
  const positions = STAGES.map((_, i) => ({
    x: 60 + (i * (width - 120)) / (nodeCount - 1),
    y: height / 2,
  }));

  return (
    <div className="rounded-token border border-line bg-panel2 p-6 md:p-10">
      <svg ref={svgRef} viewBox={`0 0 ${width} ${height}`} className="w-full" role="img" aria-label="Diagram of an AI Employee\'s process: Conversation, Reasoning, Decision, Connector, Business Systems, Completed Work">
        <defs>
          <linearGradient id="journey-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E838B0" />
            <stop offset="55%" stopColor="#29B6E8" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>

        {/* connecting line */}
        <line x1={positions[0].x} y1={height / 2} x2={positions[nodeCount - 1].x} y2={height / 2} stroke="url(#journey-line)" strokeWidth="1.5" opacity="0.35" />

        {/* traveling packet */}
        <motion.circle
          cx={positions[0].x}
          cy={height / 2}
          r="4"
          fill="#E838B0"
          animate={{ cx: positions.map((p) => p.x), cy: height / 2 }}
          transition={{ duration: STAGES.length * 2.4, repeat: Infinity, ease: 'linear' }}
        />

        {positions.map((p, i) => {
          const isActive = i === active;
          return (
            <g key={STAGES[i].label} transform={`translate(${p.x}, ${p.y})`} className="cursor-pointer" onClick={() => setActive(i)}>
              <motion.circle
                r={isActive ? 22 : 16}
                fill={isActive ? '#F1F1F3' : '#FFFFFF'}
                stroke={isActive ? '#29B6E8' : '#E4E5E9'}
                strokeWidth={isActive ? 2 : 1.5}
                animate={{ r: isActive ? 22 : 16 }}
                transition={{ duration: 0.3, ease: EASE_PREMIUM }}
              />
              <text y="42" textAnchor="middle" className="fill-slate text-[11px]" style={{ fontFamily: 'var(--font-poppins)' }}>
                {STAGES[i].label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Icon row (accessible, keyboard-operable — the SVG above is decorative/illustrative) */}
      <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-6" role="tablist" aria-label="AI Employee process stages">
        {STAGES.map((s, i) => {
          const Icon = s.icon;
          const isActive = i === active;
          return (
            <button
              key={s.label}
              role="tab"
              aria-selected={isActive}
              data-cursor-hover
              onClick={() => setActive(i)}
              className={`flex flex-col items-center gap-1.5 rounded-lg p-2 transition-colors ${isActive ? 'text-blue' : 'text-slate hover:text-ink'}`}
            >
              <Icon className="h-4 w-4" />
              <span className="text-[10px]">{s.label}</span>
            </button>
          );
        })}
      </div>

      <motion.div key={active} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: EASE_PREMIUM }} className="mt-6 rounded-lg border border-line bg-panel p-5">
        <div className="font-mono-label text-xs text-purple">{String(active + 1).padStart(2, '0')} / {String(STAGES.length).padStart(2, '0')}</div>
        <h4 className="font-display mt-1 font-semibold">{STAGES[active].label}</h4>
        <p className="mt-2 text-sm text-slate">{STAGES[active].detail}</p>
      </motion.div>
    </div>
  );
}
