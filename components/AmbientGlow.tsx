'use client';

import { cn } from '@/lib/cn';

/**
 * AmbientGlow — three large, blurred, slowly-drifting brand-color orbs.
 * Same visual technique as the reference site's background (soft glow,
 * independent staggered drift), but using the actual locked brand hex
 * values instead of a foreign palette. Drop into any section — hero,
 * footer, CTA — as a background layer; content renders on top via z-index.
 */
export function AmbientGlow({ className, variant = 'light' }: { className?: string; variant?: 'light' | 'dark' }) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      <div
        className="absolute h-[420px] w-[420px] rounded-full opacity-[0.22] blur-[90px] animate-float-slow"
        style={{ background: '#6366F1', top: '-8%', left: '5%' }}
      />
      <div
        className="absolute h-[360px] w-[360px] rounded-full opacity-[0.20] blur-[90px] animate-float-slower"
        style={{ background: '#A855F7', top: '20%', right: '0%' }}
      />
      <div
        className="absolute h-[300px] w-[300px] rounded-full opacity-[0.14] blur-[90px] animate-float-slowest"
        style={{ background: '#EC4899', bottom: '-5%', left: '35%' }}
      />
      {variant === 'dark' && <div className="absolute inset-0 bg-[#1a1a1a]/40" />}
    </div>
  );
}
