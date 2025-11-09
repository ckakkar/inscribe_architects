import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface UseViewportAnimationOptions {
  once?: boolean
  margin?: string
  amount?: number | 'some' | 'all'
}

export function useViewportAnimation(options: UseViewportAnimationOptions = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: options.once ?? true,
    margin: options.margin ?? '-100px',
    amount: options.amount ?? 0.3,
  })

  return { ref, isInView }
}

