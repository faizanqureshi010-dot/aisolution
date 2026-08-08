import type { Metadata } from 'next';
import Link from 'next/link';
import { HeroLayout, SplitSection, CTASection, ContentSection } from '@/components/layouts/Sections';
import { RevealContainer, StaggerGroup, StaggerItem } from '@/components/layouts/RevealContainer';
import { SectionHeader } from '@/components/ui/Layout';
import { SecuritySection, DeploymentSection } from '@/components/layouts/SectionShells';
import { StepFlow, SecurityStackDiagram } from '@/components/layouts/VisualDiagrams';
import { MissedCallStat } from '@/components/MissedCallStat';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Card, CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Footer from '@/components/Footer';
import { AgentSpotlightRing } from '@/components/AgentSpotlightRing';
import { AgentPhotoStrip } from '@/components/AgentPhotoStrip';
import { ConnectorMarquee } from '@/components/ConnectorMarquee';

export const metadata: Metadata = {
  description:
    'A complete AI front office — eight coordinated AI Employees that answer every call, book the appointment, and update your PMS, EHR, or POS before your front desk sees the notification.',
};

const agents = [
  { slug: 'amy', name: 'Amy', role: 'Receptionist', icon: '🎧', desc: 'AI call handling, live answer, intent detection, intelligent routing, and rescheduling or cancellations — handled the same call, no transfer needed.', tags: ['Call Handling', 'Live Answer', 'Intent Detection', 'Intelligent Routing', 'Rescheduling', 'Cancellations'], color: '#3B7E1D' },
  { slug: 'leena', name: 'Leena', role: 'Schedule Optimizer', icon: '📅', desc: 'Smart scheduling, conflict resolution, open-chair optimization, and provider matching.', tags: ['Scheduling', 'Conflict Resolution', 'Open-Chair Optimization', 'Provider Matching'], color: '#F28C28' },
  { slug: 'kim', name: 'Kim', role: 'Case Acceptance', icon: '💼', desc: 'Evaluates cases, verifies benefits, checks eligibility, and recommends next actions.', tags: ['Case Evaluation', 'Benefits Verification', 'Eligibility Checks', 'Next-Action Recommendations'], color: '#6366F1' },
  { slug: 'morgan', name: 'Morgan', role: 'Patient Intake', icon: '📋', desc: 'Automated intake, digital forms, insurance verification, and data capture.', tags: ['Automated Intake', 'Digital Forms', 'Insurance Verification', 'Data Capture'], color: '#CA4234' },
  { slug: 'stephanie', name: 'Stephanie', role: 'Follow-up', icon: '🔄', desc: 'Automated follow-ups, recall reminders, care plans, and re-engagement campaigns.', tags: ['Follow-ups', 'Recall Reminders', 'Care Plans', 'Re-engagement'], color: '#00A8C8' },
  { slug: 'trisha', name: 'Trisha', role: 'Practice Manager', icon: '⚙️', desc: 'Workflow orchestration, team oversight, task management, and operational efficiency.', tags: ['Workflow Orchestration', 'Team Oversight', 'Task Management', 'Operational Efficiency'], color: '#A855F7' },
  { slug: 'elise', name: 'Elise', role: 'Patient Experience', icon: '⭐', desc: 'Monitors reviews, automates responses, tracks sentiment, and improves satisfaction.', tags: ['Review Monitoring', 'Automated Responses', 'Sentiment Tracking', 'Satisfaction Improvement'], color: '#EC4899' },
  { slug: 'joseph', name: 'Joseph', role: 'Fax Management', icon: '📠', desc: 'Automated fax routing, document management, referrals, and lab order tracking.', tags: ['Fax Routing', 'Document Management', 'Referrals', 'Lab Order Tracking'], color: '#7F828E' },
];

const industries = [
  { name: 'Dental Practices', challenge: 'Your front desk is on hold with insurance while a new patient call rings out.', solution: 'It answers, checks the schedule, and books the cleaning — while your team stays on the insurance call.', outcome: 'New patients stop hearing a busy signal.' },
  { name: 'Medical Practices', challenge: 'A referral sits unconfirmed because eligibility checks ate the whole morning.', solution: 'It confirms eligibility and closes the referral loop without pulling staff off the phones.', outcome: 'Fewer patients falling through the cracks between visits.' },
  { name: 'Automotive Service', challenge: 'The phone rings while your tech has both hands under a hood.', solution: 'It books the oil change, quotes the wait time, and gets the bay filled.', outcome: 'A full schedule without pulling anyone off the floor.' },
  { name: 'Hospitality & Dining', challenge: 'A party of eight calls Friday at 7pm — your host is seating three tables at once.', solution: 'It checks real seating availability and confirms the table on the spot.', outcome: 'That party books with you, not your competitor down the street.' },
];

export default function Home() {
  return (
    <>
      <main id="main">
      {/* SECTION 1 — Enterprise Hero */}
      <HeroLayout
        eyebrow="The Complete AI Front Office"
        title={
          <>
            Powering The Front Office With <span className="text-gradient">Intelligent AI Employees.</span>
          </>
        }
        description="Eight specialized AI Employees that answer every call, book the appointment, and update the system you already run — no hold music, no voicemail, nothing falls through, in every business we serve."
        primaryAction={<Button href="/book-demo" size="lg">Book a Pilot</Button>}
        secondaryAction={<Button href="/agents" variant="ghost">Agents →</Button>}
        visual={
          <AgentSpotlightRing
            agents={[
              { name: 'Amy', emoji: '🎧', action: 'answering an inbound call' },
              { name: 'Leena', emoji: '📅', action: 'filling a cancellation opening' },
              { name: 'Kim', emoji: '💼', action: 'verifying insurance benefits' },
              { name: 'Morgan', emoji: '📋', action: 'collecting intake forms' },
              { name: 'Stephanie', emoji: '🔄', action: 'sending a recall reminder' },
              { name: 'Trisha', emoji: '⚙️', action: 'monitoring the full team' },
              { name: 'Elise', emoji: '⭐', action: 'responding to a new review' },
              { name: 'Joseph', emoji: '📠', action: 'routing an incoming referral' },
            ]}
            logoWidth={54}
          />
        }
      />

      {/* SECTION 2 — Cost of a Missed Call, moved directly under the hero */}
      <ContentSection>
        <MissedCallStat
          eyebrow="The Cost of a Missed Call"
          headlinePrefix="$"
          headlineTarget={82000}
          description="That's what the average single-location dental practice quietly loses every year — one unanswered ring, one abandoned voicemail, one patient who calls the next office instead. Every business we serve loses revenue the same way; dental is simply where we have the clearest numbers."
          supportingStats={[
            { target: 23, suffix: '%', label: 'of inbound calls go unanswered during business hours' },
            { target: 285, prefix: '$', label: 'average lifetime value lost per missed new-patient call' },
            { target: 68, suffix: '%', label: 'of after-hours and weekend calls never get a callback' },
            { target: 82, prefix: '$', suffix: 'K', label: 'in compounding annual revenue, quietly walking out the door' },
          ]}
        />
      </ContentSection>

      {/* SECTION 3 — Connector marquee, real scroll animation, directly under the missed-call stat */}
      <ConnectorMarquee />

      {/* SECTION 4 — Meet the 8-agent workforce */}
      <ContentSection>
        <RevealContainer className="mb-10 text-center">
          <span className="font-mono-label inline-flex items-center gap-2 rounded-full bg-panel2 px-4 py-1.5 text-xs font-semibold text-purple">
            <span className="h-1.5 w-1.5 rounded-full bg-purple" />
            Meet the Team
          </span>
          <h2 className="font-display mt-5 text-h1">
            8 Specialized <span className="text-gradient">AI Employees</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-slate">
            Not one generic bot pretending to do everything — eight agents, each trained on a single job, handing off to each other on every call.
          </p>
        </RevealContainer>

        <RevealContainer className="mb-10">
          <AgentPhotoStrip agents={agents} />
        </RevealContainer>

        <div className="mb-10 flex justify-end">
          <Link
            href="/agents"
            data-cursor-hover
            className="font-mono-label inline-flex items-center gap-1.5 text-xs text-blue hover:gap-2.5 transition-all"
          >
            Meet the full team →
          </Link>
        </div>
        <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((a) => (
            <StaggerItem key={a.name}>
              <Link href={`/agents/${a.slug}`} data-cursor-hover className="block h-full">
                <Card accentColor={a.color} className="h-full transition-transform hover:-translate-y-1">
                  <CardBody className="flex h-full flex-col gap-2">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-full text-lg"
                      style={{ backgroundColor: `${a.color}1A` }}
                    >
                      {a.icon}
                    </div>
                    <h3 className="font-display font-bold">{a.name}</h3>
                    <div className="font-mono-label text-xs" style={{ color: a.color }}>{a.role}</div>
                    <p className="mt-1 text-sm text-slate">{a.desc}</p>
                    <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
                      {a.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full px-2.5 py-1 text-[11px] font-medium"
                          style={{ backgroundColor: `${a.color}1A`, color: a.color }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </ContentSection>

      {/* SECTION 5 — Platform Ecosystem + Industries (one continuous narrative, per explicit merge request) */}
      <ContentSection>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <RevealContainer>
            <SectionHeader
              eyebrow="One Platform, Deployed"
              title="One employee engine. Deployed as three products, scoped to your industry."
              description="AISC Booking Agent, Dental Automated, and Medical Automated aren't three separate builds — they're the same eight-employee platform, configured for how each business actually runs. Every industry loses calls differently, so we didn't build one generic script for all of them."
            />
          </RevealContainer>
          <RevealContainer className="flex flex-col gap-3">
            <Link href="/agents" data-cursor-hover className="block">
              <div className="rounded-full bg-brand-gradient px-6 py-3 text-center font-display font-bold text-paper transition-transform hover:-translate-y-0.5">
                Shared 8-Employee Intelligence &amp; Connector Layer
              </div>
            </Link>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/products/dental-automated" data-cursor-hover className="block h-full">
                <Card accentColor="#A855F7" className="h-full text-center transition-transform hover:-translate-y-1">
                  <CardBody>
                    <div className="font-display font-semibold">Dental Automated</div>
                    <p className="mt-1 text-xs text-slate">Full 8-employee dental front office</p>
                  </CardBody>
                </Card>
              </Link>
              <Link href="/products/medical-automated" data-cursor-hover className="block h-full">
                <Card accentColor="#A855F7" className="h-full text-center transition-transform hover:-translate-y-1">
                  <CardBody>
                    <div className="font-display font-semibold">Medical Automated</div>
                    <p className="mt-1 text-xs text-slate">Full 8-employee medical front office</p>
                  </CardBody>
                </Card>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Link href="/products/aisc-booking-agent" data-cursor-hover className="block h-full">
                <Card accentColor="#A855F7" className="h-full text-center transition-transform hover:-translate-y-1">
                  <CardBody>
                    <div className="font-display font-semibold">AISC Booking Agent</div>
                    <p className="mt-1 text-xs text-slate">Amy alone, standalone for booking</p>
                  </CardBody>
                </Card>
              </Link>
              <Link href="/industries" data-cursor-hover className="block h-full">
                <Card accentColor="#A855F7" className="h-full text-center transition-transform hover:-translate-y-1">
                  <CardBody>
                    <div className="font-display font-semibold">Industries</div>
                    <p className="mt-1 text-xs text-slate">Selected employees, scoped to demand</p>
                  </CardBody>
                </Card>
              </Link>
            </div>
          </RevealContainer>
        </div>

        <p className="mx-auto mt-8 max-w-[560px] text-center text-sm text-slate">
          Claravox Healthcare is a separate revenue-cycle management subsidiary — a distinct
          business, not another deployment of this employee platform.
        </p>

        <StaggerGroup className="mt-10 flex flex-wrap justify-center gap-4">
          {industries.map((ind) => (
            <StaggerItem key={ind.name} className="w-full sm:w-[calc(50%-8px)]">
              <Card accentColor="#A855F7" className="flex h-full flex-col">
                <CardBody className="flex h-full flex-col gap-3">
                  <h3 className="font-display font-bold">{ind.name}</h3>
                  <div>
                    <div className="font-mono-label text-xs text-slate">Challenge</div>
                    <p className="mt-1 text-sm text-ink">{ind.challenge}</p>
                  </div>
                  <div>
                    <div className="font-mono-label text-xs text-blue">Solution</div>
                    <p className="mt-1 text-sm text-ink">{ind.solution}</p>
                  </div>
                  <div>
                    <div className="font-mono-label text-xs text-positive">Expected Outcome</div>
                    <p className="mt-1 text-sm text-ink">{ind.outcome}</p>
                  </div>
                </CardBody>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </ContentSection>

      {/* SECTION 7 — Security */}
      <SecuritySection
        eyebrow="Security"
        title="Yes, it's HIPAA compliant. Here's what that actually means underneath."
        description="Compliance documentation is available on request — not just a badge in the footer."
      >
        <SecurityStackDiagram
          layers={[
            { name: 'Access Control', description: 'Every action within the platform is scoped and authenticated.' },
            { name: 'Monitoring', description: 'Interactions are logged continuously for operational and security review.' },
            { name: 'Compliance', description: 'Built to HIPAA compliance standards, with SOC 2 Type II certification and PIPEDA compliance.' },
          ]}
        />
      </SecuritySection>

      {/* SECTION 8 — Deployment Experience */}
      <ContentSection>
        <RevealContainer className="mb-10">
          <SectionHeader eyebrow="Getting Started" title="Days, not the months you're probably picturing." />
        </RevealContainer>
        <StepFlow
          steps={[
            { title: 'Discovery', timeframe: 'Hour 1', description: 'We sit in on how your phones actually run today — where calls get dropped, where staff get pulled away.' },
            { title: 'Configuration', timeframe: 'Hours 1–3', description: 'We set the booking rules and connect your PMS, EHR, or POS.' },
            { title: 'Testing', timeframe: 'Day 1', description: 'We run it through your real edge cases before it ever picks up a live call.' },
            { title: 'Training', timeframe: 'Day 2 · 20 min', description: 'Your team gets a 20-minute walkthrough, not a manual.' },
            { title: 'Go-Live', timeframe: 'Within 48 hrs', description: 'It starts taking calls — you can listen to the first ones live.' },
            { title: 'Support', timeframe: 'Ongoing', description: 'We tune it based on what actually comes up, not a fixed schedule.' },
          ]}
        />
      </ContentSection>

      {/* SECTION 8.6 — Results / Testimonials */}
      <ContentSection>
        <RevealContainer className="mb-10 text-center">
          <SectionHeader eyebrow="Results" title="Front desks that got their hours back" align="center" />
          <p className="mx-auto mt-4 max-w-[560px] text-sm text-slate">A look at how practices are using this platform to recover the calls they used to lose.</p>
        </RevealContainer>
        <TestimonialsSection
          testimonials={[
            {
              quote: 'Our voicemail box used to fill up every weekend. Now those calls get booked before Monday morning even starts.',
              initials: 'DR', name: 'Dr. R., DDS', practiceType: 'General & family practice',
              resultValue: '+$14.2K', resultLabel: 'recovered / mo', avatarColor: '#A855F7',
            },
            {
              quote: 'Kim catches the cases my front desk used to let slide. Treatment acceptance is up without anyone changing their pitch.',
              initials: 'SM', name: 'Dr. S. M., DMD', practiceType: 'Multi-provider group practice',
              resultValue: '+18%', resultLabel: 'case acceptance', avatarColor: '#6366F1',
            },
            {
              quote: 'Setup took less than two days and it was already talking to our schedule like it had worked here for years.',
              initials: 'JT', name: 'Dr. J. T., DDS', practiceType: 'Pediatric dental clinic',
              resultValue: 'Live in', resultLabel: '36 hours', avatarColor: '#EC4899',
            },
          ]}
          disclaimer="Representative results from pilot practices. Individual outcomes vary by call volume and case mix."
        />
      </ContentSection>

      {/* SECTION 9 — Enterprise CTA */}
      <CTASection
        title="Want to hear it take a real call for your business?"
        description="Bring your actual booking rules — no generic script, no canned demo."
        actionLabel="Book a Pilot"
        actionHref="/book-demo"
      />
      </main>
      <Footer />
    </>
  );
}


