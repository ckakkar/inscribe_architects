'use client'

import { motion } from 'framer-motion'
import { awards } from '@/lib/constants'
import { Award } from 'lucide-react'

export function AwardsSection() {
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
            Recognition
            <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-px bg-grey-mouse/30" />
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-black">
            Awards &{' '}
            <span className="text-grey-mouse">
              Achievements
            </span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-8 border border-grey-mouse/20 hover:border-grey-mouse/50 hover:shadow-xl transition-all duration-500 bg-beige-50/30 relative group arch-reveal overflow-hidden"
              >
                {/* Animated Corner Lines */}
                <motion.div
                  className="absolute top-0 left-0 w-8 h-px bg-grey-mouse/30"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.div
                  className="absolute top-0 left-0 h-8 w-px bg-grey-mouse/30"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.div
                  className="absolute top-0 right-0 w-8 h-px bg-grey-mouse/30"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.div
                  className="absolute top-0 right-0 h-8 w-px bg-grey-mouse/30"
                  initial={{ scaleY: 0 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
                
                <div className="flex items-start gap-4">
                  <motion.div
                    className="mt-1"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Award className="text-grey-mouse" size={20} />
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3
                      className="text-black text-base font-light mb-2"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {award.title}
                    </motion.h3>
                    <p className="text-grey-mouse text-sm font-light mb-1">{award.organization}</p>
                    <motion.p
                      className="text-grey-mouse/70 text-sm font-light"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {award.year}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

