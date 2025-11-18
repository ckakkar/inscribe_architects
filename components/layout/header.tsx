'use client'

import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/lib/constants'
import { usePathname } from 'next/navigation'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [mobileMenuOpen])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dutch-white/95 backdrop-blur-md border-b border-umber/10 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Simplified */}
          <Link 
            href="/" 
            className="group"
            onClick={() => setMobileMenuOpen(false)}
          >
            <h1 className="font-display text-lg sm:text-xl font-light tracking-[0.15em]">
              <span className="text-umber">INSCRIBE</span>
              <span className="text-umber/70 hidden sm:inline"> ARCHITECTS</span>
            </h1>
          </Link>

          {/* Desktop Nav - Minimal */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-light transition-colors duration-300 uppercase tracking-[0.15em] relative ${
                  pathname === link.href 
                    ? 'text-umber' 
                    : 'text-umber/75 hover:text-umber'
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-umber"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button - Minimal */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 -mr-2 text-umber/75 hover:text-umber transition-colors relative z-50"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Modern Mobile Menu - Slide from right */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-umber/20 backdrop-blur-sm z-40"
              transition={{ duration: 0.2 }}
            />
            
            {/* Mobile Menu Panel - Slide from right */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="lg:hidden fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-dutch-white z-50 shadow-2xl"
            >
              <div className="h-full flex flex-col">
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-umber/10">
                  <h2 className="font-display text-sm font-light tracking-[0.15em] text-umber/70 uppercase">
                    Menu
                  </h2>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 -mr-2 text-umber/75 hover:text-umber transition-colors"
                    aria-label="Close menu"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 py-8 px-6 overflow-y-auto">
                  <div className="space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.05,
                          ease: "easeOut"
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                        className={`block py-3 text-base font-light transition-colors uppercase tracking-[0.15em] ${
                          pathname === link.href
                            ? 'text-umber'
                            : 'text-umber/75 hover:text-umber'
                        }`}
                        >
                          {link.name}
                        </Link>
                        {index < navLinks.length - 1 && (
                          <div className="h-px bg-umber/5 my-2" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Menu Footer */}
                <div className="p-6 border-t border-umber/10">
                  <p className="text-xs text-umber/60 font-light">
                    © 2024 Inscribe Architects
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}