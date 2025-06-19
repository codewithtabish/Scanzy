'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { useTheme } from 'next-themes'
import { dark } from '@clerk/themes'

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(1)
    const { resolvedTheme } = useTheme()
    const clerkTheme = resolvedTheme === 'dark' ? dark : undefined

  const plans = [
    {
      title: 'Free',
      subtitle: 'Start checking content with 500 free tokens',
      price: '$0/mo',
      features: [
        'One-time 500 tokens for AI detection & plagiarism checks',
        'Basic AI content detection',
        'Limited plagiarism results',
        'Community support'
      ],
      badge: 'Your current plan is Free'
    },
    {
      title: 'Professional',
      subtitle: 'Advanced tools for writers, educators, and teams',
      price: '$12/mo',
      features: [
        '10,000 tokens/month',
        'AI detection with confidence scoring',
        'Full plagiarism reports',
        'Priority support',
        'Exportable results'
      ],
      link: 'https://scanzi-ai.lemonsqueezy.com/buy/f3180ab9-1053-4bac-a018-3e0c0b1f2e02'
    },
    {
      title: 'Enterprise',
      subtitle: 'Scalable solution with API access & team features',
      price: '$50/year',
      features: [
        'Unlimited usage',
        'API access for integration',
        'Dedicated account manager',
        'Custom team dashboards',
        '24/7 enterprise support'
      ],
      link: 'https://scanzi-ai.lemonsqueezy.com/buy/7590ac1a-34c2-46f8-9e43-5a883184470a'
    }
  ]

  return (
    <section id='pricing' className='min-h-[600px] max-w-6xl mx-auto px-6 py-12'>
      <header className='text-center mb-12'>
        <h2 className='text-4xl font-bold'>Choose Your Plan</h2>
        <p className='mt-2 max-w-xl mx-auto'>Flexible options for every user type</p>
      </header>

      <div className='flex justify-end mb-6'>
        {/* <SignedIn> */}
          {/* <UserButton /> */}
        {/* </SignedIn> */}
        <SignedOut>
          <SignInButton>
            <Badge className='cursor-pointer' variant='outline'>
              Login
            </Badge>
          </SignInButton>
        </SignedOut>
      </div>

      <div className='grid gap-8 md:grid-cols-3'>
        {plans.map((plan, index) => (
          <div
            key={index}
            onClick={() => setSelectedPlan(index)}
            className={`cursor-pointer rounded-xl border p-8 flex flex-col justify-between transition-shadow duration-300 ${
              selectedPlan === index
                ? 'border-primary border-2 shadow-lg'
                : 'border-gray-300 hover:shadow-md dark:border-gray-700'
            }`}
          >
            <div>
              <h3 className='text-2xl font-semibold mb-1'>{plan.title}</h3>
              <p className='mb-4 opacity-80'>{plan.subtitle}</p>
              <p className='text-3xl font-bold mb-6'>{plan.price}</p>

              <ul className='space-y-3'>
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className='flex items-center text-gray-700 text-sm dark:text-gray-300'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      className='w-5 h-5 mr-2 text-violet-500'
                    >
                      <path
                        fillRule='evenodd'
                        d='M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z'
                        clipRule='evenodd'
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {plan.badge ? (
              <div className='mt-6 flex justify-center'>
                <Badge variant='secondary'>{plan.badge}</Badge>
              </div>
            ) : (
              <>
             <SignedIn>
  <a href={plan.link} target="_blank" rel="noopener noreferrer" className="mt-6">
    <Button variant="outline" className="w-full bg-primary my-3 text-white cursor-pointer">
      Get Started
    </Button>
  </a>
</SignedIn>

<SignedOut>
    <SignInButton mode="modal" 
    fallbackRedirectUrl={"/dashboard/pricing"}
  
    // redirectUrl="/dashboard/pricing"
    appearance={{ baseTheme: clerkTheme }}>

  {/* <SignInButton mode='modal' redirectUrl="/dashboard/pricing"> */}
    <Button variant="outline" className="w-full bg-primary my-3 text-white mt-6 cursor-pointer">
      Login to Subscribe
    </Button>
  </SignInButton>
</SignedOut>

              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing
