import type { Metadata } from 'next';
import { ResourcePlaceholderPage } from '@/components/layouts/ResourcePlaceholderPage';

export const metadata: Metadata = {
  title: 'API Overview',
  description: 'API reference for AI Solution Company products.',
};

export default function APIOverviewPage() {
  return (
    <ResourcePlaceholderPage
      breadcrumbLabel="API Overview"
      title="A public API reference, when one exists."
      description="No public API is currently published. This page is reserved for that documentation."
      emptyTitle="No public API reference yet"
      emptyDescription="Talk to us directly if you have an integration need not covered by our existing connectors."
    />
  );
}
