export function LegalPlaceholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded bg-pink/10 px-1.5 py-0.5 font-mono text-[13px] text-pink">
      {children}
    </span>
  );
}

export function LegalSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-11">
      <h2 className="font-display text-h3">{title}</h2>
      <div className="mt-3 space-y-3 text-body-sm leading-relaxed text-slate">{children}</div>
    </section>
  );
}

export function LegalUpdated({ date = '[Insert Effective Date]' }: { date?: string }) {
  return (
    <div className="font-mono-label mb-2 text-xs text-slate">
      Last updated: <LegalPlaceholder>{date}</LegalPlaceholder>
    </div>
  );
}
