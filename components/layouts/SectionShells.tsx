import { ContentSection } from './Sections';
import { SectionHeader } from '@/components/ui/Layout';
import { RevealContainer } from './RevealContainer';
import { cn } from '@/lib/cn';

interface SectionShellProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  background?: 'default' | 'panel' | 'panel2' | 'tint';
  /** Anchor id — used by in-page nav-menu links */
  id?: string;
  children: React.ReactNode;
}

function SectionShell({ eyebrow, title, description, background = 'default', id, children }: SectionShellProps) {
  return (
    <ContentSection background={background} id={id}>
      {title && (
        <RevealContainer className="mb-10">
          <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        </RevealContainer>
      )}
      {children}
    </ContentSection>
  );
}

export function DashboardSection(props: SectionShellProps) {
  return <SectionShell {...props} background={props.background ?? 'panel'} />;
}
export function ComparisonSection(props: SectionShellProps) {
  return <SectionShell {...props} />;
}
export function WorkflowSection(props: SectionShellProps) {
  return <SectionShell {...props} background={props.background ?? 'panel'} />;
}
export function ConnectorSection(props: SectionShellProps) {
  return <SectionShell {...props} />;
}
export function DeploymentSection(props: SectionShellProps) {
  return <SectionShell {...props} />;
}
export function SecuritySection(props: SectionShellProps) {
  return <SectionShell {...props} background={props.background ?? 'panel2'} />;
}
export function CaseStudySection(props: SectionShellProps) {
  return <SectionShell {...props} />;
}
export function LandingSection(props: SectionShellProps) {
  return <SectionShell {...props} />;
}

/**
 * ArchitectureCanvasWrapper — consistent frame for any canvas/SVG technical
 * visualization (network diagrams, architecture maps). The canvas/SVG content
 * itself is passed as children; this only provides the consistent chrome.
 */
export function ArchitectureCanvasWrapper({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('rounded-token border border-line bg-panel2 p-6', className)}>
      <div className="font-mono-label mb-4 text-xs text-slate">{title}</div>
      {children}
    </div>
  );
}

/** AIDecisionFlowWrapper — same chrome, semantic naming for decision-flow diagrams specifically */
export const AIDecisionFlowWrapper = ArchitectureCanvasWrapper;

/** PlatformRelationshipLayout — for showing how products/entities relate (e.g. parent company + products) */
export function PlatformRelationshipLayout({
  center,
  related,
}: {
  center: { label: string };
  related: { label: string; description?: string }[];
}) {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="rounded-full bg-brand-gradient px-6 py-3 font-display font-bold text-paper">
        {center.label}
      </div>
      <div className="flex w-full flex-wrap justify-center gap-3">
        {related.map((r) => (
          <div
            key={r.label}
            className="w-full rounded-token border-2 border-purple/50 bg-panel p-4 text-center shadow-[0_8px_24px_-8px_rgba(168,85,247,0.35)] sm:w-[calc(50%-6px)] lg:w-[calc(33.333%-8px)]"
          >
            <div className="font-display font-semibold">{r.label}</div>
            {r.description && <p className="mt-1 text-xs text-slate">{r.description}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
