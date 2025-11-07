'use client'

import { PageTransition } from '@/components/layout/page-transition'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { projects } from '@/lib/constants'
import { Card } from '@/components/ui/card'

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="font-display text-6xl md:text-8xl font-bold mb-8">
              Our <span className="bg-gradient-to-r from-primary-400 to-accent-orange bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl">
              Explore our collection of innovative architectural masterpieces.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="overflow-hidden p-0 group">
                  <div className="relative h-80">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-primary-400 text-sm font-medium mb-2">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-300 text-sm">
                        {project.location} • {project.year}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}