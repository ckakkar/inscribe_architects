'use client'

import { motion } from 'framer-motion'
import { awards } from '@/lib/constants'
import { Award } from 'lucide-react'
import { fadeInUpViewportWithDelay } from '@/lib/utils/animations'

export function AwardsSection() {
  return (
    <section className="py-32 border-t border-umber/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          {...fadeInUpViewportWithDelay(0)}
          className="text-center mb-20"
        >
          <p className="text-umber/70 text-xs font-light uppercase tracking-[0.15em] mb-6">
            Recognition
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-umber">
            Awards &{' '}
            <span className="text-umber/85">
              Accolades
            </span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.id}
                {...fadeInUpViewportWithDelay(index * 0.05)}
                className="p-8 border border-umber/20 hover:border-umber/40 transition-all duration-300 bg-dutch-white/50 hover:bg-dutch-white hover:shadow-medium group"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Award className="text-umber/80 group-hover:text-umber transition-colors" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-umber text-base font-light mb-2 group-hover:text-umber-dark transition-colors">
                      {award.title}
                    </h3>
                    <p className="text-umber/85 group-hover:text-umber/90 text-sm font-light mb-1 transition-colors">{award.organization}</p>
                    <p className="text-umber/75 group-hover:text-umber/85 text-sm font-light transition-colors">
                      {award.year}
                    </p>
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

