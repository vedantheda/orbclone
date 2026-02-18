'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'
import { useIsMobile, fadeIn, ease } from '@/lib/motion'

// Animated counter for stats
const AnimatedStat = ({ value, label }: { value: string; label: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Parse prefix (e.g. "$"), numeric part, and suffix (e.g. "M+")
  const match = value.match(/^(\D*)(\d+)(.*)$/)
  const prefix = match ? match[1] : ''
  const numericValue = match ? parseInt(match[2], 10) : 0
  const suffix = match ? match[3] : ''

  useEffect(() => {
    if (isInView) {
      const duration = 800
      const steps = 40
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
        {prefix}{count}{suffix}
      </p>
      <p className="text-sm text-[#737373]">{label}</p>
    </div>
  )
}

// Word-by-word animation for featured testimonial
const AnimatedTestimonialWord = ({ word, index, isHighlight }: { word: string; index: number; isHighlight: boolean }) => {
  return (
    <motion.span
      initial={{ opacity: 0.2, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.3,
        delay: index * 0.02,
        ease: [0.2, 0, 0.2, 1]
      }}
      className={isHighlight ? 'text-[#171717] font-semibold' : ''}
      style={{ display: 'inline-block' }}
    >
      {word}
    </motion.span>
  )
}

const Testimonials = () => {
  const isMobile = useIsMobile()

  // Featured testimonial - Francisco (real client quote translated)
  const featuredWords = [
    { text: 'I', highlight: false },
    { text: 'was', highlight: false },
    { text: 'very', highlight: false },
    { text: 'skeptical', highlight: true },
    { text: 'and', highlight: false },
    { text: 'didn\'t', highlight: false },
    { text: 'think', highlight: false },
    { text: 'this', highlight: false },
    { text: 'would', highlight: false },
    { text: 'work.', highlight: false },
    { text: 'The', highlight: false },
    { text: 'results', highlight: true },
    { text: 'exceeded', highlight: true },
    { text: 'our', highlight: false },
    { text: 'expectations', highlight: false },
    { text: 'by', highlight: false },
    { text: '5x.', highlight: true },
    { text: 'What', highlight: false },
    { text: 'we', highlight: false },
    { text: 'did', highlight: false },
    { text: 'in', highlight: false },
    { text: 'a', highlight: false },
    { text: 'year,', highlight: false },
    { text: 'we', highlight: false },
    { text: 'now', highlight: false },
    { text: 'do', highlight: false },
    { text: 'in', highlight: false },
    { text: 'a', highlight: false },
    { text: 'week.', highlight: true },
  ]

  const testimonials = [
    {
      quote: 'It\'s a very regular source of qualified leads. About 60% result in on-site visits and proposals. This method is far more effective than running ads on Facebook and Instagram.',
      author: 'Energy Company CEO',
      role: 'B2B Solar — 4 Month Partnership',
      initials: 'EC',
      rating: 5,
    },
    {
      quote: 'Great service, they set up a campaign and keep working with you to make sure it fits your needs. The results speak for themselves.',
      author: 'Mauricio E',
      role: 'Google Review',
      initials: 'ME',
      rating: 5,
    },
    {
      quote: 'It has been a great help in boosting our business. We are very happy with the service and the results. Highly recommend.',
      author: 'Diana M Ramirez',
      role: 'Google Review',
      initials: 'DR',
      rating: 5,
    },
  ]

  const stats = [
    { value: '$5M+', label: 'Generated for Clients' },
    { value: '75+', label: 'Happy Clients' },
    { value: '3', label: 'Days to First Lead' },
  ]

  return (
    <section id="testimonials" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          {...fadeIn(isMobile)}
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
          <h2 className="section-title-gradient mb-4">What Our Clients Say</h2>
          <p className="section-subtitle mx-auto">
            Join 75+ businesses who transformed their client acquisition.
          </p>
        </motion.div>

        {/* Featured Testimonial + Video */}
        <motion.div
          {...fadeIn(isMobile)}
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
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#171717] flex items-center justify-center">
                  <span className="text-white text-sm font-medium">FA</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#171717]">Francisco A.</p>
                  <p className="text-xs text-[#a3a3a3]">Fotón Asesores</p>
                </div>
              </div>
              <svg width="32" height="26" viewBox="0 0 40 32" fill="none" className="text-[#171717] flex-shrink-0">
                <path d="M0 32V20.8C0 17.0667 0.666667 13.7333 2 10.8C3.46667 7.73333 5.6 5.2 8.4 3.2C11.2 1.06667 14.6667 0 18.8 0V8C15.8667 8 13.4667 8.93333 11.6 10.8C9.86667 12.6667 9 15.0667 9 18H18V32H0ZM22 32V20.8C22 17.0667 22.6667 13.7333 24 10.8C25.4667 7.73333 27.6 5.2 30.4 3.2C33.2 1.06667 36.6667 0 40.8 0V8C37.8667 8 35.4667 8.93333 33.6 10.8C31.8667 12.6667 31 15.0667 31 18H40V32H22Z" fill="currentColor"/>
              </svg>
            </div>
          </div>
          <div className="card p-0 overflow-hidden">
            <div className="relative w-full h-full min-h-[300px]">
              <iframe
                src="https://www.loom.com/embed/40370c09c54f4568aea291d9fa386249?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
                frameBorder="0"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                title="Hector Santos - Closing 70% Of All Leads"
              />
            </div>
          </div>
        </motion.div>

        {/* Written Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              {...fadeIn(isMobile, index * 0.1)}
              className="card p-6 flex flex-col"
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
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-[#171717] flex items-center justify-center">
                  <span className="text-white text-sm font-medium">{testimonial.initials}</span>
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
          {...fadeIn(isMobile)}
          className="card p-8"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center">
                <AnimatedStat value={stat.value} label={stat.label} />
                {index < stats.length - 1 && (
                  <div className="hidden sm:block w-px h-12 bg-[#e5e5e5] mx-4 sm:mx-8 md:mx-12" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
