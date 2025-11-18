'use client'

import { motion } from 'framer-motion'
import { stats } from '@/lib/constants'
import { AnimatedCounter } from '@/components/shared/animated-counter'
import { fadeInUpViewportWithDelay } from '@/lib/utils/animations'

export function AboutSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          {...fadeInUpViewportWithDelay(0)}
          className="max-w-3xl mx-auto text-center mb-16 sm:mb-24 md:mb-32"
        >
          <p className="text-umber/70 text-xs font-light uppercase tracking-[0.15em] mb-6">
            Narrative
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light mb-8 sm:mb-10 md:mb-12 leading-tight text-umber px-4 sm:px-0">
            Founded by{' '}
            <span className="text-umber/85">
              Shelly Kakkar
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-black-soft font-light leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0">
            Since 2001, Inscribe Architects has been creating thoughtful architectural
            and interior designs that blend practical design thinking with artistic
            sensibility. Based in Ludhiana, Punjab, we have completed over 1,100 projekts
            ranging from private homes to commercial and institutional environments.
          </p>
          <p className="text-sm sm:text-base text-umber/85 font-light leading-relaxed px-4 sm:px-0">
            Our work emphasizes function, aesthetics, and contextual detailing. We specialize
            in residential and commercial architecture, interior design, 3D visualization,
            and turnkey project execution. Our team works closely with clients to deliver
            exceptional results that tell their own story through form, light, and materiality.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              {...fadeInUpViewportWithDelay(index * 0.05)}
              className="text-center py-6 sm:py-8 md:py-12 border-b border-umber/20 relative"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-umber mb-2 sm:mb-3">
                <AnimatedCounter value={stat.number} duration={2} />
              </h3>
              <p className="text-umber/75 text-xs font-light uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}