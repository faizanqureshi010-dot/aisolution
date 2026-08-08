import type { Metadata } from 'next';
import { Phone, CalendarClock, ShieldCheck, ClipboardList, PhoneCall, HeartHandshake, FileText, Users2, PhoneIncoming, CalendarCheck2, Bell, ClipboardCheck, FileCheck2, Star } from 'lucide-react';
import { HeroLayout, ContentSection, CTASection } from '@/components/layouts/Sections';
import { RevealContainer, StaggerGroup, StaggerItem } from '@/components/layouts/RevealContainer';
import { SectionHeader, Breadcrumb } from '@/components/ui/Layout';
import { WorkflowExplorer, CapabilityMatrix } from '@/components/layouts/ProductStory';
import { ConnectorCategoryLayout } from '@/components/layouts/ConnectorSystem';
import { ConnectorTopologyMap } from '@/components/layouts/ConnectorTopologyMap';
import { SimulatedAreaChart } from '@/components/layouts/SimulatedAreaChart';
import { DashboardShell, DashboardHeader, Panel, ActivityFeed, MetricRow } from '@/components/layouts/Dashboard';
import { SecuritySection, DeploymentSection, PlatformRelationshipLayout, ArchitectureCanvasWrapper } from '@/components/layouts/SectionShells';
import { ComplianceGrid } from '@/components/layouts/EnterpriseSystems';
import { StepFlow, SecurityStackDiagram } from '@/components/layouts/VisualDiagrams';
import { AgentOrbitMap } from '@/components/AgentOrbitMap';
import { agents as allAgents } from '@/lib/agents';
import { StickyProductNav, HighlightPanel, ExpandableInfoPanel } from '@/components/layouts/ProductExperience';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs';
import { AccordionItem } from '@/components/ui/Accordion';
import { SoftwareApplicationSchema, FAQSchema, BreadcrumbSchema } from '@/components/StructuredData';
import { Card, CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Footer from '@/components/Footer';
import { connectorCategories } from '@/lib/connectors';

export const metadata: Metadata = {
  title: 'Medical Automated',
  description:
    'Medical Automated is the same coordinated 8-employee AI workforce as Dental Automated, adapted for the medical front office — connecting directly into the EHR your practice already runs on.',
};

const navSections = [
  { id: 'why', label: 'Why It Exists' },
  { id: 'agents', label: 'AI Workforce' },
  { id: 'orchestration', label: 'Orchestration' },
  { id: 'how-it-works', label: 'Workflows' },
  { id: 'matrix', label: 'Responsibility Matrix' },
  { id: 'before-after', label: 'Before / After' },
  { id: 'integrations', label: 'Connectors' },
  { id: 'admin', label: 'Administration' },
  { id: 'deployment', label: 'Deployment' },
  { id: 'security', label: 'Security' },
  { id: 'faq', label: 'FAQ' },
];

// The same 8 agents as Dental Automated — same underlying platform, medical-context role
// labels. Two roles that used to be separate named agents on this page (Rachel — Referral
// Coordinator, and prescription-refill handling) are now owned by Joseph, whose job is
// broader inbound-document processing (fax, referrals, refill requests, documentation) —
// not a 9th or 10th agent. Insurance/prior-auth work is owned by Kim, consistent with her
// "verifies benefits, checks eligibility" role in Dental Automated.
const agents = [
  { icon: Phone, name: 'Amy', role: 'Receptionist', detail: 'Answers every inbound call — the front line of patient communication, day or night.' },
  { icon: CalendarClock, name: 'Leena', role: 'Schedule Optimizer', detail: 'Manages appointment scheduling and fills gaps left by cancellations in real time.' },
  { icon: ShieldCheck, name: 'Kim', role: 'Case Acceptance', detail: 'Verifies insurance eligibility and prior authorization requirements ahead of appointments.' },
  { icon: ClipboardList, name: 'Morgan', role: 'Patient Intake', detail: 'Collects patient history, forms, and consent digitally before the visit.' },
  { icon: PhoneCall, name: 'Stephanie', role: 'Follow-up', detail: 'Reaches out after visits to confirm follow-through, and tracks patients due for their next visit.' },
  { icon: Users2, name: 'Trisha', role: 'Practice Manager', detail: 'Coordinates all seven other AI Employees and knows what needs a human.' },
  { icon: Star, name: 'Elise', role: 'Patient Experience', detail: 'Monitors reviews, automates responses, and tracks patient satisfaction trends.' },
  { icon: FileText, name: 'Joseph', role: 'Fax & Referral Management', detail: 'Processes incoming referrals, documentation, and prescription refill requests as they arrive.' },
];

const workflows = {
  appointment: [
    { icon: <PhoneIncoming className="h-4 w-4" />, label: 'Call Comes In', detail: 'Amy answers immediately, day or night.' },
    { icon: <CalendarClock className="h-4 w-4" />, label: 'Availability Checked', detail: 'Leena checks live schedule availability against the request.' },
    { icon: <CalendarCheck2 className="h-4 w-4" />, label: 'Booked', detail: 'The appointment is confirmed directly in your EHR.' },
    { icon: <Bell className="h-4 w-4" />, label: 'Confirmed', detail: 'The patient receives confirmation, and staff can see it immediately.' },
  ],
  referral: [
    { icon: <FileText className="h-4 w-4" />, label: 'Referral Received', detail: 'Joseph reads and classifies an incoming referral the moment it arrives.' },
    { icon: <ClipboardCheck className="h-4 w-4" />, label: 'Details Extracted', detail: 'Relevant information is pulled from the document — specialist, reason, urgency.' },
    { icon: <CalendarCheck2 className="h-4 w-4" />, label: 'Coordinated', detail: 'The handoff and scheduling are coordinated directly with Leena.' },
    { icon: <Bell className="h-4 w-4" />, label: 'Confirmed', detail: 'The patient and referring provider are both updated.' },
  ],
  insurance: [
    { icon: <ClipboardList className="h-4 w-4" />, label: 'Appointment Scheduled', detail: 'A visit is booked, triggering eligibility verification.' },
    { icon: <ShieldCheck className="h-4 w-4" />, label: 'Eligibility Checked', detail: 'Kim verifies coverage and prior-authorization requirements ahead of the appointment.' },
    { icon: <FileCheck2 className="h-4 w-4" />, label: 'Authorization Submitted', detail: 'If required, Kim submits the request with supporting documentation.' },
    { icon: <CalendarCheck2 className="h-4 w-4" />, label: 'Visit Ready', detail: 'The patient arrives with no coverage surprises at check-in.' },
  ],
  followup: [
    { icon: <ClipboardCheck className="h-4 w-4" />, label: 'Visit Completed', detail: 'A visit concludes with a recommended next step.' },
    { icon: <PhoneCall className="h-4 w-4" />, label: 'Follow-Up Call', detail: 'Stephanie reaches out to confirm the patient is following through.' },
    { icon: <HeartHandshake className="h-4 w-4" />, label: 'Recall Tracked', detail: 'Patients due for their next visit are tracked and re-contacted at the right interval.' },
    { icon: <Bell className="h-4 w-4" />, label: 'Rebooked', detail: 'The next visit is scheduled before the patient falls off the list.' },
  ],
};

const responsibilityMatrix = [
  { capability: 'Answers inbound calls', supported: true },
  { capability: 'Books and manages appointments', supported: true },
  { capability: 'Processes referrals and documentation', supported: true },
  { capability: 'Verifies insurance eligibility and prior authorization', supported: true },
  { capability: 'Collects patient intake and history', supported: true },
  { capability: 'Follows up after visits and tracks recall', supported: true },
  { capability: 'Coordinates prescription refill requests', supported: true },
  { capability: 'Monitors reviews and patient experience', supported: true },
  { capability: 'Makes clinical decisions', supported: false, note: 'Always a provider' },
  { capability: 'Overrides provider judgment', supported: false, note: 'Never' },
];

const capabilities = [
  { title: 'Call Overload', body: 'Calls, referrals, insurance checks, and follow-up all compete for the same limited front-desk attention.' },
  { title: 'Referral Delays', body: 'Referrals sit unprocessed while patients wait for a next step.' },
  { title: 'Eligibility Surprises', body: 'Coverage and prior-authorization issues surface at check-in instead of before the visit.' },
  { title: 'Follow-Up Gaps', body: 'Patients fall through after a visit without anyone confirming they followed through.' },
];

const faqs = [
  { q: 'Does this replace our front desk?', a: 'No. It takes on the volume of calls, coordination, and follow-up work that\'s difficult for any front desk to keep up with consistently.' },
  { q: 'How is this different from Dental Automated?', a: 'Same eight agents, same underlying platform — the role framing adapts to a medical front office. Kim\'s case-acceptance role extends into prior authorization; Stephanie\'s follow-up role generalizes beyond hygiene recall specifically.' },
  { q: 'How are urgent situations handled?', a: 'Trisha recognizes when a situation needs immediate human attention and routes it to your staff.' },
  { q: 'Can our staff take over a conversation at any point?', a: 'Yes, at any time.' },
  { q: 'Does it work with our current EHR?', a: 'It\'s built to connect directly into the EHR your practice already uses — see the Connector Ecosystem below for your specific system.' },
  { q: 'Can it support multiple providers or locations?', a: 'Yes — the workforce is configured around your practice\'s actual structure, including multi-location operations.' },
];

export default function MedicalAutomatedPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Solutions', href: '/industries' }, { label: 'Medical Automated' }]} />
      <BreadcrumbSchema items={[{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/industries' }, { label: 'Medical Automated', href: '/products/medical-automated' }]} />
      <SoftwareApplicationSchema name="Medical Automated" description="The same coordinated 8-employee AI workforce as Dental Automated, adapted for the medical front office and connecting directly into the EHR your practice already runs on." />
      <FAQSchema faqs={faqs} />
      <main id="main">
        <HeroLayout
          eyebrow="Medical Automated — AI Front Office Platform"
          title={<>The Medical Front Office That <span className="text-gradient">Never Lets A Referral Go Cold.</span></>}
          description="Eight AI Employees built for how a practice actually runs — confirming eligibility, closing referral loops, and following up before patients fall through the cracks. Connected directly into the EHR you already use."
          primaryAction={<Button href="/book-demo" size="lg">Book a Pilot</Button>}
          secondaryAction={<Button href="/contact" variant="ghost">Talk to Sales →</Button>}
          visual={<AgentOrbitMap agents={allAgents.map((a) => ({ name: a.name, emoji: a.emoji, colorHex: a.colorHex }))} hubLabel="Medical" />}
        />

        <StickyProductNav sections={navSections} />

        <ContentSection id="why">
          <RevealContainer className="mb-10">
            <SectionHeader
              eyebrow="Why This Exists"
              title="A medical front office runs on referrals, insurance, and follow-up — not just calls."
              description="That rhythm is genuinely different from dental operations, which is why the same 8-employee platform is configured differently here, not relabeled. Expand any card for detail."
            />
          </RevealContainer>
          <StaggerGroup className="flex flex-wrap justify-center gap-3">
            {capabilities.map((c) => (
              <StaggerItem key={c.title} className="w-full sm:w-[calc(50%-6px)] lg:w-[calc(33.333%-8px)]">
                <ExpandableInfoPanel title={c.title}>{c.body}</ExpandableInfoPanel>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </ContentSection>

        <ContentSection id="agents">
          <RevealContainer className="mb-10">
            <SectionHeader eyebrow="Meet the AI Workforce" title="Eight employees, each owning one responsibility." />
          </RevealContainer>
          <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {agents.map((a) => {
              const Icon = a.icon;
              return (
                <StaggerItem key={a.name}>
                  <Card accentColor="#A855F7" className="h-full">
                    <CardBody>
                      <Icon className="h-5 w-5 text-blue" />
                      <div className="font-mono-label mt-3 text-xs text-slate">{a.role}</div>
                      <h3 className="font-display mt-1 font-bold">{a.name}</h3>
                      <p className="mt-2 text-sm text-slate">{a.detail}</p>
                    </CardBody>
                  </Card>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </ContentSection>

        <ContentSection id="orchestration">
          <RevealContainer className="mb-10">
            <SectionHeader eyebrow="Front Office Orchestration" title="One coordinator, seven specialists." description="Trisha maintains a real-time view across every other employee — what's stalled, what's working, and what needs a human." />
          </RevealContainer>
          <ArchitectureCanvasWrapper title="Workforce Coordination">
            <PlatformRelationshipLayout
              center={{ label: 'Trisha — Practice Manager' }}
              related={agents.filter((a) => a.name !== 'Trisha').map((a) => ({ label: a.name, description: a.role }))}
            />
          </ArchitectureCanvasWrapper>
        </ContentSection>

        <ContentSection id="how-it-works">
          <RevealContainer className="mb-10">
            <SectionHeader eyebrow="Operational Workflows" title="Four workflows, always running." />
          </RevealContainer>
          <Tabs defaultValue="appointment">
            <TabsList>
              <TabsTrigger value="appointment">Appointment</TabsTrigger>
              <TabsTrigger value="referral">Referral &amp; Documentation</TabsTrigger>
              <TabsTrigger value="insurance">Insurance &amp; Prior Auth</TabsTrigger>
              <TabsTrigger value="followup">Follow-Up</TabsTrigger>
            </TabsList>
            <TabsContent value="appointment"><WorkflowExplorer stages={workflows.appointment} /></TabsContent>
            <TabsContent value="referral"><WorkflowExplorer stages={workflows.referral} /></TabsContent>
            <TabsContent value="insurance"><WorkflowExplorer stages={workflows.insurance} /></TabsContent>
            <TabsContent value="followup"><WorkflowExplorer stages={workflows.followup} /></TabsContent>
          </Tabs>
        </ContentSection>

        <ContentSection id="matrix">
          <RevealContainer className="mb-10">
            <SectionHeader eyebrow="AI Employee Responsibility Matrix" title="What the workforce owns — and what it never touches." />
          </RevealContainer>
          <CapabilityMatrix rows={responsibilityMatrix} />
        </ContentSection>

        <ContentSection id="before-after">
          <RevealContainer className="mb-10">
            <SectionHeader eyebrow="Before / After" title="The same practice, before and after deployment." />
          </RevealContainer>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-token border border-line bg-panel p-6">
              <div className="font-mono-label mb-3 text-xs text-slate">Before</div>
              <ul className="space-y-2.5 text-sm text-slate">
                <li>Calls during peak hours go unanswered</li>
                <li>Referrals sit unprocessed</li>
                <li>Coverage issues surface at check-in</li>
                <li>Patients fall through after a visit</li>
              </ul>
            </div>
            <HighlightPanel>
              <div className="font-mono-label mb-3 text-xs text-blue">After</div>
              <ul className="space-y-2.5 text-sm text-ink">
                <li>Every call answered, at any hour</li>
                <li>Referrals are processed and coordinated directly</li>
                <li>Eligibility is verified before the visit</li>
                <li>Follow-up happens automatically, on schedule</li>
              </ul>
            </HighlightPanel>
          </div>
        </ContentSection>

        <ContentSection id="integrations">
          <RevealContainer className="mb-10">
            <SectionHeader
              eyebrow="Connector Ecosystem"
              title="Connects directly into the EHR you already run."
              description="Medical Automated does not replace your EHR — it reads and writes into it directly."
            />
          </RevealContainer>
          {(() => {
            const mappedCategories = connectorCategories
              .filter((c) => c.category === 'Medical & Veterinary EHR')
              .map((c) => ({
                category: c.category,
                connectors: c.connectors.map((conn) => ({
                  name: conn.name,
                  status: (conn.status === 'Live' ? 'live' : conn.status === 'In Progress' ? 'in-progress' : 'coming-soon') as 'live' | 'in-progress' | 'coming-soon',
                  description: `Scheduling, records, referrals, and eligibility data sync with ${conn.name}.`,
                  actions: ['Verify insurance eligibility', 'Book, reschedule, or cancel appointments', 'Update patient records'],
                  domain: conn.domain,
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
        </ContentSection>

        <ContentSection id="admin">
          <RevealContainer className="mb-10">
            <SectionHeader eyebrow="Practice Administration" title="Oversight for the whole workforce, in one place." />
          </RevealContainer>
          <DashboardShell
            sidebar={
              <nav className="flex flex-col gap-1 text-sm">
                {['Workforce Configuration', 'Referral Rules', 'Connector Management', 'Escalation Rules', 'Reporting'].map((item) => (
                  <span key={item} className="rounded-lg px-3 py-2 text-slate hover:bg-panel2 hover:text-ink">
                    {item}
                  </span>
                ))}
              </nav>
            }
          >
            <DashboardHeader title="Practice Overview" status={{ state: 'operational', label: 'Workforce Operational' }} />
            <MetricRow metrics={[
              { label: 'Active Agents', value: '8' },
              { label: 'Open Referrals', value: '—' },
              { label: 'Recall Queue', value: '—' },
              { label: 'Escalations Today', value: '—' },
            ]} />
            <Panel title="Recent Activity">
              <ActivityFeed items={[]} />
            </Panel>
            <SimulatedAreaChart
              title="Illustrative Referral Processing Pattern"
              unit=" referrals"
              color="#06B6D4"
              data={[
                { label: 'Mon', value: 8 },
                { label: 'Tue', value: 13 },
                { label: 'Wed', value: 11 },
                { label: 'Thu', value: 16 },
                { label: 'Fri', value: 14 },
                { label: 'Sat', value: 3 },
                { label: 'Sun', value: 2 },
              ]}
            />
          </DashboardShell>
        </ContentSection>

        <DeploymentSection eyebrow="Deployment Experience" title="From first conversation to a live workforce." id="deployment">
          <StepFlow
            steps={[
              { title: 'Discovery', timeframe: 'Hour 1', description: 'We learn how your practice actually operates today.' },
              { title: 'Configuration', timeframe: 'Hours 1–3', description: 'Each employee is configured against your real referral, insurance, and follow-up patterns.' },
              { title: 'Connector Setup', timeframe: 'Day 1', description: 'Your EHR is connected and verified.' },
              { title: 'Testing', timeframe: 'Day 1–2', description: 'Verified against real scenarios before any agent goes live.' },
              { title: 'Go Live', timeframe: 'Within 48 hrs', description: 'The workforce begins handling real calls and coordination.' },
              { title: 'Support', timeframe: 'Ongoing', description: 'Ongoing refinement based on real practice usage.' },
            ]}
          />
        </DeploymentSection>

        <SecuritySection
          eyebrow="Security & Governance"
          title="What's currently supported — stated plainly."
          description="Compliance documentation is available on request."
          id="security"
        >
          <SecurityStackDiagram
            layers={[
              { name: 'Access Control', description: 'Every employee action is scoped and authenticated.' },
              { name: 'Auditability', description: 'Call, referral, and follow-up activity are logged.' },
              { name: 'Monitoring', description: 'Escalations and system health are continuously observed.' },
            ]}
          />
          <div className="mt-6">
            <ComplianceGrid items={['HIPAA', 'SOC 2 Type II', 'PIPEDA']} />
          </div>
        </SecuritySection>

        <ContentSection id="faq">
          <RevealContainer className="mb-10">
            <SectionHeader eyebrow="Frequently Asked Questions" title="What practice owners actually ask." />
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
              <p className="mt-2 text-sm text-slate">Talk to someone who can speak to your specific EHR and patient volume.</p>
              <Button href="/book-demo" className="mt-4 w-full">Book a Pilot</Button>
              <div className="mt-6 flex flex-wrap gap-2">
                {['HIPAA', 'SOC 2 Type II', 'PIPEDA'].map((badge) => (
                  <span key={badge} className="rounded-full bg-panel2 px-2.5 py-1 text-[11px] font-medium text-slate">{badge}</span>
                ))}
              </div>
            </div>
          </div>
        </ContentSection>

        <CTASection
          title="See your AI medical workforce in action."
          description="A demo built around how your practice actually operates."
          actionLabel="Book a Pilot"
          actionHref="/book-demo"
        />
      </main>
      <Footer />
    </>
  );
}
