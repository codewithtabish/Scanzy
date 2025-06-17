'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { fadeUp, scaleIn } from './animation';
import { SignedOut, SignInButton } from '@clerk/nextjs';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[80vh] sm:min-h-screen px-4 text-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br z-0" />

      {/* Tagline Badge */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="z-10 mb-3 sm:mb-4"
      >
        <p className="inline-block px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium text-primary bg-primary/10 rounded-full backdrop-blur">
          AI-Powered Content Verification Platform
        </p>
      </motion.div>

      {/* Hero Heading */}
      <motion.h1
        {...fadeUp}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="z-10 text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight max-w-xl sm:max-w-3xl md:max-w-4xl leading-tight"
      >
        Build Trust with <span className="text-primary">Authentic Content</span>
      </motion.h1>

      {/* Hero Subtext */}
      <motion.p
        {...fadeUp}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="z-10 mt-4 sm:mt-6 max-w-md sm:max-w-xl text-sm sm:text-base text-gray-600 dark:text-gray-300"
      >
        Scanzy AI uses cutting-edge AI to identify plagiarized and machine-generated text in seconds—trusted by educators, publishers, and global teams.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        {...scaleIn}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="z-10 mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center"
      >
        <SignedOut>
          <SignInButton>
            <Button className="px-5 py-2.5 text-sm sm:text-base font-medium">
              Start Free Scan
            </Button>
          </SignInButton>
        </SignedOut>
      </motion.div>
    </section>
  );
}
