import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const faqs = [
  {
    question: "What is this AI SaaS platform used for?",
    answer:
      "This platform offers powerful AI tools like content detection, plagiarism checking, keyword extraction, and more to help creators, students, and professionals work faster and smarter.",
  },
  {
    question: "How does the AI content detector work?",
    answer:
      "Our AI analyzes text to predict whether it was written by a human or AI using advanced language pattern recognition and probability scoring.",
  },
  {
    question: "Is the plagiarism checker reliable?",
    answer:
      "Yes, our plagiarism checker scans text across a wide database to detect similarities, ensuring your content is original and properly referenced.",
  },
  {
    question: "Are my documents and data secure?",
    answer:
      "Absolutely. All uploads are encrypted and processed securely. We do not store your data or share it with any third parties.",
  },
  {
    question: "Do I need to sign up to use the tools?",
    answer:
      "Some tools are available for free, but creating an account unlocks full features, higher limits, and saved history for your work.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-center font-headline text-3xl sm:text-4xl font-semibold mb-6">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map(({ question, answer }, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>
              <p className="text-sm leading-relaxed">{answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQ;
