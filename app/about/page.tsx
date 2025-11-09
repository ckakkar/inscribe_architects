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
                Inscribe Architects is a Ludhiana-based architecture and interior design firm 
                led by founder Shelly Kakkar. Since its inception in 2001, the firm has delivered 
                diverse architectural and interior projects, blending practical design thinking 
                with an artistic sensibility. Our portfolio spans private homes, commercial spaces, 
                and institutional environments across Punjab and beyond.
              </p>
              <p className="text-lg md:text-xl text-black-soft font-light leading-relaxed">
                With over 1,100 completed projects, we specialize in creating spaces that are 
                not only aesthetically pleasing but also functional, sustainable, and responsive 
                to their context. Our work emphasizes function, aesthetics, and contextual 
                detailing, ensuring each project tells its own story through form, light, and 
                materiality.
              </p>
              <p className="text-lg md:text-xl text-black-soft font-light leading-relaxed">
                Our team of experienced architects and designers brings together diverse expertise 
                in integrated architectural and interior design. We work closely with clients, 
                consultants, and contractors to ensure every project meets the highest standards 
                of quality and design excellence, from initial concept through turnkey execution.
              </p>
              <div className="pt-6 border-t border-grey-mouse/20">
                <h3 className="text-xl font-light text-black mb-4">Our Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-base text-black-soft font-light">
                    <span className="text-grey-mouse/70 mt-1">•</span>
                    <span><strong className="text-black">Context-Driven Design:</strong> Each project responds thoughtfully to its unique context, climate, and cultural setting.</span>
                  </li>
                  <li className="flex items-start gap-3 text-base text-black-soft font-light">
                    <span className="text-grey-mouse/70 mt-1">•</span>
                    <span><strong className="text-black">Client-Focused:</strong> We prioritize understanding your vision, requirements, and lifestyle to create spaces that truly serve you.</span>
                  </li>
                  <li className="flex items-start gap-3 text-base text-black-soft font-light">
                    <span className="text-grey-mouse/70 mt-1">•</span>
                    <span><strong className="text-black">Integrated Solutions:</strong> Seamlessly blending architecture and interior design for cohesive, complete projects.</span>
                  </li>
                  <li className="flex items-start gap-3 text-base text-black-soft font-light">
                    <span className="text-grey-mouse/70 mt-1">•</span>
                    <span><strong className="text-black">Quality Craftsmanship:</strong> Maintaining the highest standards in every aspect of our work, from design to execution.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Head Architect Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative w-full lg:sticky lg:top-32 group"
            >
              <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden shadow-large">
                {/* Animated corner lines */}
                <motion.div
                  className="absolute top-0 left-0 w-12 h-px bg-grey-mouse/40 z-10"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.div
                  className="absolute top-0 left-0 h-12 w-px bg-grey-mouse/40 z-10"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.div
                  className="absolute top-0 right-0 w-12 h-px bg-grey-mouse/40 z-10"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
                <motion.div
                  className="absolute top-0 right-0 h-12 w-px bg-grey-mouse/40 z-10"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
                
                {/* Image with reveal mask */}
                <motion.div
                  className="relative w-full h-full"
                  initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
                  whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src="/head-architect.png"
                    alt="Shelly Kakkar - Head Architect and Founder"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
                
                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.h3
                  className="text-xl font-light text-black mb-1"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  Shelly Kakkar
                </motion.h3>
                <p className="text-sm text-grey-mouse font-light mb-3">Founder & Principal Architect</p>
                <p className="text-sm text-black-soft font-light leading-relaxed max-w-sm mx-auto">
                  Shelly began her architectural career with Royal Builders and later founded 
                  Inscribe Architects. With over two decades of professional experience, she 
                  leads the firm's creative and technical direction, focusing on integrated 
                  architectural and interior design. Her work philosophy blends creativity with 
                  structure, ensuring each project tells its own story.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}