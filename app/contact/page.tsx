'use client'

import { PageTransition } from '@/components/layout/page-transition'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { contactInfo } from '@/lib/constants'
import { FormEvent, ChangeEvent, useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Form submitted!')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-white/30 text-xs font-light uppercase tracking-[0.2em] mb-6">
                Contact
              </p>
              <h1 className="font-display text-5xl md:text-6xl font-light mb-6 leading-tight">
                Get in <span className="text-white/70">Touch</span>
              </h1>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="space-y-1 mb-8">
                  <p className="text-white/30 text-xs font-light uppercase tracking-wider mb-6">
                    Contact Information
                  </p>
                  <p className="text-white/40 text-sm font-light leading-relaxed">
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-start gap-4 p-4 border border-white/5 hover:border-white/10 transition-colors group"
                  >
                    <div className="mt-0.5">
                      <Phone className="text-white/30 group-hover:text-white/50 transition-colors" size={18} />
                    </div>
                    <div>
                      <p className="text-white/30 text-xs font-light uppercase tracking-wider mb-1">Phone</p>
                      <p className="text-white/60 group-hover:text-white/80 transition-colors text-sm font-light">
                        {contactInfo.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-start gap-4 p-4 border border-white/5 hover:border-white/10 transition-colors group"
                  >
                    <div className="mt-0.5">
                      <Mail className="text-white/30 group-hover:text-white/50 transition-colors" size={18} />
                    </div>
                    <div>
                      <p className="text-white/30 text-xs font-light uppercase tracking-wider mb-1">Email</p>
                      <p className="text-white/60 group-hover:text-white/80 transition-colors text-sm font-light">
                        {contactInfo.email}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 border border-white/5">
                    <div className="mt-0.5">
                      <MapPin className="text-white/30" size={18} />
                    </div>
                    <div>
                      <p className="text-white/30 text-xs font-light uppercase tracking-wider mb-1">Location</p>
                      <p className="text-white/60 text-sm font-light">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className={`absolute left-0 top-4 text-xs font-light uppercase tracking-wider transition-all duration-200 pointer-events-none ${
                        focused === 'name' || formData.name
                          ? 'text-white/40 -translate-y-6 text-[10px]'
                          : 'text-white/30'
                      }`}
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      className="w-full pt-6 pb-3 px-0 bg-transparent border-0 border-b border-white/10 focus:border-white/30 focus:outline-none transition-colors text-white/80 font-light placeholder-transparent"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="email"
                      className={`absolute left-0 top-4 text-xs font-light uppercase tracking-wider transition-all duration-200 pointer-events-none ${
                        focused === 'email' || formData.email
                          ? 'text-white/40 -translate-y-6 text-[10px]'
                          : 'text-white/30'
                      }`}
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      className="w-full pt-6 pb-3 px-0 bg-transparent border-0 border-b border-white/10 focus:border-white/30 focus:outline-none transition-colors text-white/80 font-light placeholder-transparent"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="message"
                      className={`absolute left-0 top-4 text-xs font-light uppercase tracking-wider transition-all duration-200 pointer-events-none ${
                        focused === 'message' || formData.message
                          ? 'text-white/40 -translate-y-6 text-[10px]'
                          : 'text-white/30'
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      rows={6}
                      className="w-full pt-6 pb-3 px-0 bg-transparent border-0 border-b border-white/10 focus:border-white/30 focus:outline-none transition-colors resize-none text-white/80 font-light placeholder-transparent"
                      required
                    />
                  </div>

                  <div className="pt-4">
                    <Button type="submit" size="lg" variant="outline" className="w-full group">
                      Send Message
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}