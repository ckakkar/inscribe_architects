'use client'

import { stats } from '@/lib/constants'

export function AboutSection() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-32">
          <p className="text-white/30 text-xs font-light uppercase tracking-[0.2em] mb-8">
            Our Story
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-12 leading-tight">
            Founded by{' '}
            <span className="text-white/70">
              Shelly Kakkar
            </span>
          </h2>
          <p className="text-base md:text-lg text-white/40 font-light leading-relaxed">
            Since 2001, Inscribe Architects has been creating innovative,
            sustainable architectural designs that transform spaces and inspire
            communities. Our approach blends contemporary aesthetics with
            functional excellence.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center py-12 border-b border-white/5">
              <h3 className="text-3xl lg:text-4xl font-light text-white mb-2">
                {stat.number}
              </h3>
              <p className="text-white/30 text-xs font-light uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}