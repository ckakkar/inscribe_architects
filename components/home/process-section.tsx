'use client'

import { motion } from 'framer-motion'
import { processSteps } from '@/lib/constants'

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 border-t border-grey-mouse/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <p className="text-grey-mouse text-xs font-light uppercase tracking-[0.2em] mb-6 relative inline-block">
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-px bg-grey-mouse/30" />
            Our Process
            <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-px bg-grey-mouse/30" />
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
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-12"
              >
                <div className="flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-grey-mouse/30 flex items-center justify-center relative group cursor-default"
                  >
                    {/* Animated Corner Lines */}
                    <motion.div
                      className="absolute top-0 left-0 w-4 h-px bg-grey-mouse/40"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute top-0 left-0 h-4 w-px bg-grey-mouse/40"
                      initial={{ scaleY: 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute top-0 right-0 w-4 h-px bg-grey-mouse/40"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute top-0 right-0 h-4 w-px bg-grey-mouse/40"
                      initial={{ scaleY: 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 w-4 h-px bg-grey-mouse/40"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-4 w-px bg-grey-mouse/40"
                      initial={{ scaleY: 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute bottom-0 right-0 w-4 h-px bg-grey-mouse/40"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute bottom-0 right-0 h-4 w-px bg-grey-mouse/40"
                      initial={{ scaleY: 0 }}
                      whileHover={{ scaleY: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.span
                      className="text-grey-mouse text-xs sm:text-sm font-light relative z-10"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {step.number}
                    </motion.span>
                  </motion.div>
                  {index < processSteps.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                      className="w-px h-8 sm:h-10 md:h-12 bg-grey-mouse/20 mx-auto mt-3 sm:mt-4"
                    />
                  )}
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  className="flex-1 pb-8 sm:pb-10 md:pb-12 group/item"
                >
                  <motion.h3
                    className="text-lg sm:text-xl font-light text-black mb-3 sm:mb-4"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    className="text-sm sm:text-base text-black-soft font-light leading-relaxed"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

