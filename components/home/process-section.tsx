'use client'

import { motion } from 'framer-motion'
import { processSteps } from '@/lib/constants'
import { fadeInUpViewportWithDelay } from '@/lib/utils/animations'

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 border-t border-grey-mouse/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUpViewportWithDelay(0)}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <p className="text-grey-mouse/70 text-xs font-light uppercase tracking-[0.15em] mb-6">
            Our Process
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-black">
            How We{' '}
            <span className="text-grey-mouse">
              Work
            </span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                {...fadeInUpViewportWithDelay(index * 0.05)}
                className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-grey-mouse/30 flex items-center justify-center relative">
                    <span className="text-grey-mouse text-xs sm:text-sm font-light">
                      {step.number}
                    </span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-px h-8 sm:h-10 md:h-12 bg-grey-mouse/20 mx-auto mt-3 sm:mt-4" />
                  )}
                </div>
                <div className="flex-1 pb-8 sm:pb-10 md:pb-12">
                  <h3 className="text-lg sm:text-xl font-light text-black mb-3 sm:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-grey-mouse/80 font-light leading-relaxed">
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

