'use client'

import { motion } from 'framer-motion'
import { Star, Zap, Target, Layers, DollarSign, BarChart2, Bot, Brain, Monitor } from 'lucide-react'
import { SpeedGauge, ResultsChart, SupportHub } from './illustrations'
import { useIsMobile, fadeIn } from '@/lib/motion'

const Benefits = () => {
  const isMobile = useIsMobile()

  const benefits = [
    {
      title: 'Results in Days, Not Months',
      description: 'Your first qualified appointments start within days—because our system is built for speed without sacrificing quality',
      visual: 'gauge',
    },
    {
      title: 'Your Extended Sales Team',
      description: 'We operate as an extension of your business—handling strategy, outreach, and optimization while you focus on closing',
      visual: 'chart',
    },
    {
      title: 'Strategic Partnership',
      description: 'Weekly strategy sessions, campaign refinement, and hands-on optimization aligned to your business goals',
      visual: 'sync',
    },
  ]

  const pills = [
    { icon: Zap, label: 'Fast Results' },
    { icon: Target, label: 'Targeted Outreach' },
    { icon: Layers, label: 'Scalable Systems' },
    { icon: DollarSign, label: 'No Lead Buying' },
    { icon: BarChart2, label: 'Weekly Reports' },
    { icon: Bot, label: 'AI Qualification' },
    { icon: Brain, label: 'Data-Driven' },
    { icon: Monitor, label: 'Full Transparency' },
  ]

  return (
    <section id="benefits" className="py-24 px-6 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          {...fadeIn(isMobile)}
          className="text-center mb-16"
        >
          <div className="badge mb-6 mx-auto">
            <Star className="w-4 h-4" />
            <span>BENEFITS</span>
          </div>
          <h2 className="section-title-gradient mb-4">Why Partner With Us</h2>
          <p className="section-subtitle mx-auto">
            We don&apos;t sell leads. We engineer growth systems that compound month after month.
          </p>
        </motion.div>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              {...fadeIn(isMobile, index * 0.1)}
              className="neu-benefit-card p-8"
            >
              {/* Visual */}
              <div className={`h-52 mb-6 flex justify-center ${benefit.visual === 'sync' ? 'items-start' : 'items-center'}`}>
                {benefit.visual === 'gauge' && <SpeedGauge />}
                {benefit.visual === 'chart' && <ResultsChart />}
                {benefit.visual === 'sync' && <SupportHub />}
              </div>

              <h3 className="text-xl font-bold text-[#171717] mb-2">{benefit.title}</h3>
              <p className="text-sm text-[#737373]">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Marquee Feature Pills */}
        <div className="overflow-hidden relative py-3" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
          <div className="flex gap-4 marquee">
            {[...pills, ...pills, ...pills].map((pill, index) => (
              <div key={index} className="feature-pill flex-shrink-0">
                <pill.icon className="w-5 h-5 text-[#171717]" strokeWidth={1.5} />
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
