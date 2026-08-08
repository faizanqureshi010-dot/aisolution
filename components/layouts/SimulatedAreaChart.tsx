'use client';

import { motion } from 'framer-motion';

export interface ChartPoint {
  label: string;
  value: number;
}

/**
 * A labeled-as-simulated area chart. Takes any data series — used to visualize
 * illustrative patterns (call volume, response time, connector activity) without
 * asserting real business metrics.
 */
export function SimulatedAreaChart({
  data,
  title,
  unit = '',
  color = '#2563EB',
}: {
  data: ChartPoint[];
  title: string;
  unit?: string;
  color?: string;
}) {
  const width = 600;
  const height = 200;
  const padding = 32;
  const max = Math.max(...data.map((d) => d.value)) * 1.15;

  const points = data.map((d, i) => {
    const x = padding + (i / (data.length - 1)) * (width - padding * 2);
    const y = height - padding - (d.value / max) * (height - padding * 2);
    return { x, y, ...d };
  });

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`;

  return (
    <div className="rounded-token border border-line bg-panel p-6">
      <div className="flex items-center justify-between">
        <h4 className="font-display text-sm font-semibold">{title}</h4>
        <span className="font-mono-label rounded-full bg-panel2 px-2.5 py-1 text-[10px] text-slate">Simulated Data</span>
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} className="mt-4 w-full">
        <defs>
          <linearGradient id={`chart-fill-${title.replace(/\s/g, '')}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.18" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Gridlines */}
        {[0.25, 0.5, 0.75].map((f) => (
          <line key={f} x1={padding} y1={padding + f * (height - padding * 2)} x2={width - padding} y2={padding + f * (height - padding * 2)} stroke="#E4E5E9" strokeWidth="1" />
        ))}

        <motion.path
          d={areaPath}
          fill={`url(#chart-fill-${title.replace(/\s/g, '')})`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
        <motion.path
          d={linePath}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        {points.map((p) => (
          <circle key={p.label} cx={p.x} cy={p.y} r="3" fill={color} />
        ))}
        {points.map((p) => (
          <text key={p.label} x={p.x} y={height - 8} textAnchor="middle" className="fill-slate" style={{ fontSize: 10 }}>
            {p.label}
          </text>
        ))}
      </svg>
      <div className="mt-2 text-right text-xs text-slate">
        Peak: {Math.max(...data.map((d) => d.value)).toLocaleString()}{unit}
      </div>
    </div>
  );
}
