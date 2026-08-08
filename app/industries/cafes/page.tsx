import type { Metadata } from 'next';
import { Phone, Users, Coffee, Zap } from 'lucide-react';
import IndustryPageTemplate, { IndustryPageData } from '@/components/layouts/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'Cafés | Industries',
  description: 'AI Solution Company handles booking and phone-based requests for cafés without slowing down the counter.',
};

const data: IndustryPageData = {
  name: 'Cafés',
  heroDescription: 'A dedicated AI employee built to be fast and exact — handling booking and phone-based requests at the pace a café actually needs.',
  whyTitle: "A café doesn\'t run on long conversations.",
  whyDescription: 'Every interaction needs to be quick and precise — there\'s no room for a slow or confused exchange when the next customer is already waiting.',
  challenges: [
    { title: 'Rush-Hour Calls', body: 'The phone goes unanswered during the morning rush.' },
    { title: 'Group Booking Requests', body: 'A call about a large order or group booking arrives right in the middle of the rush.' },
    { title: 'Counter Pressure', body: 'Staff are behind the counter, and phone requests compete for the same attention.' },
    { title: 'Quick Questions', body: 'A regular calls to check hours or availability, and gets a busy signal instead.' },
  ],
  journeyStages: [
    { icon: <Phone className="h-4 w-4" />, label: 'Inquiry', detail: 'A call comes in — a group booking, a large order, or a quick question.' },
    { icon: <Zap className="h-4 w-4" />, label: 'Immediate Handling', detail: 'It\'s handled immediately, without pulling staff away from the counter.' },
    { icon: <Users className="h-4 w-4" />, label: 'Booking', detail: 'If it needs to become a reservation or order, it\'s confirmed on the spot.' },
    { icon: <Coffee className="h-4 w-4" />, label: 'Service', detail: 'The line keeps moving, and the phone stays answered.' },
  ],
  connectorCategoryName: 'Restaurant POS',
  connectorNote: 'Point-of-sale and booking systems currently supported for food and beverage businesses.',
  before: [
    'The phone goes unanswered during the morning rush',
    'Group booking requests arrive right when staff are busiest',
    'Quick questions about hours or availability get a busy signal',
    'No visibility into what\'s actually happening on the phones',
  ],
  after: [
    'Every call handled immediately, without slowing the counter',
    'Group bookings confirmed on the spot',
    'Quick questions answered instantly, any time',
    'Every interaction logged for real operational visibility',
  ],
  deploymentSteps: [
    { title: 'Discovery', description: 'We learn how your counter actually handles calls today.' },
    { title: 'Configuration', description: 'The employee is configured to be fast and precise, matching your real operations.' },
    { title: 'Connector Setup', description: 'Your POS or booking system is connected and verified.' },
    { title: 'Testing', description: 'Verified against real scenarios before going live.' },
    { title: 'Go Live', description: 'The employee begins handling real calls.' },
    { title: 'Support', description: 'Ongoing refinement based on real usage.' },
  ],
  faqs: [
    { q: 'Will this slow things down at the counter?', a: "No — it\'s built to be fast specifically because a café can\'t afford friction." },
    { q: 'Can it handle group bookings?', a: 'Yes.' },
    { q: 'Does it replace staff?', a: 'No — it takes phone-based requests off their plate during the busiest moments.' },
  ],
};

export default function CafesPage() {
  return <IndustryPageTemplate data={data} />;
}
