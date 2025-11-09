'use client'

import { PageTransition } from '@/components/layout/page-transition'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { projects } from '@/lib/constants'

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <p className="text-white/40 text-xs font-light uppercase tracking-[0.2em] mb-6">
              Portfolio
            </p>
            <h1 className="font-display text-5xl md:text-7xl font-light mb-6 leading-tight">
              Our <span className="text-white/90">Projects</span>
            </h1>
            <p className="text-base md:text-lg text-white/50 font-light max-w-2xl">
              Explore our collection of innovative architectural masterpieces.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden aspect-[4/5]"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white/40 text-xs font-light uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-light mb-1 text-white/90">{project.title}</h3>
                  <p className="text-white/40 text-xs font-light">
                    {project.location} • {project.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  )
}