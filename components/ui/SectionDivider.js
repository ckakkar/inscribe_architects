'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function SectionDivider({ variant = 'wave', className = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

  const variants = {
    wave: (
      <svg
        viewBox="0 0 1440 100"
        className="w-full h-24"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,50 C360,100 720,0 1440,50 L1440,100 L0,100 Z"
          fill="url(#gradient)"
          style={{ pathLength, opacity }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(239, 68, 68, 0.1)" />
            <stop offset="50%" stopColor="rgba(255, 107, 53, 0.1)" />
            <stop offset="100%" stopColor="rgba(239, 68, 68, 0.1)" />
          </linearGradient>
        </defs>
      </svg>
    ),
    dots: (
      <div className="flex justify-center items-center gap-4 py-12">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1, type: "spring" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-orange rounded-full" />
            <motion.div
              animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-orange rounded-full"
            />
          </motion.div>
        ))}
      </div>
    ),
    line: (
      <div className="relative py-12">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
          viewport={{ once: true }}
          className="h-[1px] bg-gradient-to-r from-transparent via-primary-500 to-transparent"
        />
      </div>
    ),
    zigzag: (
      <svg
        viewBox="0 0 1440 100"
        className="w-full h-16"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,50 L120,20 L240,80 L360,20 L480,80 L600,20 L720,80 L840,20 L960,80 L1080,20 L1200,80 L1320,20 L1440,50"
          stroke="url(#zigzagGradient)"
          strokeWidth="2"
          fill="none"
          style={{ pathLength, opacity }}
        />
        <defs>
          <linearGradient id="zigzagGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(239, 68, 68, 0.5)" />
            <stop offset="100%" stopColor="rgba(255, 107, 53, 0.5)" />
          </linearGradient>
        </defs>
      </svg>
    ),
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {variants[variant] || variants.wave}
    </div>
  )
}