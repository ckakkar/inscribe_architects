'use client'

import { motion } from 'framer-motion'
import { services } from '@/lib/constants'

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 relative">
      {/* Architectural Section Numbering */}
      <div className="absolute left-4 sm:left-8 top-16 sm:top-24 md:top-32 text-grey-mouse/20 font-display text-4xl sm:text-5xl md:text-6xl font-light -rotate-90 origin-left hidden lg:block">
        03
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 sm:mb-16 md:mb-24"
        >
          <p className="text-grey-mouse text-xs font-light uppercase tracking-[0.2em] mb-6">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="h-full p-6 sm:p-8 md:p-10 border border-grey-mouse/20 hover:border-grey-mouse/50 hover:shadow-xl transition-all duration-500 bg-beige-50/30 relative group arch-border-draw overflow-hidden"
            >
              {/* Animated Corner Lines */}
              <motion.div
                className="absolute top-0 left-0 w-12 h-px bg-grey-mouse/30"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute top-0 left-0 h-12 w-px bg-grey-mouse/30"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute top-0 right-0 w-12 h-px bg-grey-mouse/30"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute top-0 right-0 h-12 w-px bg-grey-mouse/30"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-12 h-px bg-grey-mouse/30"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute bottom-0 left-0 h-12 w-px bg-grey-mouse/30"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-12 h-px bg-grey-mouse/30"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute bottom-0 right-0 h-12 w-px bg-grey-mouse/30"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
              
              {/* Diagonal line on hover */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-grey-mouse/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
              </motion.div>
              
              <motion.div
                className="text-3xl sm:text-4xl mb-4 sm:mb-6 opacity-30"
                whileHover={{ opacity: 0.5, scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.4 }}
              >
                {service.icon}
              </motion.div>
              <motion.h3
                className="text-lg sm:text-xl font-light mb-3 sm:mb-4 text-black"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                {service.title}
              </motion.h3>
              <p className="text-sm sm:text-base text-grey-mouse font-light mb-4 sm:mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2.5">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-base text-black-soft font-light group/item"
                  >
                    <motion.div
                      className="w-1 h-1 rounded-full bg-grey-mouse/50 flex-shrink-0"
                      whileHover={{ scale: 1.5, backgroundColor: 'rgba(139, 139, 122, 0.8)' }}
                      transition={{ duration: 0.2 }}
                    />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}