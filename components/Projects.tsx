'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

// Counter animation component
const AnimatedCounter = ({ value, suffix }: { value: string; suffix: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const targetValue = parseInt(value)

  useEffect(() => {
    if (isInView) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const increment = targetValue / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= targetValue) {
          setCount(targetValue)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, targetValue])

  return (
    <div ref={ref} className="flex items-baseline gap-1">
      <span className="text-4xl font-bold text-[#171717]">{count}</span>
      <span className="text-2xl font-bold text-[#171717]">{suffix}</span>
    </div>
  )
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: 'MedixCare — AI Triage Assistant for Healthcare',
      description: 'We built a custom AI triage assistant that evaluates symptoms and routes patients to the appropriate care level.',
      stats: [
        { value: '40', suffix: '%', label: 'Reduced average wait' },
        { value: '95', suffix: '%', label: 'Rise in patient satisfaction' },
      ],
    },
    {
      id: 2,
      title: 'FinServe — Automated Document Processing',
      description: 'An intelligent document analysis system that extracts and validates financial data with high accuracy.',
      stats: [
        { value: '85', suffix: '%', label: 'Faster processing time' },
        { value: '99', suffix: '%', label: 'Accuracy rate achieved' },
      ],
    },
    {
      id: 3,
      title: 'RetailAI — Smart Inventory Management',
      description: 'AI-powered inventory forecasting that predicts demand and optimizes stock levels automatically.',
      stats: [
        { value: '30', suffix: '%', label: 'Reduction in overstock' },
        { value: '50', suffix: '%', label: 'Improved turnover rate' },
      ],
    },
  ]

  return (
    <section id="projects" className="py-24 px-6 bg-white">
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
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
              <line x1="8" y1="21" x2="16" y2="21"/>
              <line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
            <span>PROJECTS</span>
          </div>
          <h2 className="section-title mb-4">Proven Impact & Results</h2>
          <p className="section-subtitle mx-auto">
            Explore Projects that reflect our AI expertise & real world impact
          </p>
        </motion.div>

        {/* Project Tabs */}
        <div className="flex justify-center gap-3 mb-12">
          {projects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeProject === index
                  ? 'bg-[#171717] text-white'
                  : 'bg-white text-[#737373] border border-[#e5e5e5] hover:border-[#171717]'
              }`}
            >
              PROJECT {project.id}
            </button>
          ))}
        </div>

        {/* Active Project */}
        <motion.div
          key={activeProject}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm text-[#a3a3a3] mb-4">"0{projects[activeProject].id}"</p>
              <h3 className="text-2xl md:text-3xl font-semibold text-[#171717] mb-4 leading-tight">
                {projects[activeProject].title}
              </h3>
              <p className="text-[#737373] leading-relaxed mb-8">
                {projects[activeProject].description}
              </p>

              {/* Stats with animated counters */}
              <div className="flex gap-12">
                {projects[activeProject].stats.map((stat, index) => (
                  <div key={`${activeProject}-${index}`}>
                    <div className="flex items-baseline">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-sm text-[#737373] mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual placeholder */}
            <div className="h-64 md:h-80 bg-gradient-to-br from-[#f5f5f5] to-[#e5e5e5] rounded-2xl flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-white shadow-xl flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#171717] flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">0{projects[activeProject].id}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
