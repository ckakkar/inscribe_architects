'use client'

import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRef, useEffect } from 'react'
import Link from 'next/link'
import { HiArrowRight, HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi'

export default function CTASection() {
  const containerRef = useRef(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { stiffness: 25, damping: 30 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 25, damping: 30 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 30
      const y = (clientY / innerHeight - 0.5) * 30
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{ rotate }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px]">
            <div className="w-full h-full rounded-full bg-gradient-conic from-primary-500/20 via-transparent to-accent-orange/20 blur-3xl" />
          </div>
        </motion.div>
        
        {/* Floating Elements */}
        <motion.div
          style={{ x: smoothMouseX, y: smoothMouseY }}
          className="absolute inset-0"
        >
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent-orange/10 rounded-full blur-2xl" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          style={{ scale }}
          className="max-w-6xl mx-auto"
        >
          {/* Main CTA Card */}
          <div className="relative">
            {/* Glow Effect */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-orange/20 blur-3xl"
            />

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative bg-gradient-to-br from-dark-200/80 to-dark-300/80 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden"
            >
              {/* Content */}
              <div className="p-12 lg:p-20">
                <div className="max-w-4xl mx-auto text-center">
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-8"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-primary-400">Ready to Start?</span>
                  </motion.div>

                  {/* Heading */}
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                    className="font-display text-5xl md:text-6xl lg:text-7xl mb-6"
                  >
                    <span className="font-light">Let's Build</span>
                    <br />
                    <span className="gradient-text font-bold">Something Amazing</span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
                  >
                    Transform your vision into architectural excellence. 
                    Our team is ready to bring your dream project to life.
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                  >
                    <Link
                      href="/contact"
                      className="group relative px-10 py-5 overflow-hidden rounded-full"
                    >
                      <span className="relative z-10 flex items-center gap-3 text-lg font-medium text-black">
                        Start Your Project
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <HiArrowRight className="text-xl" />
                        </motion.div>
                      </span>
                      
                      {/* Button Background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-orange"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                    </Link>

                    <button className="group px-10 py-5 rounded-full border-2 border-white/20 hover:border-primary-500/50 transition-all duration-300">
                      <span className="flex items-center gap-3 text-lg font-medium">
                        Schedule a Call
                        <HiPhone className="text-xl group-hover:rotate-12 transition-transform" />
                      </span>
                    </button>
                  </motion.div>

                  {/* Contact Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                    className="grid md:grid-cols-3 gap-8"
                  >
                    {/* Phone */}
                    <motion.a
                      href="tel:+919814224971"
                      whileHover={{ y: -5 }}
                      className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-500/50 transition-all duration-300"
                    >
                      <div className="p-3 rounded-full bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors">
                        <HiPhone className="text-2xl text-primary-500" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500 mb-1">Call Us</p>
                        <p className="font-medium">+91-9814224971</p>
                      </div>
                    </motion.a>

                    {/* Email */}
                    <motion.a
                      href="mailto:info@inscribearchitects.com"
                      whileHover={{ y: -5 }}
                      className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-500/50 transition-all duration-300"
                    >
                      <div className="p-3 rounded-full bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors">
                        <HiMail className="text-2xl text-primary-500" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500 mb-1">Email Us</p>
                        <p className="font-medium">info@inscribearchitects.com</p>
                      </div>
                    </motion.a>

                    {/* Location */}
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary-500/50 transition-all duration-300 cursor-pointer"
                    >
                      <div className="p-3 rounded-full bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors">
                        <HiLocationMarker className="text-2xl text-primary-500" />
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500 mb-1">Visit Us</p>
                        <p className="font-medium">Ludhiana, Punjab</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-32 h-32">
                <svg className="w-full h-full text-primary-500/20">
                  <path d="M0,0 L32,0 L0,32 Z" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 rotate-180">
                <svg className="w-full h-full text-accent-orange/20">
                  <path d="M0,0 L32,0 L0,32 Z" fill="currentColor" />
                </svg>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}