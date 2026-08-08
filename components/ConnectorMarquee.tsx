const CONNECTORS = [
  { name: 'CareStack', color: '#A855F7' },
  { name: 'Denticon', color: '#DC2626' },
  { name: 'EagleSoft', color: '#EA580C' },
  { name: 'Oryx', color: '#1E3A5F' },
  { name: 'Open Dental', color: '#2563EB' },
  { name: 'Dentrix', color: '#059669' },
];

// Row 2 uses a different starting order so the two rows don't feel identical.
const ROW_2 = [...CONNECTORS].reverse();

function Row({ items, reverse }: { items: typeof CONNECTORS; reverse?: boolean }) {
  const track = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-paper to-transparent" />
      <div
        className="flex w-max items-center gap-6 py-2"
        style={{ animation: `marquee ${reverse ? '32s linear infinite reverse' : '32s linear infinite'}` }}
      >
        {track.map((c, i) => (
          <span
            key={`${c.name}-${i}`}
            className="flex-shrink-0 rounded-full border border-line bg-panel px-8 py-3.5 text-lg font-medium shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            style={{ color: c.color }}
          >
            {c.name}
          </span>
        ))}
      </div>
    </div>
  );
}

/** ConnectorMarquee — two rows of connector-name pills, scrolling in opposite
 *  directions, edge-faded. Real working animation (the reference site had the
 *  fade masks suggesting motion but no actual scroll implementation). */
export function ConnectorMarquee() {
  return (
    <div className="border-y border-line bg-panel2/40 py-8">
      <div className="flex flex-col gap-3">
        <Row items={CONNECTORS} />
        <Row items={ROW_2} reverse />
      </div>
    </div>
  );
}
