import { cn } from '@/lib/cn';
import { Skeleton, EmptyState } from '@/components/ui/States';
import { StatusIndicator } from '@/components/ui/Layout';
import { BarChart3 } from 'lucide-react';

export function DashboardShell({ sidebar, children }: { sidebar?: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_1fr]">
      {sidebar && <DashboardSidebar>{sidebar}</DashboardSidebar>}
      <div className="space-y-6">{children}</div>
    </div>
  );
}

export function DashboardSidebar({ children }: { children: React.ReactNode }) {
  return <aside className="rounded-token border border-line bg-panel p-4">{children}</aside>;
}

export function DashboardHeader({
  title,
  status,
  actions,
}: {
  title: string;
  status?: { state: 'operational' | 'degraded' | 'down'; label: string };
  actions?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between border-b border-line pb-4">
      <h3 className="font-display text-h4">{title}</h3>
      <div className="flex items-center gap-4">
        {status && <StatusIndicator status={status.state} label={status.label} />}
        {actions}
      </div>
    </div>
  );
}

export function DashboardToolbar({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-wrap items-center gap-3">{children}</div>;
}

export function MetricRow({ metrics }: { metrics: { label: string; value: string }[] }) {
  return (
    <div className="grid grid-cols-2 divide-x divide-line rounded-token border border-line sm:grid-cols-4">
      {metrics.map((m) => (
        <div key={m.label} className="min-w-0 p-4">
          <div className="font-display text-xl font-bold text-ink">{m.value}</div>
          <div className="font-mono-label mt-1 break-words text-xs text-slate">{m.label}</div>
        </div>
      ))}
    </div>
  );
}

export function ActivityFeed({ items }: { items: { label: string; time: string }[] }) {
  if (items.length === 0) {
    return <EmptyState title="No recent activity" description="Activity will appear here as it happens." />;
  }
  return (
    <div className="divide-y divide-line rounded-token border border-line">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-3 px-4 py-3 text-sm">
          <span className="font-mono-label w-14 flex-shrink-0 text-xs text-slate">{item.time}</span>
          <span className="text-ink">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export function Panel({ title, children, className }: { title?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('rounded-token border border-line bg-panel p-5', className)}>
      {title && <div className="font-mono-label mb-3 text-xs text-slate">{title}</div>}
      {children}
    </div>
  );
}

export function StatusCard({ label, value, state }: { label: string; value: string; state: 'operational' | 'degraded' | 'down' }) {
  return (
    <Panel>
      <StatusIndicator status={state} label={label} />
      <div className="font-display mt-2 text-lg font-bold">{value}</div>
    </Panel>
  );
}

export function InsightCard({ title, insight }: { title: string; insight: string }) {
  return (
    <Panel title={title}>
      <p className="text-sm text-ink">{insight}</p>
    </Panel>
  );
}

/** ChartContainer — real empty/loading states, never fabricated data */
export function ChartContainer({
  loading,
  hasData,
  children,
}: {
  loading?: boolean;
  hasData: boolean;
  children: React.ReactNode;
}) {
  if (loading) {
    return <Skeleton className="h-64 w-full" />;
  }
  if (!hasData) {
    return (
      <div className="flex h-64 flex-col items-center justify-center gap-3 rounded-token border border-line bg-panel">
        <BarChart3 className="h-8 w-8 text-slate" />
        <p className="text-sm text-slate">No data available yet.</p>
      </div>
    );
  }
  return <div className="h-64 rounded-token border border-line bg-panel p-4">{children}</div>;
}
