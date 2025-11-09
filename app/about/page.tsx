'use client'

import { PageTransition } from '@/components/layout/page-transition'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="text-white/40 text-xs font-light uppercase tracking-[0.2em] mb-6">
              About
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-light mb-12 leading-tight">
              About <span className="text-white/90">Us</span>
            </h1>
            <div className="space-y-6">
              <p className="text-base md:text-lg text-white/50 font-light leading-relaxed">
                Inscribe Architects was founded in 2001 by Shelly Kakkar with a vision 
                to redefine architectural excellence in India.
              </p>
              <p className="text-base md:text-lg text-white/50 font-light leading-relaxed">
                Over the past 23+ years, we have successfully completed over 200 projects, 
                ranging from individual residences to large commercial complexes. Our approach 
                blends contemporary aesthetics with functional excellence, always keeping our 
                clients' needs at the forefront.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}