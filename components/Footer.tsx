'use client';

import Link from 'next/link';
import Image from 'next/image';
import { agents } from '@/lib/agents';
import { AmbientGlow } from '@/components/AmbientGlow';

const columns = [
  {
    title: 'AI Employees',
    links: [
      { name: 'Meet Our Employees', href: '/agents' },
      ...agents.map((a) => ({ name: a.name, href: `/agents/${a.slug}` })),
    ],
  },
  {
    title: 'Solutions',
    links: [
      { name: 'AISC Booking Agent', href: '/products/aisc-booking-agent' },
      { name: 'Dental Automated', href: '/products/dental-automated' },
      { name: 'Medical Automated', href: '/products/medical-automated' },
      { name: 'Claravox Healthcare (RCM)', href: '/claravox' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { name: 'Dental', href: '/products/dental-automated' },
      { name: 'Medical', href: '/products/medical-automated' },
      { name: 'Automotive', href: '/industries/automotive' },
      { name: 'Hotels', href: '/industries/hotels' },
      { name: 'Restaurants', href: '/industries/restaurants' },
      { name: 'Cafés', href: '/industries/cafes' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About', href: '/about' },
      { name: 'Why AISC', href: '/why-aisc' },
      { name: 'Careers', href: '/careers' },

      { name: 'Affiliate Program', href: '/affiliate' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '/resources/blog' },
      { name: 'Documentation', href: '/resources/documentation' },
      { name: 'Help Center', href: '/resources/help-center' },
      { name: 'Security Center', href: '/resources/security-center' },
      { name: 'Connectors', href: '/products/aisc-booking-agent#connectors' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
      { name: 'Accessibility Statement', href: '/accessibility-statement' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#1a1a1a]">
      <AmbientGlow variant="dark" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple/40 to-transparent" />
      <div className="relative mx-auto max-w-[1180px] px-8 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-8">
          <div className="col-span-2 lg:col-span-2">
            <Image src="/logo-light.png" alt="AI Solution Company" width={97} height={32} />
            <p className="mt-4 max-w-[240px] text-sm text-white/60">
              A US-based enterprise AI software company. We build AI Employees — coordinated, purpose-built employees
              that run the operational side of your business.
            </p>
            <form className="mt-5 flex max-w-[260px] gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Get product updates"
                aria-label="Email for product updates"
                className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-blue"
              />
              <button
                type="submit"
                data-cursor-hover
                className="whitespace-nowrap rounded-lg bg-cta px-3 py-2 text-sm font-semibold text-white transition-all hover:brightness-110"
              >
                Subscribe
              </button>
            </form>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h5 className="font-mono-label mb-3 text-xs text-white">{col.title}</h5>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.name}>
                    <Link
                      href={l.href}
                      data-cursor-hover
                      className="text-sm text-blue transition-colors hover:text-pink"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h5 className="font-mono-label mb-3 text-xs text-white">Contact</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contact" data-cursor-hover className="text-blue transition-colors hover:text-pink">
                  Contact Sales
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@aisolutioncompany.com"
                  data-cursor-hover
                  className="text-blue transition-colors hover:text-pink"
                >
                  info@aisolutioncompany.com
                </a>
              </li>
              <li className="text-white/60">24/7 Support</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} AI Solution Company. All rights reserved.</span>
          <span>Claravox Healthcare — a subsidiary of AI Solution Company.</span>
        </div>
      </div>
    </footer>
  );
}
