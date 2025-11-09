'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function ProjectsSection() {
  return (
    <section className="py-32 relative">
      {/* Architectural Section Dividers */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-grey-mouse/10 to-transparent" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-grey-mouse/10 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Architectural Section Number */}
        <div className="absolute left-8 top-32 text-grey-mouse/20 font-display text-6xl font-light -rotate-90 origin-left hidden lg:block">
          01
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <p className="text-grey-mouse text-xs font-light uppercase tracking-[0.2em] mb-6 relative inline-block">
            <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-px bg-grey-mouse/30" />
            Portfolio
            <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-px bg-grey-mouse/30" />
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-black">
            Featured{' '}
            <span className="text-grey-mouse">
              Projects
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.slice(0, 6).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden aspect-[4/5] group cursor-pointer border border-grey-mouse/10 hover:border-grey-mouse/30 transition-colors"
            >
              {/* Architectural Corner Indicators */}
              <div className="absolute top-2 left-2 w-3 h-3 border-l border-t border-beige-100/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-2 right-2 w-3 h-3 border-r border-t border-beige-100/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                className="absolute inset-0 p-6 flex flex-col justify-end"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
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
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Link href="/projects">
            <Button size="lg" variant="outline" className="group">
              View All Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={16} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}