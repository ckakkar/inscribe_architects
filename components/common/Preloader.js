'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += Math.random() * 30
      if (currentProgress >= 100) {
        setProgress(100)
        clearInterval(interval)
        // Dismiss the preloader after reaching 100%
        setTimeout(() => {
          setIsLoading(false)
        }, 500)
      } else {
        setProgress(currentProgress)
      }
    }, 200)

    // Ensure preloader dismisses after max 3 seconds
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black"
        >
          <div className="relative">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.6, 0.05, 0.01, 0.9] }}
              className="relative"
            >
              {/* Central Logo */}
              <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-orange rounded-2xl blur-xl opacity-50" />
                <div className="relative w-full h-full bg-black border-2 border-primary-500/50 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl font-bold gradient-text">IA</span>
                </div>
              </div>

              {/* Orbiting Elements */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute -top-2 left-1/2 w-4 h-4 bg-primary-500 rounded-full -translate-x-1/2" />
                <div className="absolute top-1/2 -right-2 w-4 h-4 bg-accent-orange rounded-full -translate-y-1/2" />
                <div className="absolute -bottom-2 left-1/2 w-4 h-4 bg-primary-500 rounded-full -translate-x-1/2" />
                <div className="absolute top-1/2 -left-2 w-4 h-4 bg-accent-orange rounded-full -translate-y-1/2" />
              </motion.div>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 w-64"
            >
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 to-accent-orange"
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-center mt-4 text-sm text-gray-400"
              >
                {Math.round(progress)}%
              </motion.p>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center mt-8"
            >
              <h3 className="text-2xl font-display font-light">
                <span className="gradient-text font-bold">INSCRIBE</span> ARCHITECTS
              </h3>
              <p className="text-sm text-gray-500 mt-2">Crafting Experiences</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}