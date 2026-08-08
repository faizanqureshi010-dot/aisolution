'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { BookOpen, FileCode2, LifeBuoy, ScrollText, ShieldCheck, Newspaper } from 'lucide-react';
import { HeroLayout, ContentSection } from '@/components/layouts/Sections';
import { PlatformRelationshipLayout } from '@/components/layouts/SectionShells';
import { Breadcrumb, SectionHeader } from '@/components/ui/Layout';
import { StaggerGroup, StaggerItem } from '@/components/layouts/RevealContainer';
import { SearchField, FilterChips } from '@/components/ui/Filters';
import { EmptyState } from '@/components/ui/States';
import { Card, CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Footer from '@/components/Footer';

const categories = [
  { name: 'Blog', href: '/resources/blog', icon: Newspaper, desc: 'Notes on operations, AI, and building products that do the job.', tag: 'Content' },
  { name: 'Documentation', href: '/resources/documentation', icon: BookOpen, desc: 'Implementation and integration reference material.', tag: 'Technical' },
  { name: 'API Overview', href: '/resources/api', icon: FileCode2, desc: 'API reference, when one is published.', tag: 'Technical' },
  { name: 'Help Center', href: '/resources/help-center', icon: LifeBuoy, desc: 'Support articles and guides.', tag: 'Support' },
  { name: 'Release Notes', href: '/resources/release-notes', icon: ScrollText, desc: 'What has changed, logged honestly.', tag: 'Technical' },
  { name: 'Security Center', href: '/resources/security-center', icon: ShieldCheck, desc: 'What\'s currently verified and supported.', tag: 'Trust' },
];

const filterOptions = ['All', 'Content', 'Technical', 'Support', 'Trust'];

export default function ResourcesPageClient() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(() => {
    return categories.filter((c) => {
      const matchesQuery = !query.trim() || c.name.toLowerCase().includes(query.toLowerCase()) || c.desc.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = filter === 'All' || c.tag === filter;
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return (
    <>
      <Breadcrumb items={[{ label: 'Resources' }]} />
      <main id="main">
        <HeroLayout
          eyebrow="Resources"
          title={<>The knowledge center for <span className="text-gradient">AI Solution Company</span>.</>}
          description="Documentation, product updates, and support — built architecture-first, populated as real content ships."
          primaryAction={<Button href="/contact" size="lg">Talk to Us</Button>}
          visual={
            <div className="grid w-full max-w-sm grid-cols-2 gap-3">
              {categories.slice(0, 4).map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.name} className="flex flex-col items-center gap-2 rounded-xl border border-line bg-panel2/80 p-5 text-center">
                    <Icon className="h-5 w-5 text-blue" />
                    <span className="text-xs font-medium text-ink">{c.name}</span>
                  </div>
                );
              })}
            </div>
          }
        />

        <ContentSection>
          <SectionHeader eyebrow="How These Fit Together" title="One knowledge center, six connected areas." align="center" className="mx-auto mb-10" />
          <PlatformRelationshipLayout
            center={{ label: 'Resources' }}
            related={categories.map((c) => ({ label: c.name, description: c.tag }))}
          />
        </ContentSection>

        <div className="sticky top-[64px] z-30 border-b border-line bg-paper/90 px-8 py-4 backdrop-blur-xl">
          <div className="mx-auto flex max-w-container flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <FilterChips options={filterOptions} active={filter} onChange={setFilter} />
            <SearchField value={query} onChange={setQuery} placeholder="Search resources…" className="w-full sm:max-w-xs" />
          </div>
        </div>

        <ContentSection>
          {filtered.length > 0 ? (
            <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((c) => {
                const Icon = c.icon;
                return (
                  <StaggerItem key={c.name}>
                    <Link href={c.href} data-cursor-hover>
                      <Card accentColor="#A855F7" className="h-full transition-transform hover:-translate-y-1">
                        <CardBody>
                          <div className="flex items-center justify-between">
                            <Icon className="h-6 w-6 text-blue" />
                            <span className="font-mono-label text-[10px] text-slate">{c.tag}</span>
                          </div>
                          <h3 className="font-display mt-3 font-bold">{c.name}</h3>
                          <p className="mt-2 text-sm text-slate">{c.desc}</p>
                        </CardBody>
                      </Card>
                    </Link>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          ) : (
            <EmptyState title="No resources match your search" description="Try a different term or category." />
          )}
        </ContentSection>
      </main>
      <Footer />
    </>
  );
}
