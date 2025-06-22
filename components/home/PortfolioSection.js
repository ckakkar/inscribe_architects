'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowRight, HiEye } from 'react-icons/hi'

const categories = ['All', 'Commercial', 'Kids Room', 'Interiors', 'Front Elevation']

const projects = [
  {
    id: 1,
    title: 'Modern Office Complex',
    category: 'Commercial',
    image: '/api/placeholder/600/400',
    description: 'State-of-the-art commercial space with sustainable design',
  },
  {
    id: 2,
    title: 'Luxury Villa Elevation',
    category: 'Front Elevation',
    image: '/api/placeholder/600/400',
    description: 'Contemporary facade design with premium materials',
  },
  {
    id: 3,
    title: 'Creative Kids Bedroom',
    category: 'Kids Room',
    image: '/api/placeholder/600/400',
    description: 'Playful and functional space for children',
  },
  {
    id: 4,
    title: 'Minimalist Living Room',
    category: 'Interiors',
    image: '/api/placeholder/600/400',
    description: 'Clean lines and sophisticated interior design',
  },
  {
    id: 5,
    title: 'Corporate Headquarters',
    category: 'Commercial',
    image: '/api/placeholder/600/400',
    description: 'Modern workspace designed for productivity',
  },
  {
    id: 6,
    title: 'Contemporary Home Facade',
    category: 'Front Elevation',
    image: '/api/placeholder/600/400',
    description: 'Striking exterior design with modern elements',
  },
]

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
    >
      <motion.div
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
        className="relative h-80"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        
        {/* Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
        />

        {/* Content */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 p-6 flex flex-col justify-end"
            >
              <p className="text-primary-400 text-sm font-medium mb-2">{project.category}</p>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              
              <div className="flex gap-3">
                <Link
                  href={`/portfolio/${project.id}`}
                  className="px-4 py-2 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center gap-2"
                >
                  View Project
                  <HiArrowRight />
                </Link>
                <button className="p-2 glass-effect rounded-lg hover:bg-white/20 transition-colors">
                  <HiEye className="text-xl" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 glass-effect rounded-full text-xs font-medium">
            {project.category}
          </span>
        </div>
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

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-dark-200/50">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-primary-500 font-medium uppercase tracking-wider text-sm"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mt-2"
          >
            Our <span className="gradient-text">Portfolios</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto"
          >
            Check out some of our latest and greatest projects.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.5)]'
                  : 'glass-effect hover:bg-white/10'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-medium hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-all duration-300"
          >
            View All Projects
            <HiArrowRight className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}