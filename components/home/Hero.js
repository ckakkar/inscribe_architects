'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import { FaPlay } from 'react-icons/fa'

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  const titleAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    }),
  }

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent-orange/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-20 h-20 border-2 border-primary-500/30 rounded-lg"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-10 w-32 h-32 border-2 border-accent-orange/30 rounded-full"
      />

      <motion.div
        style={{ y, opacity, scale }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 glass-effect rounded-full text-sm font-medium text-primary-400 border border-primary-500/20">
              Award Winning Architecture Firm
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 leading-tight"
          >
            <motion.span
              custom={0}
              initial="hidden"
              animate="visible"
              variants={titleAnimation}
              className="block"
            >
              THIS IS{' '}
              <span className="gradient-text">INSCRIBE</span>
            </motion.span>
            <motion.span
              custom={1}
              initial="hidden"
              animate="visible"
              variants={titleAnimation}
              className="block"
            >
              ARCHITECTS
            </motion.span>
            <motion.span
              custom={2}
              initial="hidden"
              animate="visible"
              variants={titleAnimation}
              className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4"
            >
              AND WE ARE{' '}
              <span className="relative">
                <span className="text-stroke-2 text-transparent">AWESOME</span>
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute inset-0 gradient-text overflow-hidden"
                >
                  AWESOME
                </motion.span>
              </span>
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg sm:text-xl text-gray-400 mb-10 max-w-3xl mx-auto"
          >
            We convert your dreams into your dream houses. Creating innovative, sustainable architectural 
            designs that transform spaces and inspire communities.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/portfolio"
              className="group relative px-8 py-4 bg-primary-500 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Our Work
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>

            <button className="group flex items-center gap-3 px-8 py-4 glass-effect rounded-full font-medium hover:bg-white/10 transition-all duration-300">
              <div className="p-3 bg-white/10 rounded-full group-hover:bg-primary-500 transition-colors">
                <FaPlay className="text-sm" />
              </div>
              Watch Showreel
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
          >
            {[
              { number: '200+', label: 'Projects Completed' },
              { number: '23+', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <h3 className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{stat.number}</h3>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-primary-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}