'use client'

import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/constants'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function ProjectsSection() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <p className="text-white/30 text-xs font-light uppercase tracking-[0.2em] mb-6">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light">
            Featured{' '}
            <span className="text-white/70">
              Projects
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div key={project.id} className="relative overflow-hidden aspect-[4/5] group">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:opacity-80 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white/30 text-xs font-light uppercase tracking-wider mb-2">
                  {project.category}
                </span>
                <h3 className="text-lg font-light mb-1 text-white/80">{project.title}</h3>
                <p className="text-white/30 text-xs font-light">
                  {project.location} • {project.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button size="lg" variant="outline">
              View All Projects
              <ArrowRight className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}