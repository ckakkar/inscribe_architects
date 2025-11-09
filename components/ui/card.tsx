import * as React from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'border border-white/5 bg-white/[0.02] p-8',
          'hover:border-white/10 hover:bg-white/[0.03] transition-all duration-500',
          className
        )}
        {...props}
      />
    )
  }
)
Card.displayName = 'Card'

export { Card }