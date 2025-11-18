'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { fadeInUpViewportWithDelay } from '@/lib/utils/animations'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-0">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <motion.div
            {...fadeInUpViewportWithDelay(0)}
            className="mb-8 sm:mb-12 md:mb-16"
          >
            <h1 className="font-display font-light text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 sm:mb-8 md:mb-10 tracking-tight text-umber">
              INSCRIBE
            </h1>
            <div className="relative h-[1.5px] bg-umber/30 mx-auto my-8 sm:my-12 md:my-14 arch-line" />
            <h2 className="font-display font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0.1em] text-umber/80 mt-8 sm:mt-12 md:mt-14">
              ARCHITECTS
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.div
            {...fadeInUpViewportWithDelay(0.1)}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <p className="text-base sm:text-lg md:text-xl text-umber font-light leading-relaxed max-w-2xl mx-auto mb-4 sm:mb-6 px-4 sm:px-0">
              Designs that speak.
              <br />
              <span className="text-umber font-normal">Spaces that feel.</span>
            </p>
            <p className="text-sm sm:text-base text-umber/85 font-light leading-relaxed max-w-xl mx-auto px-4 sm:px-0">
              Crafting thoughtful homes & commercial spaces since 2001.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              A Ludhiana-based architecture and interior design firm.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeInUpViewportWithDelay(0.2)}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-light text-umber mb-2">23+</p>
                <p className="text-xs font-light text-umber/75 uppercase tracking-wider">Years</p>
              </div>
              <div className="w-px h-8 bg-umber/10 hidden sm:block" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl font-light text-umber mb-2">1100+</p>
                <p className="text-xs font-light text-umber/75 uppercase tracking-wider">Projekts</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            {...fadeInUpViewportWithDelay(0.3)}
          >
            <Link href="/projects" className="inline-block">
              <Button size="lg" variant="outline" className="group touch-target w-full sm:w-auto">
                <span className="text-sm sm:text-base">Explore Our Work</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}