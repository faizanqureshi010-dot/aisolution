import { Timeline, WorkflowCard } from '@/components/ui/Workflow';
import { ComparisonTable } from '@/components/ui/Table';
import { Card, CardBody } from '@/components/ui/Card';
import { ShieldCheck } from 'lucide-react';

/* ================= SECURITY SYSTEM ================= */

/** ComplianceGrid — grid of verified certifications only; data passed in, nothing invented here */
export function ComplianceGrid({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-2 text-sm text-ink">
          <ShieldCheck className="h-4 w-4 text-blue" />
          {item}
        </div>
      ))}
    </div>
  );
}

/** SecurityTimeline — reuses Timeline; framing is security-specific via the items passed in */
export function SecurityTimeline(props: React.ComponentProps<typeof Timeline>) {
  return <Timeline {...props} />;
}

/** SecurityLayers — stacked layer cards (e.g. network, application, data) */
export function SecurityLayers({ layers }: { layers: { name: string; description: string }[] }) {
  return (
    <div className="space-y-2">
      {layers.map((layer, i) => (
        <Card key={layer.name} accentColor="#A855F7">
          <CardBody className="flex items-start gap-4">
            <span className="font-mono-label text-xs text-purple">L{i + 1}</span>
            <div>
              <h4 className="font-display font-semibold">{layer.name}</h4>
              <p className="mt-1 text-sm text-slate">{layer.description}</p>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

/** EncryptionFlowLayout / AccessControlLayout / MonitoringLayout — all the same "step list" shape */
export function EncryptionFlowLayout({ steps }: { steps: { title: string; description: string }[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((s, i) => (
        <WorkflowCard key={s.title} step={i + 1} title={s.title} description={s.description} />
      ))}
    </div>
  );
}
export const AccessControlLayout = EncryptionFlowLayout;
export const MonitoringLayout = EncryptionFlowLayout;

/* ================= DEPLOYMENT SYSTEM ================= */

/** DeploymentSteps / ImplementationTimeline / OnboardingFlow / MigrationFlow / TrainingFlow / SupportFlow
 * — all the same underlying Timeline shape; distinct names exist for call-site clarity only,
 * per "no duplicated layouts" they all resolve to one implementation. */
export function DeploymentSteps(props: React.ComponentProps<typeof Timeline>) {
  return <Timeline {...props} />;
}
export const ImplementationTimeline = DeploymentSteps;
export const OnboardingFlow = DeploymentSteps;
export const MigrationFlow = DeploymentSteps;
export const TrainingFlow = DeploymentSteps;
export const SupportFlow = DeploymentSteps;

/* ================= CASE STUDY SYSTEM ================= */

/** CaseStudyLayout — Challenge / Solution / Process / Outcome / Metrics / Quote slots, data-driven, no testimonials fabricated */
export function CaseStudyLayout({
  challenge,
  solution,
  process,
  outcome,
  metrics,
  quote,
}: {
  challenge: React.ReactNode;
  solution: React.ReactNode;
  process?: React.ReactNode;
  outcome?: React.ReactNode;
  metrics?: { value: string; label: string }[];
  quote?: React.ReactNode;
}) {
  return (
    <div className="space-y-10">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <div className="font-mono-label mb-2 text-xs text-slate">Challenge</div>
          <div className="text-sm text-ink">{challenge}</div>
        </div>
        <div>
          <div className="font-mono-label mb-2 text-xs text-blue">Solution</div>
          <div className="text-sm text-ink">{solution}</div>
        </div>
      </div>
      {process && (
        <div>
          <div className="font-mono-label mb-3 text-xs text-slate">Process</div>
          {process}
        </div>
      )}
      {outcome && (
        <div>
          <div className="font-mono-label mb-2 text-xs text-positive">Outcome</div>
          <div className="text-sm text-ink">{outcome}</div>
        </div>
      )}
      {metrics && metrics.length > 0 && (
        <div className="flex flex-wrap gap-10 border-t border-line pt-6">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="font-display text-2xl font-bold text-ink">{m.value}</div>
              <div className="font-mono-label mt-1 text-xs text-slate">{m.label}</div>
            </div>
          ))}
        </div>
      )}
      {quote && <div className="border-l-2 border-blue pl-6">{quote}</div>}
    </div>
  );
}

export { ComparisonTable };
