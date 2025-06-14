'use client'

import {
  BarChart2,
  Truck,
  Shield,
  Cloud,
  PenTool,
  Activity
} from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    title: "AI-Powered Accuracy",
    desc: "Detect plagiarism with smart algorithms that highlight copied content with precision.",
    icon: BarChart2,
    bg: "bg-purple-200"
  },
  {
    title: "Simple Integration",
    desc: "Connect easily with websites, documents, and platforms through fast API access.",
    icon: Truck,
    bg: "bg-teal-200"
  },
  {
    title: "Safe & Secure",
    desc: "All data is encrypted and private. Your files stay protected during every scan.",
    icon: Shield,
    bg: "bg-yellow-200"
  },
  {
    title: "Cloud-Based Checks",
    desc: "Run scans anywhere, anytime. No setup required — everything is handled in the cloud.",
    icon: Cloud,
    bg: "bg-red-200"
  },
  {
    title: "Easy Content Tools",
    desc: "Upload, paste, or write directly. AO works with all content types for smooth checks.",
    icon: PenTool,
    bg: "bg-green-200"
  },
  {
    title: "Fast & Reliable",
    desc: "Instant results with detailed reports. Optimized for speed without losing quality.",
    icon: Activity,
    bg: "bg-orange-200"
  }
]

export default function FeatureSection() {
  return (
    <section className="py-16" id="feature">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 sm:text-5xl"
          >
            Power-Up Your Workflow
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 text-lg text-gray-500"
          >
            Build faster, ship smarter — all with zero friction.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 mt-16 text-center sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 xl:mt-24">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`flex flex-col items-center justify-center px-6 py-10 ${
                i >= 3 ? "md:border-t border-gray-200" : ""
              } ${i % 3 !== 0 ? "md:border-l border-gray-200" : ""}`}
            >
              <div className={`w-14 h-14 rounded-full ${feature.bg} flex items-center justify-center`}>
                <feature.icon className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="mt-8 text-xl font-bold text-gray-500">{feature.title}</h3>
              <p className="mt-4 text-base text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
