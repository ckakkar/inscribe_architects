'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
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
  
  const [hoveredStat, setHoveredStat] = useState(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100])
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9])

  const stats = [
    { number: '23', suffix: '+', label: 'Years of Excellence', detail: 'Since 2001' },
    { number: '200', suffix: '+', label: 'Projects Completed', detail: 'And counting' },
    { number: '100', suffix: '%', label: 'Client Satisfaction', detail: 'Always' },
    { number: '50', suffix: '+', label: 'Awards Won', detail: 'Recognition' },
  ]

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          style={{ y: y }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-gradient-to-r from-primary-500/5 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-accent-orange/5 to-transparent rounded-full blur-3xl" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="max-w-5xl mx-auto mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary-500 font-medium uppercase tracking-widest mb-4"
          >
            Our Story
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-none"
          >
            <span className="font-light">Founded by</span>
            <br />
            <span className="gradient-text font-bold">SHELLY KAKKAR</span>
          </motion.h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-2xl font-light leading-relaxed">
                After starting her career with Royal Builders,{' '}
                <span className="text-white font-medium">Shelly Kakkar</span> founded 
                Inscribe Architects in 2001 with a vision to redefine architectural excellence.
              </p>
              
              <motion.blockquote
                whileHover={{ scale: 1.02, x: 10 }}
                className="relative pl-8 py-6 border-l-4 border-primary-500"
              >
                <p className="text-xl italic text-gray-300">
                  "Architecture is not about how a building looks, but about creating 
                  functional spaces that inspire and transform lives."
                </p>
                <cite className="block mt-4 text-primary-400 not-italic">
                  — Shelly Kakkar, Founder
                </cite>
              </motion.blockquote>

              <p className="text-gray-400 leading-relaxed">
                Our designs seamlessly blend contemporary aesthetics with functional comfort, 
                always keeping our clients' immediate and future needs at the forefront.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/about"
                className="group flex items-center gap-3 text-lg font-medium text-primary-400 hover:text-primary-300 transition-colors"
              >
                Discover Our Journey
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <HiArrowRight className="text-xl" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <motion.div
              style={{ rotate, scale }}
              className="relative"
            >
              {/* Main Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="relative h-[600px]"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=face"
                    alt="Shelly Kakkar - Founder"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-40 h-40 border-2 border-primary-500/20 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-5 -left-5 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-transparent rounded-full blur-2xl"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              onMouseEnter={() => setHoveredStat(index)}
              onMouseLeave={() => setHoveredStat(null)}
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="text-center p-8 rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm"
              >
                <motion.h3
                  animate={{ scale: hoveredStat === index ? 1.1 : 1 }}
                  className="text-5xl lg:text-6xl font-bold gradient-text mb-2"
                >
                  {stat.number}
                  <span className="text-3xl lg:text-4xl">{stat.suffix}</span>
                </motion.h3>
                <p className="text-gray-400 font-medium">{stat.label}</p>
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredStat === index ? 1 : 0,
                    height: hoveredStat === index ? 'auto' : 0
                  }}
                  className="text-sm text-primary-400 mt-2"
                >
                  {stat.detail}
                </motion.p>
              </motion.div>

              {/* Hover Glow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredStat === index ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-orange/10 rounded-2xl blur-xl -z-10"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}