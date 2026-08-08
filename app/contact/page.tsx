import type { Metadata } from 'next';
import ContactPageClient from '@/components/ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach AI Solution Company for sales, partnership, or general inquiries — or book a demo directly.',
};

export default function ContactPage() {
  return <ContactPageClient />;
}
