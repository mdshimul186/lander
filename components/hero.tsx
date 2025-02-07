"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Shield, Lock, Headphones } from "lucide-react"
import { motion } from "framer-motion"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function Hero() {
  return (
    <section className="relative min-h-[90vh] bg-[#0B0F1A] text-white py-5">
      <motion.div
        className="container relative z-10 mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        <motion.div className="mb-8" variants={fadeIn}>
          <Badge variant="secondary" className="bg-[#1A1F2E] text-[#4FD1C5] transition-transform hover:scale-105">
            <span className="mr-2 text-[#4FD1C5]">New:</span>
            AI-Powered Student Progress Tracking
          </Badge>
        </motion.div>

        <motion.h1
          className="max-w-[900px] text-center text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
          variants={fadeIn}
        >
          Stop Losing{" "}
          <motion.span
            className="inline-block text-[#F7505E]"
            animate={{
              scale: [1, 1.1, 1],
              transition: { duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" },
            }}
          >
            82.5%
          </motion.span>{" "}
          to Udemy and Other Platforms
        </motion.h1>

        <motion.p className="mx-auto mt-6 max-w-3xl text-center text-xl text-gray-400" variants={fadeIn}>
          Launch Your High-Ticket 10k+ Bootcamp in 7 Days — Keep 100% of Every Dollar for the First 6 Months, then Keep
          80% for the Lifetime!
        </motion.p>

        <motion.div className="mt-8 flex flex-col gap-4 sm:flex-row" variants={fadeIn}>
          <Button
            size="lg"
            className="bg-[#F7505E] text-white transition-transform hover:scale-105 hover:bg-[#F7505E]/90"
          >
            Seven Figure Coaching <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-gray-700 bg-transparent text-white transition-transform hover:scale-105 hover:bg-gray-800"
          >
            <Play className="mr-2 h-4 w-4" /> Watch Demo
          </Button>
        </motion.div>

        <motion.div className="mt-12 flex flex-wrap items-center justify-center gap-8" variants={fadeIn}>
          {[
            { icon: Shield, text: "GDPR Compliant" },
            { icon: Lock, text: "256-bit Encryption" },
            { icon: Headphones, text: "24/7 Support" },
          ].map((item, i) => (
            <motion.div key={i} className="flex items-center gap-2 text-[#4FD1C5]" whileHover={{ scale: 1.05 }}>
              <item.icon className="h-5 w-5" />
              <span className="text-sm">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-auto"
          variants={fadeIn}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="rounded-lg bg-[#1A1F2E]/50 px-6 py-3 text-center text-sm text-gray-400">
            127 coaches transitioned to high-ticket boot camps last month. Avg. revenue: 28k/month
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

