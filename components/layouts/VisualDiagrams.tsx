'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';

/* ========================================================================
   StepFlow — horizontal, connected step-process diagram.
   Replaces the vertical Timeline for anything that is a *process* (Getting
   Started, deployment steps, call-handling sequence) rather than a narrative
   history. Uses the full section width instead of a narrow single column —
   this is the direct fix for the "Getting Started" emptiness bug found
   across 8 pages (homepage, 4 industry pages, 3 product pages).
   ======================================================================== */

export interface FlowStep {
  title: string;
  description: string;
  /** Optional timeframe badge, e.g. "Hour 1", "Day 1", "Within 48 hrs" — only
   *  ever pass real, grounded values; omit rather than invent one. */
  timeframe?: string;
}

export function StepFlow({ steps }: { steps: FlowStep[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-8">
      {steps.map((step, i) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
        >
          <div className="rounded-token border-2 border-purple/50 bg-panel p-5 h-full shadow-[0_8px_24px_-8px_rgba(168,85,247,0.35)]">
            <div className="flex items-center justify-between">
              <span className="font-mono-label flex h-8 w-8 items-center justify-center rounded-full bg-brand-gradient text-xs font-bold text-white">
                {String(i + 1).padStart(2, '0')}
              </span>
              {step.timeframe && (
                <span className="font-mono-label rounded-full bg-panel2 px-2.5 py-1 text-[10px] text-slate">
                  {step.timeframe}
                </span>
              )}
            </div>
            <h4 className="font-display mt-3 text-base font-bold">{step.title}</h4>
            <p className="mt-1.5 text-sm text-slate">{step.description}</p>
          </div>
          {/* Connector arrow — hidden on the last item and re-hidden at column wraps via nth-child */}
          {i < steps.length - 1 && (
            <ArrowRight
              className={cn(
                'absolute top-1/2 -right-5 hidden h-4 w-4 -translate-y-1/2 text-line lg:block',
                (i + 1) % 3 === 0 && 'lg:hidden'
              )}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

/* ========================================================================
   SecurityStackDiagram — layered defense-in-depth visualization (Network →
   Application → Data → Access, or whatever layers are passed in). Stacked,
   offset bands rather than flat equal-height cards, so the *relationship*
   between layers (each one sitting "on top of" the next) actually reads
   visually instead of just being a repeated card shape.
   ======================================================================== */

export interface SecurityLayer {
  name: string;
  description: string;
}

export function SecurityStackDiagram({ layers }: { layers: SecurityLayer[] }) {
  return (
    <div className="mx-auto max-w-[820px]">
      {layers.map((layer, i) => (
        <motion.div
          key={layer.name}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
          style={{ marginLeft: `${i * 28}px`, marginTop: i === 0 ? 0 : '-1px' }}
        >
          <div
            className={cn(
              'flex items-center gap-5 rounded-token border border-line p-5',
              i % 2 === 0 ? 'bg-panel' : 'bg-panel2'
            )}
            style={{ width: `calc(100% - ${i * 28}px)` }}
          >
            <span className="font-mono-label flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-xs font-bold text-white">
              L{i + 1}
            </span>
            <div>
              <h4 className="font-display font-semibold">{layer.name}</h4>
              <p className="mt-1 text-sm text-slate">{layer.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
