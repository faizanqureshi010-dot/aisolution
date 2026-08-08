import { CheckCircle2, AlertCircle, Inbox } from 'lucide-react';
import { cn } from '@/lib/cn';

export function Progress({ value, className }: { value: number; className?: string }) {
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn('h-1 w-full overflow-hidden rounded-full bg-panel2', className)}
    >
      <div
        className="h-full rounded-full bg-brand-gradient transition-[width] duration-500 ease-premium"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-lg bg-gradient-to-r from-panel via-panel2 to-panel bg-[length:200%_100%]',
        className
      )}
      style={{ animation: 'shimmer 1.6s infinite linear' }}
    />
  );
}

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-token border border-line bg-panel px-6 py-12 text-center">
      <Inbox className="h-8 w-8 text-slate" />
      <h3 className="font-display font-semibold">{title}</h3>
      {description && <p className="max-w-sm text-sm text-slate">{description}</p>}
      {action}
    </div>
  );
}

export function ErrorState({ title, description }: { title: string; description?: string }) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center gap-3 rounded-token border border-danger/30 bg-danger/5 px-6 py-12 text-center"
    >
      <AlertCircle className="h-8 w-8 text-danger" />
      <h3 className="font-display font-semibold">{title}</h3>
      {description && <p className="max-w-sm text-sm text-slate">{description}</p>}
    </div>
  );
}

export function SuccessState({ title, description }: { title: string; description?: string }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-token border border-positive/30 bg-positive/5 px-6 py-12 text-center">
      <CheckCircle2 className="h-8 w-8 text-positive" />
      <h3 className="font-display font-semibold">{title}</h3>
      {description && <p className="max-w-sm text-sm text-slate">{description}</p>}
    </div>
  );
}

type AlertVariant = 'info' | 'warning' | 'danger' | 'positive';
const alertStyles: Record<AlertVariant, string> = {
  info: 'border-info/30 bg-info/5 text-info',
  warning: 'border-warning/30 bg-warning/5 text-warning',
  danger: 'border-danger/30 bg-danger/5 text-danger',
  positive: 'border-positive/30 bg-positive/5 text-positive',
};

export function Alert({ variant = 'info', children, className }: { variant?: AlertVariant; children: React.ReactNode; className?: string }) {
  return (
    <div role="alert" className={cn('rounded-lg border px-4 py-3 text-sm', alertStyles[variant], className)}>
      {children}
    </div>
  );
}
