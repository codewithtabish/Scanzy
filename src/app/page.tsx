'use server'
import { AnimatedBeamDemo } from '@/components/custom/animated-beams'
import CallToAction from '@/components/custom/call-to-action'
import FAQ from '@/components/custom/faq'
import FeaturesSection from '@/components/custom/feature-section'
import FeedbackSection from '@/components/custom/feedbacks'
import Footer from '@/components/custom/footer'
import Header from '@/components/custom/header'
import Hero from '@/components/custom/hero-section'
import HeroVideo from '@/components/custom/hero-video'
import HowItWorks from '@/components/custom/how-it-work'
import HeroSectionIconMoving from '@/components/custom/icons-moving'
import Pricing from '@/components/custom/pricing'
import StatsSection from '@/components/custom/state-section'
import React from 'react'

const HomePage = async() => {
  // await checkAuthAndRedirect()
  return (
    <div className='md:max-w-6xl mx-auto md:px-3 px-5'>

      <Header/>
      <div className='space-y-20'>

      <Hero/>
      <HeroVideo/>
      <HowItWorks/>
      <StatsSection/>
      <AnimatedBeamDemo/>
      <FeaturesSection/>
      <FeedbackSection/>
      <FAQ/>
      <Pricing/>
      <CallToAction/>
      <Footer/>
      {/* <HeroSectionIconMoving/> */}
 </div>
      
     
    </div>
  )
}

export default HomePage
