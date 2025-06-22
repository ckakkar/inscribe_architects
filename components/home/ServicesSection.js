'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaLightbulb, FaHeart, FaShoppingBag, FaGlassMartini, FaTools, FaTree } from 'react-icons/fa'

const services = [
  {
    icon: FaLightbulb,
    title: 'Interior Design',
    description: 'We can do your Homes, Flats & Apartments, Rooms – Living /Kids / Drawing',
    color: 'from-yellow-400 to-orange-500',
    delay: 0,
  },
  {
    icon: FaHeart,
    title: 'Facade Design',
    description: 'We provide wonderful upgrade of building exteriors and Facades for all type of Residential and Commercial buildings',
    color: 'from-pink-400 to-red-500',
    delay: 0.1,
  },
  {
    icon: FaShoppingBag,
    title: "Commercial Planning's",
    description: 'We can do design and architectural solutioning for your offices,Factories, Banks and Hospitals Etc',
    color: 'from-purple-400 to-indigo-500',
    delay: 0.2,
  },
  {
    icon: FaGlassMartini,
    title: 'Bar & Resto Design',
    description: 'Inscribe provide design of small and Medium Restaurant and bars. We have experience with hotels and Guest Houses with Optimum space utilization and all legal aspects',
    color: 'from-blue-400 to-cyan-500',
    delay: 0.3,
  },
  {
    icon: FaTools,
    title: 'Renovation',
    description: 'Providing a new life and meaning to old building and homes while retaining their old charm is our speciality.',
    color: 'from-green-400 to-teal-500',
    delay: 0.4,
  },
  {
    icon: FaTree,
    title: 'Terrace Garden',
    description: 'One of your specialty is to convert you terrace tops into meaningful gardens and bars fro personal use. Try us for this and you will be proud of your choice.',
    color: 'from-lime-400 to-green-500',
    delay: 0.5,
  },
]

function ServiceCard({ service }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: service.delay }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-full"
    >
      <div className="relative h-full glass-effect p-8 rounded-2xl border border-white/10 hover:border-primary-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]">
        {/* Background Gradient */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 rounded-2xl`} />
        </div>

        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mb-6"
        >
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center`}>
            <service.icon className="text-2xl text-white" />
          </div>
        </motion.div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
          {service.title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
          {service.description}
        </p>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500 via-accent-orange to-primary-500 p-[1px]">
            <div className="h-full w-full rounded-2xl bg-dark-100" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 grid-pattern" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-primary-500 font-medium uppercase tracking-wider text-sm"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mt-2"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto"
          >
            We provide architectural designs keeping in mind the needs of our clients – both immediate and future.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Architecture is the art and science of creating usable spaces for people.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-medium hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] transition-all duration-300"
          >
            Explore All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}