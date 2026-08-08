import type { Metadata } from 'next';
import BookDemoPageClient from '@/components/BookDemoPageClient';

export const metadata: Metadata = {
  title: 'Book a Pilot',
  description: 'A short demo built around your operations — not a generic walkthrough.',
};

export default function BookDemoPage() {
  return <BookDemoPageClient />;
}
