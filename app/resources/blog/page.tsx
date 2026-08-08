import type { Metadata } from 'next';
import { ResourcePlaceholderPage } from '@/components/layouts/ResourcePlaceholderPage';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Notes on operations, AI, and building products that do the job.',
};

export default function BlogIndexPage() {
  return (
    <ResourcePlaceholderPage
      breadcrumbLabel="Blog"
      title="Notes on operations, AI, and building products that do the job."
      description="Product updates, industry perspectives, and company news — published as they're written."
      emptyTitle="No posts published yet"
      emptyDescription="Check back soon, or subscribe from the footer to be notified when the first post goes live."
    />
  );
}
