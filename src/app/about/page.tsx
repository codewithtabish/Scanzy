// For App Router: app/about/page.tsx
import BackButton from '@/components/custom/back-comp';
import { Metadata } from 'next';
import Head from 'next/head';
import AboutPageComp from './_components/about-comp';

export const metadata: Metadata = {
  title: 'About Us - SynthMind AI',
};

export default function AboutPage() {
  return (
    <>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
      </Head>

   <BackButton/>

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
      <AboutPageComp/>
  
    </>
  );
}
