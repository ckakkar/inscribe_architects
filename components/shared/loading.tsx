'use client'

import { motion } from 'framer-motion'

export function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="relative">
        {/* Spinning Logo */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="relative w-32 h-32"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-orange rounded-2xl blur-xl opacity-50" />
          <div className="relative w-full h-full bg-black border-2 border-primary-500/50 rounded-2xl flex items-center justify-center">
            <span className="text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-orange bg-clip-text text-transparent">
              IA
            </span>
          </div>
        </motion.div>

        {/* Orbiting Dots */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
        >
          <div className="absolute -top-2 left-1/2 w-4 h-4 bg-primary-500 rounded-full -translate-x-1/2" />
          <div className="absolute top-1/2 -right-2 w-4 h-4 bg-accent-orange rounded-full -translate-y-1/2" />
          <div className="absolute -bottom-2 left-1/2 w-4 h-4 bg-primary-500 rounded-full -translate-x-1/2" />
          <div className="absolute top-1/2 -left-2 w-4 h-4 bg-accent-orange rounded-full -translate-y-1/2" />
        </motion.div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-gray-400 text-sm whitespace-nowrap"
        >
          Loading excellence...
        </motion.p>
      </div>
    </div>
  )
}