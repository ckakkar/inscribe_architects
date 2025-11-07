import * as React from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8',
          'hover:border-primary-500/50 hover:bg-white/10 transition-all duration-300',
          className
        )}
        {...props}
      />
    )
  }
)
Card.displayName = 'Card'

export { Card }