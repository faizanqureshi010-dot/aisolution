'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export interface Testimonial {
  quote: string;
  initials: string;
  name: string;
  practiceType: string;
  resultValue: string;
  resultLabel: string;
  avatarColor: string;
}

export function TestimonialsSection({ testimonials, disclaimer }: { testimonials: Testimonial[]; disclaimer: string }) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex h-full flex-col rounded-token border border-line bg-panel p-6"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-warning text-warning" />
              ))}
            </div>
            <p className="mt-4 flex-1 text-sm text-ink">{t.quote}</p>
            <div className="mt-6 flex items-center justify-between gap-3 border-t border-line pt-4">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: t.avatarColor }}
                >
                  {t.initials}
                </span>
                <div>
                  <div className="text-sm font-semibold text-ink">{t.name}</div>
                  <div className="text-xs text-slate">{t.practiceType}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-blue">{t.resultValue}</div>
                <div className="text-[11px] leading-tight text-slate">{t.resultLabel}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-8 text-center text-xs text-slate">{disclaimer}</p>
    </div>
  );
}
