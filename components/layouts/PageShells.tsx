import { cn } from '@/lib/cn';
import Footer from '@/components/Footer';
import { Breadcrumb } from '@/components/ui/Layout';

interface EnterprisePageProps {
  children: React.ReactNode;
  breadcrumb?: { label: string; href?: string }[];
  className?: string;
}

/**
 * Base shell every page-type wrapper below composes from.
 * Handles: <main> landmark, optional breadcrumb, footer, consistent container.
 */
export function EnterprisePage({ children, breadcrumb, className }: EnterprisePageProps) {
  return (
    <>
      <main id="main" className={cn(className)}>
        {breadcrumb && <Breadcrumb items={breadcrumb} />}
        {children}
      </main>
      <Footer />
    </>
  );
}

// Named variants — same shell, semantic naming per page type so intent is clear at call sites.
export function ProductPage(props: EnterprisePageProps) {
  return <EnterprisePage {...props} />;
}
export function IndustryPage(props: EnterprisePageProps) {
  return <EnterprisePage {...props} />;
}
export function ResourcePage(props: EnterprisePageProps) {
  return <EnterprisePage {...props} />;
}
export function LegalPage({ children, breadcrumb }: EnterprisePageProps) {
  return (
    <EnterprisePage breadcrumb={breadcrumb}>
      <div className="mx-auto max-w-[760px] px-8 py-16">{children}</div>
    </EnterprisePage>
  );
}
