import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroLayout, ContentSection } from '@/components/layouts/Sections';
import { RevealContainer, StaggerGroup, StaggerItem } from '@/components/layouts/RevealContainer';
import { SectionHeader, Breadcrumb } from '@/components/ui/Layout';
import { Card, CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Footer from '@/components/Footer';
import { ArrowUpRight, Building2, Users, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Claravox Healthcare',
  description: 'Claravox Healthcare is a sibling company under AI Solution Company — a separate medical billing and revenue cycle management business, distinct from the AI Front Office platform.',
};

const facts = [
  {
    icon: Building2,
    title: 'What They Do',
    body: 'Medical billing and revenue cycle management — credentialing, medical coding, claim submission, eligibility verification, prior authorization, payment posting, denial management, and accounts receivable.',
  },
  {
    icon: Users,
    title: 'Who They Serve',
    body: 'Independent physician practices, typically 1–5 providers, across specialties — the work is specialty-agnostic rather than built around one type of practice.',
  },
  {
    icon: ShieldCheck,
    title: 'How They\'re Different From Us',
    body: 'No AI employees, no front-office call handling — Claravox is a revenue cycle operations business. It sits under the same parent company, run separately, solving a different problem.',
  },
];

export default function ClaravoxPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Solutions', href: '/industries' }, { label: 'Claravox Healthcare' }]} />
      <main id="main">
        <HeroLayout
          eyebrow="A Sibling Company"
          title={<>Claravox Healthcare. <span className="text-gradient">A Different Business, Same Family.</span></>}
          description="Claravox Healthcare is a separate revenue-cycle management company under AI Solution Company — not an AI employee product, and not another deployment of the 8-employee front office platform. It's a distinct business, built to solve a different problem: getting practices paid correctly and on time."
          primaryAction={
            <Button href="https://claravoxhealthcare.com" variant="primary" size="lg" target="_blank" rel="noopener noreferrer">
              Visit Claravox Healthcare <ArrowUpRight className="ml-1 inline h-4 w-4" />
            </Button>
          }
          secondaryAction={<Button href="/industries" variant="ghost">Back to Solutions</Button>}
        />

        <ContentSection>
          <RevealContainer className="mb-10">
            <SectionHeader eyebrow="At a Glance" title="What Claravox actually does." />
          </RevealContainer>
          <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {facts.map((f) => {
              const Icon = f.icon;
              return (
                <StaggerItem key={f.title}>
                  <Card accentColor="#A855F7" className="h-full">
                    <CardBody>
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-panel2 text-blue">
                        <Icon className="h-4.5 w-4.5" />
                      </span>
                      <h3 className="font-display mt-4 text-sm font-bold">{f.title}</h3>
                      <p className="mt-2 text-sm text-slate">{f.body}</p>
                    </CardBody>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </ContentSection>

        <ContentSection>
          <RevealContainer className="mx-auto max-w-[720px] text-center">
            <SectionHeader eyebrow="Why It's Here" title="Why a billing company shows up on an AI employee site." align="center" />
            <p className="mt-4 text-slate">
              AI Solution Company and Claravox Healthcare share a parent company, not a product. If you came here looking for the 8-employee front office
              platform — the AI Employees that answer calls and book appointments — that's everything else on this site. If you're looking for
              revenue cycle management for a physician practice, Claravox is the right team, and their own site has the full detail.
            </p>
          </RevealContainer>
        </ContentSection>

        <ContentSection className="text-center">
          <div className="mx-auto max-w-[560px]">
            <RevealContainer>
              <h2 className="font-display text-h2">Visit the Claravox Healthcare site</h2>
              <p className="mt-4 text-slate">Full service details, pricing, and contact information live on their own site.</p>
              <Button href="https://claravoxhealthcare.com" size="lg" className="mt-8" target="_blank" rel="noopener noreferrer">
                claravoxhealthcare.com <ArrowUpRight className="ml-1 inline h-4 w-4" />
              </Button>
            </RevealContainer>
          </div>
        </ContentSection>
      </main>
      <Footer />
    </>
  );
}
