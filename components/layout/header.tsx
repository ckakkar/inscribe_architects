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
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener('resize', checkMobile, { passive: true })
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen) return

    const scrollY = window.scrollY
    document.body.style.overflow = 'hidden'
    // Prevent scroll on iOS
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
    document.body.style.top = `-${scrollY}px`

    return () => {
      const scrollY = document.body.style.top
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.top = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY.replace('px', '')) * -1)
      }
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

  // Calculate header height dynamically
  const headerHeight = scrolled 
    ? (isMobile ? 56 : 64) 
    : (isMobile ? 64 : 80)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      data-menu-open={mobileMenuOpen}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || mobileMenuOpen
          ? 'border-b border-grey-mouse/20 py-3 sm:py-4 shadow-soft' 
          : 'py-4 sm:py-6'
      } ${
        mobileMenuOpen 
          ? '' 
          : scrolled 
            ? 'backdrop-blur-modern' 
            : ''
      }`}
      style={mobileMenuOpen ? {
        backgroundColor: 'rgb(250, 248, 244)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      } : {}}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Architectural Line */}
          <Link 
            href="/" 
            className="group touch-target"
            onClick={() => setMobileMenuOpen(false)}
          >
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
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-light transition-colors duration-200 uppercase tracking-[0.1em] ${
                  pathname === link.href 
                    ? 'text-black' 
                    : 'text-grey-mouse hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden touch-target p-2.5 sm:p-3 text-grey-mouse hover:text-black active:opacity-70 transition-all relative z-50"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              style={{ top: headerHeight }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden fixed left-0 right-0 backdrop-blur-modern border-t border-grey-mouse/20 z-50 overflow-y-auto"
              style={{ 
                top: headerHeight,
                maxHeight: `calc(100vh - ${headerHeight}px)`,
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <nav className="container mx-auto px-4 py-4 sm:py-6 flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.05,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`touch-target block text-base sm:text-lg font-light transition-colors uppercase tracking-wider py-4 sm:py-5 border-b border-grey-mouse/10 last:border-b-0 ${
                        pathname === link.href
                          ? 'text-black font-normal'
                          : 'text-grey-mouse hover:text-black active:text-black'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}