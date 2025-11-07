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
          'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500',
          'disabled:pointer-events-none disabled:opacity-50',
          {
            'bg-gradient-to-r from-primary-500 to-accent-orange text-white hover:scale-105 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]':
              variant === 'default',
            'border-2 border-white/20 hover:border-primary-500/50 hover:bg-white/5':
              variant === 'outline',
            'hover:bg-white/10': variant === 'ghost',
          },
          {
            'px-6 py-2 text-sm': size === 'sm',
            'px-8 py-4 text-base': size === 'md',
            'px-12 py-6 text-lg': size === 'lg',
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