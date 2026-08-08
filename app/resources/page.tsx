import type { Metadata } from 'next';
import ResourcesPageClient from '@/components/ResourcesPageClient';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Documentation, blog, help center, and security information for AI Solution Company products.',
};

export default function ResourcesPage() {
  return <ResourcesPageClient />;
}
