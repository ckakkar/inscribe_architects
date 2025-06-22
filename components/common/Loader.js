'use client'

import { motion } from 'framer-motion'

export default function Loader({ fullScreen = true }) {
  const containerClass = fullScreen
    ? 'fixed inset-0 z-50 flex items-center justify-center bg-black'
    : 'flex items-center justify-center p-8'

  return (
    <div className={containerClass}>
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Main Logo */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative"
        >
          <div className="w-20 h-20 bg-primary-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-3xl">IA</span>
          </div>
        </motion.div>

        {/* Orbiting Elements */}
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
        >
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-accent-orange rounded-full" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-primary-400 rounded-full" />
        </motion.div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-primary-500 rounded-lg blur-2xl opacity-30" />
      </motion.div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-20 text-gray-400 text-sm"
      >
        Loading awesome architecture...
      </motion.p>
    </div>
  )
}