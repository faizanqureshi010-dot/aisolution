import type { Metadata } from 'next';
import { HeroLayout, ContentSection, CTASection } from '@/components/layouts/Sections';
import { RevealContainer } from '@/components/layouts/RevealContainer';
import { SectionHeader, Breadcrumb } from '@/components/ui/Layout';
import { SecuritySection } from '@/components/layouts/SectionShells';
import { ComplianceGrid } from '@/components/layouts/EnterpriseSystems';
import { SecurityStackDiagram } from '@/components/layouts/VisualDiagrams';
import { AccordionItem } from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Security Center',
  description: 'What AI Solution Company currently supports for security and compliance, stated plainly.',
};

const faqs = [
  { q: 'Is AI Solution Company HIPAA compliant?', a: 'Our products are built to HIPAA compliance standards. Full documentation is available on request.' },
  { q: 'How is data handled between our systems and your products?', a: 'Data is read and written directly into your connected system of record — see the relevant product\'s Connector Ecosystem section for detail.' },
  { q: 'Who do I contact with a security concern?', a: 'Reach out through our Contact page and mark your inquiry as a Technical Question.' },
];

export default function SecurityCenterPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Resources', href: '/resources' }, { label: 'Security Center' }]} />
      <main id="main">
        <HeroLayout
          eyebrow="Security Center"
          title={<>Security Built Into The <span className="text-gradient">Architecture</span>, Not Bolted On After.</>}
          description="What\'s currently verified and supported — stated plainly, with compliance documentation available on request."
          primaryAction={<Button href="/contact" size="lg">Request Documentation</Button>}
        />

        <ContentSection>
          <RevealContainer className="mb-10">
            <SectionHeader eyebrow="Security Layers" title="How the platform is protected." />
          </RevealContainer>
          <SecurityStackDiagram
            layers={[
              { name: 'Access Control', description: 'Every action within the platform is scoped and authenticated.' },
              { name: 'Encryption', description: 'Data in transit is encrypted using industry-standard protocols.' },
              { name: 'Auditability', description: 'Configuration changes and activity are logged.' },
              { name: 'Monitoring', description: 'System health and escalation activity are continuously observed.' },
            ]}
          />
        </ContentSection>

        <SecuritySection eyebrow="Compliance" title="Certifications currently held." description="Compliance documentation is available on request.">
          <ComplianceGrid items={['HIPAA', 'SOC 2 Type II', 'PIPEDA']} />
        </SecuritySection>

        <ContentSection>
          <RevealContainer className="mb-10">
            <SectionHeader eyebrow="Frequently Asked Questions" title="What security-conscious buyers ask." />
          </RevealContainer>
          <div className="max-w-[720px]">
            {faqs.map((f) => (
              <AccordionItem key={f.q} title={f.q}>
                {f.a}
              </AccordionItem>
            ))}
          </div>
        </ContentSection>

        <CTASection
          title="Need compliance documentation for review?"
          description="Reach out and we\'ll provide what\'s currently available."
          actionLabel="Contact Sales"
          actionHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
