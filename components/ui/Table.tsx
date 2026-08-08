import { cn } from '@/lib/cn';

export function Table({
  headers,
  rows,
  className,
}: {
  headers: string[];
  rows: React.ReactNode[][];
  className?: string;
}) {
  return (
    <div className={cn('overflow-x-auto rounded-token border border-line', className)}>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-line bg-panel2">
            {headers.map((h) => (
              <th key={h} className="font-mono-label px-4 py-3 text-xs text-slate">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-line last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-ink">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ComparisonTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: { label: string; values: React.ReactNode[] }[];
}) {
  return (
    <div className="overflow-x-auto rounded-token border border-line">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-line">
            <th className="px-4 py-3" />
            {columns.map((c, i) => (
              <th
                key={c}
                className={cn(
                  'font-mono-label px-4 py-3 text-xs',
                  i === 0 ? 'text-ink' : 'text-slate'
                )}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-line last:border-0">
              <td className="px-4 py-3 text-slate">{row.label}</td>
              {row.values.map((v, i) => (
                <td key={i} className={cn('px-4 py-3', i === 0 ? 'font-medium text-ink bg-purple/5' : 'text-slate')}>
                  {v}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
