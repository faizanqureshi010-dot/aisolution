import { cn } from '@/lib/cn';

type Status = 'live' | 'in-progress' | 'coming-soon' | 'positive' | 'warning' | 'danger' | 'info' | 'neutral';

const styles: Record<Status, string> = {
  live: 'bg-blue/15 text-blue border-blue/30',
  'in-progress': 'bg-purple/15 text-purple border-purple/30',
  'coming-soon': 'bg-panel2 text-slate border-line',
  positive: 'bg-positive/15 text-positive border-positive/30',
  warning: 'bg-warning/15 text-warning border-warning/30',
  danger: 'bg-danger/15 text-danger border-danger/30',
  info: 'bg-info/15 text-info border-info/30',
  neutral: 'bg-panel2 text-slate border-line',
};

export default function Badge({
  status = 'neutral',
  children,
  className,
}: {
  status?: Status;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'font-mono-label inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px]',
        styles[status],
        className
      )}
    >
      {children}
    </span>
  );
}
