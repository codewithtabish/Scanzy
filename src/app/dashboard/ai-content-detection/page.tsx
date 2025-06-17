// "use client"

import React from "react"
import AIContentTopCard from '@/components/custom/content-detection/ai-content-top-card'
import AIDetector from '@/components/custom/content-detection/detector-toolbox'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Sparkles } from "lucide-react"
import { Metadata } from "next"

export const metadata:Metadata = {
  title: 'AI Content Detection – Scanzy AI',
  description: 'Detect AI-generated content easily with Scanzy AI. Use our AI content detection tool to identify, verify, and analyze AI-written text quickly and accurately.',
  keywords: [
    'AI content detection tool',
    'AI text detection software',
    'AI writing detector',
    'AI-generated content scanner',
    'Plagiarism checker online',
    'AI plagiarism detection software',
    'Detect AI plagiarism',
    'AI writing recognition',
    'AI content authenticity check',
    'Detect AI-generated essays',
    'AI content verification tool',
    'Online AI text analyzer',
    'AI-generated text identification',
    'Scan AI-generated content',
    'AI writing detection online',
    'Detect bot-written content',
    'AI content detection free',
    'AI plagiarism checker free',
    'Scanzy AI content detector',
    'Content originality verification',
    'AI writing detector for students',
    'AI-generated content filter',
    'AI text authenticity scanner',
    'Check if text is AI generated',
    'AI content checker for blogs',
    'Detect AI-generated articles',
    'AI text detection for publishers',
    'AI content analysis software',
    'AI-powered plagiarism detection',
    'AI detection for academic papers',
    'Scan AI text for plagiarism',
    'AI writing detection API',
    'AI content scanner online free',
    'AI-generated text detection tools',
    'AI content detection for educators',
    'AI content checker for teachers',
    'AI-generated content detection system',
    'AI plagiarism report',
    'AI text originality check',
    'AI writing detection technology',
    'Scanzy AI tools',
    'AI text scanner for writers',
    'AI content verification service',
    'AI-generated content identification software',
    'Detect AI content in documents',
    'AI detection for SEO content',
    'AI content authenticity verification software',
    'AI plagiarism checker with report',
    'AI content scanning solutions',
    'AI-generated content monitor',
  ],
  openGraph: {
    title: 'AI Content Detection – Scanzy AI',
    description: 'Detect AI-generated content easily with Scanzy AI. Use our AI content detection tool to identify and verify AI-written text accurately.',
    url: 'https://scanzy.fun/ai-content-detection',
    siteName: 'Scanzy AI',
    type: 'website',
    images: [
      {
        url: 'https://scanzy.fun/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Scanzy AI Content Detection',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Content Detection – Scanzy AI',
    description: 'Scanzy AI helps you detect AI-generated content quickly and accurately. Try the best AI content detection tool online.',
    images: ['https://scanzy.fun/og-image.png'],
  },
  alternates: {
    canonical: 'https://scanzy.fun/ai-content-detection',
  },
  robots: {
    index: false,
    follow: false,
  },
};


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

        {/* <Sparkles className="w-5 h-5 text-primary" /> */}
      </div>

      {/* Main Content */}
      <div className='md:max-w-7xl w-full mx-auto md:py-24 px-4'>
        <AIContentTopCard />
        <AIDetector />
      </div>
    </>
  )
}

export default AIContentDetectionPage
