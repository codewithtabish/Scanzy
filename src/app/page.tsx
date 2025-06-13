import Header from '@/components/custom/header'
import Hero from '@/components/custom/hero-section'
import HeroVideo from '@/components/custom/hero-video'
import React from 'react'

const HomePage = () => {
  return (
    <div className='md:max-w-6xl mx-auto md:px-3 px-5'>
      <Header/>
      <Hero/>
      <HeroVideo/>
     
    </div>
  )
}

export default HomePage
