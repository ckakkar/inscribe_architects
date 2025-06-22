'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import PageTransition from '@/components/common/PageTransition'
import { portfolioCategories } from '@/lib/constants'
import { HiEye, HiExternalLink } from 'react-icons/hi'

// Mock portfolio data - replace with actual data
const portfolioProjects = [
  {
    id: 1,
    title: 'Modern Office Complex',
    category: 'Commercial',
    client: 'Tech Corp',
    year: '2023',
    image: '/api/placeholder/800/600',
    description: 'A state-of-the-art office complex featuring sustainable design principles and modern amenities.',
    features: ['Green Building', 'Solar Panels', 'Smart Systems'],
  },
  {
    id: 2,
    title: 'Luxury Villa',
    category: 'Residential',
    client: 'Private Client',
    year: '2023',
    image: '/api/placeholder/800/600',
    description: 'Contemporary luxury villa with panoramic views and premium finishes throughout.',
    features: ['Pool', 'Home Theater', 'Smart Home'],
  },
  {
    id: 3,
    title: 'Minimalist Apartment',
    category: 'Interiors',
    client: 'Urban Living',
    year: '2023',
    image: '/api/placeholder/800/600',
    description: 'Clean, minimalist interior design maximizing space and natural light.',
    features: ['Space Optimization', 'Natural Materials', 'Custom Furniture'],
  },
  {
    id: 4,
    title: 'Corporate Headquarters',
    category: 'Front Elevation',
    client: 'Finance Inc',
    year: '2022',
    image: '/api/placeholder/800/600',
    description: 'Striking facade design combining glass and steel for a modern corporate image.',
    features: ['Glass Facade', 'LED Lighting', 'Vertical Gardens'],
  },
  {
    id: 5,
    title: 'Heritage Building Restoration',
    category: 'Renovation',
    client: 'Heritage Trust',
    year: '2022',
    image: '/api/placeholder/800/600',
    description: 'Careful restoration preserving historical elements while adding modern functionality.',
    features: ['Heritage Conservation', 'Structural Reinforcement', 'Modern Amenities'],
  },
  {
    id: 6,
    title: 'Boutique Hotel',
    category: 'Commercial',
    client: 'Hospitality Group',
    year: '2022',
    image: '/api/placeholder/800/600',
    description: 'Intimate boutique hotel design focusing on guest experience and local culture.',
    features: ['Themed Rooms', 'Rooftop Restaurant', 'Spa'],
  },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(project => project.category === selectedCategory)

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-dark-100" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-orange/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6"
          >
            Our <span className="gradient-text">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Explore our collection of architectural masterpieces and innovative design solutions
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {portfolioCategories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative overflow-hidden rounded-2xl h-80">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-primary-400 text-sm font-medium mb-2">{project.category}</p>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{project.client} • {project.year}</p>
                      
                      <div className="flex gap-3">
                        <div className="p-2 glass-effect rounded-lg">
                          <HiEye className="text-xl" />
                        </div>
                        <div className="p-2 glass-effect rounded-lg">
                          <HiExternalLink className="text-xl" />
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 glass-effect rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="max-w-4xl w-full max-h-[90vh] overflow-y-auto glass-effect rounded-3xl p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <p className="text-primary-400 font-medium mb-2">{selectedProject.category}</p>
                  <h2 className="text-4xl font-bold mb-4">{selectedProject.title}</h2>
                  <p className="text-gray-400">
                    {selectedProject.client} • {selectedProject.year}
                  </p>
                </div>
                
                <p className="text-gray-300 text-lg">{selectedProject.description}</p>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Key Features</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-4 py-2 glass-effect rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  )
}