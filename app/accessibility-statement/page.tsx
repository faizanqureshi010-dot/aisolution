import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/layouts/PageShells';
import { LegalSection, LegalPlaceholder } from '@/components/layouts/LegalContent';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: "AI Solution Company's accessibility commitment and current implementation.",
};

export default function AccessibilityPage() {
  return (
    <LegalPage breadcrumb={[{ label: 'Accessibility Statement' }]}>
      <h1 className="font-display text-h1">Accessibility Statement</h1>
      <p className="mt-4 text-body-sm text-slate">
        AI Solution Company is committed to making our website usable for as many people as possible. This
        statement describes what&rsquo;s currently implemented — we are not claiming a formal, third-party-audited
        WCAG conformance level at this time.
      </p>

      <LegalSection id="current" title="What's Currently Implemented">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>Semantic HTML structure with a single H1 per page and logical heading order</li>
          <li>Keyboard navigation support across menus, dialogs, forms, and the command interface</li>
          <li>Visible focus states on all interactive elements</li>
          <li>A skip-to-content link on every page</li>
          <li>Support for <code className="text-ink">prefers-reduced-motion</code> across all animation</li>
          <li>Form fields with proper label association and error messaging</li>
          <li>Focus trapping and restoration in dialogs and drawers</li>
        </ul>
      </LegalSection>

      <LegalSection id="conformance" title="Conformance Statement">
        <p><LegalPlaceholder>[Reserved for a formal WCAG conformance statement, once a third-party audit has been commissioned]</LegalPlaceholder></p>
      </LegalSection>

      <LegalSection id="known-limitations" title="Known Limitations">
        <p><LegalPlaceholder>[Reserved — known limitations will be listed here as they&apos;re identified through testing]</LegalPlaceholder></p>
      </LegalSection>

      <LegalSection id="report" title="Report an Issue">
        <p>If you encounter an accessibility barrier, please <Link href="/contact" className="text-blue">contact us</Link> — we want to know about it.</p>
      </LegalSection>
    </LegalPage>
  );
}
