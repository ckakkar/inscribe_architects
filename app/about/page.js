'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import PageTransition from '@/components/common/PageTransition'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { stats } from '@/lib/constants'
import { FaAward, FaUsers, FaBuilding, FaHandshake } from 'react-icons/fa'

const values = [
  {
    icon: FaAward,
    title: 'Excellence',
    description: 'We strive for excellence in every project, ensuring the highest quality standards.',
  },
  {
    icon: FaUsers,
    title: 'Collaboration',
    description: 'We work closely with clients to understand their vision and bring it to life.',
  },
  {
    icon: FaBuilding,
    title: 'Innovation',
    description: 'We embrace innovative design solutions that push boundaries and inspire.',
  },
  {
    icon: FaHandshake,
    title: 'Integrity',
    description: 'We maintain the highest level of integrity in all our professional relationships.',
  },
]

const timeline = [
  { year: '2001', event: 'Inscribe Architects founded by Shelly Kakkar' },
  { year: '2005', event: 'First major commercial project completed' },
  { year: '2010', event: 'Expanded team and services' },
  { year: '2015', event: 'Reached 100+ completed projects milestone' },
  { year: '2020', event: 'Introduced sustainable design practices' },
  { year: '2024', event: 'Celebrating 23+ years of architectural excellence' },
]

export default function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-dark-100" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary-500/10 to-transparent rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl mb-6"
          >
            About <span className="gradient-text">Inscribe Architects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Creating innovative architectural designs that transform spaces and inspire communities since 2001
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-bold text-4xl sm:text-5xl mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-6 text-gray-400">
                <p>
                  Inscribe Architects was founded in 2001 by <span className="text-white font-semibold">Shelly Kakkar</span>, 
                  after having started her career with Royal Builders. With a vision to create spaces that 
                  inspire and transform, she established a firm that would become synonymous with 
                  innovative design and exceptional quality.
                </p>
                <p>
                  Over the past 23+ years, we have successfully completed over 200 projects, ranging from 
                  individual residences to large commercial complexes. Our portfolio includes apartment 
                  schemes, exhibition spaces, corporate offices, retail spaces, and institutional buildings.
                </p>
                <p>
                  We believe that architecture has nothing to do with how a building looks like, but more 
                  to do with the functional spaces. Our designs are an amalgamation of contemporary 
                  straight line work, functional comfort, client satisfaction, and creative innovation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[600px] rounded-2xl overflow-hidden">
                <Image
                  src="/api/placeholder/600/600"
                  alt="Inscribe Architects Office"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-orange/20 rounded-full blur-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {Object.entries(stats).map(([key, value], index) => (
              <motion.div
                key={key}
                variants={fadeInUp}
                className="text-center"
              >
                <h3 className="text-4xl lg:text-5xl font-bold gradient-text mb-2">{value}</h3>
                <p className="text-gray-400 capitalize">{key}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The principles that guide our work and define our approach to architecture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="glass-effect p-8 rounded-2xl h-full hover:border-primary-500/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-orange rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-32 bg-dark-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Milestones that shaped our growth and evolution
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-2xl font-bold gradient-text mb-2">{item.year}</h3>
                  <p className="text-gray-400">{item.event}</p>
                </div>
                <div className="relative">
                  <div className="w-4 h-4 bg-primary-500 rounded-full" />
                  {index < timeline.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[2px] h-24 bg-gradient-to-b from-primary-500 to-transparent" />
                  )}
                </div>
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}