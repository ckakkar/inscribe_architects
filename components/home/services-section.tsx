'use client'

import { motion } from 'framer-motion'
import { services } from '@/lib/constants'
import { Card } from '@/components/ui/card'

export function ServicesSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-transparent to-primary-900/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary-500 font-medium uppercase tracking-wider mb-4">
            What We Do
          </p>
          <h2 className="font-display text-5xl md:text-7xl">
            Our{' '}
            <span className="font-bold bg-gradient-to-r from-primary-400 to-accent-orange bg-clip-text text-transparent">
              Services
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full group hover:scale-105 transition-all">
                <div className="text-6xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-primary-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}