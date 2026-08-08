'use client';

import { IllustrativeCalculator } from '@/components/layouts/IllustrativeCalculator';

export function AffiliateCalculator() {
  return (
    <IllustrativeCalculator
      title="Affiliate Earning Calculator"
      fields={[
        { key: 'referrals', label: 'Referrals per month', defaultValue: 5 },
        { key: 'conversion', label: 'Estimated conversion rate (%)', defaultValue: 40 },
        { key: 'payout', label: 'Payout per converted referral ($)', defaultValue: 150 },
      ]}
      compute={(v) => v.referrals * (v.conversion / 100) * v.payout}
      outputLabel="Estimated Monthly Earnings"
    />
  );
}
