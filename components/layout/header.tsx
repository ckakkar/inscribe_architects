'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/constants'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'backdrop-blur-modern border-b border-grey-mouse/20 py-3 sm:py-4 shadow-soft' 
          : 'py-4 sm:py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Architectural Line */}
          <Link href="/" className="group touch-target">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 sm:w-8 h-px bg-grey-mouse/30 group-hover:bg-black transition-colors" />
              <h1 className="font-display text-base sm:text-lg md:text-xl font-light tracking-wider">
                <span className="text-black">INSCRIBE</span>
                <span className="text-grey-mouse hidden sm:inline"> ARCHITECTS</span>
                <span className="text-grey-mouse sm:hidden"> ARCH</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-light text-grey-mouse hover:text-black transition-colors duration-200 uppercase tracking-[0.1em]"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden touch-target p-3 text-grey-mouse hover:text-black active:opacity-70 transition-all"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 top-[73px] sm:top-[81px]"
          />
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed top-[73px] sm:top-[81px] left-0 right-0 backdrop-blur-modern border-t border-grey-mouse/20 z-50 max-h-[calc(100vh-73px)] sm:max-h-[calc(100vh-81px)] overflow-y-auto"
          >
            <nav className="container mx-auto px-4 py-6 sm:py-8 flex flex-col gap-4 sm:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="touch-target text-base sm:text-sm font-light text-grey-mouse hover:text-black active:text-black transition-colors uppercase tracking-wider py-2 border-b border-grey-mouse/10 last:border-b-0"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </motion.header>
  )
}