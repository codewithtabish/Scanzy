'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const missionItems = [
  {
    icon: 'fa-brain',
    title: 'AI Content Detection',
    desc: 'Uses intelligent algorithms to detect and highlight AI-generated content with exceptional precision.',
  },
  {
    icon: 'fa-check-circle',
    title: 'Plagiarism Checker',
    desc: 'Scans millions of sources to detect even subtle plagiarism, ensuring content originality.',
  },
  {
    icon: 'fa-robot',
    title: 'Ethical AI Technology',
    desc: 'Built on transparency and fairness, our tech ensures unbiased and trustworthy analysis.',
  },
];

const OurMission = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-primary-50  rounded-xl p-12"
    >
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-dark dark:text-white mb-6">Our Mission</h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-10">
          Scanzy AI empowers users with tools that promote originality, uphold ethical standards, and deliver transparent insights in the age of AI.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {missionItems.map((item, index) => (
            <Card key={index} className="w-full sm:w-64 shadow-lg bg-white dark:bg-gray-800">
              <CardContent className="text-center py-6 px-4">
                <div className="text-primary-600 dark:text-primary-400 mb-4">
                  <i className={`fas ${item.icon} text-3xl`} aria-hidden="true"></i>
                </div>
                <h3 className="font-semibold text-lg text-dark dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default OurMission;
