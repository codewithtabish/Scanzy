'use client';

import { Skeleton } from '@/components/ui/skeleton';

export default function BlogLoading() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-6">
      {/* Title */}
      <Skeleton className="h-10 w-3/4 rounded-md" />

      {/* Banner Image */}
      <Skeleton className="h-[400px] w-full rounded-lg" />

      {/* Description */}
      <Skeleton className="h-6 w-2/3 mt-6" />

      {/* Content Skeletons */}
      <div className="space-y-4 mt-8">
        <Skeleton className="h-5 w-full" />
        <Skeleton className="h-5 w-11/12" />
        <Skeleton className="h-5 w-10/12" />
        <Skeleton className="h-64 w-full rounded-md" />
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-5 w-1/2" />
        <Skeleton className="h-5 w-3/4" />
      </div>
    </div>
  );
}
