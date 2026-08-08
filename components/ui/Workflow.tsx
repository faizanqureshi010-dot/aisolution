import { cn } from '@/lib/cn';

export function Timeline({ items }: { items: { title: string; description: string }[] }) {
  return (
    <div className="relative pl-7">
      <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-blue" />
      <div className="flex flex-col gap-7">
        {items.map((item) => (
          <div key={item.title} className="relative">
            <span className="absolute -left-7 top-1 h-2.5 w-2.5 rounded-full border-2 border-blue bg-panel shadow-[0_0_0_4px_rgba(31,123,212,0.12)]" />
            <h4 className="font-display text-sm font-bold">{item.title}</h4>
            <p className="mt-1 text-sm text-slate">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WorkflowCard({
  step,
  title,
  description,
  active,
  className,
}: {
  step: number;
  title: string;
  description: string;
  active?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'rounded-token border px-5 py-4 transition-colors duration-200',
        active ? 'border-blue/50 bg-panel2' : 'border-line bg-panel',
        className
      )}
    >
      <div className="font-mono-label text-xs text-purple">Step {String(step).padStart(2, '0')}</div>
      <h4 className="font-display mt-1 font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-slate">{description}</p>
    </div>
  );
}
