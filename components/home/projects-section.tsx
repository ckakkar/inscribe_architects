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
              whileHover={{ y: -8 }}
              className="relative overflow-hidden aspect-[4/5] group cursor-pointer border border-grey-mouse/10 hover:border-grey-mouse/40 transition-all duration-500 arch-reveal"
            >
              {/* Animated Corner Lines */}
              <motion.div
                className="absolute top-0 left-0 w-8 h-px bg-grey-mouse/40 z-20"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute top-0 left-0 h-8 w-px bg-grey-mouse/40 z-20"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute top-0 right-0 w-8 h-px bg-grey-mouse/40 z-20"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <motion.div
                className="absolute top-0 right-0 h-8 w-px bg-grey-mouse/40 z-20"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              
              {/* Image with reveal effect */}
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              
              {/* Gradient overlay with animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                initial={{ opacity: 0.3 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Content reveal */}
              <motion.div
                className="absolute inset-0 p-6 flex flex-col justify-end"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.span
                  className="text-beige-100/80 text-xs font-light uppercase tracking-wider mb-2"
                  initial={{ x: -20, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {project.category}
                </motion.span>
                <motion.h3
                  className="text-xl font-light mb-2 text-beige-100"
                  initial={{ x: -20, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-sm text-beige-100/80 font-light mb-3"
                  initial={{ x: -20, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {project.location} • {project.year}
                </motion.p>
                <motion.p
                  className="text-sm text-beige-100/90 font-light leading-relaxed line-clamp-2"
                  initial={{ x: -20, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                >
                  {project.description}
                </motion.p>
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