// app/about/page.tsx
import BackButton from '@/components/custom/back-comp'
import { Metadata } from 'next'
import AboutPageComp from './_components/about-comp'


export const metadata: Metadata = {
  title: 'About Us – Scanzy AI',
  description:
    'Learn more about Scanzy AI, our mission to promote originality, and how our tools empower writers, students, and professionals worldwide.',
  keywords: [
    'About Scanzy AI',
    'Scanzy AI story',
    'Scanzy company background',
    'Who built Scanzy AI',
    'Meet the Scanzy team',
    'Scanzy mission statement',
    'Scanzy AI vision',
    'AI originality tools team',
    'Scanzy team values',
    'Scanzy AI purpose',
    'AI tools for writers',
    'AI tools for students',
    'Scanzy journey',
    'AI detection founders',
    'Originality checker company',
    'Scanzy AI background',
    'AI-powered writing tools',
    'Scanzy ethical AI',
    'AI tool development team',
    'About AI detection tool',
    'Scanzy plagiarism prevention',
    'Scanzy content tools company',
    'Who we are Scanzy AI',
    'About the developers of Scanzy',
    'Scanzy development story',
    'Scanzy platform creators',
    'Ethical AI writing tools',
    'Scanzy AI creators',
    'The team behind Scanzy AI',
    'Why Scanzy was created',
    'Company behind plagiarism detector',
    'Scanzy company overview',
    'Scanzy founders',
    'Scanzy integrity mission',
    'Scanzy originality promise',
    'Scanzy transparency values',
    'Scanzy support writers',
    'Scanzy empower students',
    'Scanzy help professionals',
    'AI detection ethics',
    'AI detection transparency',
    'Scanzy innovation in education',
    'Scanzy for academic honesty',
    'Scanzy values-driven tech',
    'Scanzy student-first approach',
    'Scanzy teacher resource tool',
    'Scanzy honesty in writing',
    'Scanzy tech with purpose',
    'Scanzy development vision',
    'Scanzy’s impact',
    'Why trust Scanzy',
    'About Scanzy brand',
    'Who made Scanzy',
    'Scanzy AI mission-driven',
    'Scanzy academic support',
    'Scanzy anti-plagiarism efforts',
    'Scanzy AI evolution',
    'Scanzy brand journey',
    'Scanzy values-driven brand',
    'Scanzy company culture',
    'Scanzy tech founders',
    'Scanzy commitment to originality',
    'Scanzy user trust',
    'About Scanzy developers',
    'Scanzy startup info',
    'AI in education',
    'AI writing transparency',
    'Ethical tech company',
    'Scanzy education tools',
    'Next-gen AI tools for writing',
    'Scanzy innovation values',
    'Scanzy knowledge base',
  ],
  alternates: {
    canonical: 'https://scanzy.fun/about',
  },
  openGraph: {
    title: 'About Us – Scanzy AI',
    description:
      'Get to know Scanzy AI’s journey, mission, and values behind building powerful content tools.',
    url: 'https://scanzy.fun/about',
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
    title: 'About Us – Scanzy AI',
    description:
      'Discover the people and purpose behind Scanzy AI – empowering content creators with AI tools.',
    images: ['https://scanzy.fun/og-image.png'],
  },
};

export default function AboutPage() {
  return (
    <>
      <BackButton />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#0f172a] via-[#1e3a8a] to-[#0f172a] dark:from-[#020617] dark:via-[#334155] dark:to-[#020617] py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white dark:text-slate-100">
            About Scanzy AI
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 text-slate-100 dark:text-slate-300">
            Empowering originality and integrity through cutting-edge AI solutions for the modern world.
          </p>
        </div>
      </header>

      {/* Content Sections */}
      <AboutPageComp />
    </>
  )
}
