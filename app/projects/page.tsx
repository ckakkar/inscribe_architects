'use client'

import { PageTransition } from '@/components/layout/page-transition'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { projects } from '@/lib/constants'

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-16 md:mb-20"
          >
            <p className="text-grey-mouse text-xs font-light uppercase tracking-[0.2em] mb-4 sm:mb-6">
              Portfolio
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light mb-4 sm:mb-6 leading-tight">
              Our <span className="text-black">Projects</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-black-soft font-light max-w-2xl leading-relaxed">
              Explore our portfolio of over 1,100 completed projects across residential, commercial, and institutional sectors in Ludhiana, Punjab, and beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
                  className="object-cover group-hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-beige-100/80 text-xs font-light uppercase tracking-wider mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-light mb-2 text-beige-100">{project.title}</h3>
                  <p className="text-sm text-beige-100/80 font-light mb-3">
                    {project.location} • {project.year}
                  </p>
                  <p className="text-sm text-beige-100/90 font-light leading-relaxed line-clamp-2">
                    {project.description}
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