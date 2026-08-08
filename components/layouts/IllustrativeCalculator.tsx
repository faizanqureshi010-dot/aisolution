'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/Form';
import { Card, CardBody } from '@/components/ui/Card';

export interface CalculatorField {
  key: string;
  label: string;
  defaultValue: number;
}

export function IllustrativeCalculator({
  title,
  fields,
  compute,
  outputLabel,
  formatOutput = (n) => `$${Math.round(n).toLocaleString()}`,
}: {
  title: string;
  fields: CalculatorField[];
  compute: (values: Record<string, number>) => number;
  outputLabel: string;
  formatOutput?: (value: number) => string;
}) {
  const [values, setValues] = useState<Record<string, number>>(
    Object.fromEntries(fields.map((f) => [f.key, f.defaultValue]))
  );

  const result = compute(values);

  function update(key: string, raw: string) {
    const num = Math.max(0, parseFloat(raw) || 0);
    setValues((v) => ({ ...v, [key]: num }));
  }

  return (
    <Card accentColor="#A855F7">
      <CardBody>
        <div className="flex items-center justify-between">
          <h3 className="font-display font-bold">{title}</h3>
          <span className="font-mono-label text-xs text-slate">illustrative estimate</span>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            {fields.map((f) => (
              <Input
                key={f.key}
                label={f.label}
                type="number"
                min={0}
                value={values[f.key]}
                onChange={(e) => update(f.key, e.target.value)}
              />
            ))}
          </div>
          <div className="flex flex-col justify-center rounded-token border border-line bg-panel2 p-6 text-center">
            <div className="font-display text-gradient text-display">{formatOutput(result)}</div>
            <div className="font-mono-label mt-1 text-xs text-slate">{outputLabel}</div>
          </div>
        </div>
        <p className="mt-6 text-xs italic text-slate">
          Illustrative estimate only, based on the numbers you enter — not a guarantee of results or an offered rate.
        </p>
      </CardBody>
    </Card>
  );
}
