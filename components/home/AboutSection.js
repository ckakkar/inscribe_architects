'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'

export default function AboutSection() {
  const containerRef = useRef(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <section ref={containerRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="text-primary-500 font-medium uppercase tracking-wider text-sm">
                About Us
              </span>
              <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mt-2">
                INSCRIBE ARCHITECTS WAS{' '}
                <span className="gradient-text">FOUNDED IN 2001</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-6 text-gray-400"
            >
              <p className="text-lg">
                <span className="text-white font-semibold">BY SHELLY KAKKAR,</span> AFTER HAVING 
                STARTED HER CAREER WITH ROYAL BUILDERS.
              </p>
              
              <p>
                The firm has successfully worked on and completed over 200 projects since its commencement. 
                The projects vary from individual residences, commercial complexes, apartment schemes, 
                exhibition spaces, corporate offices, and retail spaces to institutional buildings.
              </p>

              <motion.div
                whileHover={{ x: 5 }}
                className="glass-effect p-6 rounded-2xl border border-primary-500/20"
              >
                <p className="text-white font-medium italic">
                  "Architecture has nothing to do with how a building looks like, but more to do with 
                  the functional spaces and our projects are a strong reflection of the same."
                </p>
                <p className="text-sm mt-2 text-primary-400">- Shelly Kakkar, Founder</p>
              </motion.div>

              <p>
                Our designs are an amalgamation of contemporary straight line work, functional comfort, 
                client's satisfaction and requirements along with creativity. We affirmatively focus more 
                on practicality in our projects followed by aesthetics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-8"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-primary-500 font-medium hover:gap-4 transition-all duration-300"
              >
                Learn More About Us
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="relative"
          >
            <motion.div style={{ scale }} className="relative z-10">
              {/* 3D Tilted Card Effect */}
              <motion.div
                whileHover={{ rotateY: 5, rotateX: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="perspective-card"
              >
                <div className="relative h-[600px] rounded-2xl overflow-hidden gradient-border">
                  <Image
                    src="/api/placeholder/600/600"
                    alt="Shelly Kakkar - Founder"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Info Card */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="absolute bottom-6 left-6 right-6 glass-effect p-6 rounded-xl"
                  >
                    <h3 className="text-2xl font-bold mb-2">Shelly Kakkar</h3>
                    <p className="text-primary-400 mb-4">Founder & Principal Architect</p>
                    <div className="flex gap-4">
                      <div>
                        <p className="text-2xl font-bold gradient-text">23+</p>
                        <p className="text-sm text-gray-400">Years Experience</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold gradient-text">200+</p>
                        <p className="text-sm text-gray-400">Projects</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-10 -right-10 w-20 h-20 bg-primary-500/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-orange/20 rounded-full blur-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}