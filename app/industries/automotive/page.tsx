import type { Metadata } from 'next';
import { Phone, Wrench, CalendarClock, Bell } from 'lucide-react';
import IndustryPageTemplate, { IndustryPageData } from '@/components/layouts/IndustryPageTemplate';

export const metadata: Metadata = {
  title: 'Automotive | Industries',
  description: 'AI Solution Company handles booking and call handling for automotive service businesses.',
};

const data: IndustryPageData = {
  name: 'Automotive Service',
  heroDescription: 'A dedicated AI employee that owns calls, scheduling, and status updates for repair shops, service centers, and dealership service departments.',
  whyTitle: 'A service department runs on communication as much as repair work.',
  whyDescription: 'A phone call becomes a scheduled inspection. A drop-off becomes an estimate, a repair, and a string of updates a customer expects along the way.',
  challenges: [
    { title: 'Call Overload at the Counter', body: 'The phone rings while a service advisor is mid-conversation, and it goes unanswered.' },
    { title: 'Status Update Pressure', body: 'Customers call back repeatedly for updates because no one had a free minute to call first.' },
    { title: 'Estimate Follow-Through', body: 'An estimate goes out, and by the time anyone follows up, the customer has gone elsewhere.' },
    { title: 'After-Hours Requests', body: 'A call at 6:30pm needing to book for tomorrow reaches voicemail instead.' },
  ],
  journeyStages: [
    { icon: <Phone className="h-4 w-4" />, label: 'Inquiry', detail: 'A customer calls needing an inspection, repair, or routine service.' },
    { icon: <CalendarClock className="h-4 w-4" />, label: 'Scheduling', detail: 'A time is checked and booked against real bay and technician availability.' },
    { icon: <Wrench className="h-4 w-4" />, label: 'Service', detail: 'The vehicle is checked in and the work begins.' },
    { icon: <Bell className="h-4 w-4" />, label: 'Status & Pickup', detail: 'Updates and pickup arrangements are communicated as the work progresses.' },
  ],
  connectorCategoryName: 'Field Service',
  connectorNote: 'Field service platforms used by automotive service businesses today.',
  before: [
    'Calls during peak counter hours go unanswered',
    'Estimate follow-through depends on someone remembering to call back',
    'After-hours booking requests reach voicemail',
    'No visibility into what\'s actually happening on the phones',
  ],
  after: [
    'Every call answered immediately, at any hour',
    'Estimates are followed up automatically before the customer moves on',
    'After-hours requests are handled, not lost',
    'Every interaction logged for real operational visibility',
  ],
  deploymentSteps: [
    { title: 'Discovery', description: 'We learn how your service department actually handles calls and scheduling today.' },
    { title: 'Configuration', description: 'The employee is configured against your bay availability and service rules.' },
    { title: 'Connector Setup', description: 'Your field service system is connected and verified.' },
    { title: 'Testing', description: 'Verified against real scenarios before going live.' },
    { title: 'Go Live', description: 'The employee begins handling real calls.' },
    { title: 'Support', description: 'Ongoing refinement based on real usage.' },
  ],
  faqs: [
    { q: 'Is this automotive shop management software?', a: 'No — it handles calls, scheduling, and communication, working alongside whatever systems you already use to run your shop.' },
    { q: 'Will this replace our service advisors?', a: 'No. It takes over the volume of calls and scheduling coordination that pulls advisors away from customers in front of them.' },
    { q: 'Can it handle after-hours calls?', a: 'Yes, at any hour.' },
  ],
};

export default function AutomotivePage() {
  return <IndustryPageTemplate data={data} />;
}
