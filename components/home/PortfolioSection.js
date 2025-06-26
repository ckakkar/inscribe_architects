'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowRight, HiEye, HiPlus } from 'react-icons/hi'

const categories = ['All', 'Commercial', 'Residential', 'Interiors', 'Facades']

const projects = [
  {
    id: 1,
    title: 'Sky Tower Complex',
    category: 'Commercial',
    image: '/api/placeholder/600/800',
    size: 'tall',
    year: '2023',
    location: 'Downtown District',
  },
  {
    id: 2,
    title: 'Villa Serenity',
    category: 'Residential',
    image: '/api/placeholder/600/400',
    size: 'wide',
    year: '2023',
    location: 'Green Valley',
  },
  {
    id: 3,
    title: 'Modern Workspace',
    category: 'Interiors',
    image: '/api/placeholder/600/600',
    size: 'square',
    year: '2022',
    location: 'Tech Park',
  },
  {
    id: 4,
    title: 'Glass Facade Tower',
    category: 'Facades',
    image: '/api/placeholder/600/800',
    size: 'tall',
    year: '2023',
    location: 'Business District',
  },
  {
    id: 5,
    title: 'Eco Residence',
    category: 'Residential',
    image: '/api/placeholder/600/600',
    size: 'square',
    year: '2022',
    location: 'Suburban Heights',
  },
  {
    id: 6,
    title: 'Corporate HQ',
    category: 'Commercial',
    image: '/api/placeholder/600/400',
    size: 'wide',
    year: '2023',
    location: 'Financial District',
  },
]

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  const getSizeClasses = () => {
    switch (project.size) {
      case 'tall': return 'md:row-span-2'
      case 'wide': return 'md:col-span-2'
      default: return ''
    }
  }

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.6, 0.05, 0.01, 0.9]
      }}
      style={{ opacity }}
      className={`relative group ${getSizeClasses()}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        style={{ y }}
        className="relative h-full min-h-[400px] rounded-3xl overflow-hidden cursor-pointer"
      >
        {/* Image */}
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
          className="absolute inset-0"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.3 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
        />

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              y: isHovered ? 0 : 20 
            }}
            transition={{ duration: 0.3 }}
            className="mb-4"
          >
            <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium">
              {project.category}
            </span>
          </motion.div>

          {/* Title and Info */}
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">
              {project.location} • {project.year}
            </p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isHovered ? 1 : 0, 
                y: isHovered ? 0 : 20 
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex gap-3"
            >
              <Link
                href={`/portfolio/${project.id}`}
                className="group/btn flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-primary-500 hover:text-white transition-colors"
              >
                View Project
                <HiArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              <button className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors">
                <HiEye className="text-xl" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Hover Corner Accent */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: isHovered ? 1 : 0, 
            opacity: isHovered ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="absolute top-4 right-4 w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center"
        >
          <HiPlus className="text-2xl" />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function PortfolioSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [hoveredCategory, setHoveredCategory] = useState(null)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-b from-black to-dark-100">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary-500 font-medium uppercase tracking-widest mb-4"
          >
            Portfolio
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl"
          >
            <span className="font-light">Our</span>{' '}
            <span className="gradient-text font-bold">Masterpieces</span>
          </motion.h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.05 }}
              onClick={() => setSelectedCategory(category)}
              onMouseEnter={() => setHoveredCategory(category)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`relative px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <span className="relative z-10">{category}</span>
              
              {/* Active/Hover Background */}
              <motion.div
                initial={false}
                animate={{ 
                  scale: selectedCategory === category || hoveredCategory === category ? 1 : 0,
                  opacity: selectedCategory === category ? 1 : 0.5
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-orange rounded-full"
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid - Masonry Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link
            href="/portfolio"
            className="group relative inline-flex items-center gap-3 px-12 py-6 overflow-hidden"
          >
            <span className="relative z-10 text-lg font-medium gradient-text group-hover:text-white transition-colors">
              View Complete Portfolio
            </span>
            <HiArrowRight className="relative z-10 text-xl text-primary-500 group-hover:text-white group-hover:translate-x-2 transition-all" />
            
            {/* Animated Background */}
            <div className="absolute inset-0 border-2 border-primary-500/30 rounded-full" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-orange rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}