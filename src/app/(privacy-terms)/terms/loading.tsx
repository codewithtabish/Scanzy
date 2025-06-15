'use client';

import { Skeleton } from '@/components/ui/skeleton';

export default function TermsLoading() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-base space-y-6">
      <Skeleton className="h-8 w-40" /> {/* Back button placeholder */}
      <Skeleton className="h-10 w-3/4" /> {/* Page Title */}

      {[...Array(11)].map((_, index) => (
        <div key={index} className="space-y-2">
          <Skeleton className="h-6 w-2/3" /> {/* Section Title */}
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      ))}

      <Skeleton className="h-4 w-1/2" /> {/* Footer info */}
    </main>
  );
}
