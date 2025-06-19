import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/custom/theme-provider'
import { ClerkProvider } from '@clerk/nextjs'
import Head from 'next/head'
import { Analytics } from "@vercel/analytics/next"
import Script from 'next/script'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Scanzy AI – Free AI Content Detection, Plagiarism Checker & Text Tools',
  description: 'Scanzy AI offers powerful free tools like AI content detector, plagiarism checker, paraphrasing checker, sentence rewriter, grammar fixer, article summarizer, and more to boost your writing and content quality.',
  keywords: [
    'Scanzy AI',
    'AI content detector',
    'AI content detection',
    'Plagiarism checker',
    'Check for plagiarism',
    'Plagiarism detector',
    'Content originality',
    'Free AI detector',
    'AI-generated content checker',
    'AI detection tool',
    'Check content for AI',
    'GPT detector',
    'ChatGPT content detector',
    'AI plagiarism tool',
    'AI vs human content',
    'Detect AI writing',
    'Free plagiarism tool',
    'AI writing analysis',
    'Text rewriter',
    'Sentence rewriter',
    'Grammar checker',
    'Paraphrasing tool',
    'Article summarizer',
    'Essay checker',
    'SEO content analysis',
    'AI content analysis',
    'Text quality checker',
    'Readability checker',
    'AI grammar fixer',
    'Academic writing tool',
    'Blog writing helper',
    'Copywriting assistant',
    'Text improvement tool',
    'Rewrite text online',
    'Summarize text free',
    'Grammar correction tool',
    'Check writing quality',
    'AI detector free',
    'Detect GPT content',
    'Scan text for plagiarism',
    'AI writing scanner',
    'AI text checker',
    'Fix grammar AI',
    'Improve sentences AI',
    'Free text tools online',
    'Scan content instantly',
    'AI writing checker',
    'GPT plagiarism check',
    'AI rewriter tool',
    'Scan for AI traces',
    'AI checker online',
    'Human vs AI content',
    'Language fixer tool',
    'Originality checker',
    'Academic integrity',
    'GPT essay detector',
    'AI scan for students',
    'Free writing tools',
    'Rewrite AI text',
    'Paraphrasing checker',
    'Scan for duplicate text',
    'AI-generated essay checker',
    'GPT content analysis',
    'Detect chatgpt content',
    'Check for fake AI content',
    'AI checker for teachers',
    'Edu content scanner',
    'Blog AI detector',
    'Check AI-written article',
    'Text scanner AI',
    'Detect AI in student work',
    'Writing assistant online',
    'AI scan tool',
    'Copy AI detector',
    'GPT3 GPT4 detector',
    'AI plagiarism fix',
    'AI checker SaaS',
    'Next.js SEO tool',
    'Content rewriting AI',
    'AI text summarizer',
    'Grammar and style tool',
    'Scanzy AI text tools',
    'Plagiarism check SaaS',
    'Content scanner app',
    'Human content proof',
    'AI writing proof',
    'Tool for writers',
    'Online content check',
    'Scan AI content free',
    'Freemium AI detection',
    'SEO tool for writers',
    'English grammar AI',
    'Edit writing online',
    'Writing quality scanner',
    'Detect fake AI content',
    'AI education tool',
    'Digital writing tools',
    'Summarize essay AI',
    'Detect AI in articles',
    'AI scanner for blogs',
    'Check grammar and rewrite',
    'Best AI content tool',
    'Free GPT checker',
    'Rewrite GPT content',
    'Detect academic AI content',
    'Text integrity tool',
    'Improve content readability',
    'Scanzy plagiarism detector',
    'AI text fixer',
    'SaaS tool for education',
    'Next.js AI SaaS',
    'Next SEO setup',
    // (…you can add more or let me know if you want a downloadable list)
  ],
  alternates: {
    canonical: 'https://scanzy.fun',
  },
  openGraph: {
    title: 'Scanzy AI – Free AI Content Detection & Plagiarism Tools',
    description: 'Use Scanzy AI for detecting AI-generated content, checking plagiarism, rewriting text, summarizing, and improving grammar – all free and easy to use.',
    url: 'https://scanzy.fun',
    siteName: 'Scanzy AI',
    images: [
      {
        url: 'https://scanzy.fun/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Scanzy AI Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scanzy AI – AI Detector, Plagiarism Checker, Rewriter Tools',
    description: 'Scanzy AI helps you analyze, improve, and verify your content with tools like AI detector, plagiarism scanner, and grammar fixer.',
    images: ['https://scanzy.fun/og-image.png'],
    // creator: '@your_twitter_handle', // Optional
  },
};


export  default async function RootLayout ({

  children
}: Readonly<{
  children: React.ReactNode
}>) 



{



  return (
    <ClerkProvider>
      <html lang='en'>
        <Head>
          {/* Extra meta tags not handled by Next metadata */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="author" content="TALHA TABISH - CODEWITHTABISH" />
          <meta name="copyright" content="© 2025 Scanzy.fun" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#0ea5e9" />
          <meta property="fb:app_id" content="YOUR_FACEBOOK_APP_ID" />
          {/* <Script
          src="https://app.lemonsqueezy.com/js/lemon.js"
          strategy="afterInteractive"
          onLoad={() => {
            // Optional: extra initialization
            if (typeof window !== 'undefined' && (window as any).LemonSqueezy) {
              ;(window as any).LemonSqueezy.Setup({})
            }
          }}
        /> */}
          {/* <script src="https://assets.lemonsqueezy.com/lemon.js" defer></script> */}

         {/* <Script src="https://app.lemonsqueezy.com/js/lemon.js" strategy="afterInteractive" /> */}
          
          {/* Optional icons */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        </Head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <main className='  dark:text-gray-300'>
              {children}
              <Analytics />
            </main>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
