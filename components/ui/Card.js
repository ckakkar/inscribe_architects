'use client'

import { useState, forwardRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

const Card = forwardRef(function Card({
  children,
  className,
  variant = 'default',
  hover = true,
  onClick,
  ...props
}, ref) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e) => {
    if (!hover || variant !== '3d') return
    
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const variants = {
    default: cn(
      'glass-effect rounded-2xl p-6 border border-white/10',
      hover && 'hover:border-primary-500/50 transition-all duration-300'
    ),
    solid: cn(
      'bg-dark-200 rounded-2xl p-6',
      hover && 'hover:bg-dark-300 transition-all duration-300'
    ),
    gradient: cn(
      'gradient-border rounded-2xl p-6',
      hover && 'hover:shadow-[0_0_30px_rgba(239,68,68,0.3)] transition-all duration-300'
    ),
    glass: cn(
      'glass-effect rounded-2xl p-6 border border-white/10 backdrop-blur-xl',
      hover && 'hover:bg-white/10 hover:border-white/20 transition-all duration-300'
    ),
    '3d': cn(
      'glass-effect rounded-2xl p-6 border border-white/10',
      'transform-gpu perspective-1000',
      hover && 'hover:border-primary-500/50 transition-all duration-300'
    ),
  }

  const cardClass = variants[variant] || variants.default

  if (variant === '3d') {
    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY: hover ? rotateY : 0,
          rotateX: hover ? rotateX : 0,
          transformStyle: "preserve-3d",
        }}
        className={cn(cardClass, className)}
        onClick={onClick}
        whileHover={hover ? { scale: 1.02 } : {}}
        whileTap={onClick ? { scale: 0.98 } : {}}
        {...props}
      >
        <div style={{ transform: "translateZ(75px)" }}>
          {children}
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={cn(cardClass, className)}
      onClick={onClick}
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  )
})

// Hover Card with Content Reveal
export const HoverCard = forwardRef(function HoverCard({
  children,
  hoverContent,
  className,
  ...props
}, ref) {
  return (
    <motion.div
      ref={ref}
      className={cn('relative group', className)}
      whileHover="hover"
      {...props}
    >
      <Card variant="glass" hover={false} className="relative overflow-hidden">
        {children}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          variants={{
            hover: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end"
        >
          {hoverContent}
        </motion.div>
      </Card>
    </motion.div>
  )
})

// Flip Card
export const FlipCard = forwardRef(function FlipCard({
  frontContent,
  backContent,
  className,
  ...props
}, ref) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      ref={ref}
      className={cn('relative preserve-3d cursor-pointer', className)}
      onClick={() => setIsFlipped(!isFlipped)}
      {...props}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative w-full h-full"
      >
        {/* Front */}
        <Card
          variant="gradient"
          hover={false}
          className="absolute inset-0 backface-hidden"
        >
          {frontContent}
        </Card>
        
        {/* Back */}
        <Card
          variant="gradient"
          hover={false}
          className="absolute inset-0 backface-hidden rotate-y-180"
        >
          {backContent}
        </Card>
      </motion.div>
    </div>
  )
})

// Stats Card
export const StatsCard = forwardRef(function StatsCard({
  stat,
  label,
  icon: Icon,
  trend,
  className,
  ...props
}, ref) {
  return (
    <Card ref={ref} variant="glass" className={cn('relative overflow-hidden', className)} {...props}>
      {Icon && (
        <div className="absolute top-4 right-4 text-4xl text-primary-500/20">
          <Icon />
        </div>
      )}
      
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-4xl font-bold gradient-text mb-2"
      >
        {stat}
      </motion.div>
      
      <p className="text-gray-400">{label}</p>
      
      {trend && (
        <div className={cn(
          'mt-4 text-sm font-medium',
          trend > 0 ? 'text-green-500' : 'text-red-500'
        )}>
          {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
        </div>
      )}
    </Card>
  )
})

// Feature Card
export const FeatureCard = forwardRef(function FeatureCard({
  icon: Icon,
  title,
  description,
  color = 'from-primary-400 to-primary-600',
  className,
  ...props
}, ref) {
  return (
    <Card ref={ref} variant="glass" hover className={className} {...props}>
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
        className={cn(
          'w-16 h-16 rounded-2xl p-4 mb-6',
          'bg-gradient-to-br flex items-center justify-center',
          color
        )}
      >
        <Icon className="text-2xl text-white" />
      </motion.div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Card>
  )
})

export default Card