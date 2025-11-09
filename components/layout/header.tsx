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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-beige-100/95 backdrop-blur-md border-b border-grey-mouse/20 py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with Architectural Line */}
          <Link href="/" className="group">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-grey-mouse/30 group-hover:bg-black transition-colors" />
              <h1 className="font-display text-lg sm:text-xl font-light tracking-wider">
                <span className="text-black">INSCRIBE</span>
                <span className="text-grey-mouse"> ARCHITECTS</span>
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
            className="lg:hidden p-2 text-grey-mouse hover:text-black transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-beige-100/98 backdrop-blur-md border-t border-grey-mouse/20"
        >
          <nav className="container mx-auto px-4 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-light text-grey-mouse hover:text-black transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  )
}