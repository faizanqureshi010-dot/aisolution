import type { Metadata } from 'next';
import { ResourcePlaceholderPage } from '@/components/layouts/ResourcePlaceholderPage';

export const metadata: Metadata = {
  title: 'Release Notes',
  description: 'What has changed across AI Solution Company products.',
};

export default function ReleaseNotesPage() {
  return (
    <ResourcePlaceholderPage
      breadcrumbLabel="Release Notes"
      title="What's changed, logged honestly."
      description="Release notes will be published here as real changes ship — not backfilled with invented version history."
      emptyTitle="No release notes published yet"
      emptyDescription="This log starts once the first tracked release ships."
    />
  );
}
