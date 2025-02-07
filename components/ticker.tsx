"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function Ticker() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible((prev) => !prev)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-primary/10 p-2 text-center text-sm text-primary"
    >
      {isVisible ? "127 coaches transitioned to high-ticket boot camps last month" : "Avg. revenue: 28k/month"}
    </motion.div>
  )
}

