import type { Metadata } from 'next';
import { Phone, MessageSquare, Brain, Database, GitBranch, Plug, CalendarCheck, Users, Bell, BarChart3, CheckCircle2 } from 'lucide-react';
import { HeroLayout, ContentSection, CTASection } from '@/components/layouts/Sections';
import { RevealContainer, StaggerGroup, StaggerItem } from '@/components/layouts/RevealContainer';
import { SectionHeader, Breadcrumb } from '@/components/ui/Layout';
import { WorkflowExplorer, FeatureNavigator } from '@/components/layouts/ProductStory';
import { ConnectorCategoryLayout } from '@/components/layouts/ConnectorSystem';
import { ConnectorTopologyMap } from '@/components/layouts/ConnectorTopologyMap';
import { SimulatedAreaChart } from '@/components/layouts/SimulatedAreaChart';
import { DashboardShell, DashboardHeader, Panel, ActivityFeed, MetricRow } from '@/components/layouts/Dashboard';
import { SecuritySection, DeploymentSection, ArchitectureCanvasWrapper } from '@/components/layouts/SectionShells';
import { ComplianceGrid } from '@/components/layouts/EnterpriseSystems';
import { StepFlow, SecurityStackDiagram } from '@/components/layouts/VisualDiagrams';
import { StickyProductNav, HighlightPanel, ExpandableInfoPanel } from '@/components/layouts/ProductExperience';
import { BookingCalculator } from '@/components/calculators/BookingCalculator';
import { AccordionItem } from '@/components/ui/Accordion';
import { SoftwareApplicationSchema, FAQSchema, BreadcrumbSchema } from '@/components/StructuredData';
import Button from '@/components/ui/Button';
import Footer from '@/components/Footer';
import LiveCallDemo from '@/components/LiveCallDemo';
import { connectorCategories } from '@/lib/connectors';

export const metadata: Metadata = {
  title: 'AISC Booking Agent',
  description:
    'AISC Booking Agent answers calls, manages scheduling, and connects directly into the systems your business already runs on — an enterprise AI platform, not a script.',
};

const navSections = [
  { id: 'why', label: 'Why It Exists' },
  { id: 'lifecycle', label: 'Call Lifecycle' },
  { id: 'decision-engine', label: 'Decision Engine' },
  { id: 'before-after', label: 'Before / After' },
  { id: 'connectors', label: 'Connectors' },
  { id: 'roi', label: 'ROI' },
  { id: 'admin', label: 'Administration' },
  { id: 'deployment', label: 'Deployment' },
  { id: 'security', label: 'Security' },
  { id: 'faq', label: 'FAQ' },
];

const lifecycleStages = [
  { icon: <Phone className="h-4 w-4" />, label: 'Incoming Call', detail: 'The call is answered the moment it arrives — no queue, no hold music.' },
  { icon: <MessageSquare className="h-4 w-4" />, label: 'Conversation', detail: 'A real spoken exchange takes place, not a menu of pre-recorded options.' },
  { icon: <Brain className="h-4 w-4" />, label: 'Intent Recognition', detail: 'What the caller actually needs is identified from the conversation itself.' },
  { icon: <Database className="h-4 w-4" />, label: 'Knowledge Engine', detail: 'The system checks business-specific information — services, hours, provider availability.' },
  { icon: <GitBranch className="h-4 w-4" />, label: 'Business Rules', detail: 'The next step is determined according to how this specific business operates.' },
  { icon: <Plug className="h-4 w-4" />, label: 'Connector Selection', detail: 'The correct connected system is identified — PMS, EHR, calendar, or POS.' },
  { icon: <CalendarCheck className="h-4 w-4" />, label: 'Appointment Logic', detail: 'Live availability is checked and a real slot is reserved.' },
  { icon: <Users className="h-4 w-4" />, label: 'CRM Update', detail: 'The customer or patient record is created or updated accordingly.' },
  { icon: <Bell className="h-4 w-4" />, label: 'Notification', detail: 'Confirmations go out to the caller, and to staff where relevant.' },
  { icon: <BarChart3 className="h-4 w-4" />, label: 'Analytics', detail: 'The interaction is logged for later review of call and booking patterns.' },
  { icon: <CheckCircle2 className="h-4 w-4" />, label: 'Completion', detail: 'The task is closed out — booked, escalated, or logged as handled.' },
];

const decisionEngineTabs = [
  { label: 'Intent & Confidence', items: ['Determines what the caller is asking for, not just keywords matched', 'Low-confidence situations are treated differently than clear requests', 'Ambiguous requests are clarified, not guessed at'] },
  { label: 'Knowledge & Context', items: ['Draws on real business information, not generic assumptions', 'Maintains context across a single call', 'Configured per business, not shared across unrelated deployments'] },
  { label: 'Rules & Fallback', items: ['Business-specific rules determine what happens next', 'A defined fallback path exists for anything outside normal handling', 'Nothing is left to open-ended improvisation'] },
  { label: 'Escalation & Handoff', items: ['Recognizes when a situation needs a person', 'Transfers live, with context, rather than dropping the caller', 'Escalation criteria are configured, not accidental'] },
  { label: 'Connector Execution', items: ['Reads and writes directly into the connected system of record', 'No intermediate manual step or duplicate entry', 'Executes only actions the business has actually authorized'] },
];

const capabilities = [
  { title: 'Call Overload', body: 'More inbound calls than staff can answer during peak hours.' },
  { title: 'Scheduling Complexity', body: 'Availability, provider rules, and mid-call rescheduling or cancellations compete for attention — usually right when the phones are busiest.' },
  { title: 'Missed Opportunities', body: 'A missed call is often a customer who doesn\'t call back.' },
  { title: 'Staff Workload', body: 'Repetitive call handling crowds out higher-value work.' },
  { title: 'Consistency', body: 'Call quality varies by who happens to answer, and when.' },
  { title: 'Availability', body: 'Calls after hours or during lunch still need to be answered.' },
  { title: 'Escalation', body: 'Not every call should be automated — some genuinely need a person.' },
  { title: 'Visibility', body: 'Without logging, it\'s hard to know what\'s actually happening on the phones.' },
];

const faqs = [
  { q: 'How long does deployment actually take?', a: 'It depends on how many systems need to be connected and how much configuration your operations require — we\'ll give you a real timeline after Discovery, not a generic promise.' },
  { q: 'What happens if our system isn\'t in your connector list yet?', a: 'Tell us. New connectors are added on an ongoing basis, and we\'ll tell you honestly where yours stands.' },
  { q: 'How is our data secured?', a: 'See the Security & Governance section below for what\'s currently verified and supported.' },
  { q: 'Can the employee be configured for how our business specifically operates?', a: 'Yes — configuration against your real operations happens before the employee takes a single live call.' },
  { q: 'What kind of support exists after go-live?', a: 'Ongoing support is part of the deployment experience — see the timeline below.' },
  { q: 'What happens when the employee encounters something it can\'t handle?', a: 'It recognizes the limit and hands off to a person, live, with context — it does not guess.' },
  { q: 'Does this replace our staff?', a: 'No. It takes on the volume of repetitive call and scheduling work so your staff can focus on what actually needs a person.' },
];

export default function BookingAgentPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Solutions', href: '/industries' }, { label: 'AISC Booking Agent' }]} />
      <BreadcrumbSchema items={[{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/industries' }, { label: 'AISC Booking Agent', href: '/products/aisc-booking-agent' }]} />
      <SoftwareApplicationSchema name="AISC Booking Agent" description="An enterprise AI employee that owns call handling and scheduling end to end, connected directly into the system your business already runs on." />
      <FAQSchema faqs={faqs} />

      <main id="main">
        {/* HERO — the product demonstrating itself within seconds */}
        <HeroLayout
          eyebrow="AISC Booking Agent — Part of the AI Front Office Platform"
          title={<>Every Call, Answered. Every Booking, <span className="text-gradient">Synced</span>.</>}
          description="One AI employee, one job, done completely: it answers, checks real availability, books, reschedules, and cancels — all on the same call, no transfer, no callback needed. Synced straight into the system you already run. No new hardware. Live in 48 hours."
          primaryAction={<Button href="/book-demo" size="lg">Book a Pilot</Button>}
          secondaryAction={<Button href="/contact" variant="ghost">Talk to Sales →</Button>}
          visual={
            <div>
              <LiveCallDemo />
              <p className="mt-3 text-center text-xs text-slate">Live simulation — illustrative, not a real call</p>
            </div>
          }
        />

        {/* Sticky product navigation — progressive reveal starts here */}
        <StickyProductNav sections={navSections} />

        {/* WHY IT EXISTS — expandable panels instead of flat cards */}
        <ContentSection>
          <div id="why" className="scroll-mt-28">
            <RevealContainer className="mb-10">
              <SectionHeader
                eyebrow="Why Organizations Deploy It"
                title="The same operational strain, in every front office."
                description="None of this is a staffing failure — it\'s what happens when one desk is asked to do several jobs simultaneously. Expand any card for detail."
              />
            </RevealContainer>
            <StaggerGroup className="flex flex-wrap justify-center gap-3">
              {capabilities.map((c) => (
                <StaggerItem key={c.title} className="w-full sm:w-[calc(50%-6px)] lg:w-[calc(33.333%-8px)]">
                  <ExpandableInfoPanel title={c.title}>{c.body}</ExpandableInfoPanel>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </ContentSection>

        {/* CALL LIFECYCLE — animated architecture diagram, the centerpiece */}
        <ContentSection>
          <div id="lifecycle" className="scroll-mt-28">
            <RevealContainer className="mb-10">
              <SectionHeader
                eyebrow="The Complete Call Lifecycle"
                title="Not a script. A real, staged pipeline."
                description="Click through each stage to see exactly what happens and why."
              />
            </RevealContainer>
            <ArchitectureCanvasWrapper title="Call Processing Architecture">
              <WorkflowExplorer stages={lifecycleStages} />
            </ArchitectureCanvasWrapper>
          </div>
        </ContentSection>

        {/* AI DECISION ENGINE */}
        <ContentSection>
          <div id="decision-engine" className="scroll-mt-28">
            <RevealContainer className="mb-10">
              <SectionHeader eyebrow="AI Decision Engine" title="What actually happens inside a single conversation." />
            </RevealContainer>
            <FeatureNavigator categories={decisionEngineTabs} />
          </div>
        </ContentSection>

        {/* BEFORE / AFTER */}
        <ContentSection>
          <div id="before-after" className="scroll-mt-28">
            <RevealContainer className="mb-10">
              <SectionHeader eyebrow="Before / After" title="The same front desk, before and after deployment." />
            </RevealContainer>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-token border border-line bg-panel p-6">
                <div className="font-mono-label mb-3 text-xs text-slate">Before</div>
                <ul className="space-y-2.5 text-sm text-slate">
                  <li>Calls during peak hours go unanswered</li>
                  <li>Scheduling is manual, one call at a time</li>
                  <li>After-hours calls reach voicemail</li>
                  <li>No visibility into what\'s actually happening on the phones</li>
                </ul>
              </div>
              <HighlightPanel>
                <div className="font-mono-label mb-3 text-xs text-blue">After</div>
                <ul className="space-y-2.5 text-sm text-ink">
                  <li>Every call answered immediately, at any hour</li>
                  <li>Scheduling happens live, synced to your real system</li>
                  <li>After-hours calls are handled, not lost</li>
                  <li>Every interaction logged for real operational visibility</li>
                </ul>
              </HighlightPanel>
            </div>
          </div>
        </ContentSection>

        {/* CONNECTOR ECOSYSTEM — deep presentation, not a logo wall */}
        <ContentSection>
          <div id="connectors" className="scroll-mt-28">
            <RevealContainer className="mb-10">
              <SectionHeader
                eyebrow="Connector Ecosystem"
                title={`${connectorCategories.reduce((s, c) => s + c.connectors.length, 0)}+ systems, organized and searchable.`}
                description="Every connector below is real — status shown honestly, not marketed as uniformly live."
              />
            </RevealContainer>
            {(() => {
              const mappedCategories = connectorCategories.map((c) => ({
                category: c.category,
                connectors: c.connectors.map((conn) => ({
                  name: conn.name,
                  domain: conn.domain,
                  status: (conn.status === 'Live' ? 'live' : conn.status === 'In Progress' ? 'in-progress' : 'coming-soon') as 'live' | 'in-progress' | 'coming-soon',
                  description: `Read and write access for ${conn.name}, scoped to booking, scheduling, and record updates.`,
                  actions: ['Check availability', 'Create or update appointment', 'Sync customer/patient record'],
                })),
              }));
              return (
                <>
                  <ConnectorTopologyMap categories={mappedCategories} />
                  <div className="mt-8">
                    <ConnectorCategoryLayout categories={mappedCategories} />
                  </div>
                </>
              );
            })()}
          </div>
        </ContentSection>

        {/* ROI ESTIMATE */}
        <ContentSection>
          <div id="roi" className="scroll-mt-28">
            <RevealContainer className="mb-10">
              <SectionHeader eyebrow="Illustrative Impact" title="See what this could mean for your call volume." />
            </RevealContainer>
            <BookingCalculator />
          </div>
        </ContentSection>

        {/* ENTERPRISE ADMINISTRATION — product dashboard mockup */}
        <ContentSection>
          <div id="admin" className="scroll-mt-28">
            <RevealContainer className="mb-10">
              <SectionHeader eyebrow="Enterprise Administration" title="Configuration and oversight, not a black box." />
            </RevealContainer>
            <DashboardShell
              sidebar={
                <nav className="flex flex-col gap-1 text-sm">
                  {['Configuration', 'Knowledge', 'Connector Management', 'Deployment', 'Monitoring', 'Logs', 'Analytics', 'Permissions'].map((item) => (
                    <span key={item} className="rounded-lg px-3 py-2 text-slate hover:bg-panel2 hover:text-ink">
                      {item}
                    </span>
                  ))}
                </nav>
              }
            >
              <DashboardHeader title="Platform Overview" status={{ state: 'operational', label: 'System Operational' }} />
              <MetricRow metrics={[
                { label: 'Connected Systems', value: '—' },
                { label: 'Active Configurations', value: '—' },
                { label: 'Escalations Today', value: '—' },
                { label: 'Uptime', value: '—' },
              ]} />
              <Panel title="Recent Activity">
                <ActivityFeed items={[]} />
              </Panel>
              <SimulatedAreaChart
                title="Illustrative Call Volume Pattern"
                unit=" calls"
                data={[
                  { label: 'Mon', value: 42 },
                  { label: 'Tue', value: 58 },
                  { label: 'Wed', value: 51 },
                  { label: 'Thu', value: 67 },
                  { label: 'Fri', value: 74 },
                  { label: 'Sat', value: 39 },
                  { label: 'Sun', value: 28 },
                ]}
              />
            </DashboardShell>
          </div>
        </ContentSection>

        {/* DEPLOYMENT EXPERIENCE */}
        <div id="deployment" className="scroll-mt-28">
          <DeploymentSection eyebrow="Deployment Experience" title="From first conversation to a live, supported platform.">
            <StepFlow
              steps={[
                { title: 'Discovery', timeframe: 'Hour 1', description: 'We learn how your business actually handles calls and scheduling today.' },
                { title: 'Configuration', timeframe: 'Hours 1–2', description: 'The employee is configured against your specific rules and availability.' },
                { title: 'Knowledge Import', timeframe: 'Hours 2–4', description: 'Business-specific information is loaded into the knowledge engine.' },
                { title: 'Connector Setup', timeframe: 'Day 1', description: 'Your relevant systems are connected and verified.' },
                { title: 'Testing', timeframe: 'Day 1–2', description: 'The full lifecycle is tested against real scenarios before going live.' },
                { title: 'Go Live', timeframe: 'Within 48 hrs', description: 'The employee begins handling real calls.' },
                { title: 'Optimization', timeframe: 'Week 1', description: 'Configuration is refined based on real usage patterns.' },
                { title: 'Support', timeframe: 'Ongoing', description: 'Ongoing support continues after go-live.' },
              ]}
            />
          </DeploymentSection>
        </div>

        {/* SECURITY & GOVERNANCE */}
        <div id="security" className="scroll-mt-28">
          <SecuritySection
            eyebrow="Security & Governance"
            title="What\'s currently supported — stated plainly."
            description="Compliance documentation is available on request."
          >
            <SecurityStackDiagram
              layers={[
                { name: 'Access Control', description: 'Every configuration action is scoped and authenticated.' },
                { name: 'Encryption', description: 'Data in transit is encrypted using industry-standard protocols.' },
                { name: 'Auditability', description: 'Configuration changes and call activity are logged.' },
                { name: 'Monitoring', description: 'System health and escalation activity are continuously observed.' },
              ]}
            />
            <div className="mt-6">
              <ComplianceGrid items={['HIPAA', 'SOC 2 Type II', 'PIPEDA']} />
            </div>
          </SecuritySection>
        </div>

        {/* FAQ */}
        <ContentSection>
          <div id="faq" className="scroll-mt-28">
            <RevealContainer className="mb-10">
              <SectionHeader eyebrow="Frequently Asked Questions" title="What enterprise buyers actually ask." />
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
                <h4 className="font-display font-bold">Still have questions?</h4>
                <p className="mt-2 text-sm text-slate">Talk to someone who can answer specifics about your systems and your call volume — not a script.</p>
                <Button href="/book-demo" className="mt-4 w-full">Book a Pilot</Button>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['HIPAA', 'SOC 2 Type II', 'PIPEDA'].map((badge) => (
                    <span key={badge} className="rounded-full bg-panel2 px-2.5 py-1 text-[11px] font-medium text-slate">{badge}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ContentSection>

        {/* PREMIUM CTA */}
        <CTASection
          title="See it connect to your systems, live."
          description="A demo built around what you already run — not a generic walkthrough."
          actionLabel="Book a Pilot"
          actionHref="/book-demo"
        />
      </main>
      <Footer />
    </>
  );
}
