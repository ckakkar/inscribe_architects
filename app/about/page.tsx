'use client'

import { PageTransition } from '@/components/layout/page-transition'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { fadeInUp, fadeInUpViewportWithDelay } from '@/lib/utils/animations'

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="mb-8 sm:mb-10 md:mb-12"
          >
            <p className="text-umber/70 text-xs font-light uppercase tracking-[0.2em] mb-4 sm:mb-6">
              Studio
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light mb-8 sm:mb-10 md:mb-12 leading-tight">
              The <span className="text-umber">Studio</span>
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
            {/* Text Content */}
            <motion.div
              {...fadeInUpViewportWithDelay(0.1)}
              className="space-y-6 sm:space-y-8"
            >
              <p className="text-base sm:text-lg md:text-xl text-umber/85 font-light leading-relaxed">
                Inscribe Architects is a Ludhiana-based architecture and interior design firm 
                led by founder Shelly Kakkar. Since its inception in 2001, the firm has delivered 
                diverse architectural and interior projects, blending practical design thinking 
                with an artistic sensibility. Our portfolio spans private homes, commercial spaces, 
                and institutional environments across Punjab and beyond.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-umber/85 font-light leading-relaxed">
                With over 1,100 completed projekts, we specialize in creating spaces that are 
                not only aesthetically pleasing but also functional, sustainable, and responsive 
                to their context. Our work emphasizes function, aesthetics, and contextual 
                detailing, ensuring each project tells its own story through form, light, and 
                materiality.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-umber/85 font-light leading-relaxed">
                Our team of experienced architects and designers brings together diverse expertise 
                in integrated architectural and interior design. We work closely with clients, 
                consultants, and contractors to ensure every projekt meets the highest standards 
                of quality and design excellence, from initial concept through turnkey execution.
              </p>
              <div className="pt-4 sm:pt-6 border-t border-umber/20">
                <h3 className="text-lg sm:text-xl font-light text-umber mb-3 sm:mb-4">Our Approach</h3>
                <ul className="space-y-2 sm:space-y-3">
                  <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-umber/85 font-light">
                    <span className="text-umber/70 mt-1">•</span>
                    <span><strong className="text-umber">Context-Driven Design:</strong> Each project responds thoughtfully to its unique context, climate, and cultural setting.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-umber/85 font-light">
                    <span className="text-umber/70 mt-1">•</span>
                    <span><strong className="text-umber">Client-Focused:</strong> We prioritize understanding your vision, requirements, and lifestyle to create spaces that truly serve you.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-umber/85 font-light">
                    <span className="text-umber/70 mt-1">•</span>
                    <span><strong className="text-umber">Integrated Solutions:</strong> Seamlessly blending architecture and interior design for cohesive, complete projects.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-umber/85 font-light">
                    <span className="text-umber/70 mt-1">•</span>
                    <span><strong className="text-umber">Quality Craftsmanship:</strong> Maintaining the highest standards in every aspect of our work, from design to execution.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Head Architect Image */}
            <motion.div
              {...fadeInUpViewportWithDelay(0.2)}
              className="relative w-full lg:sticky lg:top-32 group mt-8 lg:mt-0"
            >
              <div className="relative w-full aspect-[3/4] rounded-sm overflow-hidden shadow-large max-w-md mx-auto lg:max-w-none">
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src="/head-architect.png"
                    alt="Shelly Kakkar - Head Architect and Founder"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="mt-4 sm:mt-6 text-center">
                <h3 className="text-lg sm:text-xl font-light text-umber mb-1">
                  Shelly Kakkar
                </h3>
                <p className="text-xs sm:text-sm text-umber/80 font-light mb-2 sm:mb-3">Founder & Principal Architect</p>
                <p className="text-xs sm:text-sm text-umber/85 font-light leading-relaxed max-w-sm mx-auto px-4 sm:px-0">
                  Shelly began her architectural career with Royal Builders and later founded 
                  Inscribe Architects. With over two decades of professional experience, she 
                  leads the firm's creative and technical direction, focusing on integrated 
                  architectural and interior design. Her work philosophy blends creativity with 
                  structure, ensuring each project tells its own story.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}