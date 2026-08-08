'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Phone,
  Stethoscope,
  HeartPulse,
  Car,
  Building2,
  UtensilsCrossed,
  Coffee,
  Info,
  FileText,
  BookOpen,
  Sparkles,
  Briefcase,
  ShieldCheck,
  Newspaper,
  Users,
  GitBranch,
  Cable,
  Menu,
  X,
  Bot,
  Landmark,
} from 'lucide-react';

/* ---------------------------------------------------------------------- */
/* Data                                                                    */
/* ---------------------------------------------------------------------- */

const companyItems = [
  { name: 'About', desc: 'Why we build AI Employees', href: '/about', icon: Info },
  { name: 'Why AISC', desc: 'What makes our approach different', href: '/why-aisc', icon: Sparkles },
  { name: 'Careers', desc: 'Building AI Employees, as a team', href: '/careers', icon: Briefcase },
  { name: 'Contact', desc: 'Talk to our team', href: '/contact', icon: FileText },
];

const resourceItems = [
  { name: 'Resources', desc: 'Docs, blog, help, and more', href: '/resources', icon: Newspaper },
  { name: 'Connectors', desc: 'Every system we integrate with', href: '/products/aisc-booking-agent#connectors', icon: BookOpen },
  { name: 'Security Center', desc: "What's currently verified and supported", href: '/resources/security-center', icon: ShieldCheck },
];

// "Solutions" — same 4-item submenu structure for both Dental Automated and
// Medical Automated, anchoring into sections that already exist on each single page.
const deploymentSubmenu = [
  { name: 'Meet the Employees', hrefSuffix: '#agents', icon: Users },
  { name: 'How It Works', hrefSuffix: '#how-it-works', icon: GitBranch },
  { name: 'Integrations', hrefSuffix: '#integrations', icon: Cable },
  { name: 'Security & Compliance', hrefSuffix: '#security', icon: ShieldCheck },
];

const industryItems = [
  { name: 'Automotive', href: '/industries/automotive', icon: Car },
  { name: 'Hotels', href: '/industries/hotels', icon: Building2 },
  { name: 'Restaurants', href: '/industries/restaurants', icon: UtensilsCrossed },
  { name: 'Cafés', href: '/industries/cafes', icon: Coffee },
];

/* ---------------------------------------------------------------------- */
/* Simple flat mega-menu — used for Resources / Company                   */
/* ---------------------------------------------------------------------- */

function MegaMenu({
  label,
  items,
  open,
  setOpen,
}: {
  label: string;
  items: { name: string; desc?: string; href: string; icon: React.ComponentType<{ className?: string }> }[];
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };
  const leave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        className="flex items-center gap-1 text-sm text-slate hover:text-ink transition-colors py-2"
        aria-expanded={open}
        data-cursor-hover
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-full z-40 mt-2 w-[420px] rounded-2xl border border-line bg-panel/95 backdrop-blur-xl p-3 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
          >
            <div className="grid grid-cols-1 gap-1">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    data-cursor-hover
                    className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-panel2"
                  >
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-panel2 text-blue group-hover:bg-brand-gradient group-hover:text-white transition-colors">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink">{item.name}</span>
                      {item.desc && <span className="block text-xs text-slate mt-0.5">{item.desc}</span>}
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* "Solutions" — nested mega-menu with right-side hover flyouts             */
/* AISC Booking Agent (flat) / Dental Automated (expandable) /             */
/* Medical Automated (expandable) / Industries (flat, unchanged)           */
/* ---------------------------------------------------------------------- */

interface FlyoutSubItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

function FlyoutRow({
  name,
  desc,
  href,
  icon: Icon,
  submenu,
}: {
  name: string;
  desc: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  /** When present, hovering this row opens a submenu panel to the RIGHT of the
   *  dropdown (not a downward accordion) — a hover-intent delay on both the row
   *  and the flyout itself keeps it open while the cursor travels diagonally
   *  between them, so drifting off-path doesn't slam it shut. */
  submenu?: FlyoutSubItem[];
}) {
  const [flyoutOpen, setFlyoutOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setFlyoutOpen(true);
  };
  const leave = () => {
    timeout.current = setTimeout(() => setFlyoutOpen(false), 200);
  };

  return (
    <div className="relative" onMouseEnter={submenu ? enter : undefined} onMouseLeave={submenu ? leave : undefined}>
      <Link href={href} data-cursor-hover className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-panel2">
        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-panel2 text-blue group-hover:bg-brand-gradient group-hover:text-white transition-colors">
          <Icon className="h-4 w-4" />
        </span>
        <span className="flex-1">
          <span className="block text-sm font-semibold text-ink">{name}</span>
          <span className="block text-xs text-slate mt-0.5">{desc}</span>
        </span>
        {submenu && <ChevronDown className="mt-2 h-3.5 w-3.5 flex-shrink-0 -rotate-90 text-slate" />}
      </Link>

      {submenu && (
        <AnimatePresence>
          {flyoutOpen && (
            <motion.div
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={enter}
              onMouseLeave={leave}
              className="absolute left-full top-0 z-50 ml-2 w-[260px] rounded-2xl border border-line bg-panel/95 backdrop-blur-xl p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
            >
              {submenu.map((sub) => {
                const SubIcon = sub.icon;
                return (
                  <Link
                    key={sub.name}
                    href={sub.href}
                    data-cursor-hover
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm text-ink transition-colors hover:bg-panel2"
                  >
                    <SubIcon className="h-3.5 w-3.5 flex-shrink-0 text-slate" />
                    {sub.name}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

function SolutionsMenu({ open, setOpen }: { open: boolean; setOpen: (v: boolean) => void }) {
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const enter = () => {
    if (timeout.current) clearTimeout(timeout.current);
    setOpen(true);
  };
  const leave = () => {
    timeout.current = setTimeout(() => setOpen(false), 200);
  };

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <Link
        href="/industries"
        data-cursor-hover
        className="flex items-center gap-1 text-sm text-slate hover:text-ink transition-colors py-2"
        aria-expanded={open}
      >
        Solutions
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </Link>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-full z-40 mt-2 w-[320px] rounded-2xl border border-line bg-panel/95 backdrop-blur-xl p-3 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
          >
            <div className="flex flex-col gap-1">
              <FlyoutRow
                name="AISC Booking Agent"
                desc="AI booking & voice employee, standalone"
                href="/products/aisc-booking-agent"
                icon={Phone}
              />
              <FlyoutRow
                name="Dental Automated"
                desc="Complete AI dental front office"
                href="/products/dental-automated"
                icon={Stethoscope}
                submenu={deploymentSubmenu.map((s) => ({ name: s.name, icon: s.icon, href: `/products/dental-automated${s.hrefSuffix}` }))}
              />
              <FlyoutRow
                name="Medical Automated"
                desc="Complete AI medical front office"
                href="/products/medical-automated"
                icon={HeartPulse}
                submenu={deploymentSubmenu.map((s) => ({ name: s.name, icon: s.icon, href: `/products/medical-automated${s.hrefSuffix}` }))}
              />
              <FlyoutRow
                name="Industries"
                desc="Automotive, hospitality, dining & more"
                href="/industries"
                icon={Building2}
                submenu={industryItems.map((s) => ({ name: s.name, icon: s.icon, href: s.href }))}
              />

              <div className="mt-1 border-t border-line pt-2">
                <div className="px-3 pb-1 font-mono-label text-[10px] text-slate">Our Companies</div>
                <Link
                  href="/claravox"
                  data-cursor-hover
                  className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-panel2"
                >
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-panel2 text-blue group-hover:bg-brand-gradient group-hover:text-white transition-colors">
                    <Landmark className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">Claravox Healthcare</span>
                    <span className="block text-xs text-slate mt-0.5">Medical billing &amp; RCM — a separate business</span>
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------------------------------------------------------------- */
/* Mobile menu — did not previously exist; nav links were unreachable      */
/* below the md breakpoint. Same data, single tap-to-expand accordion      */
/* interaction throughout (matches the desktop click-to-expand pattern     */
/* used for Dental/Medical above, so there's one mental model, not two).   */
/* ---------------------------------------------------------------------- */

function MobileAccordionGroup({
  label,
  href,
  children,
}: {
  label: string;
  href?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line py-1">
      <div className="flex items-center justify-between">
        {href ? (
          <Link href={href} data-cursor-hover className="flex-1 py-3 text-base font-semibold text-ink">
            {label}
          </Link>
        ) : (
          <span className="flex-1 py-3 text-base font-semibold text-ink">{label}</span>
        )}
        <button
          type="button"
          aria-expanded={open}
          aria-label={`${open ? 'Collapse' : 'Expand'} ${label}`}
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center text-slate"
        >
          <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 pb-3 pl-2">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileDeploymentGroup({ name, productHref }: { name: string; productHref: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-lg">
      <div className="flex items-center justify-between">
        <Link href={productHref} data-cursor-hover className="flex-1 py-2.5 text-sm font-medium text-ink">
          {name}
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-label={`${open ? 'Collapse' : 'Expand'} ${name} sections`}
          onClick={() => setOpen((o) => !o)}
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center text-slate"
        >
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden pl-3"
          >
            <div className="flex flex-col gap-1 pb-2">
              {deploymentSubmenu.map((sub) => (
                <Link
                  key={sub.name}
                  href={`${productHref}${sub.hrefSuffix}`}
                  data-cursor-hover
                  className="py-1.5 text-sm text-slate"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  // Lock background scroll while the mobile panel is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] bg-paper md:hidden"
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-line">
            <Link href="/" data-cursor-hover onClick={onClose} className="flex items-center">
              <Image src="/logo-mark.png" alt="AISC" width={148} height={47} priority />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="h-[calc(100vh-73px)] overflow-y-auto px-6 py-4">
            <Link
              href="/agents"
              data-cursor-hover
              onClick={onClose}
              className="flex items-center gap-2 border-b border-line py-3 text-base font-semibold text-ink"
            >
              <Bot className="h-4 w-4 text-blue" />
              AI Employees
            </Link>

            <MobileAccordionGroup label="Solutions" href="/industries">
              <Link href="/products/aisc-booking-agent" data-cursor-hover className="py-2 text-sm font-medium text-ink">
                AISC Booking Agent
              </Link>
              <MobileDeploymentGroup name="Dental Automated" productHref="/products/dental-automated" />
              <MobileDeploymentGroup name="Medical Automated" productHref="/products/medical-automated" />
              <div className="mt-1 border-t border-line pt-2">
                <div className="pb-1 font-mono-label text-[10px] text-slate">Industries</div>
                {industryItems.map((item) => (
                  <Link key={item.name} href={item.href} data-cursor-hover className="block py-2 text-sm text-ink">
                    {item.name}
                  </Link>
                ))}
              </div>
            </MobileAccordionGroup>

            <MobileAccordionGroup label="Resources">
              {resourceItems.map((item) => (
                <Link key={item.name} href={item.href} data-cursor-hover className="py-2 text-sm text-ink">
                  {item.name}
                </Link>
              ))}
            </MobileAccordionGroup>

            <MobileAccordionGroup label="Company">
              {companyItems.map((item) => (
                <Link key={item.name} href={item.href} data-cursor-hover className="py-2 text-sm text-ink">
                  {item.name}
                </Link>
              ))}
            </MobileAccordionGroup>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/contact"
                data-cursor-hover
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-full border border-line px-5 py-3 text-sm font-medium text-ink"
              >
                Talk to an Expert
              </Link>
              <Link
                href="/book-demo"
                data-cursor-hover
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-full bg-cta px-5 py-3 text-sm font-semibold text-white"
              >
                Book a Pilot
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------------------------------------------------------------- */
/* Nav                                                                     */
/* ---------------------------------------------------------------------- */

export default function Nav() {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-3 z-50 px-3">
      <nav className="mx-auto flex max-w-[1500px] items-center justify-between rounded-full border border-line bg-gradient-to-r from-purple/[0.06] via-panel/95 to-panel/95 px-6 py-4 shadow-[0_8px_32px_rgba(15,17,21,0.08)] backdrop-blur-xl">
        <Link href="/" data-cursor-hover className="flex items-center">
          <Image src="/logo-mark.png" alt="AISC" width={168} height={53} priority />
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/agents"
            data-cursor-hover
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
              isActive('/agents') ? 'bg-purple/10 text-ink font-medium' : 'text-slate hover:text-ink'
            }`}
          >
            AI Employees
          </Link>
          <SolutionsMenu open={solutionsOpen} setOpen={setSolutionsOpen} />
          <MegaMenu label="Resources" items={resourceItems} open={resourcesOpen} setOpen={setResourcesOpen} />
          <MegaMenu label="Company" items={companyItems} open={companyOpen} setOpen={setCompanyOpen} />
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            data-cursor-hover
            className="hidden sm:inline-block text-sm font-medium text-ink hover:text-blue transition-colors"
          >
            Talk to an Expert
          </Link>
          <Link
            href="/book-demo"
            data-cursor-hover
            className="hidden md:inline-flex items-center rounded-full bg-cta px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            Book a Pilot
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
            data-cursor-hover
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
