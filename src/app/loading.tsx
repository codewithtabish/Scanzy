// app/loading.tsx
"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="md:max-w-6xl mx-auto md:px-3 px-5 space-y-16 py-10">
      {/* Header */}
      <div className="flex justify-between items-center py-4">
        <Skeleton className="h-10 w-32" />
        <div className="flex space-x-4">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
      </div>

      {/* Hero */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-2/3" />
          <Skeleton className="h-10 w-40" />
        </div>
        <Skeleton className="h-72 w-full" />
      </div>

      {/* Hero Video */}
      <Skeleton className="h-96 w-full rounded-xl" />

      {/* How It Works */}
      <div className="space-y-6">
        <Skeleton className="h-8 w-48 mx-auto" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-8 w-16 mx-auto" />
            <Skeleton className="h-4 w-24 mx-auto" />
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="space-y-6">
        <Skeleton className="h-8 w-48 mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-48 w-full rounded-xl" />
          ))}
        </div>
      </div>

      {/* Feedback Section */}
      <div className="space-y-2">
        <Skeleton className="h-8 w-48 mx-auto" />
        <div className="flex overflow-x-auto space-x-4 py-4">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-40 w-64 flex-shrink-0 rounded-xl" />
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="space-y-4">
        <Skeleton className="h-8 w-64 mx-auto" />
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="h-16 w-full rounded-md" />
        ))}
      </div>

      {/* Pricing */}
      <div className="space-y-6">
        <Skeleton className="h-8 w-48 mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} className="h-64 w-full rounded-xl" />
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 bg-muted px-6 py-10 rounded-xl">
        <div className="space-y-4">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-2/3" />
          <Skeleton className="h-10 w-40" />
        </div>
        <Skeleton className="h-40 w-full rounded-xl" />
      </div>

      {/* Footer */}
      <div className="border-t pt-8 space-y-4">
        <Skeleton className="h-6 w-32" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-28" />
            </div>
          ))}
        </div>
        <Skeleton className="h-4 w-48 mx-auto" />
      </div>
    </div>
  );
}
