'use client'

import { PageTransition } from '@/components/layout/page-transition'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin } from 'lucide-react'
import { contactInfo } from '@/lib/constants'
import { FormEvent, ChangeEvent, useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

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
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-6xl md:text-8xl font-bold mb-8 text-center">
              Get in <span className="bg-gradient-to-r from-primary-400 to-accent-orange bg-clip-text text-transparent">Touch</span>
            </h1>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="text-center">
                <Phone className="mx-auto mb-4 text-primary-500" size={32} />
                <p className="text-gray-400 mb-2">Phone</p>
                <a href={`tel:${contactInfo.phone}`} className="font-medium hover:text-primary-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </Card>
              <Card className="text-center">
                <Mail className="mx-auto mb-4 text-primary-500" size={32} />
                <p className="text-gray-400 mb-2">Email</p>
                <a href={`mailto:${contactInfo.email}`} className="font-medium hover:text-primary-400 transition-colors">
                  {contactInfo.email}
                </a>
              </Card>
              <Card className="text-center">
                <MapPin className="mx-auto mb-4 text-primary-500" size={32} />
                <p className="text-gray-400 mb-2">Location</p>
                <p className="font-medium">{contactInfo.address}</p>
              </Card>
            </div>

            <Card>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}