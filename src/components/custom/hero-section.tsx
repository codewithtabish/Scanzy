'use client';

import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full  flex items-center justify-center min-h-screen relative overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 z-0" />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-36 left-1/2 transform -translate-x-1/2 z-20"
      >
        <Badge variant="outline" className="text-primary px-4 py-2 text-sm backdrop-blur">
          ✨ Jetson AI – AI & Plagiarism Detection SaaS 
        </Badge>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 container mx-auto px-4 text-center"
      >
        <h1 className="mb-6 text-4xl md:max-w-[70%] md:pt-44 mx-auto font-bold tracking-tight sm:text-5xl md:text-6xl leading-tight">
          Make{" "}
          <span className="relative whitespace-nowrap text-primary">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-pink-400/70 dark:fill-pink-300/60"
              preserveAspectRatio="none"
            >
              <path d="..." />
            </svg>
            <span className="relative">Detection Smarter again</span>
          </span>{" "}
          with SCANZY AI
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-lg">
          Experience fast, accurate AI-generated content detection and plagiarism analysis in one powerful SaaS...
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center md:max-w-1/2 mx-auto mt-8"
        >
          <Button className="md:w-1/2 cursor-pointer">Get Started</Button>
        </motion.div>
      </motion.div>

    
    </section>
  );
}
