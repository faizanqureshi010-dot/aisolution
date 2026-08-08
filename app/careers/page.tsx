import type { Metadata } from 'next';
import { HeroLayout, ContentSection } from '@/components/layouts/Sections';
import { RevealContainer } from '@/components/layouts/RevealContainer';
import { SectionHeader, Breadcrumb } from '@/components/ui/Layout';
import { EmptyState } from '@/components/ui/States';
import Button from '@/components/ui/Button';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Building AI Employees at AI Solution Company.',
};

export default function CareersPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Careers' }]} />
      <main id="main">
        <HeroLayout
          eyebrow="Careers"
          title={<>Building AI Employees Is <span className="text-gradient">Real Engineering And Operations Work</span>.</>}
          description="We're a small team building production AI products used by real businesses — not experiments, not demos."
          primaryAction={<Button href="/contact" size="lg">Get in Touch</Button>}
        />
        <ContentSection>
          <RevealContainer className="mb-10">
            <SectionHeader eyebrow="Open Roles" title="Nothing posted right now." />
          </RevealContainer>
          <EmptyState
            title="No open roles at the moment"
            description="We don't keep a list of fabricated openings — when we're hiring, real roles will be posted here. If you'd like to reach out anyway, we're happy to hear from you."
          />
        </ContentSection>
      </main>
      <Footer />
    </>
  );
}
