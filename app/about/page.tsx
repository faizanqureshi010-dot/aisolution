import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroLayout, ContentSection, CTASection } from '@/components/layouts/Sections';
import { RevealContainer, StaggerGroup, StaggerItem } from '@/components/layouts/RevealContainer';
import { SectionHeader, Breadcrumb } from '@/components/ui/Layout';
import { PlatformRelationshipLayout, SecuritySection } from '@/components/layouts/SectionShells';
import { ComplianceGrid } from '@/components/layouts/EnterpriseSystems';
import { StickyProductNav, ExpandableInfoPanel } from '@/components/layouts/ProductExperience';
import { Timeline } from '@/components/ui/Workflow';
import { AccordionItem } from '@/components/ui/Accordion';
import { FAQSchema } from '@/components/StructuredData';
import Button from '@/components/ui/Button';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About',
  description: 'AI Solution Company is a US-based enterprise AI software company building AI Employees for real business operations.',
};

const beliefs = [
  { title: 'Products, Not Projects', body: 'Every offering is a defined, production-ready product — not a custom build assembled once and left alone.' },
  { title: 'AI Employees, Not Assistants', body: 'An assistant waits to be asked. An AI Employee owns a responsibility and carries it through.' },
  { title: 'Industry Depth Over Breadth', body: 'A dental call and a hotel call aren\'t the same conversation — so we build for the specific operation, not a generalized script.' },
  { title: 'Transparency by Default', body: 'What\'s live, what\'s in progress, and what\'s still ahead is stated plainly, everywhere on this site.' },
];

const journey = [
  { title: 'Why We Exist', description: 'The operational work that keeps a business running never stops — answering calls, managing schedules, following up, coordinating handoffs. We started AI Solution Company because we believed there was a better answer than hiring around the problem or bolting on a generic AI tool: build AI specifically for the job it needs to do, as a real product.' },
  { title: 'How We Build', description: 'We start with the operations, not the technology. Before an AI Employee is built for a new job or industry, we study how that work actually happens today. Every product is then configured against that reality for each customer who uses it, and refined continuously based on real usage.' },
  { title: 'What We\'re Building Toward', description: 'We expect to keep building AI Employees for more industries over time — deliberately, with the same operational depth behind each one as the products we\'ve already built, not on a fixed schedule.' },
];

const faqs = [
  { q: 'Is AI Solution Company an automation agency or consulting firm?', a: 'No. We build defined AI Employee products — no custom automation builds or consulting engagements.' },
  { q: 'How is Claravox Healthcare related to AI Solution Company?', a: 'Claravox Healthcare is a subsidiary of AI Solution Company, focused on medical billing and revenue cycle management — distinct from our AI Employee product line.' },
  { q: 'Will you be adding new industries or products over time?', a: 'Yes, deliberately — with the same operational depth behind each addition as the products already live today.' },
];

const navSections = [
  { id: 'journey', label: 'Our Journey' },
  { id: 'beliefs', label: 'What We Believe' },
  { id: 'ecosystem', label: 'Platform Ecosystem' },
  { id: 'trust', label: 'Trust' },
  { id: 'why-choose', label: 'Why Choose AISC' },
  { id: 'faq', label: 'FAQ' },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'About' }]} />
      <FAQSchema faqs={faqs} />
      <main id="main">
        <HeroLayout
          eyebrow="About AI Solution Company"
          title={<>We Build AI Employees For Businesses That <span className="text-gradient">Can&rsquo;t Afford To Get This Wrong</span>.</>}
          description="AI Solution Company is a US-based enterprise AI software company. We build production-ready AI Employees — coordinated employees that take on real operational roles inside real businesses."
          primaryAction={<Button href="/book-demo" size="lg">Book a Pilot</Button>}
          secondaryAction={<Button href="/agents" variant="ghost">Explore Products →</Button>}
          visual={
            <div className="w-full max-w-sm rounded-2xl border border-line bg-panel2/80 p-6">
              <div className="font-mono-label text-xs text-slate">Company</div>
              <p className="mt-3 text-sm text-ink">US-based · Enterprise AI Software · Parent of Claravox Healthcare</p>
            </div>
          }
        />

        <StickyProductNav sections={navSections} />

        <ContentSection>
          <div id="journey" className="scroll-mt-28">
            <RevealContainer className="mb-10">
              <SectionHeader eyebrow="Our Journey" title="Why we exist, how we build, and where we\'re headed." />
            </RevealContainer>
            <Timeline items={journey} />
          </div>
        </ContentSection>

        <ContentSection>
          <div id="beliefs" className="scroll-mt-28">
            <RevealContainer className="mb-10">
              <SectionHeader eyebrow="What We Believe" title="Four principles that shape everything we build." description="Expand any card for detail." />
            </RevealContainer>
            <StaggerGroup className="flex flex-wrap justify-center gap-3">
              {beliefs.map((b) => (
                <StaggerItem key={b.title} className="w-full sm:w-[calc(50%-6px)] lg:w-[calc(33.333%-8px)]">
                  <ExpandableInfoPanel title={b.title}>{b.body}</ExpandableInfoPanel>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </ContentSection>

        <ContentSection>
          <div id="ecosystem" className="scroll-mt-28">
            <RevealContainer className="mb-10">
              <SectionHeader eyebrow="Platform Ecosystem" title="How our products relate to each other." />
            </RevealContainer>
            <PlatformRelationshipLayout
              center={{ label: 'Shared Intelligence & Connector Layer' }}
              related={[
                { label: 'AISC Booking Agent', description: 'Booking and call handling' },
                { label: 'Dental Automated', description: 'Complete dental front office' },
                { label: 'Medical Automated', description: 'Complete medical front office' },
                { label: 'Claravox Healthcare', description: 'Revenue cycle subsidiary' },
              ]}
            />
          </div>
        </ContentSection>

        <div id="trust" className="scroll-mt-28">
          <SecuritySection eyebrow="Trust" title="What\'s currently supported — stated plainly." description="Compliance documentation is available on request.">
            <ComplianceGrid items={['HIPAA', 'SOC 2 Type II', 'PIPEDA']} />
          </SecuritySection>
        </div>

        <ContentSection>
          <div id="why-choose" className="scroll-mt-28">
            <RevealContainer>
              <SectionHeader
                eyebrow="Why Organizations Choose AISC"
                title="A direct comparison against the alternatives."
                description="See the full breakdown of how we compare to generic AI assistants and custom automation projects."
              />
              <Link href="/why-aisc" data-cursor-hover className="font-mono-label mt-4 inline-block text-xs text-blue">
                See the Full Comparison →
              </Link>
            </RevealContainer>
          </div>
        </ContentSection>

        <ContentSection>
          <div id="faq" className="scroll-mt-28">
            <RevealContainer className="mb-10">
              <SectionHeader eyebrow="Frequently Asked Questions" title="What people ask about the company." />
            </RevealContainer>
            <div className="max-w-[720px]">
              {faqs.map((f) => (
                <AccordionItem key={f.q} title={f.q}>
                  {f.a}
                </AccordionItem>
              ))}
            </div>
          </div>
        </ContentSection>

        <CTASection
          title="See what an AI Employee would do for your business."
          description="A demo built around how your business actually operates."
          actionLabel="Book a Pilot"
          actionHref="/book-demo"
        />
      </main>
      <Footer />
    </>
  );
}
