import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/layouts/PageShells';
import { LegalSection, LegalPlaceholder, LegalUpdated } from '@/components/layouts/LegalContent';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How AI Solution Company collects, uses, and protects information across our products and website.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage breadcrumb={[{ label: 'Legal', href: '/privacy-policy' }, { label: 'Privacy Policy' }]}>
      <h1 className="font-display text-h1">Privacy Policy</h1>
      <LegalUpdated />
      <p className="mt-4 text-body-sm text-slate">
        This policy explains what information AI Solution Company collects, how we use it, and the choices you have.
        AI Solution Company operates aisolutioncompany.com and our AI Employee products, including AISC Booking
        Agent, Dental Automated, and Medical Automated (collectively, the &ldquo;Services&rdquo;).
      </p>

      <LegalSection id="collect" title="Information We Collect">
        <p><strong className="text-ink">Information You Provide.</strong> Name, email, business name, and message content submitted through demo requests, contact forms, or other communication.</p>
        <p><strong className="text-ink">Automatically Collected Data.</strong> Browser type, device type, IP address, and pages visited.</p>
        <p><strong className="text-ink">Cookies.</strong> See our <Link href="/cookie-policy" className="text-blue">Cookie Policy</Link> for full detail.</p>
        <p><strong className="text-ink">Analytics.</strong> <LegalPlaceholder>[Insert Analytics Provider(s)]</LegalPlaceholder></p>
        <p><strong className="text-ink">AI Services.</strong> Our AI Employee products may process call, scheduling, and communication data on behalf of the businesses that deploy them. <LegalPlaceholder>[Insert Data Processing Agreement reference, once finalized]</LegalPlaceholder></p>
      </LegalSection>

      <LegalSection id="use" title="How Information Is Used">
        <p>To respond to inquiries, operate and improve our Services, communicate updates you&rsquo;ve requested, and comply with legal obligations.</p>
      </LegalSection>

      <LegalSection id="sharing" title="Data Sharing">
        <p>We may share information with service providers who perform functions on our behalf. <LegalPlaceholder>[Insert Third-Party Processors]</LegalPlaceholder> We do not sell personal information.</p>
      </LegalSection>

      <LegalSection id="security" title="Security">
        <p>We use reasonable administrative, technical, and physical safeguards. No method of transmission or storage is completely secure.</p>
      </LegalSection>

      <LegalSection id="transfers" title="International Transfers">
        <p>AI Solution Company is based in the United States. Information may be processed in the United States or other jurisdictions. <LegalPlaceholder>[Insert transfer mechanism, if applicable]</LegalPlaceholder></p>
      </LegalSection>

      <LegalSection id="retention" title="Data Retention">
        <p>We retain information as long as necessary for the purposes described here, unless a longer period is required by law. <LegalPlaceholder>[Insert Data Retention Period]</LegalPlaceholder></p>
      </LegalSection>

      <LegalSection id="rights" title="Your Rights">
        <p>Depending on your location, you may have rights to access, correct, delete, or restrict use of your information. Contact us using the details below to exercise these rights.</p>
      </LegalSection>

      <LegalSection id="gdpr" title="GDPR (EEA / UK Visitors)">
        <p><LegalPlaceholder>[Insert GDPR-specific disclosures: legal basis, data controller, right to lodge a complaint, EU representative]</LegalPlaceholder></p>
      </LegalSection>

      <LegalSection id="ccpa" title="CCPA / California Privacy Rights">
        <p><LegalPlaceholder>[Insert CCPA-specific disclosures: categories collected, right to know/delete, right to opt out]</LegalPlaceholder></p>
      </LegalSection>

      <LegalSection id="children" title="Children's Privacy">
        <p>Our Services are not directed to individuals under 18, and we do not knowingly collect information from children.</p>
      </LegalSection>

      <LegalSection id="updates" title="Updates to This Policy">
        <p>We may update this policy from time to time. The date above reflects the most recent revision.</p>
      </LegalSection>

      <LegalSection id="contact" title="Contact">
        <p>AI Solution Company<br /><LegalPlaceholder>[Insert Registered Business Address]</LegalPlaceholder><br />Email: <a href="mailto:info@aisolutioncompany.com" className="text-blue">info@aisolutioncompany.com</a></p>
        <p><LegalPlaceholder>[Insert Data Protection Officer contact, if applicable]</LegalPlaceholder></p>
      </LegalSection>
    </LegalPage>
  );
}
