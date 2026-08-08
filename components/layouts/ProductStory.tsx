'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Progress } from '@/components/ui/States';
import { EASE_PREMIUM } from '@/lib/motion';
import { cn } from '@/lib/cn';

export interface WorkflowStage {
  icon: ReactNode;
  label: string;
  detail: string;
}

/**
 * WorkflowExplorer — the "Problem → AI Thinking → Workflow → System → Result" pattern.
 * Reusable across any product's pipeline; stage data is passed in, nothing hardcoded here.
 */
export function WorkflowExplorer({ stages, autoAdvance = true }: { stages: WorkflowStage[]; autoAdvance?: boolean }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!autoAdvance) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const interval = setInterval(() => setActive((a) => (a + 1) % stages.length), 2200);
    return () => clearInterval(interval);
  }, [stages.length, autoAdvance]);

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
        {stages.map((stage, i) => {
          const isActive = i === active;
          return (
            <button
              key={stage.label}
              data-cursor-hover
              onClick={() => setActive(i)}
              className={cn(
                'flex flex-shrink-0 items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm transition-all lg:flex-shrink',
                isActive ? 'border-purple bg-panel2 text-ink shadow-[0_8px_24px_-8px_rgba(168,85,247,0.4)]' : 'border-transparent text-slate hover:border-line hover:bg-panel2/50'
              )}
            >
              <span className={cn('flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg', isActive ? 'bg-brand-gradient text-paper' : 'bg-panel2 text-slate')}>
                {stage.icon}
              </span>
              <span className="whitespace-nowrap font-medium lg:whitespace-normal">{stage.label}</span>
            </button>
          );
        })}
      </div>

      <div className="relative self-start rounded-2xl border-2 border-purple/50 bg-panel2 p-8 shadow-[0_8px_28px_-8px_rgba(168,85,247,0.35)] lg:sticky lg:top-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE_PREMIUM }} className="max-w-md">
            <div className="font-mono-label mb-2 text-xs text-purple">
              Stage {String(active + 1).padStart(2, '0')} / {String(stages.length).padStart(2, '0')}
            </div>
            <h3 className="font-display text-h3">{stages[active].label}</h3>
            <p className="mt-3 text-slate">{stages[active].detail}</p>
          </motion.div>

          {/* Sequence chain — fills the remaining width with the full stage order, current one lit up,
              instead of leaving it empty next to the width-capped text above. */}
          <div className="hidden flex-shrink-0 items-center gap-1.5 sm:flex">
            {stages.map((stage, i) => (
              <div key={stage.label} className="flex items-center gap-1.5">
                <button
                  type="button"
                  data-cursor-hover
                  onClick={() => setActive(i)}
                  aria-label={stage.label}
                  aria-current={i === active}
                  className={cn(
                    'flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border text-sm transition-all',
                    i === active
                      ? 'scale-110 border-transparent bg-brand-gradient text-white shadow-[0_0_0_4px_rgba(120,62,213,0.15)]'
                      : i < active
                        ? 'border-line bg-panel text-slate'
                        : 'border-line/60 bg-transparent text-slate/50'
                  )}
                >
                  {stage.icon}
                </button>
                {i < stages.length - 1 && <span className={cn('h-px w-3', i < active ? 'bg-purple/40' : 'bg-line')} />}
              </div>
            ))}
          </div>
        </div>
        <Progress value={((active + 1) / stages.length) * 100} className="mt-10" />
      </div>
    </div>
  );
}

/** FeatureNavigator — tabbed capability-category pattern, category data passed in */
export function FeatureNavigator({ categories }: { categories: { label: string; items: string[] }[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-line pb-4">
        {categories.map((cat, i) => (
          <button
            key={cat.label}
            data-cursor-hover
            onClick={() => setActive(i)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium transition-colors',
              active === i ? 'bg-cta text-white' : 'text-slate hover:text-ink'
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: EASE_PREMIUM }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {categories[active].items.map((item) => (
            <div key={item} className="w-full rounded-xl border-2 border-purple/50 bg-panel2 px-5 py-4 text-sm text-ink shadow-[0_8px_24px_-8px_rgba(168,85,247,0.35)] sm:w-[calc(50%-6px)] lg:w-[calc(33.333%-8px)]">
              {item}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/** CapabilityMatrix — grid of capability x support-level, e.g. product vs. tier */
export function CapabilityMatrix({
  rows,
}: {
  rows: { capability: string; supported: boolean; note?: string }[];
}) {
  return (
    <div className="divide-y divide-line rounded-token border border-line">
      {rows.map((r) => (
        <div key={r.capability} className="flex items-center justify-between px-5 py-3.5 text-sm">
          <span className="text-ink">{r.capability}</span>
          <span className={cn('font-mono-label text-xs', r.supported ? 'text-blue' : 'text-slate')}>
            {r.supported ? 'Included' : r.note ?? '—'}
          </span>
        </div>
      ))}
    </div>
  );
}
