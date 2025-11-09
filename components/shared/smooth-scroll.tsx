'use client'

import { useEffect, ReactNode } from 'react'
import Lenis from 'lenis'
import { usePathname } from 'next/navigation'

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const pathname = usePathname()

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      // Fallback to native smooth scroll for accessibility
      document.documentElement.style.scrollBehavior = 'smooth'
      return
    }

    // Check if device is mobile/tablet
    const isMobile = window.innerWidth < 1024 || 'ontouchstart' in window

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: isMobile ? 1.0 : 1.2, // Faster on mobile
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for fluid feel
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: !isMobile, // Disable smooth wheel on mobile for native feel
      wheelMultiplier: isMobile ? 0.8 : 1,
      syncTouch: false, // Disable sync touch for native touch scrolling on mobile
      touchMultiplier: isMobile ? 1.5 : 2,
      infinite: false,
    })

    // Animation frame loop for Lenis
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Handle anchor links
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]')
      if (target) {
        e.preventDefault()
        const href = target.getAttribute('href')
        if (href && href !== '#') {
          const element = document.querySelector(href) as HTMLElement | null
          if (element) {
            lenis.scrollTo(element, {
              offset: -80, // Account for header
              duration: 1.5,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            })
          }
        }
      }
    }

    document.addEventListener('click', handleClick)

    // Cleanup
    return () => {
      lenis.destroy()
      document.removeEventListener('click', handleClick)
    }
  }, [pathname]) // Re-initialize on route change

  return <>{children}</>
}