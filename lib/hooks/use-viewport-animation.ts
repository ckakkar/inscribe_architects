import { useInView } from 'framer-motion'
import { useRef } from 'react'


type MarginValue = `${number}${'px' | '%'}`
type MarginType = MarginValue | `${MarginValue} ${MarginValue}` | `${MarginValue} ${MarginValue} ${MarginValue}` | `${MarginValue} ${MarginValue} ${MarginValue} ${MarginValue}`

interface UseViewportAnimationOptions {
  once?: boolean
  margin?: MarginType
  amount?: number | 'some' | 'all'
}

export function useViewportAnimation(options: UseViewportAnimationOptions = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: options.once ?? true,
    margin: (options.margin ?? '-100px') as MarginType,
    amount: options.amount ?? 0.3,
  })

  return { ref, isInView }
}

