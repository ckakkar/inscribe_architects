'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { HiArrowUp } from 'react-icons/hi'

const footerLinks = {
  services: [
    { name: 'Interior Design', href: '/services#interior' },
    { name: 'Facade Design', href: '/services#facade' },
    { name: 'Commercial Planning', href: '/services#commercial' },
    { name: 'Bar & Restaurant', href: '/services#bar-resto' },
    { name: 'Renovation', href: '/services#renovation' },
    { name: 'Terrace Garden', href: '/services#terrace' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Process', href: '/about#process' },
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
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-black border-t border-white/5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Section - Spans 5 columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Logo */}
            <Link href="/" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-3"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-orange rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">IA</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-orange rounded-2xl blur-xl opacity-50" />
                </div>
                <div>
                  <h3 className="font-display text-2xl">
                    <span className="font-light">INSCRIBE</span>
                    <span className="font-bold gradient-text"> ARCHITECTS</span>
                  </h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">We Are Awesome</p>
                </div>
              </motion.div>
            </Link>
            
            {/* Description */}
            <p className="text-gray-400 leading-relaxed max-w-md">
              Creating innovative, sustainable architectural designs that transform spaces 
              and inspire communities. Where vision meets reality.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="relative group"
                  aria-label={social.label}
                >
                  <div className="relative w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-primary-500/50">
                    <social.icon className="text-lg text-gray-400 group-hover:text-primary-400 transition-colors" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-orange/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections - Spans 7 columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-display font-semibold text-lg mb-6 gradient-text">Our Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <span className="w-0 h-[1px] bg-gradient-to-r from-primary-500 to-accent-orange group-hover:w-4 transition-all duration-300" />
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-display font-semibold text-lg mb-6 gradient-text">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <span className="w-0 h-[1px] bg-gradient-to-r from-primary-500 to-accent-orange group-hover:w-4 transition-all duration-300" />
                      <span className="text-sm">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-display font-semibold text-lg mb-6 gradient-text">Get in Touch</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+919814224971"
                    className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <FaPhone className="text-primary-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">+91-9814224971</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@inscribearchitects.com"
                    className="group flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <FaEnvelope className="text-primary-500 mt-1 flex-shrink-0" />
                    <span className="text-sm break-all">info@inscribearchitects.com</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-gray-400">
                    <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">
                      Barewal Road,<br />
                      Ludhiana, Punjab
                    </span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="py-12 border-t border-b border-white/5"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-display text-2xl font-bold mb-2">
                Stay <span className="gradient-text">Updated</span>
              </h3>
              <p className="text-gray-400">Get the latest insights and projects delivered to your inbox.</p>
            </div>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full focus:border-primary-500/50 focus:outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-orange rounded-full font-medium hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {currentYear} Inscribe Architects. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Back to Top - Integrated into Footer */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-orange group"
      >
        <HiArrowUp className="text-xl text-white group-hover:translate-y-[-2px] transition-transform" />
      </motion.button>
    </footer>
  )
}