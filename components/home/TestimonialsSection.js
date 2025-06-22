'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Amit Gupta',
    location: 'Green Park, Ludhiana',
    image: '/api/placeholder/100/100',
    rating: 5,
    text: 'Inscribe is one of the best architects in Ludhiana. 100% satisfied by their Services.',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Model Town, Ludhiana',
    image: '/api/placeholder/100/100',
    rating: 5,
    text: 'Exceptional design and attention to detail. They transformed our vision into reality perfectly.',
  },
  {
    id: 3,
    name: 'Rajesh Kumar',
    location: 'Civil Lines, Ludhiana',
    image: '/api/placeholder/100/100',
    rating: 5,
    text: 'Professional team with innovative ideas. The entire process was smooth and efficient.',
  },
  {
    id: 4,
    name: 'Neha Patel',
    location: 'Sarabha Nagar, Ludhiana',
    image: '/api/placeholder/100/100',
    rating: 5,
    text: 'Their creative approach and practical solutions made our dream home a reality.',
  },
]

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-200 via-dark-100 to-black" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-3xl"
        />
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
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mt-2"
          >
            What Our <span className="gradient-text">Customer Said</span>
          </motion.h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={inView ? { opacity: 0.1, scale: 1 } : {}}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -top-10 left-0 text-primary-500"
            >
              <FaQuoteLeft className="text-8xl" />
            </motion.div>

            {/* Testimonial Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }}
                className="text-center"
              >
                <div className="glass-effect p-8 lg:p-12 rounded-3xl relative">
                  {/* Rating */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * i, type: "spring" }}
                      >
                        <FaStar className="text-yellow-400 text-xl" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Author */}
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-primary-500/20"
                      >
                        <Image
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      <div className="absolute inset-0 rounded-full bg-primary-500/20 blur-xl" />
                    </div>
                    <h4 className="text-xl font-bold gradient-text">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonials[currentIndex].location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="p-3 glass-effect rounded-full hover:bg-white/10 transition-colors"
              >
                <FaChevronLeft />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="p-3 glass-effect rounded-full hover:bg-white/10 transition-colors"
              >
                <FaChevronRight />
              </motion.button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-primary-500'
                      : 'w-2 bg-gray-600 hover:bg-gray-500'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}