import type { Metadata } from 'next';
import { LegalPage } from '@/components/layouts/PageShells';
import { LegalSection, LegalPlaceholder, LegalUpdated } from '@/components/layouts/LegalContent';
import { Table } from '@/components/ui/Table';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'How AI Solution Company uses cookies and similar technologies on our website.',
};

export default function CookiePolicyPage() {
  return (
    <LegalPage breadcrumb={[{ label: 'Legal', href: '/privacy-policy' }, { label: 'Cookie Policy' }]}>
      <h1 className="font-display text-h1">Cookie Policy</h1>
      <LegalUpdated />

      <LegalSection id="what" title="What Cookies Are">
        <p>Cookies are small text files placed on your device that help a website function, remember preferences, and understand usage.</p>
      </LegalSection>

      <LegalSection id="essential" title="Essential Cookies">
        <p>Necessary for the website to function properly.</p>
        <Table
          headers={['Purpose', 'Type', 'Duration']}
          rows={[[<span key="p" className="rounded bg-pink/10 px-1.5 py-0.5 font-mono text-[13px] text-pink">[Insert Cookie List]</span>, '[Insert Type]', '[Insert Duration]']]}
        />
      </LegalSection>

      <LegalSection id="analytics" title="Analytics Cookies">
        <p><LegalPlaceholder>[Insert Analytics Provider(s) and cookies used, if active]</LegalPlaceholder></p>
      </LegalSection>

      <LegalSection id="performance" title="Performance Cookies">
        <p><LegalPlaceholder>[Insert performance-cookie details, if active]</LegalPlaceholder></p>
      </LegalSection>

      <LegalSection id="preference" title="Preference Cookies">
        <p><LegalPlaceholder>[Insert preference-cookie details, if active]</LegalPlaceholder></p>
      </LegalSection>

      <LegalSection id="marketing" title="Future Marketing Cookies">
        <p>We do not currently use marketing or advertising cookies. If this changes, this policy will be updated and consent requested where required.</p>
      </LegalSection>

      <LegalSection id="managing" title="Managing Cookies">
        <p>Most browsers let you view, manage, delete, and block cookies through their settings.</p>
      </LegalSection>

      <LegalSection id="third-party" title="Third-Party Cookies">
        <p><LegalPlaceholder>[Insert Third-Party Processors]</LegalPlaceholder></p>
      </LegalSection>

      <LegalSection id="changes" title="Changes">
        <p>We may update this policy to reflect changes in cookie usage or for legal reasons.</p>
      </LegalSection>

      <LegalSection id="contact" title="Contact">
        <p>Email: <a href="mailto:info@aisolutioncompany.com" className="text-blue">info@aisolutioncompany.com</a></p>
      </LegalSection>
    </LegalPage>
  );
}
