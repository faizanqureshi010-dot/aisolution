import { Skeleton } from '@/components/ui/States';

export default function Loading() {
  return (
    <div className="mx-auto max-w-container space-y-6 px-8 py-24">
      <Skeleton className="h-10 w-2/3" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-5/6" />
      <div className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-3">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    </div>
  );
}
