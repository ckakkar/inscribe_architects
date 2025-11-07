'use client'

import { motion } from 'framer-motion'
import { stats } from '@/lib/constants'
import { Card } from '@/components/ui/card'

export function AboutSection() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-500 font-medium uppercase tracking-wider mb-4"
          >
            Our Story
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-5xl md:text-7xl mb-8"
          >
            Founded by{' '}
            <span className="font-bold bg-gradient-to-r from-primary-400 to-accent-orange bg-clip-text text-transparent">
              Shelly Kakkar
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 leading-relaxed"
          >
            Since 2001, Inscribe Architects has been creating innovative,
            sustainable architectural designs that transform spaces and inspire
            communities. Our approach blends contemporary aesthetics with
            functional excellence.
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center group hover:scale-105 transition-transform">
                <h3 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary-400 to-accent-orange bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}