'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, ArrowUpRight, ArrowRight } from 'lucide-react'
import { useIsMobile, fadeIn, ease } from '@/lib/motion'

const ROICalculator = () => {
  const isMobile = useIsMobile()
  const [dealSize, setDealSize] = useState(5000)

  // Projected calculations based on deal size
  const prospectsTargeted = 3000
  const meetingsBooked = 35
  const closeRate = 0.30
  const newClients = Math.round(meetingsBooked * closeRate)
  const projectedRevenue = newClients * dealSize
  const formattedRevenue = projectedRevenue >= 1000
    ? `$${(projectedRevenue / 1000).toFixed(0)}K`
    : `$${projectedRevenue.toLocaleString()}`

  const presets = [2000, 5000, 10000, 25000, 50000]

  return (
    <section id="roi-calculator" className="py-24 px-6 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          {...fadeIn(isMobile)}
          className="text-center mb-12"
        >
          <div className="badge mb-6 mx-auto">
            <Calculator className="w-4 h-4" />
            <span>ROI CALCULATOR</span>
          </div>
          <h2 className="section-title-gradient mb-4">See Your Pipeline Potential</h2>
          <p className="section-subtitle mx-auto">
            Enter your average deal size to see what 90 days with Python Marketing could look like.
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          {...fadeIn(isMobile)}
          className="card p-8 md:p-12"
          style={{ border: '2px solid #171717' }}
        >
          {/* Input Section */}
          <div className="text-center mb-10">
            <label className="text-sm text-[#737373] mb-3 block">Your average deal size</label>
            <div className="flex items-center justify-center gap-1 mb-4">
              <span className="text-4xl md:text-5xl font-bold text-[#171717]">$</span>
              <input
                type="number"
                value={dealSize}
                onChange={(e) => setDealSize(Math.max(0, parseInt(e.target.value) || 0))}
                className="text-4xl md:text-5xl font-bold text-[#171717] bg-transparent border-none outline-none text-center w-48 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                style={{ MozAppearance: 'textfield' } as React.CSSProperties}
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {presets.map((preset) => (
                <button
                  key={preset}
                  onClick={() => setDealSize(preset)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all ${
                    dealSize === preset
                      ? 'bg-[#171717] text-white'
                      : 'text-[#737373] hover:text-[#171717]'
                  }`}
                  style={dealSize !== preset ? {
                    background: 'linear-gradient(180deg, #f8f8f8 0%, #f0f0f0 100%)',
                    border: '1px solid #e8e8e8',
                    borderTopColor: '#fff',
                    boxShadow: '0 1px 0 rgba(255,255,255,1) inset, 0 1px 2px rgba(0,0,0,0.04)',
                  } : undefined}
                >
                  ${preset >= 1000 ? `${preset / 1000}K` : preset}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="grid sm:grid-cols-4 gap-4 mb-10">
            {[
              { value: prospectsTargeted.toLocaleString() + '+', label: 'Prospects Targeted', sublabel: 'In your market' },
              { value: meetingsBooked + '+', label: 'Meetings Booked', sublabel: 'Per quarter' },
              { value: newClients + '+', label: 'New Clients', sublabel: 'At 30% close rate' },
              { value: formattedRevenue, label: 'Projected Revenue', sublabel: 'In 90 days', highlight: true },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                {...fadeIn(isMobile, index * 0.08, 20)}
                className={`rounded-2xl px-5 py-5 text-center ${stat.highlight ? 'text-white' : ''}`}
                style={{
                  background: stat.highlight
                    ? 'linear-gradient(145deg, #262626, #171717)'
                    : 'linear-gradient(145deg, #ffffff, #ececec)',
                  boxShadow: stat.highlight
                    ? '4px 4px 16px rgba(0,0,0,0.2), -2px -2px 8px rgba(255,255,255,0.03)'
                    : '4px 4px 10px rgba(0,0,0,0.06), -4px -4px 10px rgba(255,255,255,0.8)',
                }}
              >
                <p className={`text-2xl md:text-3xl font-bold mb-1 ${stat.highlight ? 'text-white' : 'text-[#171717]'}`}>
                  {stat.value}
                </p>
                <p className={`text-xs font-medium ${stat.highlight ? 'text-[#a3a3a3]' : 'text-[#737373]'}`}>{stat.label}</p>
                <p className={`text-[10px] mt-0.5 ${stat.highlight ? 'text-[#737373]' : 'text-[#a3a3a3]'}`}>{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>

          {/* Flow arrows between stats (desktop only) */}
          <div className="hidden sm:flex items-center justify-center gap-2 -mt-6 mb-6">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-2 text-[#d5d5d5]">
                <div className="w-16 h-px bg-[#e5e5e5]" />
                <ArrowRight className="w-3 h-3" />
                <div className="w-16 h-px bg-[#e5e5e5]" />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href="https://tidycal.com/pmdigital/30-minute-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-primary inline-flex"
            >
              Get Your Custom Projection
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
            </a>
            <p className="text-xs text-[#a3a3a3] mt-3">
              * Projections based on average client results. Actual outcomes vary by market and engagement.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ROICalculator
