'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { cn } from '@/lib/utils'
import AnimatedText, { GradientAnimatedText } from './AnimatedText'

const SectionTitle = ({
  subtitle,
  title,
  titleGradient,
  description,
  align = 'center',
  size = 'default',
  className,
  containerClassName,
  animationDelay = 0,
  showDivider = false,
  dividerColor = 'bg-primary-500',
  children,
  ...props
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  const sizeClasses = {
    small: {
      title: 'text-3xl sm:text-4xl',
      subtitle: 'text-sm',
      description: 'text-base',
    },
    default: {
      title: 'text-4xl sm:text-5xl lg:text-6xl',
      subtitle: 'text-sm',
      description: 'text-lg',
    },
    large: {
      title: 'text-5xl sm:text-6xl lg:text-7xl',
      subtitle: 'text-base',
      description: 'text-xl',
    },
  }

  const sizes = sizeClasses[size] || sizeClasses.default
  const alignment = alignClasses[align] || alignClasses.center

  return (
    <div
      ref={ref}
      className={cn('w-full', containerClassName)}
      {...props}
    >
      <div className={cn(alignment, className)}>
        {/* Subtitle */}
        {subtitle && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: animationDelay }}
            className="mb-4"
          >
            <span className={cn(
              'text-primary-500 font-medium uppercase tracking-wider',
              sizes.subtitle
            )}>
              {subtitle}
            </span>
          </motion.div>
        )}

        {/* Title */}
        <h2 className={cn(
          'font-display font-bold mb-4',
          sizes.title
        )}>
          {titleGradient ? (
            <GradientAnimatedText
              variant="fadeUp"
              delay={animationDelay + 0.1}
            >
              {title}
            </GradientAnimatedText>
          ) : (
            <AnimatedText
              variant="fadeUp"
              delay={animationDelay + 0.1}
            >
              {title}
            </AnimatedText>
          )}
        </h2>

        {/* Divider */}
        {showDivider && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: animationDelay + 0.3 }}
            className={cn(
              'h-1 w-20 rounded-full mb-6',
              dividerColor,
              align === 'center' && 'mx-auto',
              align === 'right' && 'ml-auto'
            )}
          />
        )}

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: animationDelay + 0.4 }}
            className={cn(
              'text-gray-400',
              sizes.description,
              align === 'center' && 'max-w-2xl mx-auto'
            )}
          >
            {description}
          </motion.p>
        )}

        {/* Additional Content */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: animationDelay + 0.5 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>
    </div>
  )
}

// Decorative Section Title
export const DecorativeSectionTitle = ({
  title,
  subtitle,
  className,
  ...props
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className={cn('relative text-center', className)} {...props}>
      {/* Background Text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 0.05, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <span className="text-[10rem] lg:text-[15rem] font-bold text-white uppercase">
          {title.split(' ')[0]}
        </span>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10">
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary-500 font-medium uppercase tracking-wider text-sm mb-4"
          >
            {subtitle}
          </motion.p>
        )}
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h2>
      </div>
    </div>
  )
}

// Split Section Title
export const SplitSectionTitle = ({
  title,
  subtitle,
  description,
  className,
  ...props
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const words = title.split(' ')
  const midPoint = Math.ceil(words.length / 2)
  const firstHalf = words.slice(0, midPoint).join(' ')
  const secondHalf = words.slice(midPoint).join(' ')

  return (
    <div ref={ref} className={cn('space-y-6', className)} {...props}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-primary-500 font-medium uppercase tracking-wider text-sm"
        >
          {subtitle}
        </motion.p>
      )}
      
      <div className="space-y-2">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl"
        >
          {firstHalf}
        </motion.h2>
        
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl gradient-text"
        >
          {secondHalf}
        </motion.h2>
      </div>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-400 text-lg max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}

// Inline Decorated Title
export const InlineDecoratedTitle = ({
  title,
  decorator = '—',
  className,
  ...props
}) => {
  return (
    <div className={cn('flex items-center gap-4', className)} {...props}>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-primary-500"
      />
      <AnimatedText
        variant="scale"
        className="font-display font-bold text-2xl sm:text-3xl"
      >
        {title}
      </AnimatedText>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-primary-500"
      />
    </div>
  )
}

export default SectionTitle