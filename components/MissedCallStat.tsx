'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/cn';

/** Animated count-up — triggers once, when scrolled into view. Accepts the
 *  target as a plain number plus prefix/suffix so callers can render
 *  "$82,000", "23%", "$285", etc. without re-implementing formatting. */
function CountUp({ target, prefix = '', suffix = '', duration = 1400 }: { target: number; prefix?: string; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export interface MissedCallSupportingStat {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export function MissedCallStat({
  eyebrow,
  headlinePrefix = '',
  headlineTarget,
  headlineSuffix = '',
  description,
  supportingStats,
  systems,
}: {
  eyebrow: string;
  headlinePrefix?: string;
  headlineTarget: number;
  headlineSuffix?: string;
  description: string;
  supportingStats: MissedCallSupportingStat[];
  systems?: string[];
}) {
  return (
    <div>
      {systems && systems.length > 0 && (
        <div className="mb-14 text-center">
          <div className="font-mono-label text-xs text-slate">Built to run alongside the systems you already use</div>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {systems.map((s) => (
              <span key={s} className="font-display text-sm font-semibold text-slate/70">
                {s}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="text-center">
        <span className="font-mono-label inline-flex items-center gap-2 rounded-full bg-pink/10 px-4 py-1.5 text-xs font-semibold text-pink">
          <span className="h-1.5 w-1.5 rounded-full bg-pink" />
          {eyebrow}
        </span>
        <div className="font-display text-gradient mt-6 text-6xl font-extrabold sm:text-7xl">
          <CountUp target={headlineTarget} prefix={headlinePrefix} suffix={headlineSuffix} />
        </div>
        <p className="mx-auto mt-6 max-w-[640px] text-slate">{description}</p>
      </div>

      <div className={cn('mt-14 grid gap-4', supportingStats.length === 4 ? 'grid-cols-2 lg:grid-cols-4' : 'grid-cols-2')}>
        {supportingStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="rounded-token border border-line bg-panel p-6"
          >
            <div className="font-display text-2xl font-extrabold text-purple sm:text-3xl">
              <CountUp target={stat.target} prefix={stat.prefix} suffix={stat.suffix} />
            </div>
            <p className="mt-2 text-sm text-slate">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
