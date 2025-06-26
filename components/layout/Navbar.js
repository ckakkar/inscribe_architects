'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'backdrop-blur-xl bg-black/80 py-4' : 'py-8'
        }`}
        onMouseMove={handleMouseMove}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="group relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring" }}
                  className="flex items-center space-x-3"
                >
                  {/* Animated Logo Mark */}
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-orange rounded-lg blur-xl opacity-50"
                    />
                    <div className="relative w-12 h-12 bg-black border border-primary-500/50 rounded-lg flex items-center justify-center overflow-hidden">
                      <motion.span
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-white font-bold text-xl gradient-text"
                      >
                        IA
                      </motion.span>
                    </div>
                  </div>
                  
                  {/* Logo Text */}
                  <div className="overflow-hidden">
                    <motion.div
                      initial={{ y: 30 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <h1 className="font-display text-2xl">
                        <span className="font-light">INSCRIBE</span>
                        <span className="font-bold gradient-text"> ARCHITECTS</span>
                      </h1>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative px-6 py-3"
                >
                  <Link
                    href={link.href}
                    className="relative z-10 text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm uppercase tracking-wider"
                  >
                    {link.name}
                  </Link>
                  
                  {/* Hover Background */}
                  <AnimatePresence>
                    {hoveredIndex === i && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-orange/10 rounded-full blur-sm"
                        layoutId="navHover"
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="ml-8"
              >
                <Link
                  href="/contact"
                  className="relative group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-8 py-3 overflow-hidden rounded-full border border-primary-500/50"
                  >
                    <span className="relative z-10 font-medium text-sm uppercase tracking-wider">
                      Start a Project
                    </span>
                    
                    {/* Animated Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            >
              <div className="relative w-6 h-5">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="absolute top-0 left-0 w-full h-0.5 bg-white origin-center"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute top-2 left-0 w-full h-0.5 bg-white"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="absolute top-4 left-0 w-full h-0.5 bg-white origin-center"
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Nav Background Blur */}
        <motion.div
          style={{
            background: `radial-gradient(circle at ${smoothMouseX}px ${smoothMouseY}px, rgba(239, 68, 68, 0.1), transparent 50%)`,
          }}
          className="absolute inset-0 -z-10 opacity-50"
        />
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-full max-w-md bg-black/80 backdrop-blur-2xl border-l border-primary-500/20"
            >
              <div className="flex flex-col h-full p-8 pt-24">
                <nav className="flex-1 flex flex-col justify-center">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="overflow-hidden"
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-4 text-3xl font-display hover:gradient-text transition-all duration-300"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-8 border-t border-primary-500/20"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full py-4 text-center bg-gradient-to-r from-primary-500 to-accent-orange rounded-full font-medium text-lg"
                  >
                    Start a Project
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}