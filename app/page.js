'use client'

import Hero from '@/components/home/Hero'
import AboutSection from '@/components/home/AboutSection'
import ServicesSection from '@/components/home/ServicesSection'
import PortfolioSection from '@/components/home/PortfolioSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import CTASection from '@/components/home/CTASection'
import PageTransition from '@/components/common/PageTransition'

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
    </PageTransition>
  )
}