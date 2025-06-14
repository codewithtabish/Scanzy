'use client';

import BackButton from '@/components/custom/back-comp';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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

const guides = [
  {
    title: 'How to use Scanzy AI for university work',
    summary: 'A step-by-step guide on checking essays and citations.',
    link: '/help/scanzy-for-students',
  },
  {
    title: 'Understanding your AI detection report',
    summary: 'Learn how to interpret the results and what each score means.',
    link: '/help/report-guide',
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

export default function HelpCenterPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
        <BackButton/>
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
        {/* <Input placeholder="Search help articles..." className="rounded-xl px-4 py-3 shadow-md" /> */}
      </div>

      {/* Categories Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {helpCategories.map((cat, idx) => (
          <Link
            key={idx}
            href={cat.link}
            className="border  rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{cat.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{cat.description}</p>
          </Link>
        ))}
      </div>

      {/* Featured Guides */}
      {/* <h2 className="text-xl font-semibold mb-6">Featured Guides</h2>
      <div className="space-y-4 mb-16">
        {guides.map((g, idx) => (
          <Link
            key={idx}
            href={g.link}
            className="block border-l-4 border-primary pl-4 py-2  rounded transition"
          >
            <h4 className="font-medium">{g.title}</h4>
            <p className="text-sm text-gray-500">{g.summary}</p>
          </Link>
        ))}
      </div> */}

      {/* FAQ Section */}
      <h2 className="text-xl font-semibold mb-6">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} value={`faq-${idx}`} className="border rounded-lg px-4">
            <AccordionTrigger className="text-base font-medium">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Contact CTA */}
      <div className="text-center mt-16 border-t pt-8">
        <p className="text-gray-400 mb-2">Still need help?</p>
        <Button variant={'outline'} className='w-[300px]'>

        <Link
          href="/contact"
        //   className="bg-primary px-6 py-3 w-full rounded-full text-white font-semibold hover:bg-primary-dark transition"
          >
          Contact Us
        </Link>
            </Button>
        <p className="mt-4 text-sm text-gray-500">Or email us at <a href="mailto:support@scanzy.ai" className="underline">support@scanzy.ai</a></p>
      </div>
    </div>
  );
}
