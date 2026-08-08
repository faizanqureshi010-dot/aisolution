'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HeroLayout, ContentSection } from '@/components/layouts/Sections';
import { RevealContainer, StaggerGroup, StaggerItem } from '@/components/layouts/RevealContainer';
import { SectionHeader, Breadcrumb } from '@/components/ui/Layout';
import { Card, CardBody } from '@/components/ui/Card';
import { Input, Textarea, Select } from '@/components/ui/Form';
import Button from '@/components/ui/Button';
import { Timeline } from '@/components/ui/Workflow';
import { Alert } from '@/components/ui/States';
import { AccordionItem } from '@/components/ui/Accordion';
import { useToast } from '@/components/ui/Toast';
import { FAQSchema } from '@/components/StructuredData';
import Footer from '@/components/Footer';
import { PhoneCall, Building2, Handshake, Wrench, MessageCircle } from 'lucide-react';

const reasons = [
  { label: 'Request a Product Demo', icon: PhoneCall, note: 'See a specific product in action.' },
  { label: 'Sales / Enterprise Inquiry', icon: Building2, note: 'Multi-location, custom-scope, or procurement questions.' },
  { label: 'Partnership Inquiry', icon: Handshake, note: 'Explore an Affiliate relationship.' },
  { label: 'Technical Question', icon: Wrench, note: 'Compatibility or implementation questions.' },
  { label: 'General Inquiry', icon: MessageCircle, note: 'Anything else.' },
];

const faqs = [
  { q: 'How quickly will I hear back?', a: 'A member of our team will follow up as soon as possible. We don\'t publish a fixed response-time commitment here, since it depends on the nature of your inquiry.' },
  { q: 'I have a technical or compatibility question — is this the fastest way to get an answer?', a: 'Often, checking the Connector Ecosystem on the relevant product page is faster than waiting on a reply here.' },
  { q: 'Can I reach out about a partnership instead of a product inquiry?', a: 'Yes — select Partnership Inquiry above, or visit our Affiliate program page directly.' },
];

export default function ContactPageClient() {
  const { push } = useToast();
  const [reason, setReason] = useState(reasons[0].label);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      push('Message received.', 'success');
    }, 900);
  }

  return (
    <>
      <Breadcrumb items={[{ label: 'Contact' }]} />
      <FAQSchema faqs={faqs} />
      <main id="main">
        <HeroLayout
          eyebrow="Contact"
          title={<>Let&rsquo;s find the right conversation.</>}
          description="Not every question fits neatly into a product demo. If yours doesn\'t, this is where it goes."
          primaryAction={<Button href="/book-demo" size="lg">Book a Pilot Instead</Button>}
          visual={
            <div className="w-full max-w-sm rounded-2xl border border-line bg-panel2/80 p-6 text-sm text-slate">
              <div className="font-mono-label mb-2 text-xs text-blue">Contact</div>
              <p>info@aisolutioncompany.com</p>
              <p className="mt-1">24/7 Support</p>
            </div>
          }
        />

        <ContentSection>
          <RevealContainer className="mb-8">
            <SectionHeader eyebrow="Choose Your Reason" title="What brings you here?" />
          </RevealContainer>
          <StaggerGroup className="flex flex-wrap justify-center gap-3">
            {reasons.map((r) => {
              const Icon = r.icon;
              const active = reason === r.label;
              return (
                <StaggerItem key={r.label} className="w-full sm:w-[calc(50%-6px)] lg:w-[calc(20%-10px)]">
                  <button
                    type="button"
                    data-cursor-hover
                    onClick={() => setReason(r.label)}
                    className={`h-full w-full rounded-token border-2 p-4 text-left transition-all ${
                      active ? 'border-purple bg-panel2 shadow-[0_8px_24px_-8px_rgba(168,85,247,0.4)]' : 'border-purple/50 bg-panel shadow-[0_8px_24px_-8px_rgba(168,85,247,0.35)] hover:-translate-y-1'
                    }`}
                  >
                    <Icon className="h-5 w-5 text-blue" />
                    <div className="font-display mt-2 text-sm font-semibold">{r.label}</div>
                    <p className="mt-1 text-xs text-slate">{r.note}</p>
                  </button>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </ContentSection>

        <ContentSection>
          <div className="mx-auto max-w-[560px]">
            {submitted ? (
              <Alert variant="positive">
                Message received. A member of our team will follow up. If this were connected to a real backend, you&rsquo;d receive a confirmation shortly.
              </Alert>
            ) : (
              <Card accentColor="#A855F7">
                <CardBody>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Input label="Name" placeholder="Your name" required autoComplete="name" />
                      <Input label="Email" type="email" placeholder="you@business.com" required autoComplete="email" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Select label="Reason for Contact" value={reason} onChange={(e) => setReason(e.target.value)}>
                        {reasons.map((r) => (
                          <option key={r.label}>{r.label}</option>
                        ))}
                      </Select>
                      <Input label="Business Name" placeholder="Your business" autoComplete="organization" />
                    </div>
                    <Textarea label="Message" placeholder="Tell us what you need" required />
                    <Button type="submit" loading={loading} size="lg" className="w-full justify-center">
                      Contact Sales
                    </Button>
                  </form>
                </CardBody>
              </Card>
            )}
          </div>
        </ContentSection>

        <ContentSection>
          <RevealContainer className="mb-10">
            <SectionHeader eyebrow="What Happens Next" title="A person follows up — not an automated loop." description="We don\'t publish a fixed response-time commitment, since it depends on the nature of your inquiry." />
          </RevealContainer>
          <Timeline
            items={[
              { title: 'Message Received', description: 'Your inquiry reaches a real member of our team, routed by the reason you selected.' },
              { title: 'Reviewed', description: 'We review what you\'ve shared before reaching out — no generic auto-reply.' },
              { title: 'Follow-Up', description: 'A person follows up directly, by email or a scheduled call depending on your inquiry.' },
            ]}
          />
          <Alert variant="info" className="mt-8 max-w-[560px]">
            Information submitted through this form is handled according to our <Link href="/privacy-policy" className="underline">Privacy Policy</Link>. We do not sell your information.
          </Alert>
        </ContentSection>

        <ContentSection>
          <RevealContainer className="mb-10">
            <SectionHeader eyebrow="Frequently Asked Questions" title="Before you reach out." />
          </RevealContainer>
          <div className="max-w-[720px]">
            {faqs.map((f) => (
              <AccordionItem key={f.q} title={f.q}>
                {f.a}
              </AccordionItem>
            ))}
          </div>
        </ContentSection>
      </main>
      <Footer />
    </>
  );
}
