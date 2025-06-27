'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, forwardRef } from 'react'
import { cn } from '@/lib/utils'

const AnimatedText = forwardRef(function AnimatedText({
  children,
  className,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.6,
  once = true,
  stagger = 0.05,
  ...props
}, forwardedRef) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.5 })

  // Split text into words for word-by-word animation
  const words = typeof children === 'string' ? children.split(' ') : [children]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const letterVariants = {
    fadeUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration, ease: [0.6, 0.05, 0.01, 0.9] }
      },
    },
    fadeDown: {
      hidden: { opacity: 0, y: -20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration, ease: [0.6, 0.05, 0.01, 0.9] }
      },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { duration }
      },
    },
    slideIn: {
      hidden: { opacity: 0, x: -50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration, ease: [0.6, 0.05, 0.01, 0.9] }
      },
    },
    slideRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration, ease: [0.6, 0.05, 0.01, 0.9] }
      },
    },
    reveal: {
      hidden: { 
        opacity: 0,
        clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
      },
      visible: { 
        opacity: 1,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        transition: { duration: duration * 1.5, ease: [0.77, 0, 0.175, 1] }
      },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration, ease: [0.6, 0.05, 0.01, 0.9] }
      },
    },
    blur: {
      hidden: { opacity: 0, filter: 'blur(10px)' },
      visible: { 
        opacity: 1, 
        filter: 'blur(0px)',
        transition: { duration }
      },
    },
    typewriter: {
      hidden: { opacity: 0, width: 0 },
      visible: { 
        opacity: 1, 
        width: 'auto',
        transition: { duration: duration * 2, ease: 'linear' }
      },
    },
  }

  const selectedVariant = letterVariants[variant] || letterVariants.fadeUp

  if (variant === 'typewriter') {
    return (
      <motion.span
        ref={forwardedRef || ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={selectedVariant}
        className={cn('inline-block overflow-hidden whitespace-nowrap', className)}
        {...props}
      >
        {children}
      </motion.span>
    )
  }

  return (
    <motion.span
      ref={forwardedRef || ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={cn('inline-block', className)}
      {...props}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={selectedVariant}
          className="inline-block"
        >
          {word}
          {index < words.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </motion.span>
  )
})

// Animated Letter Component for character-by-character animation
export const AnimatedLetters = forwardRef(function AnimatedLetters({
  children,
  className,
  variant = 'fadeUp',
  delay = 0,
  stagger = 0.03,
  once = true,
  ...props
}, forwardedRef) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount: 0.5 })
  
  const letters = children.split('')

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: [0.6, 0.05, 0.01, 0.9] }
    },
  }

  return (
    <motion.span
      ref={forwardedRef || ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={cn('inline-block', className)}
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  )
})

// Gradient Animated Text
export const GradientAnimatedText = forwardRef(function GradientAnimatedText({
  children,
  className,
  gradientFrom = 'from-primary-400',
  gradientTo = 'to-accent-orange',
  animateGradient = true,
  ...props
}, forwardedRef) {
  const gradientClass = animateGradient ? 'animate-gradient' : ''
  
  return (
    <AnimatedText
      ref={forwardedRef}
      className={cn(
        'bg-clip-text text-transparent bg-gradient-to-r',
        gradientFrom,
        gradientTo,
        gradientClass,
        className
      )}
      {...props}
    >
      {children}
    </AnimatedText>
  )
})

// Glitch Text Effect
export const GlitchText = forwardRef(function GlitchText({ 
  children, 
  className, 
  ...props 
}, forwardedRef) {
  return (
    <span ref={forwardedRef} className={cn('relative inline-block', className)} {...props}>
      <span className="relative z-10">{children}</span>
      <span 
        className="absolute inset-0 text-primary-500 opacity-70 animate-pulse"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}
        aria-hidden="true"
      >
        {children}
      </span>
      <span 
        className="absolute inset-0 text-accent-orange opacity-70 animate-pulse animation-delay-200"
        style={{ clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)' }}
        aria-hidden="true"
      >
        {children}
      </span>
    </span>
  )
})

export default AnimatedText