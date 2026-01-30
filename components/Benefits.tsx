'use client'

import { motion } from 'framer-motion'
import { Star, Zap, Monitor, Layers, Target, DollarSign, BarChart2, Bot, Brain } from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      title: 'Real-Time Analytics',
      description: 'Stay ahead with accurate, real-time performance tracking',
      visual: 'gauge',
    },
    {
      title: 'AI-Driven Growth',
      description: 'Make smarter moves with accurate, real-time business insights.',
      visual: 'chart',
    },
    {
      title: 'Sync in real time',
      description: 'connect with your team instantly to track progress and updates',
      visual: 'sync',
    },
  ]

  const pills = [
    { icon: Zap, label: 'Faster Innovation' },
    { icon: Monitor, label: 'Virtual Assistance' },
    { icon: Layers, label: 'Scalable Solutions' },
    { icon: Target, label: 'Personalized Experiences' },
    { icon: DollarSign, label: 'Cost Effective' },
    { icon: BarChart2, label: 'Real-Time Insights' },
    { icon: Bot, label: 'Automation' },
    { icon: Brain, label: 'Data-Driven Decisions' },
  ]

  return (
    <section id="benefits" className="py-24 px-6 bg-[#f5f5f5]">
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
            <Star className="w-4 h-4" />
            <span>BENEFITS</span>
          </div>
          <h2 className="section-title mb-4">Why Choose Us</h2>
          <p className="section-subtitle mx-auto">
            Partner with an AI agency delivering smart solutions.
          </p>
        </motion.div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6"
            >
              {/* Visual */}
              <div className="h-48 mb-6 flex items-center justify-center">
                {benefit.visual === 'gauge' && (
                  <div className="neu-card-soft w-40 h-40 rounded-full flex items-center justify-center relative">
                    <div className="absolute w-32 h-32 rounded-full border-4 border-[#e5e5e5]" />
                    <div className="w-2 h-16 bg-[#171717] rounded-full origin-bottom rotate-45" />
                    <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white shadow-md" />
                    <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-white shadow-md" />
                  </div>
                )}
                {benefit.visual === 'chart' && (
                  <div className="relative w-full h-full flex flex-col p-4">
                    <div className="flex gap-2 mb-4">
                      <span className="px-3 py-1 bg-white rounded-full text-xs border border-[#e5e5e5]">20% Automation</span>
                      <span className="px-3 py-1 bg-white rounded-full text-xs border border-[#e5e5e5]">60% Cost</span>
                    </div>
                    <div className="flex items-end justify-center gap-2 flex-1 pb-4">
                      {[40, 60, 45, 80, 65, 70].map((h, i) => (
                        <div
                          key={i}
                          className="w-8 rounded-t-lg bg-gradient-to-t from-[#e5e5e5] to-white border border-[#e5e5e5]"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between text-xs text-[#a3a3a3] px-2">
                      <span>BEFORE</span>
                      <span>AFTER</span>
                    </div>
                  </div>
                )}
                {benefit.visual === 'sync' && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="neu-card-soft w-20 h-20 rounded-2xl flex items-center justify-center">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <path d="M8 8L16 4L24 8L16 12L8 8Z" fill="#171717"/>
                        <path d="M8 8L16 12V20L8 16V8Z" fill="#171717" fillOpacity="0.7"/>
                        <path d="M24 8L16 12V20L24 16V8Z" fill="#171717" fillOpacity="0.4"/>
                      </svg>
                    </div>
                    {/* Floating user elements */}
                    <div className="absolute top-2 left-8 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#e5e5e5]" />
                    </div>
                    <div className="absolute top-2 right-8 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#e5e5e5]" />
                    </div>
                    <div className="absolute bottom-2 right-6 w-10 h-10 rounded-xl bg-white shadow-lg flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="8" r="4" fill="#171717"/>
                        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" fill="#171717"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              <h3 className="text-lg font-semibold text-[#171717] mb-2">{benefit.title}</h3>
              <p className="text-sm text-[#737373]">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Marquee Feature Pills */}
        <div className="overflow-hidden relative">
          <div className="flex gap-4 marquee">
            {[...pills, ...pills, ...pills].map((pill, index) => (
              <div key={index} className="feature-pill flex-shrink-0">
                <pill.icon className="w-4 h-4 text-[#737373]" />
                <span className="text-[#171717] font-medium">{pill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits
