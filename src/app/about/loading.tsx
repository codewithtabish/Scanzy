// app/about/loading.tsx

"use client";

import { Skeleton } from "@/components/ui/skeleton";
import BackButton from "@/components/custom/back-comp";

export default function AboutLoading() {
  return (
    <>
      <BackButton />

      {/* Hero Skeleton */}
      <header className="bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a] dark:from-[#020617] dark:via-[#334155] dark:to-[#020617] py-20">
        <div className="container mx-auto px-6 text-center">
          <Skeleton className="h-10 md:h-16 w-2/3 mx-auto mb-4" />
          <Skeleton className="h-6 md:h-8 w-1/2 mx-auto" />
        </div>
      </header>

      {/* Page Sections Skeleton */}
      <main className="md:max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* Story Sections */}
        {[...Array(2)].map((_, i) => (
          <section key={i} className="flex flex-col md:flex-row items-center gap-12">
            <Skeleton className="h-64 w-full md:w-1/2 rounded-lg" />
            <div className="md:w-1/2 space-y-4">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </section>
        ))}

        {/* Mission Section */}
        <section className="bg-primary-50 dark:bg-gray-800 rounded-xl p-12">
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <Skeleton className="h-8 w-1/3 mx-auto" />
            <Skeleton className="h-4 w-3/4 mx-auto" />
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-full sm:w-64 p-4 space-y-3">
                <Skeleton className="h-8 w-8 mx-auto" />
                <Skeleton className="h-5 w-3/4 mx-auto" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6 mx-auto" />
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <Skeleton className="h-8 w-1/3 mx-auto" />
            <Skeleton className="h-4 w-2/3 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="p-6 text-center space-y-4">
                <Skeleton className="h-28 w-28 rounded-full mx-auto" />
                <Skeleton className="h-5 w-1/2 mx-auto" />
                <Skeleton className="h-4 w-1/3 mx-auto" />
                <Skeleton className="h-4 w-3/4 mx-auto" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
