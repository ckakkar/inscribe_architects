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
      <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <p className="text-grey-mouse text-xs font-light uppercase tracking-[0.2em] mb-4 sm:mb-6">
                Contact
              </p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 leading-tight text-black">
                Get in <span className="text-grey-mouse">Touch</span>
              </h1>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
              {/* Contact Info */}
              <div className="space-y-4 sm:space-y-6">
                <div className="space-y-1 mb-6 sm:mb-8">
                  <p className="text-grey-mouse text-xs font-light uppercase tracking-wider mb-4 sm:mb-6">
                    Contact Information
                  </p>
                  <p className="text-sm sm:text-base text-black-soft font-light leading-relaxed">
                    Ready to start your next project? Get in touch with our team to discuss your architectural needs. We're here to help bring your vision to life.
                  </p>
                  {contactInfo.officeHours && (
                    <p className="text-grey-mouse/70 text-xs font-light mt-4">
                      {contactInfo.officeHours}
                    </p>
                  )}
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="touch-target flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border border-grey-mouse/20 hover:border-grey-mouse/40 active:border-grey-mouse/60 transition-colors group"
                  >
                    <div className="mt-0.5">
                      <Phone className="text-grey-mouse group-hover:text-black transition-colors" size={18} />
                    </div>
                    <div>
                      <p className="text-grey-mouse text-xs font-light uppercase tracking-wider mb-1">Phone</p>
                      <p className="text-sm sm:text-base text-black-soft group-hover:text-black transition-colors font-light break-all">
                        {contactInfo.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="touch-target flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border border-grey-mouse/20 hover:border-grey-mouse/40 active:border-grey-mouse/60 transition-colors group"
                  >
                    <div className="mt-0.5">
                      <Mail className="text-grey-mouse group-hover:text-black transition-colors" size={18} />
                    </div>
                    <div>
                      <p className="text-grey-mouse text-xs font-light uppercase tracking-wider mb-1">Email</p>
                      <p className="text-sm sm:text-base text-black-soft group-hover:text-black transition-colors font-light break-all">
                        {contactInfo.email}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 border border-grey-mouse/20">
                    <div className="mt-0.5">
                      <MapPin className="text-grey-mouse" size={18} />
                    </div>
                    <div>
                      <p className="text-grey-mouse text-xs font-light uppercase tracking-wider mb-1">Location</p>
                      <p className="text-grey-mouse text-xs sm:text-sm font-light">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="mt-8 lg:mt-0">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className={`absolute left-0 top-4 text-xs font-light uppercase tracking-wider transition-all duration-200 pointer-events-none ${
                        focused === 'name' || formData.name
                          ? 'text-grey-mouse -translate-y-6 text-[10px]'
                          : 'text-grey-mouse/70'
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
                      className="w-full pt-6 pb-3 px-0 bg-transparent border-0 border-b border-grey-mouse/30 focus:border-grey-mouse/60 focus:outline-none transition-colors text-black font-light placeholder-transparent"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="email"
                      className={`absolute left-0 top-4 text-xs font-light uppercase tracking-wider transition-all duration-200 pointer-events-none ${
                        focused === 'email' || formData.email
                          ? 'text-grey-mouse -translate-y-6 text-[10px]'
                          : 'text-grey-mouse/70'
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
                      className="w-full pt-6 pb-3 px-0 bg-transparent border-0 border-b border-grey-mouse/30 focus:border-grey-mouse/60 focus:outline-none transition-colors text-black font-light placeholder-transparent"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="message"
                      className={`absolute left-0 top-4 text-xs font-light uppercase tracking-wider transition-all duration-200 pointer-events-none ${
                        focused === 'message' || formData.message
                          ? 'text-grey-mouse -translate-y-6 text-[10px]'
                          : 'text-grey-mouse/70'
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
                      className="w-full pt-6 pb-3 px-0 bg-transparent border-0 border-b border-grey-mouse/30 focus:border-grey-mouse/60 focus:outline-none transition-colors resize-none text-black font-light placeholder-transparent"
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