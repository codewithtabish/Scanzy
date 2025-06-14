'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { fadeUp, scaleIn } from './animation';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br  z-0" />

      {/* Tagline Badge */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="z-10 mb-4"
      >
        <p className="inline-block px-4 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full backdrop-blur">
          AI-Powered Content Verification Platform
        </p>
      </motion.div>

      {/* Hero Heading */}
      <motion.h1
        {...fadeUp}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="z-10 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight max-w-4xl leading-tight"
      >
        Build Trust with <span className="text-primary">Authentic Content</span>
      </motion.h1>

      {/* Hero Subtext */}
      <motion.p
        {...fadeUp}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="z-10 mt-6 max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-300"
      >
        Scanzy AI uses cutting-edge AI to identify plagiarized and machine-generated text in seconds—trusted by educators, publishers, and global teams.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        {...scaleIn}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="z-10 mt-8 flex flex-wrap gap-4 justify-center"
      >
        <Button className="px-6 py-3 text-base font-medium">
          Start Free Scan
        </Button>
        <Button variant="outline" className="px-6 py-3 text-base font-medium">
          Request a Demo
        </Button>
      </motion.div>
    </section>
  );
}
