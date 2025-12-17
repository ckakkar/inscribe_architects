'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/lib/constants'
import { Quote } from 'lucide-react'
import { fadeInUpViewportWithDelay } from '@/lib/utils/animations'

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 border-t border-umber/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUpViewportWithDelay(0)}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <p className="text-umber/70 text-xs font-light uppercase tracking-[0.15em] mb-6">
            Voices
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-umber">
            Client{' '}
            <span className="text-umber/85">
              Voices
            </span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                {...fadeInUpViewportWithDelay(index * 0.05)}
                className="p-6 sm:p-8 md:p-10 border border-umber/20 hover:border-umber/40 transition-all duration-300 bg-dutch-white/50 hover:bg-dutch-white hover:shadow-medium group"
                whileHover={{ y: -4 }}
              >
                <div>
                  <Quote className="text-umber/30 mb-6 group-hover:text-umber/40 transition-colors" size={24} />
                </div>
                <p className="text-sm sm:text-base text-umber/85 font-light leading-relaxed mb-6 sm:mb-8 group-hover:text-umber transition-colors">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-umber/20 pt-4 sm:pt-6 group-hover:border-umber/30 transition-colors">
                  <p className="text-sm sm:text-base font-light mb-1 sm:mb-2 text-umber group-hover:text-umber-dark transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-umber/80 font-light mb-1 sm:mb-2">
                    {testimonial.role}{testimonial.company && `, ${testimonial.company}`}
                  </p>
                  {testimonial.project && (
                    <p className="text-umber/70 text-xs font-light uppercase tracking-wider">
                      {testimonial.project}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

