import type { Metadata } from 'next';
import Link from 'next/link';
import { Car, Building2, UtensilsCrossed, Coffee, Phone, Stethoscope, HeartPulse } from 'lucide-react';
import { HeroLayout, ContentSection, CTASection } from '@/components/layouts/Sections';
import { RevealContainer, StaggerGroup, StaggerItem } from '@/components/layouts/RevealContainer';
import { SectionHeader, Breadcrumb } from '@/components/ui/Layout';
import { Card, CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'One 8-employee AI front office platform, deployed as Dental Automated, Medical Automated, AISC Booking Agent, or scoped to your industry — automotive, hospitality, dining, and other appointment-driven businesses.',
};

const deployments = [
  {
    name: 'AISC Booking Agent',
    href: '/products/aisc-booking-agent',
    icon: Phone,
    blurb: 'Our AI receptionist, standalone — call handling and booking end to end, for businesses that need one job done exceptionally well.',
  },
  {
    name: 'Dental Automated',
    href: '/products/dental-automated',
    icon: Stethoscope,
    blurb: 'The full 8-employee team, configured for a dental front office — connected directly into the PMS you already use.',
  },
  {
    name: 'Medical Automated',
    href: '/products/medical-automated',
    icon: HeartPulse,
    blurb: 'The same 8-employee team, configured for a medical front office — connected directly into the EHR you already use.',
  },
];

const industries = [
  { name: 'Automotive Service', href: '/industries/automotive', icon: Car, blurb: 'Booking and call handling built around how a service department actually runs.' },
  { name: 'Hotels', href: '/industries/hotels', icon: Building2, blurb: 'Reservation handling built for real-time availability.' },
  { name: 'Restaurants', href: '/industries/restaurants', icon: UtensilsCrossed, blurb: 'Reservation calls handled without pulling staff off the floor.' },
  { name: 'Cafés', href: '/industries/cafes', icon: Coffee, blurb: 'Fast, precise booking and phone handling for high-volume counters.' },
];

export default function SolutionsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Solutions' }]} />
      <main id="main">
        <HeroLayout
          eyebrow="Solutions"
          title={<>One Platform. <span className="text-gradient">Deployed For How You Actually Operate.</span></>}
          description="The same eight-employee team, configured differently depending on what you run. Dental and Medical Automated deploy the full team. AISC Booking Agent is one employee, standalone. Every other industry gets exactly the employees that fit — not one generic assistant stretched thin."
          primaryAction={<Button href="/book-demo" size="lg">Book a Pilot</Button>}
          secondaryAction={<Button href="/agents" variant="ghost">Meet the Full Team →</Button>}
          visual={
            <div className="grid w-full max-w-sm grid-cols-2 gap-3">
              {industries.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="flex flex-col items-center gap-2 rounded-xl border border-line bg-panel2/80 p-5 text-center">
                    <Icon className="h-5 w-5 text-blue" />
                    <span className="text-xs font-medium text-ink">{item.name}</span>
                  </div>
                );
              })}
            </div>
          }
        />

        {/* Healthcare deployments — the full team */}
        <ContentSection>
          <RevealContainer className="mb-10">
            <SectionHeader
              eyebrow="The Full Team, Deployed"
              title="Dental and medical practices run all eight employees."
              description="Same platform, same eight roles — configured against the PMS or EHR you already run on, with role framing that matches how your front office actually works."
            />
          </RevealContainer>
          <StaggerGroup className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {deployments.map((d) => {
              const Icon = d.icon;
              return (
                <StaggerItem key={d.name}>
                  <Link href={d.href} data-cursor-hover>
                    <Card accentColor="#A855F7" className="h-full transition-transform hover:-translate-y-1 active:scale-[0.98]">
                      <CardBody>
                        <Icon className="h-6 w-6 text-blue" />
                        <h3 className="font-display mt-3 font-bold">{d.name}</h3>
                        <p className="mt-2 text-sm text-slate">{d.blurb}</p>
                        <span className="font-mono-label mt-4 inline-block text-xs text-blue">Explore →</span>
                      </CardBody>
                    </Card>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </ContentSection>

        {/* Industries — unchanged content, repositioned under the merged Solutions umbrella */}
        <ContentSection>
          <RevealContainer className="mb-10">
            <SectionHeader
              eyebrow="Other Industries We Serve"
              title="A hotel reservation call and a service-bay booking call aren't the same conversation."
              description="Each carries different urgency, different vocabulary, and a different definition of a successful outcome. These industries deploy the specific employees that fit their volume — not the full eight by default."
            />
          </RevealContainer>
          <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <StaggerItem key={ind.name}>
                  <Link href={ind.href} data-cursor-hover>
                    <Card accentColor="#A855F7" className="h-full transition-transform hover:-translate-y-1 active:scale-[0.98]">
                      <CardBody>
                        <Icon className="h-6 w-6 text-blue" />
                        <h3 className="font-display mt-3 font-bold">{ind.name}</h3>
                        <p className="mt-2 text-sm text-slate">{ind.blurb}</p>
                        <span className="font-mono-label mt-4 inline-block text-xs text-blue">Explore →</span>
                      </CardBody>
                    </Card>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </ContentSection>

        <CTASection
          title="Find the deployment built for your business."
          description="Whatever you run, we'll show you exactly how the team would work for it."
          actionLabel="Book a Pilot"
          actionHref="/book-demo"
        />
      </main>
      <Footer />
    </>
  );
}
