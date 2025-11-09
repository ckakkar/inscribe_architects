'use client'

import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

interface AnimatedCounterProps {
  value: string
  duration?: number
}

export function AnimatedCounter({ value, duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Extract number from value (e.g., "23+" -> 23, "1100+" -> 1100, "100%" -> 100)
  const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0
  const suffix = value.replace(/[0-9]/g, '') // Get the "+" or "%" etc.

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue)
    }
  }, [motionValue, isInView, numericValue])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        const rounded = Math.round(latest)
        ref.current.textContent = `${rounded}${suffix}`
      }
    })
  }, [springValue, suffix])

  return <span ref={ref}>0{suffix}</span>
}

