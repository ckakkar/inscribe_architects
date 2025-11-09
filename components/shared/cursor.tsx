'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Advanced spring configuration for ultra-smooth movement
  const springConfig = { 
    damping: 20, 
    stiffness: 400,
    mass: 0.5,
  }
  
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // Scale based on hover state
  const dotScale = isPointer ? 0.3 : isHovering ? 1.2 : 1
  const ringScale = isPointer ? 2 : isHovering ? 0.8 : 1

  useEffect(() => {
    // Only run on client and not on touch devices
    if (typeof window === 'undefined' || 'ontouchstart' in window) {
      return
    }

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      return
    }

    setMounted(true)

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8)
      cursorY.set(e.clientY - 8)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isLink = target.closest('a, button, [role="button"], [data-cursor="pointer"]')
      const isHoverable = target.closest('[data-cursor="hover"]')
      
      setIsPointer(!!isLink)
      setIsHovering(!!isHoverable)
    }

    const handleMouseOut = () => {
      setIsPointer(false)
      setIsHovering(false)
    }

    window.addEventListener('mousemove', moveCursor, { passive: true })
    window.addEventListener('mouseover', handleMouseOver, { passive: true })
    window.addEventListener('mouseout', handleMouseOut, { passive: true })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [cursorX, cursorY])

  if (!mounted) return null

  return (
    <>
      {/* Main Cursor Dot - Enhanced with better blend mode */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-black rounded-full pointer-events-none z-[9999] mix-blend-difference gpu-accelerated"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          scale: dotScale,
        }}
      />
      
      {/* Cursor Ring - Enhanced with opacity animation */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-grey-mouse/50 rounded-full pointer-events-none z-[9998] gpu-accelerated"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: -16,
          y: -16,
          scale: ringScale,
          opacity: isPointer ? 0.3 : isHovering ? 0.7 : 0.5,
        }}
      />

      {/* Hover effect ring */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 w-16 h-16 border border-grey-mouse/20 rounded-full pointer-events-none z-[9997] gpu-accelerated"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
            x: -32,
            y: -32,
          }}
        />
      )}
    </>
  )
}