'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'

export default function Hero() {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { stiffness: 25, damping: 30 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 25, damping: 30 })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 2
      const y = (clientY / innerHeight - 0.5) * 2
      mouseX.set(x * 20)
      mouseY.set(y * 20)
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const letterAnimation = {
    hidden: { y: 100, opacity: 0, rotateX: -90 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: i * 0.05,
        duration: 1,
        ease: [0.6, 0.01, -0.05, 0.95],
      },
    }),
  }

  const titleText = "INSCRIBE"
  const subtitleText = "ARCHITECTS"

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fluid Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, rgba(239, 68, 68, 0.15), transparent 50%)`,
          }}
        />
        
        {/* Floating Shapes */}
        <motion.div
          style={{ x: smoothMouseX, y: smoothMouseY }}
          className="absolute top-1/4 left-1/4 w-96 h-96"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-500/10 to-transparent blur-3xl" />
        </motion.div>
        
        <motion.div
          style={{ x: smoothMouseX, y: smoothMouseY, scale: 1.2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-accent-orange/10 to-transparent blur-3xl" />
        </motion.div>

        {/* Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-7xl mx-auto">
          {/* Main Title */}
          <div className="perspective-1000">
            <motion.h1
              className="font-display font-bold text-center mb-0"
              style={{ fontSize: 'clamp(4rem, 15vw, 12rem)' }}
            >
              <span className="block overflow-hidden">
                {titleText.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={letterAnimation}
                    className="inline-block"
                    style={{
                      textShadow: '0 0 30px rgba(239, 68, 68, 0.3)',
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent mb-4"
            />
            
            <motion.h2
              className="font-display font-light text-center"
              style={{ fontSize: 'clamp(2rem, 8vw, 6rem)' }}
            >
              <span className="block overflow-hidden">
                {subtitleText.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    custom={i + titleText.length}
                    initial="hidden"
                    animate="visible"
                    variants={letterAnimation}
                    className="inline-block tracking-[0.3em] text-gray-400"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </motion.h2>
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-center mt-12 mb-16"
          >
            <p className="text-2xl md:text-3xl text-gray-400 font-light">
              We don't just design buildings.
            </p>
            <p className="text-3xl md:text-4xl mt-2">
              <span className="gradient-text font-bold">We craft experiences.</span>
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col items-center"
          >
            <Link
              href="/portfolio"
              className="group relative px-12 py-6 overflow-hidden rounded-full"
            >
              <span className="relative z-10 flex items-center gap-3 text-lg font-medium">
                Explore Our Vision
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <HiArrowRight className="text-xl" />
                </motion.div>
              </span>
              
              {/* Button Background Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-orange"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-orange to-primary-500 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            {/* Mouse Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="mt-20"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center text-gray-500"
              >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
                  <motion.div
                    animate={{ y: [2, 8, 2] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-1 h-2 bg-primary-500 rounded-full mt-2"
                  />
                </div>
                <p className="mt-2 text-xs uppercase tracking-widest">Scroll to explore</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-primary-500/20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-primary-500/20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-primary-500/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-primary-500/20" />
    </section>
  )
}