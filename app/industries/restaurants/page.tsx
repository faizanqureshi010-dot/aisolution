import type { Metadata } from 'next';
import { Phone, Users, CalendarClock, UtensilsCrossed } from 'lucide-react';
import IndustryPageTemplate, { IndustryPageData } from '@/components/layouts/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'Restaurants | Industries',
  description: 'AI Solution Company handles reservation calls for restaurants, built for a floor that never sits still.',
};

const data: IndustryPageData = {
  name: 'Restaurants',
  heroDescription: 'A dedicated AI employee that owns reservation calls and table availability, built around how a dining room actually runs during service.',
  whyTitle: 'A dining room fills fast. So should your reservation line.',
  whyDescription: 'A reservation call during a Friday dinner rush competes directly with a full dining room and a host stand already juggling walk-ins.',
  challenges: [
    { title: 'Peak-Service Calls', body: 'A call comes in while the host is seating a party of six.' },
    { title: 'Reservation Changes', body: "A regular calls to change a reservation time, and no one\'s free to update it." },
    { title: 'Large-Party Inquiries', body: 'A large-party inquiry — the kind that matters most for the night — goes to voicemail.' },
    { title: 'Host-Stand Pressure', body: 'Reservation calls compete directly with in-person guest service for the same attention.' },
  ],
  journeyStages: [
    { icon: <Phone className="h-4 w-4" />, label: 'Inquiry', detail: 'A call comes in with a date, time, and party size.' },
    { icon: <Users className="h-4 w-4" />, label: 'Availability Check', detail: 'Real seating availability is checked against the request.' },
    { icon: <CalendarClock className="h-4 w-4" />, label: 'Booking', detail: 'The reservation is confirmed, changed, or cancelled as needed.' },
    { icon: <UtensilsCrossed className="h-4 w-4" />, label: 'Service', detail: 'The party arrives, and hopefully calls again for their next visit.' },
  ],
  connectorCategoryName: 'Restaurant POS',
  connectorNote: 'Restaurant point-of-sale and reservation systems currently supported.',
  before: [
    'Calls during peak service go unanswered',
    'Large-party inquiries — the ones that matter most — go to voicemail',
    'Reservation changes compete with in-person guest service',
    'No visibility into what\'s actually happening on the phones',
  ],
  after: [
    'Every reservation call answered, even during the busiest service',
    'Large-party and special requests handled without pulling staff off the floor',
    'Changes and cancellations handled the way a person would',
    'Every interaction logged for real operational visibility',
  ],
  deploymentSteps: [
    { title: 'Discovery', description: 'We learn how your dining room actually handles reservation calls today.' },
    { title: 'Configuration', description: 'The employee is configured against your real seating and availability rules.' },
    { title: 'Connector Setup', description: 'Your reservation or POS system is connected and verified.' },
    { title: 'Testing', description: 'Verified against real scenarios before going live.' },
    { title: 'Go Live', description: 'The employee begins handling real calls.' },
    { title: 'Support', description: 'Ongoing refinement based on real usage.' },
  ],
  faqs: [
    { q: 'Is this a reservation platform?', a: 'No — it handles the call itself, working with your existing reservation system.' },
    { q: 'Does it replace our host stand?', a: 'No — it takes reservation-call volume off their plate during service.' },
    { q: 'Can it handle large-party or special requests?', a: 'Yes, and it hands off to your team when a request needs judgment beyond standard booking.' },
  ],
};

export default function RestaurantsPage() {
  return <IndustryPageTemplate data={data} />;
}
