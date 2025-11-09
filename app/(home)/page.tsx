import { Hero } from '@/components/home/hero'
import { AboutSection } from '@/components/home/about-section'
import { ServicesSection } from '@/components/home/services-section'
import { ProjectsSection } from '@/components/home/projects-section'
import { ProcessSection } from '@/components/home/process-section'
import { AwardsSection } from '@/components/home/awards-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <AwardsSection />
      <TestimonialsSection />
    </>
  )
}