'use client'

import { PageTransition } from '@/components/layout/page-transition'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin } from 'lucide-react'
import { contactInfo } from '@/lib/constants'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Form submitted!')
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
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-primary-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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