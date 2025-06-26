'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    setMounted(true)
    
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 8)
      cursorY.set(e.clientY - 8)
    }

    const handleMouseOver = (e) => {
      const target = e.target
      const isLink = target.closest('a, button, [role="button"]')
      const isText = target.closest('h1, h2, h3, h4, h5, h6, p, span')
      
      setIsPointer(!!isLink)
      
      if (target.style.cursor === 'none') {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  // Don't render on server or mobile devices
  if (!mounted || typeof window === 'undefined') return null
  
  // Check if it's a touch device
  if ('ontouchstart' in window) return null

  return (
    <>
      <motion.div
        className="cursor"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 16,
          height: 16,
          backgroundColor: '#ef4444',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          opacity: isHidden ? 0 : 1,
          scale: isPointer ? 0.5 : 1,
        }}
      />
      <motion.div
        className="cursor-follower"
        style={{
          position: 'fixed',
          left: -16,
          top: -16,
          width: 32,
          height: 32,
          border: '1px solid rgba(239, 68, 68, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          opacity: isHidden ? 0 : 1,
          scale: isPointer ? 2 : 1,
        }}
      />
    </>
  )
}