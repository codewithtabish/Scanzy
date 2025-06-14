'use client'
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"
import OurStory from "./about-story"
import OurMission from "./our-mission"
import InstructorsSection from "./instructor-section"

export default function AboutPageComp() {
  return (
    <main className="md:max-w-6xl mx-auto px-6 py-16 space-y-20">
   <OurStory/>
   <OurMission/>
   <InstructorsSection/>


    
    </main>
  )
}