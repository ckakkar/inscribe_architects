import { PageTransition } from '@/components/layout/page-transition'

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-8">
            Our <span className="bg-gradient-to-r from-primary-400 to-accent-orange bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Explore our collection of innovative architectural masterpieces.
          </p>
        </div>
      </div>
    </PageTransition>
  )
}