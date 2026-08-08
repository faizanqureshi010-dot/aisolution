'use client';

import { useEffect } from 'react';
import Button from '@/components/ui/Button';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // In production this would report to an error-tracking service.
    // No fabricated logging destination is wired up here.
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center px-8 py-24 text-center">
      <div className="font-mono-label text-xs text-danger">Something went wrong</div>
      <h1 className="font-display mt-4 text-h1">This page hit an unexpected error.</h1>
      <p className="mt-4 max-w-md text-slate">Try again, or head back to the homepage if the problem continues.</p>
      <div className="mt-8 flex gap-4">
        <Button onClick={reset} size="lg">
          Try Again
        </Button>
        <Button href="/" variant="secondary">
          Back to Home
        </Button>
      </div>
    </main>
  );
}
