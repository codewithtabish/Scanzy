// "use client"

import React from "react"
import AIContentTopCard from '@/components/custom/content-detection/ai-content-top-card'
import AIDetector from '@/components/custom/content-detection/detector-toolbox'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Sparkles } from "lucide-react"
import PlagirismTopCard from "@/components/custom/plagrisim/plagrism-top-header"
import PlagiarismChecker from "@/components/custom/plagrisim/plagirsim-detection"
import { Metadata } from "next"


export const metadata:Metadata = {
  title: 'Plagiarism Checker – Scanzy AI',
  description: 'Check your text for plagiarism instantly with Scanzy AI. Our plagiarism checker scans and detects copied content with high accuracy and speed.',
  keywords: [
    'plagiarism checker',
    'online plagiarism checker',
    'free plagiarism checker',
    'best plagiarism detection tool',
    'scan text for plagiarism',
    'plagiarism detection software',
    'check copied content',
    'academic plagiarism checker',
    'plagiarism checker for students',
    'detect plagiarism online',
    'check essay for plagiarism',
    'content originality checker',
    'plagiarism scan tool',
    'text plagiarism detector',
    'plagiarism checker for writers',
    'plagiarism detection API',
    'plagiarism report generator',
    'check duplicate content',
    'plagiarism checker free online',
    'website plagiarism checker',
    'plagiarism detection for teachers',
    'plagiarism scanner for articles',
    'scan documents for plagiarism',
    'detect copied essays',
    'scan content originality',
    'plagiarism checker with percentage',
    'plagiarism check for blogs',
    'plagiarism prevention tool',
    'plagiarism verification software',
    'AI plagiarism detection',
    'Scanzy plagiarism checker',
    'plagiarism checking service',
    'plagiarism detection tool free',
    'plagiarism checker for SEO content',
    'detect content theft',
    'check content uniqueness',
    'online plagiarism detection system',
    'plagiarism detection for research papers',
    'scan academic papers for plagiarism',
    'free plagiarism checker no signup',
    'check text similarity',
    'plagiarism report download',
    'plagiarism checker tool online',
  ],
  openGraph: {
    title: 'Plagiarism Checker – Scanzy AI',
    description: 'Scanzy AI plagiarism checker scans your text quickly and accurately to find copied content and ensure originality.',
    url: 'https://scanzy.fun/plagiarism-checker',
    siteName: 'Scanzy AI',
    type: 'website',
    images: [
      {
        url: 'https://scanzy.fun/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Scanzy AI Plagiarism Checker',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Plagiarism Checker – Scanzy AI',
    description: 'Check for plagiarism online instantly with Scanzy AI’s powerful plagiarism detection tool.',
    images: ['https://scanzy.fun/og-image.png'],
  },
  alternates: {
    canonical: 'https://scanzy.fun/plagiarism-checker',
  },
  robots: {
  index: false,
  follow: false,
}

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
        <PlagirismTopCard/>
        <PlagiarismChecker/>
      </div>
    </>
  )
}

export default AIContentDetectionPage
