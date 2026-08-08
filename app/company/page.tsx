import type { Metadata } from 'next';
import Link from 'next/link';
import { Info, Sparkles, Briefcase, Mail } from 'lucide-react';
import { HeroLayout, ContentSection } from '@/components/layouts/Sections';
import { StaggerGroup, StaggerItem, RevealContainer } from '@/components/layouts/RevealContainer';
import { Breadcrumb, SectionHeader } from '@/components/ui/Layout';
import { PlatformRelationshipLayout, SecuritySection } from '@/components/layouts/SectionShells';
import { ComplianceGrid } from '@/components/layouts/EnterpriseSystems';
import { Card, CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Company',
  description: 'About AI Solution Company — our story, our approach, and how to reach us.',
};

const links = [
  { name: 'About', href: '/about', icon: Info, desc: 'Why we exist and what we believe.' },
  { name: 'Why AISC', href: '/why-aisc', icon: Sparkles, desc: 'What makes our approach different.' },
  { name: 'Careers', href: '/careers', icon: Briefcase, desc: 'Building AI Employees, as a team.' },
  { name: 'Contact', href: '/contact', icon: Mail, desc: 'Reach our team directly.' },
];

export default function CompanyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Company' }]} />
      <main id="main">
        <HeroLayout
          eyebrow="Company"
          title={<>A US-Based Enterprise AI Software Company, <span className="text-gradient">Building For The Long Term</span>.</>}
          description="AI Solution Company builds AI Employees for real business operations, and is the parent company of Claravox Healthcare."
          primaryAction={<Button href="/book-demo" size="lg">Book a Pilot</Button>}
          visual={<div className="w-full max-w-sm rounded-2xl border border-line bg-panel2/80 p-6 text-center text-sm text-slate">US-based · Enterprise AI Software · Parent of Claravox Healthcare</div>}
        />
        <ContentSection>
          <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {links.map((l) => {
              const Icon = l.icon;
              return (
                <StaggerItem key={l.name}>
                  <Link href={l.href} data-cursor-hover>
                    <Card accentColor="#A855F7" className="h-full transition-transform hover:-translate-y-1 active:scale-[0.98]">
                      <CardBody>
                        <Icon className="h-6 w-6 text-blue" />
                        <h3 className="font-display mt-3 font-bold">{l.name}</h3>
                        <p className="mt-2 text-sm text-slate">{l.desc}</p>
                      </CardBody>
                    </Card>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </ContentSection>

        <ContentSection>
          <RevealContainer className="mb-10">
            <SectionHeader eyebrow="Product Portfolio" title="One company, a coordinated set of products." />
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
        </ContentSection>

        <SecuritySection eyebrow="Security Philosophy" title="What's currently supported — stated plainly." description="Compliance documentation is available on request.">
          <ComplianceGrid items={['HIPAA', 'SOC 2 Type II', 'PIPEDA']} />
        </SecuritySection>
      </main>
      <Footer />
    </>
  );
}
