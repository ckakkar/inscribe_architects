'use client'

import { motion } from 'framer-motion'
import { services } from '@/lib/constants'

export function ServicesSection() {
  return (
    <section className="py-32 relative">
      {/* Architectural Section Numbering */}
      <div className="absolute left-8 top-32 text-grey-mouse/20 font-display text-6xl font-light -rotate-90 origin-left">
        03
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <p className="text-grey-mouse text-xs font-light uppercase tracking-[0.2em] mb-6">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-black">
            Our{' '}
            <span className="text-grey-mouse">
              Services
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="h-full p-10 border border-grey-mouse/20 hover:border-grey-mouse/40 hover:shadow-lg transition-all duration-300 bg-beige-50/30 relative group"
            >
              {/* Architectural Corner Brackets */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-grey-mouse/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-grey-mouse/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-grey-mouse/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-grey-mouse/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <motion.div
                className="text-4xl mb-6 opacity-30"
                whileHover={{ opacity: 0.4 }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-light mb-4 text-black">{service.title}</h3>
              <p className="text-base text-grey-mouse font-light mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2.5">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                    className="flex items-center gap-3 text-base text-black-soft font-light"
                  >
                    <div className="w-1 h-1 rounded-full bg-grey-mouse/50 flex-shrink-0" />
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