'use client';

import { useState } from 'react';
import { HeroLayout, ContentSection } from '@/components/layouts/Sections';
import { RevealContainer, StaggerGroup, StaggerItem } from '@/components/layouts/RevealContainer';
import { SectionHeader, Breadcrumb } from '@/components/ui/Layout';
import { Card, CardBody } from '@/components/ui/Card';
import { Input, Select } from '@/components/ui/Form';
import Button from '@/components/ui/Button';
import { Alert } from '@/components/ui/States';
import { Timeline } from '@/components/ui/Workflow';
import { useToast } from '@/components/ui/Toast';
import Footer from '@/components/Footer';

const attendeeRoles = ['Practice Owner', 'Office Manager', 'Operations Lead', 'IT / Systems Admin', 'Other'];

export default function BookDemoPageClient() {
  const { push } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      push('Demo request received.', 'success');
    }, 900);
  }

  return (
    <>
      <Breadcrumb items={[{ label: 'Book a Pilot' }]} />
      <main id="main">
        <HeroLayout
          eyebrow="Book a Pilot"
          title={<>See it work for <span className="text-gradient">your business specifically</span>.</>}
          description="Not a generic walkthrough — a short session built around how your business actually operates."
          visual={
            <div className="w-full max-w-sm rounded-2xl border border-line bg-panel2/80 p-6 text-sm text-slate">
              <div className="font-mono-label mb-2 text-xs text-blue">What to Expect</div>
              <p>A focused conversation, not a sales pitch. You&apos;ll see the product working against a scenario close to your real operations.</p>
            </div>
          }
        />

        <ContentSection>
          <div className="mx-auto max-w-[560px]">
            {submitted ? (
              <Alert variant="positive">
                Demo request received. A member of our team will follow up to schedule a time.
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
                      <Input label="Business Name" placeholder="Your business" autoComplete="organization" />
                      <Select label="Your Role" defaultValue={attendeeRoles[0]}>
                        {attendeeRoles.map((r) => (
                          <option key={r}>{r}</option>
                        ))}
                      </Select>
                    </div>
                    <Button type="submit" loading={loading} size="lg" className="w-full justify-center">
                      Book a Pilot
                    </Button>
                  </form>
                </CardBody>
              </Card>
            )}
          </div>
        </ContentSection>

        <ContentSection>
          <RevealContainer className="mb-10">
            <SectionHeader eyebrow="What Happens After" title="No pressure, no promised timeline." description="If there\'s a fit and you want to move forward, we\'ll talk through what that looks like for your business specifically — we won\'t promise a timeline during the demo itself, since that depends on details we won\'t have fully worked through yet. If you need time to think it over, that\'s expected." />
          </RevealContainer>
          <Timeline
            items={[
              { title: 'Demo Session', description: 'A focused session built around a scenario close to your real operations.' },
              { title: 'Follow-Up Conversation', description: 'If there\'s a fit, we\'ll talk through what moving forward actually looks like.' },
              { title: 'Your Decision', description: 'No pressure, no forced timeline — take the time you need.' },
            ]}
          />
        </ContentSection>

        <ContentSection>
          <RevealContainer className="mb-10">
            <SectionHeader eyebrow="Who Should Attend" title="Whoever understands how your front office runs." />
          </RevealContainer>
          <StaggerGroup className="flex flex-wrap gap-3">
            {['Practice Owner', 'Office Manager', 'Operations Lead', 'Whoever answers the phones most'].map((role) => (
              <StaggerItem key={role}>
                <span className="rounded-full border border-line bg-panel px-4 py-2 text-sm text-ink">{role}</span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </ContentSection>
      </main>
      <Footer />
    </>
  );
}
