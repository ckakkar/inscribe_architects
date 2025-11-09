'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Architectural Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Corner Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-grey-mouse/10 rotate-45" />
        <div className="absolute top-20 left-10 w-24 h-24 border border-grey-mouse/15 rotate-45" />
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-grey-mouse/10 rotate-45" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-grey-mouse/15 rotate-45" />
        
        {/* Architectural Lines */}
        <div className="absolute top-1/2 left-0 w-1/4 h-px bg-gradient-to-r from-transparent via-grey-mouse/10 to-transparent" />
        <div className="absolute top-1/2 right-0 w-1/4 h-px bg-gradient-to-l from-transparent via-grey-mouse/10 to-transparent" />
        
        {/* Vertical Architectural Lines */}
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-grey-mouse/5 to-transparent" />
        <div className="absolute right-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-grey-mouse/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <h1 className="font-display font-light text-6xl sm:text-7xl lg:text-8xl mb-10 tracking-tight text-black">
              INSCRIBE
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[1.5px] bg-grey-mouse/40 mx-auto my-14 arch-line"
            />
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-display font-light text-3xl sm:text-4xl lg:text-5xl tracking-[0.1em] text-grey-mouse mt-14"
            >
              ARCHITECTS
            </motion.h2>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20"
          >
            <p className="text-lg md:text-xl text-black-soft font-light leading-relaxed max-w-2xl mx-auto mb-6">
              Designs that speak.
              <br />
              <span className="text-black font-normal">Spaces that feel.</span>
            </p>
            <p className="text-base text-grey-mouse font-light leading-relaxed max-w-xl mx-auto">
              Crafting thoughtful homes & commercial spaces since 2001.
              <br />
              A Ludhiana-based architecture and interior design firm.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-20"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16">
              <motion.div
                className="text-center relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {/* Animated line decoration */}
                <motion.div
                  className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-px bg-grey-mouse/20"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
                <p className="text-3xl md:text-4xl font-light text-black mb-2">23+</p>
                <p className="text-xs font-light text-grey-mouse uppercase tracking-wider">Years</p>
                <motion.div
                  className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-px bg-grey-mouse/20"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </motion.div>
              <motion.div
                className="w-px h-8 bg-grey-mouse/20 hidden sm:block"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              />
              <motion.div
                className="text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <p className="text-3xl md:text-4xl font-light text-black mb-2">1100+</p>
                <p className="text-xs font-light text-grey-mouse uppercase tracking-wider">Projects</p>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/projects">
              <Button size="lg" variant="outline" className="group">
                Explore Our Vision
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}