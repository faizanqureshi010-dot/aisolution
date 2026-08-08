import type { Metadata } from 'next';
import { HeroLayout, ContentSection, CTASection } from '@/components/layouts/Sections';
import { RevealContainer, StaggerGroup, StaggerItem } from '@/components/layouts/RevealContainer';
import { SectionHeader, Breadcrumb } from '@/components/ui/Layout';
import { ComparisonTable } from '@/components/ui/Table';
import { Card, CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Why AISC',
  description: 'What makes AI Solution Company different from a generic AI vendor or automation agency.',
};

const reasons = [
  { title: 'Products, Not Custom Builds', body: 'Every offering is a defined, production-ready product configured for your business — not a one-off project assembled and abandoned.' },
  { title: 'Industry-Specific Depth', body: 'A dental call and a hotel call aren\'t the same conversation, so we build for the specific operation rather than a single generalized script.' },
  { title: 'A Real Connector Layer', body: 'Our products read and write directly into the systems you already use — no duplicate data entry, no separate system to maintain.' },
  { title: 'Human Oversight, By Design', body: 'Every AI Employee recognizes when a situation needs a person and hands off cleanly, rather than guessing.' },
  { title: 'Transparency by Default', body: 'What\'s live, in progress, and still ahead is stated plainly across this entire site — including this page.' },
  { title: 'Built to Grow With You', body: 'New industries and connectors are added deliberately over time, with the same operational depth as what\'s live today.' },
];

export default function WhyAISCPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Why AISC' }]} />
      <main id="main">
        <HeroLayout
          eyebrow="Why AISC"
          title={<>Not An Agency. Not A Chatbot. <span className="text-gradient">A Real Platform.</span></>}
          description="AI Solution Company was built specifically to avoid the two most common outcomes in this space: a custom automation project that no one maintains, or a generic chatbot that never quite fits the business."
          primaryAction={<Button href="/book-demo" size="lg">Book a Pilot</Button>}
        />

        <ContentSection>
          <RevealContainer className="mb-10">
            <SectionHeader eyebrow="What Sets Us Apart" title="Six things that shape every product we build." />
          </RevealContainer>
          <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((r) => (
              <StaggerItem key={r.title}>
                <Card accentColor="#A855F7" className="h-full">
                  <CardBody>
                    <h3 className="font-display text-sm font-bold">{r.title}</h3>
                    <p className="mt-2 text-sm text-slate">{r.body}</p>
                  </CardBody>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </ContentSection>

        <ContentSection>
          <RevealContainer className="mb-10">
            <SectionHeader eyebrow="A Direct Comparison" title="AI Solution Company vs. the alternatives." />
          </RevealContainer>
          <ComparisonTable
            columns={['AI Solution Company', 'Generic AI Assistant', 'Custom Automation Project']}
            rows={[
              { label: 'Built for your specific industry', values: ['Yes', 'No — generic', 'Depends on scope'] },
              { label: 'Connects directly into your systems', values: ['Yes', 'Rarely', 'Sometimes, at extra cost'] },
              { label: 'Recognizes when to hand off to a person', values: ['Built in by design', 'Rarely', 'Depends on build quality'] },
              { label: 'Maintained and improved over time', values: ['Yes, as a product', 'Varies by vendor', 'Often not, once delivered'] },
            ]}
          />
        </ContentSection>

        <CTASection
          title="See the difference for your business."
          description="A demo built around how your business actually operates."
          actionLabel="Book a Pilot"
          actionHref="/book-demo"
        />
      </main>
      <Footer />
    </>
  );
}
