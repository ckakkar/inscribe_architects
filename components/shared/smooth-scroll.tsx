'use client'

import { useEffect, ReactNode } from 'react'

interface SmoothScrollProps {
  children: ReactNode
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return

    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth'

    // Smooth scroll for anchor links
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]')
      if (target) {
        e.preventDefault()
        const href = target.getAttribute('href')
        if (href && href !== '#') {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return <>{children}</>
}