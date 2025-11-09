'use client'

import { services } from '@/lib/constants'

export function ServicesSection() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <p className="text-white/30 text-xs font-light uppercase tracking-[0.2em] mb-6">
            What We Do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light">
            Our{' '}
            <span className="text-white/70">
              Services
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="h-full p-10 border border-white/5">
              <div className="text-3xl mb-6 opacity-40">{service.icon}</div>
              <h3 className="text-lg font-light mb-4 text-white/80">{service.title}</h3>
              <p className="text-white/40 text-sm font-light mb-8 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-white/30 font-light">
                    <div className="w-0.5 h-0.5 rounded-full bg-white/20" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}