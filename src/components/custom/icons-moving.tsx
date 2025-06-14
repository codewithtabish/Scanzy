'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import {
  Cloud,
  Text,
  Rocket,
  Zap,
  Star,
  Heart,
  Smile,
  CheckCircle,
  Loader2,
  Wifi,
  AlarmClock,
  BookOpen,
  Bolt,
  Sun,
  Moon,
  Code,
  Layers,
  Lock,
  Mail,
  MessageCircle,
} from 'lucide-react'

const icons = [
  Cloud,
  Text,
  Rocket,
  Zap,
  Star,
  Heart,
  Smile,
  CheckCircle,
  Loader2,
  Wifi,
  AlarmClock,
  BookOpen,
  Bolt,
  Sun,
  Moon,
  Code,
  Layers,
  Lock,
  Mail,
  MessageCircle,
]

const colors = [
  'bg-rose-300',
  'bg-pink-300',
  'bg-purple-300',
  'bg-blue-300',
  'bg-cyan-300',
  'bg-teal-300',
  'bg-lime-300',
  'bg-amber-300',
  'bg-orange-300',
  'bg-red-300',
  'bg-rose-400',
  'bg-pink-400',
  'bg-purple-400',
  'bg-blue-400',
  'bg-cyan-400',
  'bg-teal-400',
  'bg-lime-400',
  'bg-amber-400',
  'bg-orange-400',
  'bg-red-400',
]

export default function HeroSectionIconMoving() {
  const repeatedIcons = Array(5).fill(icons).flat()

  const getSpeed = (row: number) => 15 + row * 2

  return (
    <div className="relative text-white py-24 text-center overflow-hidden">
      {/* Moving Icons Rows */}
      <div className="absolute inset-0 flex flex-col gap-6 pointer-events-none">
        {[0, 1, 2, 3].map((row) => (
          <motion.div
            key={row}
            className="grid grid-cols-[repeat(auto-fill,minmax(3.5rem,1fr))] gap-4 w-max"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: getSpeed(row),
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {repeatedIcons.map((Icon, i) => (
              <div
                key={i + row * 1000}
                className={`w-14 h-14 rounded-xl ${colors[i % colors.length]} dark:bg-white/10 flex items-center justify-center shadow-md`}
              >
                <Icon className="w-6 h-6 text-black dark:text-white" />
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Overlay & Content */}
      <div className="relative z-10 dark:bg-black/70 bg-white/80 backdrop-blur-md p-8 rounded-4xl border shadow-2xl max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Detect AI-written content in seconds.
        </h1>
        <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
          Start your 7-day free trial—no credit card needed.
        </p>
        <Button className="text-lg px-6 py-3">
          Try It Now →
        </Button>
      </div>
    </div>
  )
}
