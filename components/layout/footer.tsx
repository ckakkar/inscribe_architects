import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react'
import { contactInfo } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl mb-4">
              <span className="font-light">INSCRIBE</span>
              <span className="font-bold bg-gradient-to-r from-primary-400 to-accent-orange bg-clip-text text-transparent">
                {' '}ARCHITECTS
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Creating innovative architectural designs since 2001
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <nav className="flex flex-col gap-2">
              <span className="text-gray-400">Interior Design</span>
              <span className="text-gray-400">Facade Design</span>
              <span className="text-gray-400">Commercial Planning</span>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Phone size={16} />
                <span className="text-sm">{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail size={16} />
                <span className="text-sm">{contactInfo.email}</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Inscribe Architects. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-full bg-primary-500 hover:bg-primary-600 transition-colors"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  )
}