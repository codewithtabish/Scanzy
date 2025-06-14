"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import BackButton from "@/components/custom/back-comp";

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden py-20">
        <BackButton/>
      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-20">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold text-blue-600"
          >
            Powering Trust in the Age of AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Scanzy is a technology company focused on restoring trust in digital content. Through advanced AI content detection and plagiarism tools, we empower users to create, verify, and share authentic content across the internet.
          </motion.p>

          <Button className="mt-4" asChild>
            <Link href="/">Explore Our Tools</Link>
          </Button>
        </div>

        {/* Mission Section */}
        <section className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            To be the global standard for authenticity in the digital era. We aim to safeguard integrity in writing, journalism, education, and content marketing through ethical, secure, and scalable solutions.
          </p>
        </section>

        {/* Core Values */}
        <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {["Transparency", "Innovation", "Privacy First", "Scalability", "Trust", "Impact"]
            .map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="rounded-xl bg-white dark:bg-gray-900 p-6 shadow border dark:border-gray-800"
              >
                <h3 className="text-lg font-semibold text-blue-600 mb-2">{value}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {value === "Transparency" && "We believe in openness with our users, partners, and community."}
                  {value === "Innovation" && "We use cutting-edge AI to stay ahead in content verification."}
                  {value === "Privacy First" && "We never store your content. Your data, your control."}
                  {value === "Scalability" && "Our tools are built to support educators to enterprises."}
                  {value === "Trust" && "Accuracy and reliability are built into every scan."}
                  {value === "Impact" && "We support truth, originality, and ethical creation online."}
                </p>
              </motion.div>
            ))}
        </section>

        {/* Leadership Section */}
        <section className="text-center space-y-6">
          <h2 className="text-3xl font-semibold">Leadership</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Founded by developers and educators, our team merges deep expertise in machine learning, content verification, and ethical AI to build tools that serve both creators and institutions.
          </p>
        </section>

        {/* Tech + Partnerships */}
        <section className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold">Built with the Best</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Scanzy is powered by advanced technologies including OpenAI models, custom LLM classifiers, and deep neural networks. We’re proudly integrated with educational platforms, publishers, and enterprise partners.
          </p>
        </section>

        {/* Footer CTA */}
        <div className="text-center pt-10">
          <h4 className="text-md text-gray-600 dark:text-gray-400">
            Join thousands who trust Scanzy for reliable, ethical, and fast content verification.
          </h4>
          {/* <Button className="mt-4" asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button> */}
        </div>
      </div>
    </main>
  );
}
