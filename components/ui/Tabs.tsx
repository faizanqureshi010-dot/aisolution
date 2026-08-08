'use client';

import { createContext, useContext, useState, useId, KeyboardEvent } from 'react';
import { cn } from '@/lib/cn';

interface TabsContextValue {
  active: string;
  setActive: (v: string) => void;
  name: string;
}
const TabsContext = createContext<TabsContextValue | null>(null);

export function Tabs({
  defaultValue,
  children,
  className,
}: {
  defaultValue: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [active, setActive] = useState(defaultValue);
  const name = useId();
  return (
    <TabsContext.Provider value={{ active, setActive, name }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children }: { children: React.ReactNode }) {
  return (
    <div role="tablist" className="flex flex-wrap gap-2 border-b border-line pb-4">
      {children}
    </div>
  );
}

export function TabsTrigger({ value, children }: { value: string; children: React.ReactNode }) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('TabsTrigger must be used within Tabs');
  const isActive = ctx.active === value;

  function onKeyDown(e: KeyboardEvent<HTMLButtonElement>) {
    const list = (e.currentTarget.parentElement?.children ?? []) as HTMLCollectionOf<HTMLButtonElement>;
    const idx = Array.from(list).indexOf(e.currentTarget);
    if (e.key === 'ArrowRight') list[(idx + 1) % list.length]?.focus();
    if (e.key === 'ArrowLeft') list[(idx - 1 + list.length) % list.length]?.focus();
  }

  return (
    <button
      role="tab"
      aria-selected={isActive}
      data-cursor-hover
      onClick={() => ctx.setActive(value)}
      onKeyDown={onKeyDown}
      className={cn(
        'rounded-full px-4 py-2 text-sm font-medium transition-colors duration-150',
        isActive ? 'bg-brand-gradient text-paper' : 'text-slate hover:text-ink'
      )}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children }: { value: string; children: React.ReactNode }) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error('TabsContent must be used within Tabs');
  if (ctx.active !== value) return null;
  return (
    <div role="tabpanel" className="mt-8">
      {children}
    </div>
  );
}
