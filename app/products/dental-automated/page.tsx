import type { Metadata } from 'next';
import { Phone, CalendarClock, HandCoins, ClipboardList, HeartHandshake, Star, FileScan, Users2, PhoneIncoming, CalendarCheck2, Bell, ShieldQuestion, CreditCard, MessageCircleQuestion } from 'lucide-react';
import { HeroLayout, ContentSection, CTASection } from '@/components/layouts/Sections';
import { RevealContainer, StaggerGroup, StaggerItem } from '@/components/layouts/RevealContainer';
import { SectionHeader, Breadcrumb } from '@/components/ui/Layout';
import { WorkflowExplorer } from '@/components/layouts/ProductStory';
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
  title: 'Dental Automated',
  description:
    'Dental Automated is a coordinated AI workforce for the dental front office — connecting directly into the PMS your practice already runs on.',
};

const navSections = [
  { id: 'why', label: 'Why It Exists' },
  { id: 'agents', label: 'AI Workforce' },
  { id: 'orchestration', label: 'Orchestration' },
  { id: 'how-it-works', label: 'Workflows' },
  { id: 'before-after', label: 'Before / After' },
  { id: 'integrations', label: 'Connectors' },
  { id: 'admin', label: 'Administration' },
  { id: 'deployment', label: 'Deployment' },
  { id: 'security', label: 'Security' },
  { id: 'faq', label: 'FAQ' },
];

const agents = [
  { icon: Phone, name: 'Amy', role: 'Receptionist', detail: 'Answers every inbound call and finishes bookings that stall online.' },
  { icon: CalendarClock, name: 'Leena', role: 'Schedule Optimizer', detail: 'Fills same-day cancellations from the waitlist before the slot goes empty.' },
  { icon: HandCoins, name: 'Kim', role: 'Case Acceptance', detail: 'Follows up on unscheduled treatment plans and answers cost questions.' },
  { icon: ClipboardList, name: 'Morgan', role: 'Patient Intake', detail: 'Collects health history, allergies, and consent before the visit.' },
  { icon: HeartHandshake, name: 'Stephanie', role: 'Hygiene Recall', detail: 'Calls patients overdue for recall and gets them rebooked.' },
  { icon: Star, name: 'Elise', role: 'Patient Experience', detail: 'Follows up after good visits to turn them into reviews.' },
  { icon: FileScan, name: 'Joseph', role: 'Fax Management', detail: 'Reads incoming referral faxes and books the specialist visit.' },
  { icon: Users2, name: 'Trisha', role: 'Practice Manager', detail: 'Coordinates all seven other AI Employees and knows what needs a human.' },
];

const workflows = {
  appointment: [
    { icon: <PhoneIncoming className="h-4 w-4" />, label: 'Call Comes In', detail: 'Amy answers immediately, day or night.' },
    { icon: <CalendarClock className="h-4 w-4" />, label: 'Availability Checked', detail: 'Leena checks live schedule availability against the request.' },
    { icon: <CalendarCheck2 className="h-4 w-4" />, label: 'Booked', detail: 'The appointment is confirmed directly in your PMS.' },
    { icon: <Bell className="h-4 w-4" />, label: 'Confirmed', detail: 'The patient receives confirmation, and staff can see it immediately.' },
  ],
  recall: [
    { icon: <ClipboardList className="h-4 w-4" />, label: 'Recall List Reviewed', detail: 'Stephanie identifies patients overdue for their next hygiene visit.' },
    { icon: <PhoneIncoming className="h-4 w-4" />, label: 'Patient Contacted', detail: 'A call goes out before the patient falls further off the list.' },
    { icon: <CalendarCheck2 className="h-4 w-4" />, label: 'Rebooked', detail: 'The visit is scheduled on the spot.' },
    { icon: <Bell className="h-4 w-4" />, label: 'Confirmed', detail: 'Confirmation goes out, and the recall record is updated.' },
  ],
  acceptance: [
    { icon: <ClipboardList className="h-4 w-4" />, label: 'Plan Presented', detail: 'A treatment plan was proposed during a visit but left unscheduled.' },
    { icon: <MessageCircleQuestion className="h-4 w-4" />, label: 'Follow-Up Call', detail: 'Kim reaches out before the patient moves on with their week.' },
    { icon: <CreditCard className="h-4 w-4" />, label: 'Cost Discussed', detail: 'Cost questions are answered directly.' },
    { icon: <CalendarCheck2 className="h-4 w-4" />, label: 'Scheduled', detail: 'The treatment is booked once the patient is ready.' },
  ],
  insurance: [
    { icon: <ClipboardList className="h-4 w-4" />, label: 'Intake Collected', detail: 'Morgan collects insurance and history details ahead of the visit.' },
    { icon: <ShieldQuestion className="h-4 w-4" />, label: 'Cost Questions', detail: 'Coverage and cost questions are addressed directly with the patient.' },
    { icon: <FileScan className="h-4 w-4" />, label: 'Documentation', detail: 'Relevant documentation is organized ahead of the appointment.' },
    { icon: <CalendarCheck2 className="h-4 w-4" />, label: 'Visit Ready', detail: 'The patient arrives with everything already on file.' },
  ],
};

const capabilities = [
  { title: 'Call Overload', body: 'Calls, scheduling, recall, and case follow-up all compete for the same limited front-desk attention.' },
  { title: 'Recall Slippage', body: 'Patients quietly fall off the hygiene recall list without anyone catching it in time.' },
  { title: 'Unscheduled Treatment', body: 'Proposed treatment plans go unscheduled once the patient leaves the chair.' },
  { title: 'After-Hours Calls', body: 'A parent booking at 9pm gets voicemail instead of a confirmed appointment.' },
];

const faqs = [
  { q: 'Does this replace our front desk?', a: 'No. It takes over the repetitive, always-on work so your team can focus on the patients in front of them.' },
  { q: 'How are emergencies handled?', a: 'Trisha recognizes when a situation needs immediate human attention and hands it off.' },
  { q: 'Can staff intervene at any time?', a: 'Yes, on any conversation or task, at any point.' },
  { q: 'Does it work with our practice management system?', a: "It's built to connect directly into the PMS your practice already uses — see the Connector Ecosystem below for your specific system." },
  { q: 'Is every AI Employee always active?', a: 'Yes — each one works continuously on its responsibility, coordinated by Trisha.' },
];

export default function DentalAutomatedPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Solutions', href: '/industries' }, { label: 'Dental Automated' }]} />
      <BreadcrumbSchema items={[{ label: 'Home', href: '/' }, { label: 'Solutions', href: '/industries' }, { label: 'Dental Automated', href: '/products/dental-automated' }]} />
      <SoftwareApplicationSchema name="Dental Automated" description="A coordinated AI workforce for the dental front office, connecting directly into the PMS your practice already runs on." />
      <FAQSchema faqs={faqs} />
      <main id="main">
        <HeroLayout
          eyebrow="Dental Automated — AI Front Office Platform"
          title={<>The Dental Front Office That <span className="text-gradient">Never Drops A Recall, A Call, Or A Case.</span></>}
          description="Eight AI Employees built for how a practice actually runs — answering calls, filling chairs, verifying benefits, and chasing the treatment plans your team never had time for. Connected directly into the PMS you already use."
          primaryAction={<Button href="/book-demo" size="lg">Book a Pilot</Button>}
          secondaryAction={<Button href="/contact" variant="ghost">Talk to Sales →</Button>}
          visual={<AgentOrbitMap agents={allAgents.map((a) => ({ name: a.name, emoji: a.emoji, colorHex: a.colorHex }))} hubLabel="Dental" />}
        />

        <StickyProductNav sections={navSections} />

        <ContentSection>
          <div id="why" className="scroll-mt-28">
            <RevealContainer className="mb-10">
              <SectionHeader
                eyebrow="Why This Exists"
                title="A dental front desk isn't one job. It's five, happening at once."
                description="Calls, scheduling, recall, case follow-up, and intake all compete for the same limited attention. Expand any card for detail."
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

        <ContentSection>
          <div id="agents" className="scroll-mt-28">
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
          </div>
        </ContentSection>

        <ContentSection>
          <div id="orchestration" className="scroll-mt-28">
            <RevealContainer className="mb-10">
              <SectionHeader eyebrow="Front Desk Orchestration" title="One coordinator, seven specialists." description="Trisha maintains a real-time view across every other employee — what's stalled, what's working, and what needs a human." />
            </RevealContainer>
            <ArchitectureCanvasWrapper title="Workforce Coordination">
              <PlatformRelationshipLayout
                center={{ label: 'Trisha — Practice Manager' }}
                related={agents.filter((a) => a.name !== 'Trisha').map((a) => ({ label: a.name, description: a.role }))}
              />
            </ArchitectureCanvasWrapper>
          </div>
        </ContentSection>

        <ContentSection>
          <div id="how-it-works" className="scroll-mt-28">
            <RevealContainer className="mb-10">
              <SectionHeader eyebrow="Operational Workflows" title="Four workflows, always running." />
            </RevealContainer>
            <Tabs defaultValue="appointment">
              <TabsList>
                <TabsTrigger value="appointment">Appointment</TabsTrigger>
                <TabsTrigger value="recall">Recall</TabsTrigger>
                <TabsTrigger value="acceptance">Treatment Acceptance</TabsTrigger>
                <TabsTrigger value="insurance">Insurance &amp; Cost</TabsTrigger>
              </TabsList>
              <TabsContent value="appointment"><WorkflowExplorer stages={workflows.appointment} /></TabsContent>
              <TabsContent value="recall"><WorkflowExplorer stages={workflows.recall} /></TabsContent>
              <TabsContent value="acceptance"><WorkflowExplorer stages={workflows.acceptance} /></TabsContent>
              <TabsContent value="insurance"><WorkflowExplorer stages={workflows.insurance} /></TabsContent>
            </Tabs>
          </div>
        </ContentSection>

        <ContentSection>
          <div id="before-after" className="scroll-mt-28">
            <RevealContainer className="mb-10">
              <SectionHeader eyebrow="Before / After" title="The same practice, before and after deployment." />
            </RevealContainer>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-token border border-line bg-panel p-6">
                <div className="font-mono-label mb-3 text-xs text-slate">Before</div>
                <ul className="space-y-2.5 text-sm text-slate">
                  <li>Calls during peak hours go unanswered</li>
                  <li>Patients quietly fall off the recall list</li>
                  <li>Treatment plans go unscheduled after the visit</li>
                  <li>After-hours booking requests reach voicemail</li>
                </ul>
              </div>
              <HighlightPanel>
                <div className="font-mono-label mb-3 text-xs text-blue">After</div>
                <ul className="space-y-2.5 text-sm text-ink">
                  <li>Every call answered, at any hour</li>
                  <li>Recall follow-up happens automatically, on schedule</li>
                  <li>Case acceptance follow-up happens before patients move on</li>
                  <li>Bookings happen live, synced to your real PMS</li>
                </ul>
              </HighlightPanel>
            </div>
          </div>
        </ContentSection>

        <ContentSection>
          <div id="integrations" className="scroll-mt-28">
            <RevealContainer className="mb-10">
              <SectionHeader
                eyebrow="Connector Ecosystem"
                title="Connects directly into the PMS you already run."
                description="Dental Automated does not replace your practice management system — it reads and writes into it directly."
              />
            </RevealContainer>
            {(() => {
              const mappedCategories = connectorCategories
                .filter((c) => c.category === 'Dental PMS')
                .map((c) => ({
                  category: c.category,
                  connectors: c.connectors.map((conn) => ({
                    name: conn.name,
                    domain: conn.domain,
                    status: (conn.status === 'Live' ? 'live' : conn.status === 'In Progress' ? 'in-progress' : 'coming-soon') as 'live' | 'in-progress' | 'coming-soon',
                    description: `Scheduling, patient records, and recall data sync with ${conn.name}.`,
                    actions: ['Check provider availability', 'Book, reschedule, or cancel appointments', 'Update patient records'],
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

        <ContentSection>
          <div id="admin" className="scroll-mt-28">
            <RevealContainer className="mb-10">
              <SectionHeader eyebrow="Practice Administration" title="Oversight for the whole workforce, in one place." />
            </RevealContainer>
            <DashboardShell
              sidebar={
                <nav className="flex flex-col gap-1 text-sm">
                  {['Workforce Configuration', 'Recall Rules', 'Connector Management', 'Escalation Rules', 'Reporting'].map((item) => (
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
                { label: 'Recall Queue', value: '—' },
                { label: 'Open Case Follow-Ups', value: '—' },
                { label: 'Escalations Today', value: '—' },
              ]} />
              <Panel title="Recent Activity">
                <ActivityFeed items={[]} />
              </Panel>
              <SimulatedAreaChart
                title="Illustrative Recall Outreach Pattern"
                unit=" calls"
                color="#06B6D4"
                data={[
                  { label: 'Mon', value: 12 },
                  { label: 'Tue', value: 19 },
                  { label: 'Wed', value: 15 },
                  { label: 'Thu', value: 24 },
                  { label: 'Fri', value: 21 },
                  { label: 'Sat', value: 9 },
                  { label: 'Sun', value: 4 },
                ]}
              />
            </DashboardShell>
          </div>
        </ContentSection>

        <div id="deployment" className="scroll-mt-28">
          <DeploymentSection eyebrow="Deployment Experience" title="From first conversation to a live workforce.">
            <StepFlow
              steps={[
                { title: 'Discovery', timeframe: 'Hour 1', description: 'We learn how your practice actually runs today.' },
                { title: 'Configuration', timeframe: 'Hours 1–3', description: 'Each employee is configured against your real scheduling and recall rules.' },
                { title: 'Connector Setup', timeframe: 'Day 1', description: 'Your PMS is connected and verified.' },
                { title: 'Testing', timeframe: 'Day 1–2', description: 'Verified against real scenarios before any agent goes live.' },
                { title: 'Go Live', timeframe: 'Within 48 hrs', description: 'The workforce begins handling real calls and recall.' },
                { title: 'Support', timeframe: 'Ongoing', description: 'Ongoing refinement based on real practice usage.' },
              ]}
            />
          </DeploymentSection>
        </div>

        <div id="security" className="scroll-mt-28">
          <SecuritySection
            eyebrow="Security & Governance"
            title="What's currently supported — stated plainly."
            description="Compliance documentation is available on request."
          >
            <SecurityStackDiagram
              layers={[
                { name: 'Access Control', description: 'Every employee action is scoped and authenticated.' },
                { name: 'Auditability', description: 'Call, scheduling, and recall activity are logged.' },
                { name: 'Monitoring', description: 'Escalations and system health are continuously observed.' },
              ]}
            />
            <div className="mt-6">
              <ComplianceGrid items={['HIPAA', 'SOC 2 Type II', 'PIPEDA']} />
            </div>
          </SecuritySection>
        </div>

        <ContentSection>
          <div id="faq" className="scroll-mt-28">
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
                <p className="mt-2 text-sm text-slate">Talk to someone who can speak to your specific PMS and patient volume.</p>
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

        <CTASection
          title="See your AI workforce in action."
          description="A demo built around how your practice actually runs."
          actionLabel="Book a Pilot"
          actionHref="/book-demo"
        />
      </main>
      <Footer />
    </>
  );
}
