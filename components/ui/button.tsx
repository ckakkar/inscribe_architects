import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          'inline-flex items-center justify-center font-light transition-all duration-300',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-umber/30 focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-30',
          'touch-target active:opacity-70',
          {
            'bg-umber text-dutch-white hover:bg-umber-dark hover:shadow-medium':
              variant === 'default',
            'border border-taupe/40 hover:border-umber/60 hover:bg-umber/5 hover:shadow-soft':
              variant === 'outline',
            'hover:bg-umber/5': variant === 'ghost',
          },
          {
            'px-6 py-3 sm:py-2.5 text-xs tracking-wider uppercase min-h-[44px]': size === 'sm',
            'px-8 py-3.5 sm:py-3 text-sm tracking-wider uppercase min-h-[44px]': size === 'md',
            'px-10 py-4 sm:py-3.5 text-sm sm:text-base tracking-wider uppercase min-h-[48px] sm:min-h-[44px]': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }