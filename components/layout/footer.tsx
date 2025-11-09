'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import { contactInfo } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-lg font-light mb-4 tracking-wider">
              <span className="text-white">INSCRIBE</span>
              <span className="text-white/60"> ARCHITECTS</span>
            </h3>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              Creating innovative architectural designs since 2001
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-light text-sm mb-4 uppercase tracking-wider text-white/60">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="text-white/40 hover:text-white transition-colors text-sm font-light">
                About
              </Link>
              <Link href="/projects" className="text-white/40 hover:text-white transition-colors text-sm font-light">
                Projects
              </Link>
              <Link href="/contact" className="text-white/40 hover:text-white transition-colors text-sm font-light">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-light text-sm mb-4 uppercase tracking-wider text-white/60">Services</h4>
            <nav className="flex flex-col gap-3">
              <span className="text-white/40 text-sm font-light">Interior Design</span>
              <span className="text-white/40 text-sm font-light">Facade Design</span>
              <span className="text-white/40 text-sm font-light">Commercial Planning</span>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-light text-sm mb-4 uppercase tracking-wider text-white/60">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-light">
                <Phone size={14} />
                <span>{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-light">
                <Mail size={14} />
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-center gap-2 text-white/40 text-sm font-light">
                <MapPin size={14} />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-light">
            © 2024 Inscribe Architects. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2 border border-white/10 hover:border-white/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} className="text-white/40" />
          </button>
        </div>
      </div>
    </footer>
  )
}