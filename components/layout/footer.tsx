'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import { contactInfo } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="relative bg-beige-200 border-t border-grey-mouse/20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/">
              <h3 className="font-display text-lg font-light mb-4 tracking-wider hover:opacity-80 transition-opacity cursor-pointer">
                <span className="text-black">INSCRIBE</span>
                <span className="text-grey-mouse"> ARCHITECTS</span>
              </h3>
            </Link>
            <p className="text-grey-mouse text-sm font-light leading-relaxed">
              Crafting thoughtful homes & commercial spaces since 2001. Based in Ludhiana, Punjab.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-light text-sm mb-4 uppercase tracking-wider text-grey-mouse">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="text-grey-mouse hover:text-black transition-colors text-sm font-light">
                About
              </Link>
              <Link href="/projects" className="text-grey-mouse hover:text-black transition-colors text-sm font-light">
                Projects
              </Link>
              <Link href="/contact" className="text-grey-mouse hover:text-black transition-colors text-sm font-light">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-light text-sm mb-4 uppercase tracking-wider text-grey-mouse">Services</h4>
            <nav className="flex flex-col gap-3">
              <span className="text-grey-mouse text-sm font-light">Residential Architecture</span>
              <span className="text-grey-mouse text-sm font-light">Commercial Architecture</span>
              <span className="text-grey-mouse text-sm font-light">Interior Design</span>
              <span className="text-grey-mouse text-sm font-light">3D Visualization</span>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-light text-sm mb-4 uppercase tracking-wider text-grey-mouse">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 text-grey-mouse hover:text-black transition-colors text-sm font-light">
                <Phone size={14} />
                <span>{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-grey-mouse hover:text-black transition-colors text-sm font-light">
                <Mail size={14} />
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-center gap-2 text-grey-mouse text-sm font-light">
                <MapPin size={14} />
                <span>{contactInfo.address}</span>
              </div>
              {contactInfo.officeHours && (
                <p className="text-grey-mouse/70 text-xs font-light mt-2">
                  {contactInfo.officeHours}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-grey-mouse/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-grey-mouse text-xs font-light mb-1">
              © 2024 Inscribe Architects. All rights reserved.
            </p>
            <p className="text-grey-mouse/70 text-xs font-light">
              Licensed by Council of Architecture, India
            </p>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2 border border-grey-mouse/30 hover:border-grey-mouse/50 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} className="text-grey-mouse" />
          </button>
        </div>
      </div>
    </footer>
  )
}