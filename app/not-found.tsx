import Link from 'next/link';
import Button from '@/components/ui/Button';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <main id="main" className="flex min-h-[60vh] flex-col items-center justify-center px-8 py-24 text-center">
        <div className="font-mono-label text-xs text-blue">404</div>
        <h1 className="font-display mt-4 text-h1">This page doesn&rsquo;t exist.</h1>
        <p className="mt-4 max-w-md text-slate">
          The page you&rsquo;re looking for may have moved, or the link may be out of date.
        </p>
        <div className="mt-8 flex gap-4">
          <Button href="/" size="lg">
            Back to Home
          </Button>
          <Link href="/contact" data-cursor-hover className="flex items-center text-sm text-slate hover:text-ink">
            Contact Us →
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
