import type { Metadata } from 'next';
import { Phone, BedDouble, CalendarClock, RefreshCcw } from 'lucide-react';
import IndustryPageTemplate, { IndustryPageData } from '@/components/layouts/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'Hotels | Industries',
  description: 'AI Solution Company handles reservation calls for hotels, built for real-time availability.',
};

const data: IndustryPageData = {
  name: 'Hotels',
  heroDescription: 'A dedicated AI employee that answers reservation calls, checks live availability, and books guests at any hour.',
  whyTitle: "A hotel doesn\'t get a second chance at a reservation call.",
  whyDescription: 'The caller wants an answer immediately, not a callback. If the front desk is busy, that call goes to voicemail, and the room stays unbooked.',
  challenges: [
    { title: 'Late-Night Calls', body: 'A call at 11pm asking about weekend availability reaches voicemail, with no one at the desk.' },
    { title: 'Mid-Checkout Interruptions', body: 'A guest calls to extend their stay while the desk is mid check-out with someone else.' },
    { title: 'Rate Questions Left Unanswered', body: "A corporate traveler\'s rate question ends up on an unchecked voicemail." },
    { title: 'Reservation Changes', body: 'Extensions and early departures compete with in-person guest service for attention.' },
  ],
  journeyStages: [
    { icon: <Phone className="h-4 w-4" />, label: 'Inquiry', detail: 'A guest calls with a date range in mind.' },
    { icon: <BedDouble className="h-4 w-4" />, label: 'Availability Check', detail: 'Room type, rate, and dates are checked against live inventory.' },
    { icon: <CalendarClock className="h-4 w-4" />, label: 'Booking', detail: 'The reservation is confirmed on the spot.' },
    { icon: <RefreshCcw className="h-4 w-4" />, label: 'Changes', detail: 'Extensions, changes, and cancellations are handled the way a person would.' },
  ],
  connectorCategoryName: 'Scheduling & Calendar',
  connectorNote: 'Hotel-specific PMS connectors are not yet part of our confirmed connector list — these are the scheduling systems currently supported.',
  before: [
    'Late-night calls reach voicemail with no one at the desk',
    'Reservation changes compete with in-person guest service',
    'Rate questions go unanswered on an unchecked voicemail',
    'No visibility into what\'s actually happening on the phones',
  ],
  after: [
    'Every reservation call answered immediately, at any hour',
    'Changes and extensions handled without pulling staff from the desk',
    'Rate and availability questions answered on the spot',
    'Every interaction logged for real operational visibility',
  ],
  deploymentSteps: [
    { title: 'Discovery', description: 'We learn how your front desk actually handles reservation calls today.' },
    { title: 'Configuration', description: 'The employee is configured against your real rates and availability rules.' },
    { title: 'Connector Setup', description: 'Your scheduling system is connected and verified.' },
    { title: 'Testing', description: 'Verified against real scenarios before going live.' },
    { title: 'Go Live', description: 'The employee begins handling real calls.' },
    { title: 'Support', description: 'Ongoing refinement based on real usage.' },
  ],
  faqs: [
    { q: 'Is this hotel management software?', a: 'No — it handles reservation calls, working alongside your property management system.' },
    { q: 'Will it replace our front desk?', a: 'No — it takes the reservation-call volume off their plate.' },
    { q: 'Can guests modify a reservation through it?', a: 'Yes — extensions, changes, and cancellations, handled the way a person would.' },
  ],
};

export default function HotelsPage() {
  return <IndustryPageTemplate data={data} />;
}
