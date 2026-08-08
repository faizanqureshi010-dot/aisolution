import { HeroLayout, ContentSection } from '@/components/layouts/Sections';
import { Breadcrumb } from '@/components/ui/Layout';
import { EmptyState } from '@/components/ui/States';
import Button from '@/components/ui/Button';
import Footer from '@/components/Footer';

export function ResourcePlaceholderPage({
  title,
  description,
  emptyTitle,
  emptyDescription,
  breadcrumbLabel,
}: {
  title: string;
  description: string;
  emptyTitle: string;
  emptyDescription: string;
  breadcrumbLabel: string;
}) {
  return (
    <>
      <Breadcrumb items={[{ label: 'Resources', href: '/resources' }, { label: breadcrumbLabel }]} />
      <main id="main">
        <HeroLayout
          eyebrow="Resources"
          title={title}
          description={description}
          primaryAction={<Button href="/contact" size="lg">Talk to Us</Button>}
          visual={<div className="w-full max-w-sm rounded-2xl border border-line bg-panel2/80 p-6 text-center text-sm text-slate">Architecture-first — real content is added as it&rsquo;s published, not filled with placeholders to look active.</div>}
        />
        <ContentSection>
          <EmptyState title={emptyTitle} description={emptyDescription} />
        </ContentSection>
      </main>
      <Footer />
    </>
  );
}
