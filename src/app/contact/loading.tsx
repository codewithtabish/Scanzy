'use client';

import { Skeleton } from '@/components/ui/skeleton';

export default function ContactLoading() {
  return (
    <section className="mb-32 text-gray-400">
      {/* Map Skeleton */}
      <div className="relative h-[300px] overflow-hidden">
        <Skeleton className="w-full h-full" />
      </div>

      {/* Form and Info Section */}
      <div className="container px-6 md:px-12 -mt-[100px]">
        <div className="rounded-lg px-6 py-12 shadow-xl backdrop-blur-md border border-border md:py-16 md:px-12 bg-background text-foreground">
          <div className="flex flex-wrap gap-8">
            {/* Form */}
            <div className="w-full lg:w-5/12 space-y-6">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-24 w-full" />
              <div className="flex items-center space-x-2">
                <Skeleton className="h-5 w-5 rounded-sm" />
                <Skeleton className="h-4 w-3/5" />
              </div>
              <Skeleton className="h-10 w-full" />
            </div>

            {/* Info Boxes */}
            <div className="w-full lg:w-6/12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="p-4 border border-border rounded-md space-y-2">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
