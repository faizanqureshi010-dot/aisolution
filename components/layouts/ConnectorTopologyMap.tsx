'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ConnectorIcon, ConnectorStatusBadge } from './ConnectorSystem';
import type { ConnectorItem } from './ConnectorSystem';

export interface TopologyCategory {
  category: string;
  connectors: ConnectorItem[];
}

/**
 * Renders connector categories as an orbiting node topology around a central platform hub,
 * instead of a flat card grid. Configurable — pass any category/connector set.
 */
export function ConnectorTopologyMap({ categories }: { categories: TopologyCategory[] }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const active = categories[activeCategory];

  const angleStep = (2 * Math.PI) / categories.length;
  const radius = 150;
  const centerX = 220;
  const centerY = 180;

  return (
    <div className="rounded-token border-2 border-purple/50 bg-panel p-6 shadow-[0_8px_24px_-8px_rgba(168,85,247,0.35)] md:p-10">
      <div className="grid gap-8 md:grid-cols-[440px_1fr]">
        {/* Topology map */}
        <svg viewBox="0 0 440 360" className="w-full" role="img" aria-label="Connector ecosystem topology map">
          <defs>
            <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx={centerX} cy={centerY} r="90" fill="url(#hub-glow)" />

          {categories.map((cat, i) => {
            const angle = i * angleStep - Math.PI / 2;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY + radius * Math.sin(angle);
            const isActive = i === activeCategory;
            const liveCount = cat.connectors.filter((c) => c.status === 'live').length;

            return (
              <g key={cat.category}>
                <line
                  x1={centerX}
                  y1={centerY}
                  x2={x}
                  y2={y}
                  stroke={isActive ? '#2563EB' : '#E4E5E9'}
                  strokeWidth={isActive ? 1.5 : 1}
                />
                <motion.circle
                  cx={x}
                  cy={y}
                  r={isActive ? 34 : 28}
                  fill={isActive ? '#2563EB' : '#FFFFFF'}
                  stroke={isActive ? '#2563EB' : '#E4E5E9'}
                  strokeWidth="1.5"
                  className="cursor-pointer"
                  onClick={() => setActiveCategory(i)}
                  animate={{ r: isActive ? 34 : 28 }}
                  transition={{ duration: 0.25 }}
                />
                <text
                  x={x}
                  y={y + 2}
                  textAnchor="middle"
                  className={isActive ? 'fill-white' : 'fill-ink'}
                  style={{ fontFamily: 'var(--font-poppins)', fontSize: 12, fontWeight: 600 }}
                >
                  {liveCount}
                </text>
                <text
                  x={x}
                  y={y + (isActive ? 52 : 46)}
                  textAnchor="middle"
                  className="fill-slate"
                  style={{ fontSize: 10 }}
                >
                  {cat.category.length > 16 ? cat.category.slice(0, 14) + '…' : cat.category}
                </text>
              </g>
            );
          })}

          {/* Central hub */}
          <circle cx={centerX} cy={centerY} r="42" fill="#0F172A" />
          <text x={centerX} y={centerY - 3} textAnchor="middle" className="fill-white" style={{ fontFamily: 'var(--font-poppins)', fontSize: 11, fontWeight: 600 }}>
            Platform
          </text>
          <text x={centerX} y={centerY + 12} textAnchor="middle" className="fill-white" style={{ fontSize: 9, opacity: 0.7 }}>
            Connector Layer
          </text>
        </svg>

        {/* Active category detail */}
        <div>
          <div className="font-mono-label text-xs text-blue">{active.category}</div>
          <h4 className="font-display mt-1 text-lg font-semibold">
            {active.connectors.length} connectors in this category
          </h4>
          <p className="mt-1 text-sm text-slate">
            {active.connectors.filter((c) => c.status === 'live').length} live ·{' '}
            {active.connectors.filter((c) => c.status === 'in-progress').length} in progress ·{' '}
            {active.connectors.filter((c) => c.status === 'coming-soon').length} coming soon
          </p>
          <div className="mt-4 grid max-h-[260px] grid-cols-2 gap-2 overflow-y-auto pr-1 lg:grid-cols-3">
            {active.connectors.map((c) => (
              <div key={c.name} className="flex items-center gap-2 rounded-lg border border-line bg-panel2 px-2.5 py-2">
                <ConnectorIcon name={c.name} domain={c.domain} />
                <span className="flex-1 truncate text-xs text-ink">{c.name}</span>
                <ConnectorStatusBadge status={c.status} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
