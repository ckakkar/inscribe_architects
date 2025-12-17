'use client'

import { motion } from 'framer-motion'
import { services } from '@/lib/constants'
import { fadeInUpViewportWithDelay } from '@/lib/utils/animations'

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUpViewportWithDelay(0)}
          className="text-center mb-12 sm:mb-16 md:mb-24"
        >
          <p className="text-umber/70 text-xs font-light uppercase tracking-[0.15em] mb-6">
            Expertise
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-umber">
            Our{' '}
            <span className="text-umber/85">
              Practice
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              {...fadeInUpViewportWithDelay(index * 0.05)}
              className="h-full p-6 sm:p-8 md:p-10 border border-taupe/20 hover:border-umber/40 transition-all duration-300 bg-dutch-white/50 hover:bg-dutch-white hover:shadow-medium group"
              whileHover={{ y: -4 }}
            >
              <div className="text-3xl sm:text-4xl mb-4 sm:mb-6 opacity-30 group-hover:opacity-40 transition-opacity duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-light mb-3 sm:mb-4 text-umber group-hover:text-umber-dark transition-colors">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-umber/85 font-light mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2.5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm sm:text-base text-umber/90 font-light group-hover:text-umber transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-terracotta/60 flex-shrink-0 group-hover:bg-terracotta transition-colors" />
                    <span className="text-umber/85 group-hover:text-umber">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}