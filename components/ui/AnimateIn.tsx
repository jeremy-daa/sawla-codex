"use client"

import React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface AnimateInProps {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
  className?: string
  style?: React.CSSProperties
  once?: boolean
}

export function AnimateIn({
  children, delay=0, duration=0.7, y=28, className="", style, once=true,
}: AnimateInProps) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: "-60px 0px" })
  return (
    <motion.div ref={ref} className={className} style={style}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function AnimateStagger({
  children, staggerDelay=0.1, className="",
}: { children: ReactNode; staggerDelay?: number; className?: string }) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px 0px" })
  return (
    <motion.div ref={ref} className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ visible: { transition: { staggerChildren: staggerDelay } } }}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}