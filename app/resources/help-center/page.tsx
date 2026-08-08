import type { Metadata } from 'next';
import { ResourcePlaceholderPage } from '@/components/layouts/ResourcePlaceholderPage';

export const metadata: Metadata = {
  title: 'Help Center',
  description: 'Support articles and guides for AI Solution Company products.',
};

export default function HelpCenterPage() {
  return (
    <ResourcePlaceholderPage
      breadcrumbLabel="Help Center"
      title="Support articles, as they're written."
      description="A self-serve help center is planned. Until then, reach out directly for support."
      emptyTitle="No help articles published yet"
      emptyDescription="Contact us directly and a member of our team will help."
    />
  );
}
