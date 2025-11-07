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
          >
            <h1 className="font-display text-6xl md:text-8xl font-bold mb-8">
              About <span className="bg-gradient-to-r from-primary-400 to-accent-orange bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mb-8">
              Inscribe Architects was founded in 2001 by Shelly Kakkar with a vision 
              to redefine architectural excellence in India.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl">
              Over the past 23+ years, we have successfully completed over 200 projects, 
              ranging from individual residences to large commercial complexes. Our approach 
              blends contemporary aesthetics with functional excellence, always keeping our 
              clients' needs at the forefront.
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}