import { Hero } from '@/components/home/hero'
import { AboutSection } from '@/components/home/about-section'
import { ServicesSection } from '@/components/home/services-section'
import { ProjectsSection } from '@/components/home/projects-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </>
  )
}