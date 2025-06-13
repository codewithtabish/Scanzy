'use client'

import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Boxes } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const features = [
  { title: "Task Automation", desc: "Automate repetitive tasks and save time." },
  { title: "Workflow Optimization", desc: "Optimize your processes with AI-driven insights." },
  { title: "Intelligent Scheduling", desc: "AI-powered scheduling for maximum efficiency." },
  { title: "Smart Notifications", desc: "Never miss a beat with AI-generated alerts." },
  { title: "Real-Time Analytics", desc: "Track performance with real-time metrics." },
  { title: "Predictive Insights", desc: "Use AI to forecast trends and outcomes." },
]

export default function FeatureDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover open={true} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button variant="ghost" className="font-semibold text-sm text-foreground">
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block mr-2"
            >
              <Boxes className="w-4 h-4 text-pink-500" />
            </motion.span>
            Features
          </Button>
        </motion.div>
      </PopoverTrigger>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <PopoverContent align="start" className="w-[380px] p-0 rounded-xl shadow-xl">
              <div className="grid grid-cols-2">
                {/* Left Panel */}
                <div className="p-6 border-r border-gray-100 bg-muted/30 rounded-l-xl">
                  <Boxes className="text-pink-500 mb-4 animate-bounce" />
                  <h3 className="font-bold text-lg">AI-Powered Automation</h3>
                  <p className="text-muted-foreground text-sm mt-2">
                    Streamline your workflow with intelligent automation.
                  </p>
                </div>

                {/* Right Panel with Scroll */}
                <div className="p-6 flex flex-col gap-4 max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-thumb-rounded-md">
                  {features.map((item, i) => (
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      key={item.title + i}
                      className="transition rounded-md hover:bg-accent p-3 cursor-pointer"
                    >
                      <h4 className="font-semibold text-sm">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </motion.div>
        )}
      </AnimatePresence>
    </Popover>
  )
}
