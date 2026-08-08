import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Stethoscope, HeartPulse, Phone, Car, Building2, UtensilsCrossed, Coffee } from 'lucide-react';
import { HeroLayout, ContentSection, CTASection } from '@/components/layouts/Sections';
import { RevealContainer, StaggerGroup, StaggerItem } from '@/components/layouts/RevealContainer';
import { SectionHeader, Breadcrumb } from '@/components/ui/Layout';
import { ArchitectureCanvasWrapper, PlatformRelationshipLayout } from '@/components/layouts/SectionShells';
import { Card, CardBody } from '@/components/ui/Card';
import { AccordionItem } from '@/components/ui/Accordion';
import Button from '@/components/ui/Button';
import Footer from '@/components/Footer';
import { AgentWorkflowIcon } from '@/components/AgentWorkflowIcon';
import { AgentRingCard } from '@/components/AgentRingCard';
import { agents } from '@/lib/agents';

export const metadata: Metadata = {
  title: 'Meet Our Agents',
  description:
    'Eight coordinated AI Employees — Amy, Leena, Kim, Morgan, Stephanie, Trisha, Elise, and Joseph — each owning one job, working together as one platform.',
};

const deployments = [
  { name: 'AISC Booking Agent', href: '/products/aisc-booking-agent', icon: Phone, desc: 'Amy alone, standalone for booking.' },
  { name: 'Dental Automated', href: '/products/dental-automated', icon: Stethoscope, desc: 'The full 8-agent team, dental front office.' },
  { name: 'Medical Automated', href: '/products/medical-automated', icon: HeartPulse, desc: 'The full 8-agent team, medical front office.' },
  { name: 'Automotive', href: '/industries/automotive', icon: Car, desc: 'Selected agents, scoped to service scheduling.' },
  { name: 'Hotels', href: '/industries/hotels', icon: Building2, desc: 'Selected agents, scoped to reservations.' },
  { name: 'Restaurants', href: '/industries/restaurants', icon: UtensilsCrossed, desc: 'Selected agents, scoped to reservations & waitlists.' },
  { name: 'Cafés', href: '/industries/cafes', icon: Coffee, desc: 'Selected agents, scoped to ordering & pickup.' },
];

const faqs = [
  {
    q: 'Why eight agents instead of one AI that does everything?',
    a: 'Because a receptionist, a scheduler, and someone chasing unpaid treatment plans are three different jobs with three different skill sets — combining them into one generic assistant makes it worse at all three. Specialization is why this works; one coordinated team outperforms one do-everything bot the same way a real front office does.',
  },
  {
    q: 'Do I have to buy all eight agents?',
    a: "No. Dental Automated and Medical Automated deploy the full team, but AISC Booking Agent is Amy alone, and other industries can start with just one or two agents and add more as needed.",
  },
  {
    q: 'Does this replace our front desk staff?',
    a: 'No. It takes on the volume of calls, scheduling, and follow-up work that\'s difficult for any front desk to keep up with consistently — Trisha is built specifically to recognize what still needs a human and hand it off.',
  },
  {
    q: 'Is every agent always active?',
    a: 'Yes — each one works continuously on its responsibility, coordinated by Trisha, who maintains a real-time view across all eight.',
  },
  {
    q: 'How is this different across Dental Automated and Medical Automated?',
    a: 'Same eight agents, same underlying platform — the role labels and specific workflows adapt to the vertical. Stephanie runs hygiene recall in a dental practice and general follow-up care in a medical one; the agent underneath is the same.',
  },
];

export default function AgentsPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Our Agents' }]} />
      <main id="main">
        {/* 1 — Hero / positioning statement */}
        <HeroLayout
          eyebrow="The Complete AI Front Office"
          title={
            <>
              Eight Specialists. <span className="text-gradient">Zero Generic Assistants.</span>
            </>
          }
          description="A receptionist. A scheduler. Someone chasing unpaid treatment plans. Real front offices split the work between specialists — so we built eight AI Employees that do the same, each owning one job and handing off to the next exactly like a real team would. This is the whole product. Everything else on this site is this team, deployed somewhere specific."
          primaryAction={<Button href="/book-demo" size="lg">Book a Pilot</Button>}
          secondaryAction={<Button href="#agents" variant="ghost">See the Team →</Button>}
          visual={
            <AgentRingCard
              agents={[
                { name: 'Amy', emoji: '🎧', colorHex: '#3B7E1D', action: 'answering an inbound call' },
                { name: 'Leena', emoji: '📅', colorHex: '#F28C28', action: 'filling a cancellation opening' },
                { name: 'Kim', emoji: '💼', colorHex: '#6366F1', action: 'verifying insurance benefits' },
                { name: 'Morgan', emoji: '📋', colorHex: '#CA4234', action: 'collecting intake forms' },
                { name: 'Stephanie', emoji: '🔄', colorHex: '#00A8C8', action: 'sending a recall reminder' },
                { name: 'Trisha', emoji: '⚙️', colorHex: '#A855F7', action: 'monitoring the full team' },
                { name: 'Elise', emoji: '⭐', colorHex: '#EC4899', action: 'responding to a new review' },
                { name: 'Joseph', emoji: '📠', colorHex: '#7F828E', action: 'routing an incoming referral' },
              ]}
            />
          }
        />

        {/* 2 — Why one team, not one bot */}
        <ContentSection id="how-it-works">
          <RevealContainer>
            <SectionHeader
              eyebrow="Why This Works"
              title="A single do-everything bot is a worse product than eight specialists."
              description="A receptionist, a scheduler, and someone recovering unpaid treatment plans are different jobs. Collapsing them into one generic assistant doesn't make it more efficient — it makes it worse at all three, the same way one employee trying to do every front-office job at once would be."
            />
          </RevealContainer>
          <StaggerGroup className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { title: 'Specialists, not generalists', body: 'Each employee is built and trained around one responsibility, so it\'s genuinely good at it — not a jack-of-all-trades approximation.' },
              { title: 'Real handoffs, not silos', body: 'Amy books it, Morgan collects intake, Kim follows up on the treatment plan — the same coordinated sequence a well-run front desk already follows.' },
              { title: 'One coordinator watching all of it', body: 'Trisha maintains a live view across every employee, catching what needs a human before it becomes a complaint.' },
            ].map((c) => (
              <StaggerItem key={c.title}>
                <Card accentColor="#A855F7" className="h-full">
                  <CardBody>
                    <h3 className="font-display font-bold">{c.title}</h3>
                    <p className="mt-2 text-sm text-slate">{c.body}</p>
                  </CardBody>
                </Card>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </ContentSection>

        {/* 3 — Orchestration layer (reuses the same pattern proven on Dental Automated) */}
        <ContentSection>
          <RevealContainer className="mb-10">
            <SectionHeader
              eyebrow="Orchestration"
              title="One coordinator, seven specialists."
              description="Trisha maintains a real-time view across every other employee — what's stalled, what's working, and what needs a human — so the team operates as one system, not seven disconnected tools."
            />
          </RevealContainer>
          <ArchitectureCanvasWrapper title="Workforce Coordination">
            <PlatformRelationshipLayout
              center={{ label: 'Trisha — Practice Manager' }}
              related={agents.filter((a) => a.slug !== 'trisha').map((a) => ({ label: a.name, description: a.role }))}
            />
          </ArchitectureCanvasWrapper>
        </ContentSection>

        {/* 4 — The 8 agents, in real depth */}
        <ContentSection density="roomy" id="agents">
          <RevealContainer className="mb-12">
            <SectionHeader
              eyebrow="The Team"
              title="Eight agents. Eight jobs. One coordinated platform."
              description="Each one owns a specific responsibility — not a thin summary, the actual scenario it solves and the workflow it runs."
            />
          </RevealContainer>
          <div className="flex flex-col gap-5">
            {agents.map((agent, i) => (
              <RevealContainer key={agent.slug}>
                <Card accentColor="#A855F7" className="overflow-hidden">
                  <CardBody className="grid gap-6 lg:grid-cols-[220px_1fr]">
                    <div className="flex flex-row items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
                      <div
                        className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl text-2xl"
                        style={{ backgroundColor: `${agent.colorHex}1A` }}
                      >
                        {agent.emoji}
                      </div>
                      <div>
                        <div className="font-mono-label text-xs" style={{ color: agent.colorHex }}>
                          Agent {String(i + 1).padStart(2, '0')}
                        </div>
                        <h3 className="font-display text-h3">{agent.name}</h3>
                        <div className="mt-1 text-sm font-medium text-slate">{agent.role}</div>
                      </div>
                    </div>
                    <div>
                      <p className="text-ink">
                        <span className="text-slate">{agent.scenario.setup}</span>{' '}
                        <span className="font-medium">{agent.scenario.resolution}</span>
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {agent.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full px-2.5 py-1 text-[11px] font-medium"
                            style={{ backgroundColor: `${agent.colorHex}1A`, color: agent.colorHex }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/agents/${agent.slug}`}
                        data-cursor-hover
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:gap-2.5 transition-all"
                      >
                        Full workflow &amp; pain points <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </RevealContainer>
            ))}
          </div>
        </ContentSection>

        {/* 5 — Where this team shows up */}
        <ContentSection>
          <RevealContainer className="mb-10">
            <SectionHeader
              eyebrow="One Platform, Many Deployments"
              title="This same team powers everything else on this site."
              description="Dental Automated and Medical Automated deploy the full eight-employee team. AISC Booking Agent is Amy alone. Other industries deploy the employees that fit their volume."
            />
          </RevealContainer>
          <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {deployments.map((d) => {
              const Icon = d.icon;
              return (
                <StaggerItem key={d.name}>
                  <Link href={d.href} data-cursor-hover>
                    <Card accentColor="#A855F7" className="h-full transition-transform hover:-translate-y-1 active:scale-[0.98]">
                      <CardBody>
                        <Icon className="h-5 w-5 text-blue" />
                        <h3 className="font-display mt-3 text-sm font-bold">{d.name}</h3>
                        <p className="mt-1 text-xs text-slate">{d.desc}</p>
                      </CardBody>
                    </Card>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </ContentSection>

        {/* 6 — FAQ */}
        <ContentSection>
          <RevealContainer className="mb-6">
            <SectionHeader eyebrow="Frequently Asked Questions" title="What people actually ask about the team." />
          </RevealContainer>
          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            <div>
              {faqs.map((f) => (
                <AccordionItem key={f.q} title={f.q}>
                  {f.a}
                </AccordionItem>
              ))}
            </div>
            <div className="h-fit rounded-token border-2 border-purple/50 bg-panel p-6 shadow-[0_8px_24px_-8px_rgba(168,85,247,0.35)]">
              <h4 className="font-display font-bold">The whole team, one platform</h4>
              <p className="mt-2 text-sm text-slate">Every employee here is the same platform your business runs — no separate builds, no separate bill per role.</p>
              <Button href="/book-demo" className="mt-4 w-full">Book a Pilot</Button>
              <div className="mt-6 flex flex-wrap gap-2">
                {['HIPAA', 'SOC 2 Type II', 'PIPEDA'].map((badge) => (
                  <span key={badge} className="rounded-full bg-panel2 px-2.5 py-1 text-[11px] font-medium text-slate">{badge}</span>
                ))}
              </div>
            </div>
          </div>
        </ContentSection>

        {/* 7 — CTA */}
        <CTASection
          title="See the whole team take a real call."
          description="Bring your actual booking rules and edge cases — no generic script, no canned demo."
          actionLabel="Book a Pilot"
          actionHref="/book-demo"
        />
      </main>
      <Footer />
    </>
  );
}
