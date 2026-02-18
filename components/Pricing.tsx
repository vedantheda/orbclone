'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Check, Calendar, ChevronRight } from 'lucide-react'
import { useIsMobile, fadeIn, ease } from '@/lib/motion'

const AnimatedNumber = ({ target, inView }: { target: number; inView: boolean }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const steps = 50
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [inView, target])

  return <>{count}</>
}

const pipelineStages = [
  {
    number: 500,
    suffix: '+',
    label: 'Prospects Targeted',
    bg: 'linear-gradient(145deg, #ffffff, #ececec)',
    shadow: '4px 4px 10px rgba(0,0,0,0.06), -4px -4px 10px rgba(255,255,255,0.8)',
    textColor: '#171717',
    labelColor: '#737373',
  },
  {
    number: 120,
    suffix: '+',
    label: 'Qualified Leads',
    bg: 'linear-gradient(145deg, #f0f0f0, #e0e0e0)',
    shadow: '4px 4px 10px rgba(0,0,0,0.06), -4px -4px 10px rgba(255,255,255,0.7)',
    textColor: '#171717',
    labelColor: '#737373',
  },
  {
    number: 35,
    suffix: '+',
    label: 'Booked Appointments',
    bg: 'linear-gradient(145deg, #404040, #2a2a2a)',
    shadow: '4px 4px 12px rgba(0,0,0,0.15), -2px -2px 8px rgba(255,255,255,0.05)',
    textColor: '#ffffff',
    labelColor: '#a3a3a3',
  },
  {
    number: 12,
    suffix: '+',
    label: 'New Clients',
    bg: 'linear-gradient(145deg, #262626, #171717)',
    shadow: '4px 4px 16px rgba(0,0,0,0.2), -2px -2px 8px rgba(255,255,255,0.03)',
    textColor: '#ffffff',
    labelColor: '#a3a3a3',
  },
]

const Pricing = () => {
  const isMobile = useIsMobile()
  const pipelineRef = useRef(null)
  const isInView = useInView(pipelineRef, { once: true, margin: '-100px' })

  const benefits = [
    'Growth strategy tailored to your market',
    'Full campaign strategy, setup, and management',
    'Ongoing optimization aligned to your close rate',
    'Dedicated team and weekly strategy sessions',
    'No long-term contracts—results earn your business',
  ]

  return (
    <section id="get-started" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          {...fadeIn(isMobile)}
          className="text-center mb-12"
        >
          <div className="badge mb-6 mx-auto">
            <Calendar className="w-4 h-4" />
            <span>GET STARTED</span>
          </div>
          <h2 className="section-title-gradient mb-4">Ready to Own Your Growth?</h2>
          <p className="section-subtitle mx-auto">
            Every business is different. Let&apos;s map out your growth opportunity and design a strategy tailored to your goals.
          </p>
        </motion.div>

        {/* Pipeline Projection */}
        <motion.div
          ref={pipelineRef}
          {...fadeIn(isMobile)}
          className="card p-8 md:p-10 mb-8"
        >
          <h3 className="text-lg font-bold text-[#171717] text-center mb-2">Your Pipeline Projection</h3>
          <p className="text-sm text-[#737373] text-center mb-8">Here&apos;s what your first 90 days could look like</p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-2">
            {pipelineStages.map((stage, index) => (
              <div key={stage.label} className="flex flex-col md:flex-row items-center gap-3 md:gap-2">
                <motion.div
                  {...fadeIn(isMobile, index * 0.12)}
                  className="rounded-2xl px-6 py-5 text-center min-w-[140px]"
                  style={{
                    background: stage.bg,
                    boxShadow: stage.shadow,
                  }}
                >
                  <p className="text-2xl font-bold mb-1" style={{ color: stage.textColor }}>
                    <AnimatedNumber target={stage.number} inView={isInView} />{stage.suffix}
                  </p>
                  <p className="text-xs font-medium" style={{ color: stage.labelColor }}>{stage.label}</p>
                </motion.div>
                {index < pipelineStages.length - 1 && (
                  <ChevronRight
                    className="w-5 h-5 text-[#a3a3a3] rotate-90 md:rotate-0 flex-shrink-0"
                    strokeWidth={2}
                  />
                )}
              </div>
            ))}
          </div>

          <p className="text-xs text-[#a3a3a3] text-center mt-6">
            * Average projected results. Actual outcomes vary by market, offer, and engagement.
          </p>
        </motion.div>

        {/* Single CTA Card */}
        <motion.div
          {...fadeIn(isMobile)}
          className="card p-8 md:p-12 text-center"
          style={{ border: '2px solid #171717' }}
        >
          {/* Urgency Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'linear-gradient(180deg, #fafafa 0%, #f0f0f0 100%)',
              border: '1px solid #e0e0e0',
              borderTopColor: '#fff',
              boxShadow: '0 1px 0 rgba(255,255,255,1) inset, 0 1px 3px rgba(0,0,0,0.04)',
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#171717] opacity-50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#171717]" />
            </span>
            <span className="text-xs font-medium text-[#525252]">We onboard 3 new clients per month — limited availability</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-[#171717] mb-4">
            Book Your Strategy Call
          </h3>
          <p className="text-[#737373] mb-8 max-w-lg mx-auto">
            In 30 minutes, we&apos;ll map your growth opportunity and design a tailored acquisition strategy around your business goals.
          </p>

          {/* Benefits */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-xl mx-auto text-left">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#171717] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-[#737373]">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="https://tidycal.com/pmdigital/30-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn-primary py-4 px-8 text-base"
          >
            Book a Strategy Call
            <ArrowUpRight className="w-5 h-5" />
          </a>

          <p className="text-xs text-[#a3a3a3] mt-4">
            No commitment required. See if we&apos;re a good fit.
          </p>

          {/* Secondary Lead Magnet CTA */}
          <div className="mt-6 pt-6" style={{ borderTop: '1px solid #e8e8e8' }}>
            <p className="text-xs text-[#a3a3a3]">
              Not ready for a call?{' '}
              <a
                href="#roi-calculator"
                className="text-[#171717] font-medium hover:underline"
              >
                Try our ROI calculator
              </a>{' '}
              to see your pipeline potential first.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
