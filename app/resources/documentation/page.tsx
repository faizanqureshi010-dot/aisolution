import type { Metadata } from 'next';
import { ResourcePlaceholderPage } from '@/components/layouts/ResourcePlaceholderPage';

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Implementation and integration documentation for AI Solution Company products.',
};

export default function DocumentationPage() {
  return (
    <ResourcePlaceholderPage
      breadcrumbLabel="Documentation"
      title="Reference material, as it becomes available."
      description="Implementation guides and connector documentation for AI Solution Company products."
      emptyTitle="Documentation not yet published"
      emptyDescription="Available after publication — talk to us directly for implementation questions in the meantime."
    />
  );
}
