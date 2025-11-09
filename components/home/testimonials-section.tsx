'use client'

import { motion } from 'framer-motion'
import { testimonials } from '@/lib/constants'
import { Quote } from 'lucide-react'

export function TestimonialsSection() {
  return (
    <section className="py-32 border-t border-grey-mouse/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="text-grey-mouse text-xs font-light uppercase tracking-[0.2em] mb-6 relative inline-block">
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-px bg-grey-mouse/30" />
            Client Testimonials
            <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-px bg-grey-mouse/30" />
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-black">
            What Our{' '}
            <span className="text-grey-mouse">
              Clients Say
            </span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="p-10 border border-grey-mouse/20 hover:border-grey-mouse/40 hover:shadow-lg transition-all duration-300 bg-beige-50/30 relative group"
              >
                {/* Architectural Corner Markers */}
                <div className="absolute top-3 left-3 w-4 h-4 border-l border-t border-grey-mouse/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-3 right-3 w-4 h-4 border-r border-t border-grey-mouse/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                >
                  <Quote className="text-grey-mouse/30 mb-6" size={24} />
                </motion.div>
                <p className="text-base text-black-soft font-light leading-relaxed mb-8">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-grey-mouse/20 pt-6">
                  <p className="text-base font-light mb-2 text-black">{testimonial.name}</p>
                  <p className="text-sm text-grey-mouse font-light mb-2">
                    {testimonial.role}, {testimonial.company}
                  </p>
                  {testimonial.project && (
                    <p className="text-grey-mouse/70 text-xs font-light uppercase tracking-wider">
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

