'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { contactInfo } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="relative border-t border-umber/10 bg-dutch-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/">
              <h3 className="font-display text-base font-light mb-6 tracking-[0.15em] hover:opacity-70 transition-opacity">
                <span className="text-umber">INSCRIBE</span>
                <span className="text-umber/75"> ARCHITECTS</span>
              </h3>
            </Link>
            <p className="text-umber/85 text-sm font-light leading-relaxed max-w-xs">
              Crafting thoughtful homes & commercial spaces since 2001.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-light text-xs mb-6 uppercase tracking-[0.15em] text-umber/80">Navigation</h4>
            <nav className="flex flex-col gap-4">
              <Link href="/about" className="text-umber/85 hover:text-umber transition-colors text-sm font-light">
                Studio
              </Link>
              <Link href="/projects" className="text-umber/85 hover:text-umber transition-colors text-sm font-light">
                Projekts
              </Link>
              <Link href="/contact" className="text-umber/85 hover:text-umber transition-colors text-sm font-light">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-light text-xs mb-6 uppercase tracking-[0.15em] text-umber/80">Contact</h4>
            <div className="flex flex-col gap-4">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 text-umber/85 hover:text-umber transition-colors text-sm font-light">
                <Phone size={14} className="text-umber/75" />
                <span>{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-umber/85 hover:text-umber transition-colors text-sm font-light">
                <Mail size={14} className="text-umber/75" />
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-start gap-3 text-umber/85 text-sm font-light">
                <MapPin size={14} className="text-umber/75 mt-0.5 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-umber/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-umber/75 text-xs font-light">
              © 2024 Inscribe Architects. All rights reserved.
            </p>
            <p className="text-umber/70 text-xs font-light">
              Licensed by Council of Architecture, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}