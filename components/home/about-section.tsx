'use client'

import { motion } from 'framer-motion'
import { stats } from '@/lib/constants'
import { AnimatedCounter } from '@/components/shared/animated-counter'

export function AboutSection() {
  return (
    <section className="py-32 relative">
      {/* Architectural Section Marker */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-px bg-grey-mouse/20" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-px bg-grey-mouse/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Architectural Section Number */}
        <div className="absolute left-8 top-32 text-grey-mouse/20 font-display text-6xl font-light -rotate-90 origin-left hidden lg:block">
          02
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-32"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-grey-mouse text-xs font-light uppercase tracking-[0.2em] mb-8 relative inline-block"
          >
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-px bg-grey-mouse/30" />
            Our Story
            <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-px bg-grey-mouse/30" />
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-light mb-12 leading-tight text-black"
          >
            Founded by{' '}
            <span className="text-grey-mouse">
              Shelly Kakkar
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-black-soft font-light leading-relaxed mb-8"
          >
            Since 2001, Inscribe Architects has been creating thoughtful architectural
            and interior designs that blend practical design thinking with artistic
            sensibility. Based in Ludhiana, Punjab, we have completed over 1,100 projects
            ranging from private homes to commercial and institutional environments.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base text-grey-mouse font-light leading-relaxed"
          >
            Our work emphasizes function, aesthetics, and contextual detailing. We specialize
            in residential and commercial architecture, interior design, 3D visualization,
            and turnkey project execution. Our team works closely with clients to deliver
            exceptional results that tell their own story through form, light, and materiality.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="text-center py-12 border-b border-grey-mouse/20 relative group cursor-default"
            >
              {/* Animated Corner Lines */}
              <motion.div
                className="absolute top-0 left-0 w-6 h-px bg-grey-mouse/30"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute top-0 left-0 h-6 w-px bg-grey-mouse/30"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute top-0 right-0 w-6 h-px bg-grey-mouse/30"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute top-0 right-0 h-6 w-px bg-grey-mouse/30"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              
              <motion.h3
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="text-4xl lg:text-5xl font-light text-black mb-3"
              >
                <AnimatedCounter value={stat.number} duration={2} />
              </motion.h3>
              <motion.p
                className="text-grey-mouse text-xs font-light uppercase tracking-wider"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.2 }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}