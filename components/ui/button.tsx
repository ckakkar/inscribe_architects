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
          'inline-flex items-center justify-center font-light transition-colors duration-200',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20',
          'disabled:pointer-events-none disabled:opacity-30',
          {
            'bg-white text-[#0a0a0a] hover:bg-white/90':
              variant === 'default',
            'border border-white/20 hover:border-white/40 hover:bg-white/5':
              variant === 'outline',
            'hover:bg-white/5': variant === 'ghost',
          },
          {
            'px-6 py-2.5 text-xs tracking-wider uppercase': size === 'sm',
            'px-8 py-3 text-sm tracking-wider uppercase': size === 'md',
            'px-10 py-3.5 text-sm tracking-wider uppercase': size === 'lg',
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