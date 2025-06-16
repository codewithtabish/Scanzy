import SignUpClient from '@/components/auth/sign-up-client'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up – Scanzy AI',
  description: 'Create your free account on Scanzy AI and get instant access to powerful tools for AI detection, plagiarism checking, and content originality verification.',
  keywords: [
    'Scanzy sign up',
    'Scanzy AI register',
    'Create Scanzy account',
    'Sign up AI tool',
    'AI detector registration',
    'AI content checker sign up',
    'Scanzy account creation',
    'Join Scanzy AI',
    'Free AI tools access',
    'Plagiarism checker signup',
    'Originality checker register',
    'Scanzy free sign up',
    'Content authenticity tools',
    'Start using Scanzy',
    'AI content analysis tool',
    'AI writing tools account',
    'Scanzy membership',
    'Open Scanzy account',
    'AI detection platform join',
    'Educational AI tools register',
    'Professional writing checker',
    'Scanzy for students sign up',
    'Scanzy for writers register',
    'Login or Sign Up Scanzy',
    'AI verification tools register',
    'Safe content checker Scanzy',
    'Detect ChatGPT content signup',
    'AI-written text identifier',
    'Register Scanzy plagiarism app',
    'Secure content platform register',
    'Scanzy user registration form',
    'Clerk sign up Scanzy',
    'Signup page for Scanzy AI',
    'AI-generated text detector sign up',
    'Scanzy onboarding',
    'Register for writing tools',
    'Scanzy AI dashboard access',
    'AI plagiarism protection tool'
  ],
  alternates: {
    canonical: 'https://scanzy.fun/sign-up',
  },
  openGraph: {
    title: 'Sign Up – Scanzy AI',
    description: 'Register for Scanzy AI to access cutting-edge tools for detecting AI-generated and plagiarized content.',
    url: 'https://scanzy.fun/sign-up',
    siteName: 'Scanzy AI',
    images: [
      {
        url: 'https://scanzy.fun/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Scanzy AI Sign Up Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Up – Scanzy AI',
    description: 'Join Scanzy AI and start using powerful tools for AI detection and content verification.',
    images: ['https://scanzy.fun/og-image.png'],
  },
}

export default function SignUpPage() {
  return <SignUpClient />
}
