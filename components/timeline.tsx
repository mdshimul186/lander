"use client"

import { motion, useScroll, useSpring, useInView } from "framer-motion"
import { useRef } from "react"

interface TimelineItemProps {
  month: string
  title: string
  description: string
  revenue: string
  isLast?: boolean
}

function TimelineItem({ month, title, description, revenue, isLast }: TimelineItemProps) {
  const itemRef = useRef(null)
  const isInView = useInView(itemRef, { once: true, margin: "-100px" })

  return (
    <div ref={itemRef} className="relative pb-12 last:pb-0 py-5">
      {!isLast && (
        <motion.div
          className="absolute left-[17px] top-8 h-full w-[2px] bg-border origin-top"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isInView ? 1 : 0 }}
          transition={{ duration: 1 }}
        />
      )}
      <div className="group relative flex gap-6">
        <motion.div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-background shadow"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: isInView ? 1 : 0,
            opacity: isInView ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="h-3 w-3 rounded-full bg-primary"
            animate={{
              scale: [1, 1.2, 1],
              transition: { duration: 1, repeat: Number.POSITIVE_INFINITY },
            }}
          />
        </motion.div>
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : -20,
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-sm text-muted-foreground">{month}</span>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          <motion.span
            className="mt-2 font-bold text-primary"
            initial={{ opacity: 0 }}
            animate={{
              opacity: isInView ? 1 : 0,
            }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {revenue}
          </motion.span>
        </motion.div>
      </div>
    </div>
  )
}

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 400,
  })

  const timelineItems = [
    {
      month: "Month 1",
      title: "Transition from Udemy",
      description: "Set up branded bootcamp platform and import first course materials",
      revenue: "$12,000/month",
    },
    {
      month: "Month 2",
      title: "First High-Ticket Launch",
      description: "Launch first $10k bootcamp with 5 students using proven templates",
      revenue: "$50,000/month",
    },
    {
      month: "Month 3-4",
      title: "Scale & Automate",
      description: "Implement AI tools for support and student success tracking",
      revenue: "$150,000/month",
    },
    {
      month: "Month 5",
      title: "Expand Offerings",
      description: "Launch advanced tier and group coaching programs",
      revenue: "$300,000/month",
    },
    {
      month: "Month 6",
      title: "Achieve $500k Goal",
      description: "Fully automated system with 50 active high-ticket students",
      revenue: "$500,000/month",
    },
  ]

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="relative mx-auto max-w-2xl"
          ref={containerRef}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {timelineItems.map((item, index) => (
            <TimelineItem key={index} {...item} isLast={index === timelineItems.length - 1} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

