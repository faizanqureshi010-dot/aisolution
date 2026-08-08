import type { Metadata } from 'next';
import { HeroLayout, ContentSection, CTASection } from '@/components/layouts/Sections';
import { RevealContainer } from '@/components/layouts/RevealContainer';
import { SectionHeader, Breadcrumb } from '@/components/ui/Layout';
import { PlatformRelationshipLayout } from '@/components/layouts/SectionShells';
import { StepFlow } from '@/components/layouts/VisualDiagrams';
import { DashboardShell, DashboardHeader, Panel, ActivityFeed, MetricRow } from '@/components/layouts/Dashboard';
import { AffiliateCalculator } from '@/components/calculators/AffiliateCalculator';
import { StickyProductNav } from '@/components/layouts/ProductExperience';
import { AccordionItem } from '@/components/ui/Accordion';
import { FAQSchema } from '@/components/StructuredData';
import Button from '@/components/ui/Button';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Affiliate Program',
  description: 'Refer businesses to AI Solution Company and earn on every referral that becomes a customer.',
};

const navSections = [
  { id: 'workflow', label: 'Referral Workflow' },
  { id: 'lifecycle', label: 'Lifecycle' },
  { id: 'calculator', label: 'Earning Calculator' },
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'resources', label: 'Resources' },
  { id: 'faq', label: 'FAQ' },
];

const faqs = [
  { q: 'How much can I earn per referral?', a: 'Payout structure is confirmed directly once you join — nothing in the calculator above is an offered rate.' },
  { q: 'Do I need to manage the client relationship?', a: 'No. Our team runs the demo and manages the sale — your part ends at the referral.' },
  { q: 'How do I track my referrals?', a: 'See the Tracking Dashboard Preview below for what that looks like once you\'re set up.' },
];

export default function AffiliatePage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Affiliate Program' }]} />
      <FAQSchema faqs={faqs} />
      <main id="main">
        <HeroLayout
          eyebrow="Affiliate Program"
          title={<>Know A Business That Needs This? <span className="text-gradient">Refer Them, And Earn.</span></>}
          description="If you work with dental practices, medical practices, or appointment-driven businesses, our Affiliate Program is a simple path: refer a business, and earn when they become a customer."
          primaryAction={<Button href="/contact" size="lg">Join the Affiliate Program</Button>}
        />

        <StickyProductNav sections={navSections} />

        <ContentSection>
          <div id="workflow" className="scroll-mt-28">
          <RevealContainer>
            <SectionHeader eyebrow="Referral Workflow" title="A simple, direct path." />
          </RevealContainer>
          <div className="mt-8">
            <PlatformRelationshipLayout
              center={{ label: 'AI Solution Company' }}
              related={[
                { label: 'You Refer', description: 'Share a business you think would benefit' },
                { label: 'New Customer', description: 'Referral becomes a customer' },
              ]}
            />
          </div>
          </div>
        </ContentSection>

        <ContentSection>
          <div id="lifecycle" className="scroll-mt-28">
          <RevealContainer className="mb-10">
            <SectionHeader eyebrow="Referral Lifecycle" title="From referral to payout." />
          </RevealContainer>
          <StepFlow
            steps={[
              { title: 'You Refer', description: 'Share AI Solution Company with a business you think would benefit.' },
              { title: 'We Follow Up', description: 'Our team runs the demo and manages the relationship.' },
              { title: 'They Convert', description: 'Your referral becomes a customer.' },
              { title: 'Commission Confirmed', description: 'Your earning is confirmed once the account is active.' },
              { title: 'Payout', description: 'Commission is paid out on the agreed schedule.' },
            ]}
          />
          </div>
        </ContentSection>

        <ContentSection>
          <div id="calculator" className="scroll-mt-28">
          <RevealContainer className="mb-10">
            <SectionHeader eyebrow="Earning Calculator" title="See what referring could look like." />
          </RevealContainer>
          <AffiliateCalculator />
          </div>
        </ContentSection>

        <ContentSection>
          <div id="dashboard" className="scroll-mt-28">
          <RevealContainer className="mb-10">
            <SectionHeader eyebrow="Tracking Dashboard Preview" title="See your referrals at a glance." />
          </RevealContainer>
          <DashboardShell>
            <DashboardHeader title="Affiliate Tracking Dashboard" status={{ state: 'operational', label: 'Account Active' }} />
            <MetricRow metrics={[
              { label: 'Referrals Sent', value: '—' },
              { label: 'In Progress', value: '—' },
              { label: 'Converted', value: '—' },
              { label: 'Pending Commission', value: '—' },
            ]} />
            <Panel title="Recent Activity">
              <ActivityFeed items={[]} />
            </Panel>
          </DashboardShell>
          </div>
        </ContentSection>

        <ContentSection>
          <div id="resources" className="scroll-mt-28">
          <RevealContainer className="mb-10">
            <SectionHeader eyebrow="Marketing Resources" title="Partner toolkit — available after publication." description="Referral link assets and a partner toolkit will be available here once published." />
          </RevealContainer>
          </div>
        </ContentSection>

        <ContentSection>
          <div id="faq" className="scroll-mt-28">
          <RevealContainer className="mb-10">
            <SectionHeader eyebrow="Frequently Asked Questions" title="What affiliates actually ask." />
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
          title="Start referring, start earning."
          description="Join the Affiliate Program and tell us who you\'d like to refer."
          actionLabel="Talk to an Expert"
          actionHref="/contact"
        />
      </main>
      <Footer />
    </>
  );
}
