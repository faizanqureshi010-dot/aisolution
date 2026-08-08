import type { Metadata } from 'next';
import { LegalPage } from '@/components/layouts/PageShells';
import { LegalSection, LegalPlaceholder, LegalUpdated } from '@/components/layouts/LegalContent';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: "The terms governing your use of AI Solution Company's website and AI Employee products.",
};

export default function TermsPage() {
  return (
    <LegalPage breadcrumb={[{ label: 'Legal', href: '/privacy-policy' }, { label: 'Terms of Service' }]}>
      <h1 className="font-display text-h1">Terms of Service</h1>
      <LegalUpdated />

      <LegalSection id="acceptance" title="Acceptance of Terms">
        <p>By accessing or using our website or AI Employee products (the &ldquo;Services&rdquo;), you agree to be bound by these Terms. If you do not agree, do not use the Services.</p>
      </LegalSection>

      <LegalSection id="eligibility" title="Eligibility">
        <p>The Services are intended for businesses and individuals acting in a business capacity, with authority to accept these Terms on the business&rsquo;s behalf where applicable.</p>
      </LegalSection>

      <LegalSection id="use" title="Use of Services">
        <p>We grant a limited, non-exclusive, non-transferable right to access and use the Services for internal business purposes.</p>
      </LegalSection>

      <LegalSection id="ai-disclaimer" title="AI Services Disclaimer">
        <p>Our AI Employee products use artificial intelligence to perform operational tasks. AI-generated outputs are provided &ldquo;as-is.&rdquo; While built to recognize when human involvement is required, AI systems can make mistakes, and you remain responsible for reviewing outcomes material to your business. <LegalPlaceholder>[Insert specific AI performance disclaimers, once finalized]</LegalPlaceholder></p>
      </LegalSection>

      <LegalSection id="prohibited" title="Prohibited Activities">
        <p>You agree not to violate applicable law, attempt unauthorized access, disrupt the Services, reverse engineer them, or use them to build a competing product.</p>
      </LegalSection>

      <LegalSection id="ip" title="Intellectual Property">
        <p>The Services, excluding User Content, are owned by AI Solution Company or its licensors.</p>
      </LegalSection>

      <LegalSection id="content" title="User Content">
        <p>You retain ownership of content you submit. You grant us a limited license to use it solely to provide and improve the Services.</p>
      </LegalSection>

      <LegalSection id="affiliate" title="Affiliate Program">
        <p><LegalPlaceholder>[Insert Affiliate Program terms once finalized]</LegalPlaceholder></p>
      </LegalSection>

      <LegalSection id="availability" title="Availability">
        <p>We aim to keep the Services available but do not guarantee uninterrupted access. <LegalPlaceholder>[Insert SLA terms, if applicable]</LegalPlaceholder></p>
      </LegalSection>

      <LegalSection id="warranties" title="Disclaimer of Warranties">
        <p>THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE,&rdquo; WITHOUT WARRANTIES OF ANY KIND.</p>
      </LegalSection>

      <LegalSection id="liability" title="Limitation of Liability">
        <p><LegalPlaceholder>[Insert Limitation of Liability language, once reviewed by counsel]</LegalPlaceholder></p>
      </LegalSection>

      <LegalSection id="termination" title="Termination">
        <p>We may suspend or terminate access for violation of these Terms. <LegalPlaceholder>[Insert notice period/process, once finalized]</LegalPlaceholder></p>
      </LegalSection>

      <LegalSection id="governing-law" title="Governing Law">
        <p>These Terms are governed by the laws of <LegalPlaceholder>[Insert Governing State]</LegalPlaceholder>.</p>
      </LegalSection>

      <LegalSection id="disputes" title="Dispute Resolution">
        <p><LegalPlaceholder>[Insert Dispute Resolution process, once finalized]</LegalPlaceholder></p>
      </LegalSection>

      <LegalSection id="contact" title="Contact">
        <p>AI Solution Company · <LegalPlaceholder>[Insert Registered Business Address]</LegalPlaceholder> · <a href="mailto:info@aisolutioncompany.com" className="text-blue">info@aisolutioncompany.com</a></p>
      </LegalSection>
    </LegalPage>
  );
}
