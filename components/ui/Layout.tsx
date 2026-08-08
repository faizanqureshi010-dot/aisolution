import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/cn';

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-container px-8 pt-4 pb-1">
      <ol className="flex items-center gap-2 text-xs text-slate">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 && <ChevronRight className="h-3 w-3" />}
            {item.href ? (
              <Link href={item.href} data-cursor-hover className="hover:text-ink">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div className={cn('max-w-[640px]', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && <div className="font-mono-label mb-4 text-xs text-blue">{eyebrow}</div>}
      <h2 className="font-display text-h2">{title}</h2>
      {description && <p className="mt-4 text-slate">{description}</p>}
    </div>
  );
}

export function MetricBlock({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-gradient text-display">{value}</div>
      <div className="font-mono-label mt-1 text-xs text-slate">{label}</div>
    </div>
  );
}

export function StatusIndicator({
  status,
  label,
}: {
  status: 'operational' | 'degraded' | 'down';
  label: string;
}) {
  const color = { operational: 'bg-positive', degraded: 'bg-warning', down: 'bg-danger' }[status];
  return (
    <div className="flex items-center gap-2 text-sm text-ink">
      <span className={cn('h-2 w-2 rounded-full', color)} />
      {label}
    </div>
  );
}
