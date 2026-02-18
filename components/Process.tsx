'use client'

import { motion } from 'framer-motion'
import { Search, Send, TrendingUp } from 'lucide-react'
import { useIsMobile, fadeIn } from '@/lib/motion'

const Process = () => {
  const isMobile = useIsMobile()

  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Lead Finder Pro',
      description: 'Our team builds a proprietary prospect database of 3,000+ verified decision-makers in your target market. Your pipeline, your data.',
    },
    {
      number: '02',
      icon: Send,
      title: 'Outreach AI',
      description: 'Strategically sequenced outreach designed with you—not mass emails, but personalized conversations that build trust and drive replies.',
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'Sales Accelerator',
      description: 'Continuous optimization of every touchpoint to maximize what matters: your close rate. We\'re not done when you get a lead—we\'re done when you close the deal.',
    },
  ]

  return (
    <section id="process" className="py-24 px-6 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          {...fadeIn(isMobile)}
          className="text-center mb-16"
        >
          <div className="badge mb-6 mx-auto">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span>PROCESS</span>
          </div>
          <h2 className="section-title-gradient mb-4">How It Works</h2>
          <p className="section-subtitle mx-auto">
            A proven 3-step engine that fills your calendar with qualified appointments
          </p>
        </motion.div>

        {/* Process Steps - Template Layout: First card full width, then 2 side by side */}
        <div className="space-y-6">
          {/* First Step - Full Width */}
          <motion.div
            {...fadeIn(isMobile)}
            className="card p-8 md:p-10 relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Icon */}
              <div className="icon-box-neu flex-shrink-0">
                <Search className="w-6 h-6" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#171717] mb-3">{steps[0].title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed max-w-md">{steps[0].description}</p>
              </div>
            </div>

            {/* Step Number */}
            <div className="absolute bottom-4 right-6 md:bottom-6 md:right-8">
              <span className="text-7xl md:text-8xl font-bold select-none" style={{ background: 'linear-gradient(180deg, #e8e8e8, #f5f5f5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{steps[0].number}</span>
            </div>
          </motion.div>

          {/* Second Row - Two Cards Side by Side */}
          <div className="grid md:grid-cols-2 gap-6">
            {steps.slice(1).map((step, index) => (
              <motion.div
                key={step.number}
                {...fadeIn(isMobile, index * 0.12)}
                className="card p-8 relative overflow-hidden"
              >
                {/* Icon */}
                <div className="icon-box-neu mb-6">
                  <step.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-[#171717] mb-3">{step.title}</h3>
                <p className="text-sm text-[#737373] leading-relaxed mb-12">{step.description}</p>

                {/* Step Number */}
                <div className="absolute bottom-4 right-6">
                  <span className="text-7xl md:text-8xl font-bold select-none" style={{ background: 'linear-gradient(180deg, #e0e0e0, #f0f0f0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{step.number}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
