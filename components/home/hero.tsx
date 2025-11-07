'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { MagneticButton } from '@/components/ui/magnetic-button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl animate-float animation-delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <h1 className="font-display font-bold text-8xl sm:text-9xl lg:text-[12rem] leading-none mb-4">
              INSCRIBE
            </h1>
            <div className="h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent mb-4" />
            <h2 className="font-display font-light text-5xl sm:text-6xl lg:text-8xl tracking-[0.3em] text-gray-400">
              ARCHITECTS
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-12 mb-16"
          >
            <p className="text-2xl md:text-3xl text-gray-400 font-light mb-2">
              We don't just design buildings.
            </p>
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-orange bg-clip-text text-transparent">
              We craft experiences.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <MagneticButton>
              <Link href="/projects">
                <Button size="lg" className="group">
                  Explore Our Vision
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
            </MagneticButton>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
              <p className="mt-2 text-xs uppercase tracking-widest">Scroll</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}