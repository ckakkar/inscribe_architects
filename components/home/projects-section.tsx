'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { fadeInUpViewportWithDelay } from '@/lib/utils/animations'

export function ProjectsSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          {...fadeInUpViewportWithDelay(0)}
          className="text-center mb-12 sm:mb-16 md:mb-24"
        >
          <p className="text-grey-mouse/70 text-xs font-light uppercase tracking-[0.15em] mb-6">
            Portfolio
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-black">
            Featured{' '}
            <span className="text-grey-mouse">
              Projects
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {projects.slice(0, 6).map((project, index) => (
            <motion.div
              key={project.id}
              {...fadeInUpViewportWithDelay(index * 0.05)}
              className="relative overflow-hidden aspect-[4/5] group cursor-pointer border border-grey-mouse/10 hover:border-grey-mouse/30 transition-colors duration-300"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-beige-100/80 text-xs font-light uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="text-lg sm:text-xl font-light mb-1 sm:mb-2 text-beige-100">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-beige-100/80 font-light mb-2 sm:mb-3">
                  {project.location} • {project.year}
                </p>
                <p className="text-xs sm:text-sm text-beige-100/90 font-light leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeInUpViewportWithDelay(0.2)}
          className="text-center"
        >
          <Link href="/projects" className="inline-block">
            <Button size="lg" variant="outline" className="group w-full sm:w-auto">
              <span className="text-sm sm:text-base">View All Projects</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}