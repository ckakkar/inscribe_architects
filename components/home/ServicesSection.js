'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'
import { 
  FaLightbulb, FaHeart, FaShoppingBag, 
  FaGlassMartini, FaTools, FaTree 
} from 'react-icons/fa'

const services = [
  {
    id: 'interior',
    icon: FaLightbulb,
    title: 'Interior Design',
    subtitle: 'Transform Spaces',
    description: 'Homes, Flats, Apartments - We bring life to your living spaces',
    color: 'from-yellow-400 to-orange-500',
    image: '/api/placeholder/400/500',
    features: ['Living Rooms', 'Bedrooms', 'Kitchens'],
  },
  {
    id: 'facade',
    icon: FaHeart,
    title: 'Facade Design',
    subtitle: 'First Impressions',
    description: 'Stunning exteriors that make your building stand out',
    color: 'from-pink-400 to-red-500',
    image: '/api/placeholder/400/500',
    features: ['Modern', 'Classic', 'Sustainable'],
  },
  {
    id: 'commercial',
    icon: FaShoppingBag,
    title: 'Commercial',
    subtitle: 'Business Spaces',
    description: 'Offices, factories, and retail spaces designed for success',
    color: 'from-purple-400 to-indigo-500',
    image: '/api/placeholder/400/500',
    features: ['Offices', 'Retail', 'Industrial'],
  },
  {
    id: 'bar-resto',
    icon: FaGlassMartini,
    title: 'Bar & Restaurant',
    subtitle: 'Dining Experiences',
    description: 'Creating ambiances that complement culinary excellence',
    color: 'from-blue-400 to-cyan-500',
    image: '/api/placeholder/400/500',
    features: ['Bars', 'Cafes', 'Fine Dining'],
  },
  {
    id: 'renovation',
    icon: FaTools,
    title: 'Renovation',
    subtitle: 'Reimagine & Restore',
    description: 'Breathing new life into existing structures',
    color: 'from-green-400 to-teal-500',
    image: '/api/placeholder/400/500',
    features: ['Restoration', 'Modernization', 'Preservation'],
  },
  {
    id: 'terrace',
    icon: FaTree,
    title: 'Terrace Gardens',
    subtitle: 'Urban Oasis',
    description: 'Transform rooftops into personal paradises',
    color: 'from-lime-400 to-green-500',
    image: '/api/placeholder/400/500',
    features: ['Gardens', 'Lounges', 'Entertainment'],
  },
]

function ServiceCard({ service, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10])
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const x = (e.clientX - rect.left) / width - 0.5
    const y = (e.clientY - rect.top) / height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.6, 0.05, 0.01, 0.9]
      }}
      viewport={{ once: true, margin: "-100px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative group h-[500px] perspective-1000"
    >
      <div className="relative h-full rounded-3xl overflow-hidden bg-gradient-to-b from-dark-200/50 to-dark-300/50 backdrop-blur-sm border border-white/5">
        {/* Background Pattern */}
        <div className={`absolute inset-0 opacity-10 bg-gradient-to-br ${service.color}`} />
        
        {/* Content */}
        <div className="relative h-full p-8 flex flex-col">
          {/* Icon */}
          <motion.div
            animate={{ 
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? 360 : 0 
            }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} p-5 flex items-center justify-center`}>
              <service.icon className="text-3xl text-white" />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1">
            <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
              {service.subtitle}
            </p>
            <h3 className="text-3xl font-bold mb-4">
              {service.title}
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {service.description}
            </p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: isHovered ? 1 : 0, 
                height: isHovered ? 'auto' : 0 
              }}
              transition={{ duration: 0.3 }}
              className="space-y-2 mb-6 overflow-hidden"
            >
              {service.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ 
                    x: isHovered ? 0 : -20, 
                    opacity: isHovered ? 1 : 0 
                  }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 text-sm text-gray-300"
                >
                  <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${service.color}`} />
                  {feature}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              y: isHovered ? 0 : 20 
            }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={`/services#${service.id}`}
              className="inline-flex items-center gap-2 text-primary-400 font-medium group/link"
            >
              Learn More
              <HiArrowRight className="group-hover/link:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Hover Border Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} opacity-20 blur-xl -z-10 scale-110`}
        />
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-32 relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 20, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]"
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-primary-500/5 via-transparent to-accent-orange/5 blur-3xl" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary-500 font-medium uppercase tracking-widest mb-4"
          >
            What We Do
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl"
          >
            <span className="font-light">Our</span>{' '}
            <span className="gradient-text font-bold">Services</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto"
          >
            We don't just design spaces, we craft experiences that inspire and endure
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link
            href="/services"
            className="group relative inline-flex items-center gap-3 px-12 py-6 overflow-hidden rounded-full border border-primary-500/30"
          >
            <span className="relative z-10 text-lg font-medium">
              Explore All Services
            </span>
            <HiArrowRight className="relative z-10 text-xl group-hover:translate-x-2 transition-transform" />
            
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-orange"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}