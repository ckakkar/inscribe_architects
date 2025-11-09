'use client'

import { PageTransition } from '@/components/layout/page-transition'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-grey-mouse text-xs font-light uppercase tracking-[0.2em] mb-6">
              About
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-light mb-12 leading-tight">
              About <span className="text-black">Us</span>
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-lg md:text-xl text-black-soft font-light leading-relaxed">
                Inscribe Architects was founded in 2001 by Shelly Kakkar with a vision 
                to redefine architectural excellence in India. With over 25 years of experience 
                and more than 1,100 completed projects, we have established ourselves as a 
                leading architectural firm known for innovative design and sustainable practices.
              </p>
              <p className="text-lg md:text-xl text-black-soft font-light leading-relaxed">
                Our portfolio spans commercial buildings, residential complexes, heritage 
                conservation projects, and urban planning initiatives across India. We specialize 
                in creating spaces that are not only aesthetically pleasing but also functional, 
                sustainable, and responsive to their context.
              </p>
              <p className="text-lg md:text-xl text-black-soft font-light leading-relaxed">
                Our team of 15+ experienced architects and designers brings together diverse 
                expertise in sustainable design, heritage conservation, and modern architecture. 
                We work closely with clients, consultants, and contractors to ensure every project 
                meets the highest standards of quality and design excellence.
              </p>
              <div className="pt-6 border-t border-grey-mouse/20">
                <h3 className="text-xl font-light text-black mb-4">Our Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-base text-black-soft font-light">
                    <span className="text-grey-mouse/70 mt-1">•</span>
                    <span><strong className="text-black">Sustainability:</strong> Commitment to environmentally responsible design and green building practices.</span>
                  </li>
                  <li className="flex items-start gap-3 text-base text-black-soft font-light">
                    <span className="text-grey-mouse/70 mt-1">•</span>
                    <span><strong className="text-black">Innovation:</strong> Embracing new technologies and design methodologies to push boundaries.</span>
                  </li>
                  <li className="flex items-start gap-3 text-base text-black-soft font-light">
                    <span className="text-grey-mouse/70 mt-1">•</span>
                    <span><strong className="text-black">Excellence:</strong> Maintaining the highest standards in every aspect of our work.</span>
                  </li>
                  <li className="flex items-start gap-3 text-base text-black-soft font-light">
                    <span className="text-grey-mouse/70 mt-1">•</span>
                    <span><strong className="text-black">Collaboration:</strong> Building strong partnerships with clients and stakeholders.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Head Architect Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative w-full lg:sticky lg:top-32"
            >
              <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden shadow-large">
                <Image
                  src="/head-architect.png"
                  alt="Shelly Kakkar - Head Architect and Founder"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-light text-black mb-1">Shelly Kakkar</h3>
                <p className="text-sm text-grey-mouse font-light">Head Architect & Founder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}