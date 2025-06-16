"use client"

import React from "react"
import AIContentTopCard from '@/components/custom/content-detection/ai-content-top-card'
import AIDetector from '@/components/custom/content-detection/detector-toolbox'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Sparkles } from "lucide-react"
import PlagirismTopCard from "@/components/custom/plagrisim/plagrism-top-header"
import PlagiarismChecker from "@/components/custom/plagrisim/plagirsim-detection"

const AIContentDetectionPage = () => {
  return (
    <>
      {/* Top Bar with Sidebar Trigger and Breadcrumb */}
      <div className='flex items-center justify-between px-4 py-2 border-b'>
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <Breadcrumb>
            <BreadcrumbList className="text-muted-foreground text-sm">
              <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              {/* <BreadcrumbItem>
                <BreadcrumbLink href="/tools">Tools</BreadcrumbLink>
              </BreadcrumbItem> */}
              {/* <BreadcrumbSeparator /> */}
              {/* <BreadcrumbItem>
                <BreadcrumbLink href="/dashboard/ontent-detection" className="font-medium text-foreground">
                  AI Detector
                </BreadcrumbLink>
              </BreadcrumbItem> */}
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <Sparkles className="w-5 h-5 text-primary" />
      </div>

      {/* Main Content */}
      <div className='md:max-w-7xl w-full mx-auto md:py-24 px-4'>
        <PlagirismTopCard/>
        <PlagiarismChecker/>
      </div>
    </>
  )
}

export default AIContentDetectionPage
