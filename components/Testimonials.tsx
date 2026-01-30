'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'

// Animated counter for stats
const AnimatedStat = ({ value, label }: { value: string; label: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Parse the numeric part
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''))
  const suffix = value.replace(/[0-9]/g, '')

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = numericValue / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= numericValue) {
          setCount(numericValue)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, numericValue])

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl md:text-4xl font-bold text-[#171717] mb-2">
        {count}{suffix}
      </p>
      <p className="text-sm text-[#737373]">{label}</p>
    </div>
  )
}

// Word-by-word animation for featured testimonial
const AnimatedTestimonialWord = ({ word, index, isHighlight }: { word: string; index: number; isHighlight: boolean }) => {
  return (
    <motion.span
      initial={{ opacity: 0.3 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.4,
        delay: index * 0.04,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={isHighlight ? 'text-[#171717] font-semibold' : ''}
    >
      {word}
    </motion.span>
  )
}

const Testimonials = () => {
  // Featured testimonial words with highlights
  const featuredWords = [
    { text: 'Their', highlight: false },
    { text: 'AI-driven', highlight: false },
    { text: 'approach', highlight: false },
    { text: 'helped', highlight: false },
    { text: 'us', highlight: false },
    { text: 'reach', highlight: false },
    { text: 'the', highlight: false },
    { text: 'right', highlight: false },
    { text: 'audience', highlight: false },
    { text: 'and', highlight: false },
    { text: 'grow', highlight: true },
    { text: 'faster', highlight: true },
    { text: 'with', highlight: false },
    { text: 'smarter', highlight: false },
    { text: 'insights—streamlining', highlight: false },
    { text: 'our', highlight: false },
    { text: 'strategy,', highlight: false },
    { text: 'improving', highlight: false },
    { text: 'engagement,', highlight: false },
    { text: 'and', highlight: false },
    { text: 'delivering', highlight: true },
    { text: 'results', highlight: true },
    { text: 'we', highlight: false },
    { text: "couldn't", highlight: false },
    { text: 'achieve', highlight: false },
    { text: 'before.', highlight: false },
  ]
  const testimonials = [
    {
      quote: 'We needed intelligent automation — and they nailed it. Every step was collaborative, transparent, and focused on delivering the best outcome for us',
      author: 'Brendan',
      role: 'Marketing Director at StratIQ',
      image: '/images/W7xYkGKzPzvnPv58ZBNzxS3JZI_1.jpg',
      rating: 5,
    },
    {
      quote: 'Their team helped us identify key opportunities for AI, then built tools that boosted both our speed and accuracy. We\'re already seeing results.',
      author: 'Lena M',
      role: 'Manager at NovaTech',
      image: '/images/PG5vQAQIzOrDyrT8NDWpDNTPoY_1.png',
      rating: 5,
    },
    {
      quote: 'From ideation to final delivery, they were incredibly proactive and sharp. Our new AI-powered assistant reduced manual work and improved user satisfaction',
      author: 'Eli R',
      role: 'COO at GridFrame',
      image: '/images/cZ9VBNOcSpg8RiRzIkAXdz6ScF4_1.png',
      rating: 5,
    },
  ]

  const stats = [
    { value: '10+', label: 'Projects Completed' },
    { value: '10%', label: 'Client Satisfaction' },
    { value: '5+', label: 'Years of Experience' },
  ]

  return (
    <section className="py-24 px-6 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="badge mb-6 mx-auto">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span>CUSTOMERS</span>
          </div>
          <h2 className="section-title mb-4">What Our Clients Say</h2>
          <p className="section-subtitle mx-auto">
            Join customers who trust AI to transform their business.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6 mb-8"
        >
          <div className="card p-8 md:p-10">
            <h3 className="text-lg md:text-xl text-[#737373] leading-relaxed mb-8">
              {featuredWords.map((word, index) => (
                <span key={index}>
                  <AnimatedTestimonialWord
                    word={word.text}
                    index={index}
                    isHighlight={word.highlight}
                  />
                  {index < featuredWords.length - 1 && ' '}
                </span>
              ))}
            </h3>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex justify-start"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#171717]">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
            </motion.div>
          </div>
          <div className="card p-0 overflow-hidden">
            <div className="relative w-full h-full min-h-[300px]">
              <Image
                src="/images/jV4ovNxnxoMkGdrGCld0sylE1U.png"
                alt="ORB AI Interface"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#171717] text-[#171717]" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-[#737373] leading-relaxed mb-6">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#171717]">{testimonial.author}</p>
                  <p className="text-xs text-[#a3a3a3]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats with animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card p-8"
        >
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <AnimatedStat key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
