'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const ParallaxImage = ({
  src,
  alt,
  className,
  containerClassName,
  speed = 0.5,
  scale = 1.2,
  opacity = true,
  overlay = true,
  overlayColor = 'from-black/60 to-transparent',
  children,
  ...props
}) => {
  const ref = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Calculate parallax values
  const yRange = 100 * speed
  const y = useTransform(scrollYProgress, [0, 1], [-yRange, yRange])
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5, 1], [scale, 1, scale])
  const opacityProgress = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.7, 1, 1, 0.7])

  return (
    <div 
      ref={ref} 
      className={cn('relative overflow-hidden', containerClassName)}
      {...props}
    >
      <motion.div
        style={{
          y,
          scale: scale !== 1 ? scaleProgress : 1,
          opacity: opacity ? opacityProgress : 1,
        }}
        className="relative w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cn('object-cover', className)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {overlay && (
          <div className={cn(
            'absolute inset-0 bg-gradient-to-t',
            overlayColor
          )} />
        )}
      </motion.div>
      
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  )
}

// Parallax Container with Multiple Layers
export const ParallaxContainer = ({
  children,
  className,
  backgroundImage,
  foregroundImage,
  ...props
}) => {
  const ref = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], [-50, 50])
  const foregroundY = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const textY = useTransform(scrollYProgress, [0, 1], [-30, 30])

  return (
    <div ref={ref} className={cn('relative', className)} {...props}>
      {/* Background Layer */}
      {backgroundImage && (
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 -z-20"
        >
          <Image
            src={backgroundImage}
            alt="Background"
            fill
            className="object-cover"
          />
        </motion.div>
      )}

      {/* Content Layer */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10"
      >
        {children}
      </motion.div>

      {/* Foreground Layer */}
      {foregroundImage && (
        <motion.div
          style={{ y: foregroundY }}
          className="absolute inset-0 -z-10 pointer-events-none"
        >
          <Image
            src={foregroundImage}
            alt="Foreground"
            fill
            className="object-cover"
          />
        </motion.div>
      )}
    </div>
  )
}

// Reveal Image on Scroll
export const RevealImage = ({
  src,
  alt,
  className,
  containerClassName,
  direction = 'up',
  ...props
}) => {
  const ref = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"]
  })

  const clipPathValues = {
    up: useTransform(
      scrollYProgress,
      [0, 1],
      ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)']
    ),
    down: useTransform(
      scrollYProgress,
      [0, 1],
      ['inset(0% 0% 100% 0%)', 'inset(0% 0% 0% 0%)']
    ),
    left: useTransform(
      scrollYProgress,
      [0, 1],
      ['inset(0% 0% 0% 100%)', 'inset(0% 0% 0% 0%)']
    ),
    right: useTransform(
      scrollYProgress,
      [0, 1],
      ['inset(0% 100% 0% 0%)', 'inset(0% 0% 0% 0%)']
    ),
  }

  const clipPath = clipPathValues[direction] || clipPathValues.up

  return (
    <div ref={ref} className={cn('relative overflow-hidden', containerClassName)} {...props}>
      <motion.div
        style={{ clipPath }}
        className="relative w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cn('object-cover', className)}
        />
      </motion.div>
    </div>
  )
}

// Floating Image
export const FloatingImage = ({
  src,
  alt,
  className,
  floatSpeed = 3,
  floatDistance = 20,
  rotate = true,
  ...props
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -floatDistance, 0],
        rotate: rotate ? [0, 5, 0] : 0,
      }}
      transition={{
        duration: floatSpeed,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={cn('relative', className)}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
      />
    </motion.div>
  )
}

// Zoom Parallax Image
export const ZoomParallaxImage = ({
  src,
  alt,
  className,
  containerClassName,
  zoomRange = [1, 1.5],
  ...props
}) => {
  const ref = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], zoomRange)
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6])

  return (
    <div 
      ref={ref} 
      className={cn('relative overflow-hidden', containerClassName)}
      {...props}
    >
      <motion.div
        style={{ scale, opacity }}
        className="relative w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={cn('object-cover', className)}
        />
      </motion.div>
    </div>
  )
}

export default ParallaxImage