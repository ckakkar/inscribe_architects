'use client'

import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { clsx } from 'clsx'
import { forwardRef } from 'react'

const buttonVariants = {
  primary: 'bg-primary-500 text-white hover:bg-primary-600 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)]',
  secondary: 'glass-effect hover:bg-white/10 border border-white/10 hover:border-primary-500/50',
  ghost: 'text-gray-300 hover:text-white hover:bg-white/10',
  gradient: 'bg-gradient-to-r from-primary-500 to-accent-orange hover:from-primary-600 hover:to-accent-orange text-white',
}

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3',
  lg: 'px-8 py-4 text-lg',
}

const Button = forwardRef(function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'right',
  ...props
}, ref) {
  const cn = (...inputs) => twMerge(clsx(inputs))

  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-2',
        buttonVariants[variant],
        buttonSizes[size],
        fullWidth && 'w-full',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </motion.button>
  )
})

export default Button