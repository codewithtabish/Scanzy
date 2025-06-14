'use client';

import { motion } from 'framer-motion';

const stats = [
  { title: 'AI Scans Completed', value: '250,000+' },
  { title: 'Plagiarism Reports Generated', value: '120,000+' },
  { title: 'Trusted by Users Worldwide', value: '75,000+' },
  { title: 'Documents Analyzed Daily', value: '10,000+' },
];

export default function StatsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center space-y-4"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Trusted AI for Content Integrity
          </h2>
          <p className="text-lg leading-8 text-muted-foreground">
            Empowering writers, educators, and professionals to detect AI-generated content, check for plagiarism, and ensure originality.
          </p>
        </motion.div>

        <dl className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ title, value }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="flex flex-col items-center bg-gray-100 dark:bg-white/5 p-8 rounded-2xl shadow"
            >
              <dt className="text-sm font-medium text-muted-foreground">{title}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight">{value}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
