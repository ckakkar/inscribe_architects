'use client'

import { motion } from 'framer-motion'
import { processSteps } from '@/lib/constants'
import { fadeInUpViewportWithDelay } from '@/lib/utils/animations'

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 border-t border-umber/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUpViewportWithDelay(0)}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <p className="text-umber/70 text-xs font-light uppercase tracking-[0.15em] mb-6">
            Methodology
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-umber">
            Our{' '}
            <span className="text-umber/85">
              Approach
            </span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                {...fadeInUpViewportWithDelay(index * 0.05)}
                className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12 group"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-umber/30 group-hover:border-umber/50 flex items-center justify-center relative transition-colors duration-300 bg-dutch-white group-hover:bg-umber/5">
                    <span className="text-umber/80 group-hover:text-umber text-xs sm:text-sm font-light transition-colors">
                      {step.number}
                    </span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-px h-8 sm:h-10 md:h-12 bg-umber/20 mx-auto mt-3 sm:mt-4 group-hover:bg-umber/30 transition-colors" />
                  )}
                </div>
                <div className="flex-1 pb-8 sm:pb-10 md:pb-12 border-b border-umber/10 group-hover:border-umber/20 transition-colors last:border-0">
                  <h3 className="text-lg sm:text-xl font-light text-umber mb-3 sm:mb-4 group-hover:text-umber-dark transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-umber/85 group-hover:text-umber/90 font-light leading-relaxed transition-colors">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

