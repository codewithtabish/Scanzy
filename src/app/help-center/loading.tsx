'use client';

import { Skeleton } from '@/components/ui/skeleton';

export default function HelpLoading() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-10">
      {/* Heading */}
      <div className="space-y-3 text-center">
        <Skeleton className="h-8 w-1/3 mx-auto" />
        <Skeleton className="h-4 w-1/2 mx-auto" />
      </div>

      {/* Search Input */}
      <div className="max-w-lg mx-auto">
        <Skeleton className="h-10 w-full rounded-xl" />
      </div>

      {/* Help Categories */}
      <div className="grid md:grid-cols-3 gap-6">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="space-y-2 border p-4 rounded-xl">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="text-center space-y-2 pt-8 border-t">
        <Skeleton className="h-4 w-1/3 mx-auto" />
        <Skeleton className="h-10 w-48 mx-auto rounded" />
        <Skeleton className="h-4 w-1/2 mx-auto" />
      </div>
    </div>
  );
}
