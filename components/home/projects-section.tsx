'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function ProjectsSection() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-primary-500 font-medium uppercase tracking-wider mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-5xl md:text-7xl">
            Featured{' '}
            <span className="font-bold bg-gradient-to-r from-primary-400 to-accent-orange bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5]"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-primary-400 text-sm font-medium mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">
                  {project.location} • {project.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button size="lg" variant="outline" className="group">
              View All Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}