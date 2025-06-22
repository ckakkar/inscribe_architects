'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import PageTransition from '@/components/common/PageTransition'
import Button from '@/components/ui/Button'
import { services } from '@/lib/constants'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi'
import { FaLightbulb, FaHeart, FaShoppingBag, FaGlassMartini, FaTools, FaTree } from 'react-icons/fa'

const serviceIcons = {
  interior: FaLightbulb,
  facade: FaHeart,
  commercial: FaShoppingBag,
  'bar-resto': FaGlassMartini,
  renovation: FaTools,
  terrace: FaTree,
}

const serviceColors = {
  interior: 'from-yellow-400 to-orange-500',
  facade: 'from-pink-400 to-red-500',
  commercial: 'from-purple-400 to-indigo-500',
  'bar-resto': 'from-blue-400 to-cyan-500',
  renovation: 'from-green-400 to-teal-500',
  terrace: 'from-lime-400 to-green-500',
}

export default function ServicesPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-dark-100" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-accent-orange/20 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Comprehensive architectural solutions tailored to transform your vision into reality
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="initial"
            animate={inView ? "animate" : "initial"}
            className="grid gap-20"
          >
            {services.map((service, index) => {
              const Icon = serviceIcons[service.id]
              const color = serviceColors[service.id]
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  variants={fadeInUp}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} p-4 flex items-center justify-center`}>
                        <Icon className="text-2xl text-white" />
                      </div>
                      <h2 className="font-display font-bold text-3xl sm:text-4xl">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-gray-400 text-lg mb-8">
                      {service.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <HiCheckCircle className="text-primary-500 text-xl flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="gradient"
                      size="lg"
                      icon={<HiArrowRight />}
                    >
                      Get Started
                    </Button>
                  </div>

                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`relative ${isEven ? '' : 'lg:col-start-1'}`}
                  >
                    <div className="relative h-[400px] rounded-2xl overflow-hidden gradient-border">
                      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="text-[200px] text-white/10" />
                      </div>
                    </div>
                    
                    {/* Floating elements */}
                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 360],
                      }}
                      transition={{
                        y: { duration: 4, repeat: Infinity },
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      }}
                      className={`absolute -top-6 ${isEven ? '-right-6' : '-left-6'} w-24 h-24 bg-gradient-to-br ${color} opacity-20 rounded-full blur-2xl`}
                    />
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-dark-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A systematic approach to bring your architectural vision to life
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Understanding your vision and requirements' },
              { step: '02', title: 'Design', description: 'Creating innovative design solutions' },
              { step: '03', title: 'Development', description: 'Refining and perfecting the design' },
              { step: '04', title: 'Execution', description: 'Bringing your project to life' },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass-effect p-8 rounded-2xl h-full">
                  <div className="text-6xl font-bold gradient-text opacity-50 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
                
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <HiArrowRight className="text-2xl text-gray-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="gradient-border">
              <div className="glass-effect p-12 lg:p-16 rounded-3xl">
                <h2 className="font-display font-bold text-4xl sm:text-5xl mb-6">
                  Ready to Start Your <span className="gradient-text">Project?</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can transform your vision into an architectural masterpiece
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="primary"
                    size="lg"
                    icon={<HiArrowRight />}
                  >
                    Schedule Consultation
                  </Button>
                  <Button
                    variant="secondary"
                    size="lg"
                  >
                    View Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}