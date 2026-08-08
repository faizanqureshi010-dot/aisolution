'use client';

import { motion } from 'framer-motion';

export interface OrbitAgent {
  name: string;
  emoji: string;
  colorHex: string;
}

/**
 * AgentOrbitMap — the 8 agents arranged as orbiting nodes around a central
 * platform hub. Same visual family as ConnectorTopologyMap (orbital layout),
 * built separately so agent-orbit and connector-orbit can evolve independently.
 * Used to fill hero "visual" slots (Dental/Medical Automated) with something
 * that actually illustrates "8 coordinated agents, one platform" instead of
 * a single stat card floating in empty space.
 */
export function AgentOrbitMap({ agents, hubLabel = 'Platform' }: { agents: OrbitAgent[]; hubLabel?: string }) {
  const centerX = 220;
  const centerY = 200;
  const radius = 155;
  const angleStep = (2 * Math.PI) / agents.length;

  return (
    <div className="rounded-token border-2 border-purple/50 bg-panel p-4 shadow-[0_8px_24px_-8px_rgba(168,85,247,0.35)]">
      <svg viewBox="0 0 440 400" className="w-full" role="img" aria-label={`${agents.length}-agent orchestration diagram`}>
        <defs>
          <radialGradient id="orbit-hub-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A855F7" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx={centerX} cy={centerY} r="100" fill="url(#orbit-hub-glow)" />

        {agents.map((agent, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          return (
            <g key={agent.name}>
              <line x1={centerX} y1={centerY} x2={x} y2={y} stroke="#D8DDE6" strokeWidth="1" />
              <motion.circle
                cx={x}
                cy={y}
                r="30"
                fill="#FFFFFF"
                stroke={agent.colorHex}
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              />
              <text x={x} y={y + 6} textAnchor="middle" style={{ fontSize: 18 }}>
                {agent.emoji}
              </text>
              <text
                x={x}
                y={y + 46}
                textAnchor="middle"
                className="fill-ink"
                style={{ fontFamily: 'var(--font-poppins)', fontSize: 11, fontWeight: 600 }}
              >
                {agent.name}
              </text>
            </g>
          );
        })}

        {/* Central hub */}
        <circle cx={centerX} cy={centerY} r="46" fill="#1F2430" />
        <text x={centerX} y={centerY - 4} textAnchor="middle" className="fill-white" style={{ fontFamily: 'var(--font-poppins)', fontSize: 12, fontWeight: 700 }}>
          {agents.length}
        </text>
        <text x={centerX} y={centerY + 13} textAnchor="middle" className="fill-white" style={{ fontSize: 9, opacity: 0.75 }}>
          {hubLabel}
        </text>
      </svg>
    </div>
  );
}
