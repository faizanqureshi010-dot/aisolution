'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Dialog from '@/components/ui/Dialog';
import { SearchField } from '@/components/ui/Filters';
import { accordionContent } from '@/lib/motion';
import { cn } from '@/lib/cn';

export type ConnectorStatus = 'live' | 'in-progress' | 'coming-soon';

export interface ConnectorItem {
  name: string;
  status: ConnectorStatus;
  description?: string;
  actions?: string[];
  domain?: string;
}

export function ConnectorIcon({ domain, name }: { domain?: string; name: string }) {
  if (!domain) {
    return (
      <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-panel text-xs font-semibold text-slate">
        {name.charAt(0)}
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://www.google.com/s2/favicons?domain=${domain}&sz=64`}
      alt=""
      width={28}
      height={28}
      className="h-7 w-7 flex-shrink-0 rounded-md bg-white object-contain p-1"
      loading="lazy"
    />
  );
}

export function ConnectorStatusBadge({ status }: { status: ConnectorStatus }) {
  const label = { live: 'Live', 'in-progress': 'In Progress', 'coming-soon': 'Coming Soon' }[status];
  return <Badge status={status}>{label}</Badge>;
}

export function ConnectorCard({ connector, onSelect }: { connector: ConnectorItem; onSelect?: () => void }) {
  return (
    <button
      data-cursor-hover
      onClick={onSelect}
      className="flex w-full items-center gap-3 rounded-lg border border-line bg-panel2 px-4 py-3 text-left transition-colors hover:border-blue/30"
    >
      <ConnectorIcon domain={connector.domain} name={connector.name} />
      <span className="flex-1 text-sm text-ink">{connector.name}</span>
      <ConnectorStatusBadge status={connector.status} />
    </button>
  );
}

export function ConnectorDetailPanel({
  connector,
  open,
  onClose,
}: {
  connector: ConnectorItem | null;
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onClose={onClose} title={connector?.name ?? ''}>
      {connector && (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <ConnectorIcon domain={connector.domain} name={connector.name} />
            <ConnectorStatusBadge status={connector.status} />
          </div>
          {connector.description && <p className="text-sm text-slate">{connector.description}</p>}
          {connector.actions && connector.actions.length > 0 && (
            <div>
              <div className="font-mono-label mb-2 text-xs text-slate">Supported Actions</div>
              <ul className="space-y-1.5">
                {connector.actions.map((a) => (
                  <li key={a} className="text-sm text-ink">
                    • {a}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </Dialog>
  );
}

export interface ConnectorCategoryData {
  category: string;
  connectors: ConnectorItem[];
}

/**
 * ConnectorCategoryLayout — the full collapsible-category + search pattern.
 * Data-driven: pass any category/connector set from any product page.
 */
export function ConnectorCategoryLayout({ categories }: { categories: ConnectorCategoryData[] }) {
  const [query, setQuery] = useState('');
  const [openCategory, setOpenCategory] = useState<string | null>(categories[0]?.category ?? null);
  const [selected, setSelected] = useState<ConnectorItem | null>(null);

  const filtered = useMemo(() => {
    if (!query.trim()) return categories;
    const q = query.toLowerCase();
    return categories
      .map((cat) => ({ ...cat, connectors: cat.connectors.filter((c) => c.name.toLowerCase().includes(q)) }))
      .filter((cat) => cat.connectors.length > 0);
  }, [query, categories]);

  return (
    <div>
      <SearchField value={query} onChange={setQuery} placeholder="Search connectors…" className="max-w-xs" />

      <div className="mt-8 space-y-3">
        {filtered.map((cat) => {
          const isOpen = query.trim() ? true : openCategory === cat.category;
          return (
            <div key={cat.category} className="overflow-hidden rounded-token border border-line bg-panel">
              <button
                data-cursor-hover
                onClick={() => setOpenCategory(isOpen && !query ? null : cat.category)}
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="flex items-center gap-3">
                  <span className="font-display font-semibold">{cat.category}</span>
                  <span className="font-mono-label text-xs text-slate">{cat.connectors.length}</span>
                </span>
                <ChevronDown className={cn('h-4 w-4 text-slate transition-transform', isOpen && 'rotate-180')} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div initial="hidden" animate="show" exit="hidden" variants={accordionContent}>
                    <div className="grid grid-cols-1 gap-2 px-6 pb-6 sm:grid-cols-2 lg:grid-cols-3">
                      {cat.connectors.map((c) => (
                        <ConnectorCard key={c.name} connector={c} onSelect={() => setSelected(c)} />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <ConnectorDetailPanel connector={selected} open={!!selected} onClose={() => setSelected(null)} />
    </div>
  );
}
