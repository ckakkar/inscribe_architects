'use client'

import { useEffect } from 'react'

export function ErrorHandler() {
  useEffect(() => {
    // Suppress Next.js devtools errors in development
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
      // Handle unhandled errors
      const handleError = (event: ErrorEvent) => {
        const errorMessage = event.message || event.error?.message || ''
        if (
          errorMessage.includes('next-devtools') ||
          errorMessage.includes('SegmentViewNode') ||
          errorMessage.includes('React Client Manifest') ||
          errorMessage.includes('__webpack_modules__')
        ) {
          event.preventDefault()
          return false
        }
      }

      // Handle unhandled promise rejections
      const handleRejection = (event: PromiseRejectionEvent) => {
        const errorMessage = event.reason?.message || event.reason?.toString() || ''
        if (
          errorMessage.includes('next-devtools') ||
          errorMessage.includes('SegmentViewNode') ||
          errorMessage.includes('React Client Manifest')
        ) {
          event.preventDefault()
          return false
        }
      }

      // Suppress console errors
      const originalError = console.error
      console.error = (...args: any[]) => {
        const errorMessage = args[0]?.toString() || ''
        if (
          errorMessage.includes('next-devtools') ||
          errorMessage.includes('SegmentViewNode') ||
          errorMessage.includes('React Client Manifest') ||
          errorMessage.includes('__webpack_modules__')
        ) {
          // Suppress devtools errors silently
          return
        }
        originalError.apply(console, args)
      }

      window.addEventListener('error', handleError)
      window.addEventListener('unhandledrejection', handleRejection)

      return () => {
        window.removeEventListener('error', handleError)
        window.removeEventListener('unhandledrejection', handleRejection)
        console.error = originalError
      }
    }
  }, [])

  return null
}

