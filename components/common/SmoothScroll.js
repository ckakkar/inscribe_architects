'use client'

import { useEffect } from 'react'

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Fallback smooth scroll implementation
    // This provides basic smooth scrolling without external dependencies
    
    const smoothScrollTo = (target, duration = 800) => {
      const targetPosition = target.offsetTop
      const startPosition = window.pageYOffset
      const distance = targetPosition - startPosition
      let startTime = null

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const run = ease(timeElapsed, startPosition, distance, duration)
        window.scrollTo(0, run)
        if (timeElapsed < duration) requestAnimationFrame(animation)
      }

      function ease(t, b, c, d) {
        t /= d / 2
        if (t < 1) return c / 2 * t * t + b
        t--
        return -c / 2 * (t * (t - 2) - 1) + b
      }

      requestAnimationFrame(animation)
    }

    // Handle smooth scrolling for anchor links
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (target) {
        e.preventDefault()
        const id = target.getAttribute('href').slice(1)
        const element = document.getElementById(id)
        if (element) {
          smoothScrollTo(element)
        }
      }
    }

    // Add CSS for smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth'

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return <>{children}</>
}