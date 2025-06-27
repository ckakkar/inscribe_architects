'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '@/components/common/PageTransition'
import Button from '@/components/ui/Button'
import { contactInfo } from '@/lib/constants'
import { HiPhone, HiMail, HiLocationMarker, HiArrowRight } from 'react-icons/hi'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const socialIcons = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
    setIsSubmitting(false)
    
    // Show success message (you can implement a toast notification here)
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-dark-100" />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -180, -360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-primary-500/20 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6"
          >
            Get in <span className="gradient-text">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Let's discuss your project and bring your architectural vision to life
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1 space-y-8"
            >
              <div>
                <h2 className="font-display font-bold text-3xl mb-6">
                  Contact <span className="gradient-text">Information</span>
                </h2>
                <p className="text-gray-400">
                  Get in touch with us for any inquiries about our architectural services.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <motion.a
                  href={`tel:${contactInfo.phone}`}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 glass-effect rounded-lg group-hover:bg-primary-500 transition-colors">
                    <HiPhone className="text-xl text-primary-500 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <p className="text-gray-400 group-hover:text-primary-400 transition-colors">
                      {contactInfo.phone}
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 glass-effect rounded-lg group-hover:bg-primary-500 transition-colors">
                    <HiMail className="text-xl text-primary-500 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <p className="text-gray-400 group-hover:text-primary-400 transition-colors">
                      {contactInfo.email}
                    </p>
                  </div>
                </motion.a>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 glass-effect rounded-lg">
                    <HiLocationMarker className="text-xl text-primary-500" />
                  </div>
                  <div>
                    <p className="font-medium mb-1">Address</p>
                    <p className="text-gray-400">
                      {contactInfo.address.line1}<br />
                      {contactInfo.address.line2}<br />
                      {contactInfo.address.city} - {contactInfo.address.pincode}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div>
                <p className="font-medium mb-4">Follow Us</p>
                <div className="flex gap-3">
                  {Object.entries(contactInfo.socials).map(([platform, url]) => {
                    const Icon = socialIcons[platform]
                    return (
                      <motion.a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3 }}
                        className="p-3 glass-effect rounded-lg hover:bg-primary-500 hover:text-white transition-all duration-300"
                      >
                        <Icon className="text-lg" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="gradient-border">
                <form onSubmit={handleSubmit} className="glass-effect p-8 lg:p-12 rounded-3xl space-y-6">
                  <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="+91 98142 24971"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="Project Inquiry"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    fullWidth
                    disabled={isSubmitting}
                    icon={<HiArrowRight />}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-dark-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              Visit Our <span className="gradient-text">Office</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We'd love to meet you in person to discuss your architectural needs
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden gradient-border"
          >
            {/* Placeholder for map integration */}
            <div className="w-full h-full bg-gradient-to-br from-dark-300 to-dark-200 flex items-center justify-center">
              <div className="text-center">
                <HiLocationMarker className="text-6xl text-primary-500 mx-auto mb-4" />
                <p className="text-gray-300 text-lg mb-2">Barewal Road, Ludhiana</p>
                <p className="text-gray-500">Punjab, India - 141012</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}