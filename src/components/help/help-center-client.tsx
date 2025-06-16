'use client';

import BackButton from '@/components/custom/back-comp';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

const helpCategories = [
  {
    title: 'Getting Started',
    description: 'Learn how to set up your account and run your first scan.',
    link: '/help/getting-started',
  },
  {
    title: 'Billing & Subscriptions',
    description: 'How plans work, payment methods, and refunds.',
    link: '/help/billing',
  },
  {
    title: 'Troubleshooting',
    description: 'Fix issues with scans, logins, or reports.',
    link: '/help/troubleshooting',
  },
];

const faqs = [
  {
    question: 'How accurate is Scanzy AI?',
    answer: 'Scanzy AI has a 94.3% F1-score and less than 4.6% false positives on real-world datasets.',
  },
  {
    question: 'Is my text stored?',
    answer: 'No — all analysis happens in-memory and is discarded immediately unless you save it manually.',
  },
  {
    question: 'How do I cancel my subscription?',
    answer: 'You can cancel anytime from your dashboard under “Billing”. Access continues until your billing period ends.',
  },
];

export default function HelpCenterClient() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <BackButton />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-bold">Help Center</h1>
        <p className="text-gray-500 mt-2">Find answers, guides, and resources for Scanzy AI.</p>
      </motion.div>

      <div className="max-w-lg mx-auto mb-12">
        {/* Could add a search input here if you want */}
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {helpCategories.map((cat, idx) => (
          <Link
            key={idx}
            href={cat.link}
            className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{cat.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{cat.description}</p>
          </Link>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} value={`faq-${idx}`} className="border rounded-lg px-4">
            <AccordionTrigger className="text-base font-medium">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="text-center mt-16 border-t pt-8">
        <p className="text-gray-400 mb-2">Still need help?</p>
        <Button variant="outline" className="w-[300px]">
          <Link href="/contact">Contact Us</Link>
        </Button>
        <p className="mt-4 text-sm text-gray-500">
          Or email us at <a href="mailto:support@scanzy.ai" className="underline">support@scanzy.ai</a>
        </p>
      </div>
    </div>
  );
}
