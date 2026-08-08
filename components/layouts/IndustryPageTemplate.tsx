import { Phone } from 'lucide-react';
import { HeroLayout, ContentSection, CTASection } from '@/components/layouts/Sections';
import { RevealContainer, StaggerGroup, StaggerItem } from '@/components/layouts/RevealContainer';
import { SectionHeader, Breadcrumb } from '@/components/ui/Layout';
import { WorkflowExplorer } from '@/components/layouts/ProductStory';
import { ConnectorCategoryLayout, ConnectorItem } from '@/components/layouts/ConnectorSystem';
import { SecuritySection, DeploymentSection, ArchitectureCanvasWrapper } from '@/components/layouts/SectionShells';
import { ComplianceGrid } from '@/components/layouts/EnterpriseSystems';
import { StepFlow } from '@/components/layouts/VisualDiagrams';
import { StickyProductNav, HighlightPanel, ExpandableInfoPanel } from '@/components/layouts/ProductExperience';
import { DashboardShell, DashboardHeader, Panel, ActivityFeed, MetricRow } from '@/components/layouts/Dashboard';
import { AccordionItem } from '@/components/ui/Accordion';
import { FAQSchema, BreadcrumbSchema } from '@/components/StructuredData';
import Button from '@/components/ui/Button';
import Footer from '@/components/Footer';
import { connectorCategories } from '@/lib/connectors';

export interface IndustryPageData {
  name: string;
  heroDescription: string;
  whyTitle: string;
  whyDescription: string;
  challenges: { title: string; body: string }[];
  journeyStages: { icon: React.ReactNode; label: string; detail: string }[];
  connectorCategoryName: string | null;
  connectorNote: string;
  before: string[];
  after: string[];
  deploymentSteps: { title: string; description: string }[];
  faqs: { q: string; a: string }[];
}

function mapStatus(status: 'Live' | 'In Progress' | 'Coming Soon'): ConnectorItem['status'] {
  return status === 'Live' ? 'live' : status === 'In Progress' ? 'in-progress' : 'coming-soon';
}

const navSections = [
  { id: 'why', label: 'Why This Exists' },
  { id: 'workflow', label: 'Workflow' },
  { id: 'before-after', label: 'Before / After' },
  { id: 'connectors', label: 'Connectors' },
  { id: 'admin', label: 'Administration' },
  { id: 'deployment', label: 'Deployment' },
  { id: 'security', label: 'Security' },
  { id: 'faq', label: 'FAQ' },
];

export default function IndustryPageTemplate({ data }: { data: IndustryPageData }) {
  const category = data.connectorCategoryName
    ? connectorCategories.find((c) => c.category === data.connectorCategoryName)
    : null;

  return (
    <>
      <Breadcrumb items={[{ label: 'Industries', href: '/industries' }, { label: data.name }]} />
      <BreadcrumbSchema items={[{ label: 'Home', href: '/' }, { label: 'Industries', href: '/industries' }, { label: data.name }]} />
      <FAQSchema faqs={data.faqs} />
      <main id="main">
        <HeroLayout
          dark
          eyebrow={`${data.name} — AI Solution Company`}
          title={<>Booking and call handling built for <span className="text-gradient">{data.name.toLowerCase()}</span>.</>}
          description={data.heroDescription}
          primaryAction={<Button href="/book-demo" size="lg">Book a Pilot</Button>}
          secondaryAction={<Button href="/products/aisc-booking-agent" variant="ghost" className="text-white/70 hover:text-white">See the Booking Agent →</Button>}
          visual={
            <div className="flex w-full max-w-sm items-center gap-3 rounded-2xl border border-line bg-panel2/80 p-5">
              <Phone className="h-5 w-5 flex-shrink-0 text-blue" />
              <p className="text-sm text-slate">Every call answered, every booking synced — built around {data.name.toLowerCase()} specifically.</p>
            </div>
          }
        />

        <StickyProductNav sections={navSections} />

        <ContentSection>
          <div id="why" className="scroll-mt-28">
            <RevealContainer className="mb-10">
              <SectionHeader eyebrow="Why This Exists" title={data.whyTitle} description={`${data.whyDescription} Expand any card for detail.`} />
            </RevealContainer>
            <StaggerGroup className="flex flex-wrap justify-center gap-3">
              {data.challenges.map((c) => (
                <StaggerItem key={c.title} className="w-full sm:w-[calc(50%-6px)] lg:w-[calc(33.333%-8px)]">
                  <ExpandableInfoPanel title={c.title}>{c.body}</ExpandableInfoPanel>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </ContentSection>

        <ContentSection>
          <div id="workflow" className="scroll-mt-28">
            <RevealContainer className="mb-10">
              <SectionHeader eyebrow="Operational Workflow" title="From first call to the next visit." />
            </RevealContainer>
            <ArchitectureCanvasWrapper title={`${data.name} Call Workflow`}>
              <WorkflowExplorer stages={data.journeyStages} />
            </ArchitectureCanvasWrapper>
          </div>
        </ContentSection>

        <ContentSection>
          <div id="before-after" className="scroll-mt-28">
            <RevealContainer className="mb-10">
              <SectionHeader eyebrow="Before / After" title="The same business, before and after deployment." />
            </RevealContainer>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-token border border-line bg-panel p-6">
                <div className="font-mono-label mb-3 text-xs text-slate">Before</div>
                <ul className="space-y-2.5 text-sm text-slate">
                  {data.before.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
              <HighlightPanel>
                <div className="font-mono-label mb-3 text-xs text-blue">After</div>
                <ul className="space-y-2.5 text-sm text-ink">
                  {data.after.map((a) => <li key={a}>{a}</li>)}
                </ul>
              </HighlightPanel>
            </div>
          </div>
        </ContentSection>

        <ContentSection>
          <div id="connectors" className="scroll-mt-28">
            <RevealContainer className="mb-10">
              <SectionHeader eyebrow="Connector Ecosystem" title="Works with the systems you already use." description={data.connectorNote} />
            </RevealContainer>
            {category ? (
              <ConnectorCategoryLayout
                categories={[
                  {
                    category: category.category,
                    connectors: category.connectors.map((conn) => ({
                      name: conn.name,
                      status: mapStatus(conn.status),
                      description: `Booking and scheduling data sync with ${conn.name}.`,
                      actions: ['Check availability', 'Book, reschedule, or cancel'],
                      domain: conn.domain,
                    })),
                  },
                ]}
              />
            ) : (
              <p className="text-sm text-slate">Specific connectors for this industry are being confirmed — talk to us about your systems directly.</p>
            )}
          </div>
        </ContentSection>

        <ContentSection>
          <div id="admin" className="scroll-mt-28">
            <RevealContainer className="mb-10">
              <SectionHeader eyebrow="Administration" title="Oversight at a glance." />
            </RevealContainer>
            <DashboardShell>
              <DashboardHeader title="Operations Overview" status={{ state: 'operational', label: 'System Operational' }} />
              <MetricRow metrics={[
                { label: 'Calls Handled', value: '—' },
                { label: 'Bookings Synced', value: '—' },
                { label: 'Escalations Today', value: '—' },
                { label: 'Connector Health', value: 'Normal' },
              ]} />
              <Panel title="Recent Activity">
                <ActivityFeed items={[]} />
              </Panel>
            </DashboardShell>
          </div>
        </ContentSection>

        <div id="deployment" className="scroll-mt-28">
          <DeploymentSection eyebrow="Deployment" title="From first conversation to a live employee.">
            <StepFlow steps={data.deploymentSteps} />
          </DeploymentSection>
        </div>

        <div id="security" className="scroll-mt-28">
          <SecuritySection eyebrow="Security & Compliance" title="What's currently supported — stated plainly." description="Compliance documentation is available on request.">
            <ComplianceGrid items={['HIPAA', 'SOC 2 Type II', 'PIPEDA']} />
          </SecuritySection>
        </div>

        <ContentSection>
          <div id="faq" className="scroll-mt-28">
            <RevealContainer className="mb-10">
              <SectionHeader eyebrow="Frequently Asked Questions" title="What business owners actually ask." />
            </RevealContainer>
            <div className="max-w-[720px]">
              {data.faqs.map((f) => (
                <AccordionItem key={f.q} title={f.q}>
                  {f.a}
                </AccordionItem>
              ))}
            </div>
          </div>
        </ContentSection>

        <CTASection
          title="Never miss another booking opportunity."
          description="See how this works for your business specifically."
          actionLabel="Book a Pilot"
          actionHref="/book-demo"
        />
      </main>
      <Footer />
    </>
  );
}
