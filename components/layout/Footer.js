'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const footerLinks = {
  services: [
    { name: 'Interior Design', href: '/services#interior' },
    { name: 'Facade Design', href: '/services#facade' },
    { name: 'Commercial Planning', href: '/services#commercial' },
    { name: 'Bar & Resto Design', href: '/services#bar-resto' },
    { name: 'Renovation', href: '/services#renovation' },
    { name: 'Terrace Garden', href: '/services#terrace' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Contact', href: '/contact' },
  ],
}

const socialLinks = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="relative bg-dark-200 border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 grid-pattern" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Link href="/" className="inline-block">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">IA</span>
                  </div>
                  <div className="absolute inset-0 bg-primary-500 rounded-lg blur-xl opacity-50" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl">
                    <span className="gradient-text">Inscribe</span>{' '}
                    <span className="text-white">Architects</span>
                  </h3>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">We Are Awesome</p>
                </div>
              </div>
            </Link>
            
            <p className="text-gray-400 text-sm">
              Creating innovative, sustainable architectural designs that transform spaces and inspire communities since 2001.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  className="p-2.5 glass-effect rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-primary-400 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-[1px] bg-primary-400 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919814224971"
                  className="flex items-start gap-3 text-gray-400 hover:text-primary-400 transition-colors group"
                >
                  <FaPhone className="text-primary-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">+91-9814224971</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@inscribearchitects.com"
                  className="flex items-start gap-3 text-gray-400 hover:text-primary-400 transition-colors group"
                >
                  <FaEnvelope className="text-primary-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">info@inscribearchitects.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    341/31, Shere Punjab Colony<br />
                    Near Dilbag Dairy, Barewal Road,<br />
                    Ludhiana - 141012
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © Copyright {new Date().getFullYear()} Inscribe Architects - All Rights Reserved
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}