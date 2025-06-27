'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const testimonials = [
  {
    id: 1,
    name: 'Amit Gupta',
    title: 'CEO, Tech Innovations',
    location: 'Green Park, Ludhiana',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'Inscribe transformed our office space into a modern masterpiece. Their attention to detail and innovative approach exceeded all expectations.',
    project: 'Corporate Office Redesign',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    title: 'Homeowner',
    location: 'Model Town, Ludhiana',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'The team at Inscribe brought our dream home to life. Every corner reflects our personality while maintaining functionality.',
    project: 'Luxury Villa Design',
  },
  {
    id: 3,
    name: 'Rajesh Kumar',
    title: 'Restaurant Owner',
    location: 'Civil Lines, Ludhiana',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'Our restaurant\'s ambiance has become a talking point. Inscribe perfectly captured the essence we wanted to convey.',
    project: 'Fine Dining Interior',
  },
  {
    id: 4,
    name: 'Neha Patel',
    title: 'Boutique Owner',
    location: 'Sarabha Nagar, Ludhiana',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: 'The facade design has increased foot traffic significantly. It\'s modern, inviting, and perfectly represents our brand.',
    project: 'Retail Facade Design',
  },
]

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const dragX = useMotionValue(0)
  const dragXSpring = useSpring(dragX, { stiffness: 300, damping: 30 })
  const opacity = useTransform(dragXSpring, [-200, 0, 200], [0.5, 1, 0.5])
  const scale = useTransform(dragXSpring, [-200, 0, 200], [0.9, 1, 0.9])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + newDirection
      if (newIndex < 0) newIndex = testimonials.length - 1
      if (newIndex >= testimonials.length) newIndex = 0
      return newIndex
    })
  }

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-100 to-black" />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary-500/20 to-transparent blur-3xl" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-primary-500 font-medium uppercase tracking-widest mb-4"
          >
            Testimonials
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl"
          >
            <span className="font-light">Client</span>{' '}
            <span className="gradient-text font-bold">Stories</span>
          </motion.h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-5xl mx-auto">
          <div className="relative h-[500px] flex items-center justify-center">
            {/* Quote Icon Background */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 0.05, scale: 1 } : {}}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute top-0 left-1/2 -translate-x-1/2"
            >
              <FaQuoteLeft className="text-[300px] text-primary-500" />
            </motion.div>

            {/* Testimonial Content */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                style={{ x: dragX, opacity, scale }}
                className="absolute w-full px-8"
              >
                <div className="text-center">
                  {/* Rating */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center gap-1 mb-8"
                  >
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                      >
                        <FaStar className="text-2xl text-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Text */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-gray-300 mb-12"
                  >
                    "{testimonials[currentIndex].text}"
                  </motion.p>

                  {/* Author */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col items-center"
                  >
                    <div className="relative mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative w-24 h-24 rounded-full overflow-hidden"
                      >
                        <Image
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          fill
                          className="object-cover"
                          sizes="100px"
                        />
                      </motion.div>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border-2 border-primary-500/30 border-dashed"
                      />
                    </div>
                    
                    <h4 className="text-2xl font-bold gradient-text mb-1">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-400 mb-2">
                      {testimonials[currentIndex].title}
                    </p>
                    <p className="text-sm text-primary-400">
                      {testimonials[currentIndex].project}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(-1)}
                className="p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
              >
                <HiChevronLeft className="text-2xl" />
              </motion.button>

              {/* Progress Indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1)
                      setCurrentIndex(index)
                    }}
                    className="relative h-1 overflow-hidden rounded-full bg-white/10"
                    animate={{ width: index === currentIndex ? 40 : 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ x: '-100%' }}
                      animate={{ x: index === currentIndex ? '0%' : '-100%' }}
                      transition={{ duration: 5, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-orange"
                      onAnimationComplete={() => {
                        if (index === currentIndex) {
                          paginate(1)
                        }
                      }}
                    />
                  </motion.button>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => paginate(1)}
                className="p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
              >
                <HiChevronRight className="text-2xl" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}