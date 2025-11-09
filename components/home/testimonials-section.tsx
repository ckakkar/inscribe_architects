'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/lib/constants'
import { Quote } from 'lucide-react'

export function TestimonialsSection() {
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
            Client Testimonials
            <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-px bg-grey-mouse/30" />
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-black">
            What Our{' '}
            <span className="text-grey-mouse">
              Clients Say
            </span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-6 sm:p-8 md:p-10 border border-grey-mouse/20 hover:border-grey-mouse/50 hover:shadow-xl transition-all duration-500 bg-beige-50/30 relative group arch-reveal overflow-hidden"
              >
                {/* Animated Corner Lines */}
                <motion.div
                  className="absolute top-0 left-0 w-10 h-px bg-grey-mouse/30"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.div
                  className="absolute top-0 left-0 h-10 w-px bg-grey-mouse/30"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.div
                  className="absolute top-0 right-0 w-10 h-px bg-grey-mouse/30"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.div
                  className="absolute top-0 right-0 h-10 w-px bg-grey-mouse/30"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                >
                  <Quote className="text-grey-mouse/30 mb-6" size={24} />
                </motion.div>
                <motion.p
                  className="text-sm sm:text-base text-black-soft font-light leading-relaxed mb-6 sm:mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  whileHover={{ x: 4 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                >
                  "{testimonial.content}"
                </motion.p>
                <motion.div
                  className="border-t border-grey-mouse/20 pt-4 sm:pt-6"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                >
                  <motion.p
                    className="text-sm sm:text-base font-light mb-1 sm:mb-2 text-black"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {testimonial.name}
                  </motion.p>
                  <p className="text-xs sm:text-sm text-grey-mouse font-light mb-1 sm:mb-2">
                    {testimonial.role}, {testimonial.company}
                  </p>
                  {testimonial.project && (
                    <motion.p
                      className="text-grey-mouse/70 text-xs font-light uppercase tracking-wider"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {testimonial.project}
                    </motion.p>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

