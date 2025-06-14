'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const storySections = [
  {
    image: '/images/about-2.svg',
    reverse: false,
  },
  {
    image: '/images/about-6.svg',
    reverse: true,
  },
  {
    image: '/images/about-4.svg',
    reverse: false,
  },
  {
    image: '/images/about-5.svg',
    reverse: true,
  },
];

const OurStory = () => {
  return (
    <section aria-label="Our Story" className="space-y-24 py-12 px-4 md:px-12">
      {storySections.map(({ image, reverse }, index) => (
        <section
          key={index}
          className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl font-bold text-dark dark:text-white mb-6">
              Our Journey with Scanzy AI
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Scanzy AI began with a bold idea — to build a smarter digital future where authenticity and ethics drive content creation.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              With cutting-edge tools like AI Content Detection and Plagiarism Checking, we empower students, creators, and businesses to ensure originality with confidence.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              We believe in clarity, fairness, and trust. Scanzy AI is not just a tool — it's your partner in navigating truth in an AI-driven world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <Image
              src={image}
              alt="AI detection"
              width={600}
              height={400}
              className="rounded-lg w-full h-auto"
              priority={index === 0}
            />
          </motion.div>
        </section>
      ))}
    </section>
  );
};

export default OurStory;
