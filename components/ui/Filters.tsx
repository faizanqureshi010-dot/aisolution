'use client';

import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/cn';

export function SearchField({
  value,
  onChange,
  placeholder = 'Search…',
  className,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={cn('relative', className)}>
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        className="w-full rounded-full border border-line bg-panel py-2.5 pl-10 pr-4 text-sm text-ink outline-none focus:border-blue"
      />
    </div>
  );
}

export function FilterChips({
  options,
  active,
  onChange,
}: {
  options: string[];
  active: string;
  onChange: (v: string) => void;
}) {
  return (
    <div role="group" className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          data-cursor-hover
          onClick={() => onChange(opt)}
          aria-pressed={active === opt}
          className={cn(
            'rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-150',
            active === opt ? 'border-transparent bg-brand-gradient text-paper' : 'border-line text-slate hover:text-ink'
          )}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export function Pagination({
  page,
  totalPages,
  onChange,
}: {
  page: number;
  totalPages: number;
  onChange: (p: number) => void;
}) {
  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-3">
      <button
        onClick={() => onChange(Math.max(1, page - 1))}
        disabled={page === 1}
        aria-label="Previous page"
        data-cursor-hover
        className="rounded-full border border-line p-2 text-slate hover:text-ink disabled:opacity-40"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <span className="font-mono-label text-xs text-slate">
        Page {page} of {totalPages}
      </span>
      <button
        onClick={() => onChange(Math.min(totalPages, page + 1))}
        disabled={page === totalPages}
        aria-label="Next page"
        data-cursor-hover
        className="rounded-full border border-line p-2 text-slate hover:text-ink disabled:opacity-40"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}
