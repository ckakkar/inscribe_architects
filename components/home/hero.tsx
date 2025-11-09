'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-16">
            <h1 className="font-display font-light text-6xl sm:text-7xl lg:text-8xl leading-[0.95] mb-8 tracking-tight">
              INSCRIBE
            </h1>
            <div className="h-px bg-white/10 w-16 mx-auto my-12" />
            <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl tracking-[0.15em] text-white/50">
              ARCHITECTS
            </h2>
          </div>

          {/* Tagline */}
          <div className="mb-20">
            <p className="text-base md:text-lg text-white/40 font-light leading-relaxed max-w-xl mx-auto">
              We don't just design buildings.
              <br />
              <span className="text-white/60">We craft experiences.</span>
            </p>
          </div>

          {/* Stats */}
          <div className="mb-20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-light text-white mb-1">25+</p>
                <p className="text-xs font-light text-white/30 uppercase tracking-wider">Years</p>
              </div>
              <div className="w-px h-8 bg-white/5 hidden sm:block" />
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-light text-white mb-1">1100+</p>
                <p className="text-xs font-light text-white/30 uppercase tracking-wider">Projects</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <Link href="/projects">
              <Button size="lg" variant="outline">
                Explore Our Vision
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}