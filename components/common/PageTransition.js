'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const pageVariants = {
  initial: {
    opacity: 0,
    clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
  },
  in: {
    opacity: 1,
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
  },
  out: {
    opacity: 0,
    clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
  },
}

const pageTransition = {
  type: 'tween',
  ease: [0.6, 0.05, 0.01, 0.9],
  duration: 0.8,
}

export default function PageTransition({ children }) {
  const pathname = usePathname()

  return (
    <>
      {/* Page Transition Overlay */}
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="relative"
      >
        {children}
      </motion.div>

      {/* Loading Bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-orange z-[100] origin-left"
      />
    </>
  )
}