"use client"

import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="md:max-w-7xl w-full mx-auto md:py-24 px-4 space-y-8">
      {/* Top Card Skeleton */}
      <div className="flex flex-col items-center justify-center text-center p-4 md:p-8">
        <Skeleton className="h-10 w-60 rounded-lg" />
        <Skeleton className="h-4 w-96 mt-4 rounded-md" />
      </div>

      {/* Detector Card Skeleton */}
      <div className="w-full max-w-3xl mx-auto space-y-6 p-6 rounded-xl border">
        {/* Avatar Dropdown Skeleton */}
        <div className="flex justify-end">
          <Skeleton className="w-10 h-10 rounded-full" />
        </div>

        {/* Text Area Skeleton */}
        <div className="relative">
          <Skeleton className="absolute top-2 left-4 h-3 w-40" />
          <Skeleton className="h-[300px] w-full rounded-lg" />
        </div>

        {/* Buttons Skeleton */}
        <div className="flex justify-end gap-2">
          <Skeleton className="h-8 w-24 rounded-full" />
        </div>

        {/* Provider Selection Skeleton */}
        <div className="flex justify-end">
          <div className="space-y-3 text-right max-w-md">
            <Skeleton className="h-4 w-40" />
            <div className="flex gap-4 justify-end">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-28" />
            </div>
          </div>
        </div>

        {/* Results Section Skeleton */}
        <div className="grid gap-6 mt-6 md:grid-cols-2">
          <Skeleton className="h-40 w-full rounded-lg" />
          <Skeleton className="h-40 w-full rounded-lg" />
        </div>
      </div>
    </div>
  )
}
