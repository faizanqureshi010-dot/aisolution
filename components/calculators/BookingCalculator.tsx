'use client';

import { IllustrativeCalculator } from '@/components/layouts/IllustrativeCalculator';

export function BookingCalculator() {
  return (
    <IllustrativeCalculator
      title="Call Handling Estimate"
      fields={[
        { key: 'calls', label: 'Calls per month', defaultValue: 400 },
        { key: 'missed', label: 'Estimated missed calls per month', defaultValue: 60 },
        { key: 'value', label: 'Estimated value per booked call ($)', defaultValue: 80 },
      ]}
      compute={(v) => v.missed * v.value}
      outputLabel="Estimated Monthly Value of Recovered Calls"
    />
  );
}
