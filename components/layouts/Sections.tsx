import { cn } from '@/lib/cn';
import { SectionHeader, MetricBlock } from '@/components/ui/Layout';
import { RevealContainer } from './RevealContainer';
import Button from '@/components/ui/Button';

const bgVariants = {
  default: 'bg-paper',
  panel: 'bg-panel border-y border-line',
  panel2: 'bg-panel2 border-y border-line',
  // Soft brand-color wash — for sections that should carry more visual energy
  // than a flat white/gray panel, used selectively, not sitewide.
  tint: 'bg-gradient-to-br from-blue/[0.05] via-paper to-purple/[0.05] border-y border-line',
} as const;

interface SectionProps {
  children: React.ReactNode;
  background?: keyof typeof bgVariants;
  /** Tighter vertical rhythm for content-light sections (e.g. a single stat row or short intro). Default 'normal' fits most sections; use 'compact' to avoid padding overwhelming a section that doesn't have much in it. */
  density?: 'compact' | 'normal' | 'roomy';
  className?: string;
  /** Anchor id — used by in-page nav-menu links (e.g. the Solutions submenu's #agents / #how-it-works / #integrations / #security jumps) */
  id?: string;
}

const densityVariants = {
  compact: 'py-10',
  normal: 'py-16',
  roomy: 'py-24',
} as const;

/** Generic vertical-rhythm wrapper every section-level layout below uses */
export function ContentSection({ children, background = 'default', density = 'normal', className, id }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-24 px-8', densityVariants[density], bgVariants[background], className)}>
      <div className="mx-auto max-w-container">{children}</div>
    </section>
  );
}

/**
 * SplitSection — the 50/50, 60/40, 70/30 pattern requested, driven by one ratio prop
 * instead of three separate components.
 */
export function SplitSection({
  left,
  right,
  ratio = '50-50',
  reverse = false,
  background = 'default',
  className,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  ratio?: '50-50' | '60-40' | '70-30';
  reverse?: boolean;
  background?: keyof typeof bgVariants;
  className?: string;
}) {
  const gridCols = {
    '50-50': 'md:grid-cols-2',
    '60-40': 'md:grid-cols-[3fr_2fr]',
    '70-30': 'md:grid-cols-[7fr_3fr]',
  }[ratio];

  return (
    <ContentSection background={background} className={className}>
      <div className={cn('grid items-center gap-16', gridCols)}>
        <div className={reverse ? 'md:order-2' : ''}>{left}</div>
        <div className={reverse ? 'md:order-1' : ''}>{right}</div>
      </div>
    </ContentSection>
  );
}

/** HeroLayout — for product-demonstrating heroes; content + visual side by side, never text-only */
export function HeroLayout({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  visual,
  dark = false,
  splitHeading = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  primaryAction?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  visual?: React.ReactNode;
  dark?: boolean;
  /** When true: eyebrow+title render in a left column, description+actions in a
   *  right column (instead of stacked), with `visual` — if provided — in its
   *  own full-width row underneath both. Built for the homepage hero specifically. */
  splitHeading?: boolean;
}) {
  return (
    <div className="px-6 pt-6 md:px-10">
      <section
        className={cn(
          'relative overflow-hidden rounded-[32px] px-8 pt-10 pb-14',
          dark ? 'bg-navy' : 'hero-light-glow border border-line shadow-[0_20px_60px_-20px_rgba(15,17,21,0.15)]'
        )}
      >
        {!dark && (
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="animate-float-slow absolute -top-16 -left-16 h-72 w-72 rounded-full bg-blue/5 blur-3xl" />
            <div className="animate-float-slower absolute top-24 -right-20 h-80 w-80 rounded-full bg-purple/5 blur-3xl" />
            <div className="grid-bg absolute inset-0" />
          </div>
        )}

        {splitHeading ? (
          <div className="relative mx-auto max-w-container">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <div className={cn(
                  'font-mono-label mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs',
                  dark ? 'border-white/20 bg-white/5 text-white/80' : 'border-purple/30 bg-panel text-blue'
                )}>
                  {eyebrow}
                </div>
                <h1 className={cn('font-display text-hero', dark && 'text-white')}>{title}</h1>
              </div>
              <div>
                <p className={cn('text-body-lg', dark ? 'text-white/70' : 'text-slate')}>{description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  {primaryAction}
                  {secondaryAction}
                </div>
              </div>
            </div>
            {visual && <div className="mt-16 flex justify-center">{visual}</div>}
          </div>
        ) : (
          <div
            className={cn(
              'relative mx-auto grid max-w-container items-center gap-16',
              visual ? 'md:grid-cols-2' : 'max-w-3xl'
            )}
          >
            <div>
              <div className={cn(
                'font-mono-label mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs',
                dark ? 'border-white/20 bg-white/5 text-white/80' : 'border-purple/30 bg-panel text-blue'
              )}>
                {eyebrow}
              </div>
              <h1 className={cn('font-display text-hero', dark && 'text-white')}>{title}</h1>
              <p className={cn('mt-6 max-w-lg text-body-lg', dark ? 'text-white/70' : 'text-slate')}>{description}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                {primaryAction}
                {secondaryAction}
              </div>
            </div>
            {visual && <div className="flex justify-center">{visual}</div>}
          </div>
        )}
      </section>
    </div>
  );
}

/** SectionIntroLayout — the recurring eyebrow + H2 + description pattern, centered or left */
export function SectionIntroLayout(props: React.ComponentProps<typeof SectionHeader>) {
  return <SectionHeader {...props} />;
}

/** QuoteLayout — reusable pull-quote structure, no invented testimonial content */
export function QuoteLayout({
  quote,
  attribution,
}: {
  quote: string;
  attribution?: { name: string; role: string };
}) {
  return (
    <blockquote className="border-l-2 border-blue pl-6">
      <p className="font-display text-h3 italic text-ink">&ldquo;{quote}&rdquo;</p>
      {attribution && (
        <footer className="mt-4 text-body-sm text-slate">
          {attribution.name} — {attribution.role}
        </footer>
      )}
    </blockquote>
  );
}

/** KPIStrip — row of MetricBlocks, data passed in, never fabricated here */
export function KPIStrip({ metrics }: { metrics: { value: string; label: string }[] }) {
  return (
    <div className="flex flex-wrap gap-10">
      {metrics.map((m) => (
        <MetricBlock key={m.label} value={m.value} label={m.label} />
      ))}
    </div>
  );
}

/** FeatureGrid — generic responsive card grid wrapper */
export function FeatureGrid({ children, columns = 3 }: { children: React.ReactNode; columns?: 2 | 3 | 4 }) {
  const colClass = { 2: 'sm:grid-cols-2', 3: 'sm:grid-cols-2 lg:grid-cols-3', 4: 'sm:grid-cols-2 lg:grid-cols-4' }[columns];
  return <div className={cn('grid grid-cols-1 gap-4', colClass)}>{children}</div>;
}

/** CTASection — closing conversion section, one obvious primary action */
export function CTASection({
  title,
  description,
  actionLabel,
  actionHref,
}: {
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
}) {
  return (
    <ContentSection className="text-center">
      <div className="mx-auto max-w-[560px]">
        <RevealContainer>
          <h2 className="font-display text-h2">{title}</h2>
          <p className="mt-4 text-slate">{description}</p>
          <Button href={actionHref} size="lg" className="mt-8">
            {actionLabel}
          </Button>
        </RevealContainer>
      </div>
    </ContentSection>
  );
}
