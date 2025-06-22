'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { HiArrowRight, HiPhone, HiMail } from 'react-icons/hi'

export default function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-dark-100 to-accent-orange/20" />
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ef4444" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="max-w-4xl mx-auto"
        >
          {/* Main CTA Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative"
          >
            <div className="gradient-border">
              <div className="glass-effect p-12 lg:p-16 rounded-3xl text-center relative overflow-hidden">
                {/* Floating Elements */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/10 rounded-full blur-2xl"
                />
                <motion.div
                  animate={{
                    rotate: -360,
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="absolute -bottom-10 -left-10 w-60 h-60 bg-accent-orange/10 rounded-full blur-3xl"
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 text-primary-500 font-medium mb-4"
                  >
                    <div className="w-8 h-[1px] bg-primary-500" />
                    Ready to Start?
                    <div className="w-8 h-[1px] bg-primary-500" />
                  </motion.div>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 }}
                    className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-6"
                  >
                    Have any <span className="gradient-text">project?</span>{' '}
                    <br className="hidden sm:block" />
                    Send a <span className="gradient-text">message</span>
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto"
                  >
                    Hire us! We make you smile :) Let's transform your vision into architectural excellence.
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  >
                    <Link
                      href="/contact"
                      className="group px-8 py-4 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] flex items-center gap-2"
                    >
                      Request a Quote
                      <HiArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                    
                    <span className="text-gray-600">or</span>
                    
                    <Link
                      href="/contact"
                      className="px-8 py-4 glass-effect rounded-full font-medium hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-primary-500/50"
                    >
                      Hire Us
                    </Link>
                  </motion.div>

                  {/* Contact Info */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                    className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-400"
                  >
                    <a
                      href="tel:+919814224971"
                      className="flex items-center gap-2 hover:text-primary-400 transition-colors"
                    >
                      <HiPhone className="text-primary-500" />
                      +91-9814224971
                    </a>
                    <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
                    <a
                      href="mailto:info@inscribearchitects.com"
                      className="flex items-center gap-2 hover:text-primary-400 transition-colors"
                    >
                      <HiMail className="text-primary-500" />
                      info@inscribearchitects.com
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}