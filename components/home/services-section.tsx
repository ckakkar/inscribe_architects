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
          <p className="text-grey-mouse/70 text-xs font-light uppercase tracking-[0.15em] mb-6">
            What We Do
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-black">
            Our{' '}
            <span className="text-grey-mouse">
              Services
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              {...fadeInUpViewportWithDelay(index * 0.05)}
              className="h-full p-6 sm:p-8 md:p-10 border border-grey-mouse/20 hover:border-grey-mouse/40 transition-colors duration-300 bg-beige-50/30"
            >
              <div className="text-3xl sm:text-4xl mb-4 sm:mb-6 opacity-30">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-light mb-3 sm:mb-4 text-black">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-grey-mouse/80 font-light mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2.5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-base text-black-soft font-light"
                  >
                    <div className="w-1 h-1 rounded-full bg-grey-mouse/60 flex-shrink-0" />
                    <span className="text-grey-mouse/90">{feature}</span>
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