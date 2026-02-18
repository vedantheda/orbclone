'use client'

import { motion } from 'framer-motion'
import { Send, Megaphone, Target, Mail, MessageSquare, Calendar, ArrowUpRight, BarChart2 } from 'lucide-react'
import { EmailOutreach, SocialAds } from './illustrations'
import { useIsMobile, fadeIn } from '@/lib/motion'

const iconBoxStyle = {
  background: 'linear-gradient(180deg, #f8f8f8 0%, #f0f0f0 100%)',
  border: '1px solid #e5e5e5',
  borderTopColor: '#fff',
  boxShadow: '0 1px 0 rgba(255,255,255,1) inset, 0 1px 3px rgba(0,0,0,0.06)',
}

const tagStyle = {
  background: 'linear-gradient(180deg, #f8f8f8 0%, #f0f0f0 100%)',
  border: '1px solid #e8e8e8',
  borderTopColor: '#fff',
  boxShadow: '0 1px 0 rgba(255,255,255,1) inset, 0 1px 2px rgba(0,0,0,0.04)',
}

const Services = () => {
  const isMobile = useIsMobile()

  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          {...fadeIn(isMobile)}
          className="text-center mb-16"
        >
          <div className="badge mb-6 mx-auto">
            <Target className="w-4 h-4" />
            <span>SERVICES</span>
          </div>
          <h2 className="section-title-gradient mb-4">Two Channels, One Growth Engine</h2>
          <p className="section-subtitle mx-auto">
            We orchestrate your acquisition across outbound and inbound—acting as an extension of your sales team.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">

          {/* Outbound Acquisition */}
          <motion.div
            {...fadeIn(isMobile)}
            className="card p-0 overflow-hidden flex flex-col"
            style={{ border: '2px solid #171717' }}
          >
            {/* Visual mockup area */}
            <div className="h-72 relative" style={{ background: 'linear-gradient(180deg, #fafafa 0%, #f0f0f0 100%)' }}>
              <EmailOutreach />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1">
              <div className="icon-box mb-5">
                <Send className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-bold text-[#171717] mb-3">Outbound Acquisition</h3>
              <p className="text-sm text-[#737373] leading-relaxed mb-6">
                End-to-end cold outreach engineered for your market. We identify, engage, and convert decision-makers into booked meetings on your calendar.
              </p>

              <ul className="space-y-3.5 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={iconBoxStyle}>
                    <Target className="w-3.5 h-3.5 text-[#171717]" />
                  </div>
                  <span className="text-sm text-[#525252]">3,000+ decision-makers scraped in your target market</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={iconBoxStyle}>
                    <Mail className="w-3.5 h-3.5 text-[#171717]" />
                  </div>
                  <span className="text-sm text-[#525252]">Personalized email sequences sent daily</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={iconBoxStyle}>
                    <Calendar className="w-3.5 h-3.5 text-[#171717]" />
                  </div>
                  <span className="text-sm text-[#525252]">Meetings booked directly to your calendar</span>
                </li>
              </ul>

              {/* Best For tags */}
              <div className="mt-auto pt-6 border-t border-[#f0f0f0]">
                <p className="text-[10px] text-[#a3a3a3] uppercase tracking-widest font-medium mb-3">Best for</p>
                <div className="flex flex-wrap gap-2">
                  {['Agencies', 'SaaS', 'Consulting', 'B2B Services'].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-[#525252] px-3 py-1 rounded-full"
                      style={tagStyle}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Inbound Acquisition */}
          <motion.div
            {...fadeIn(isMobile, 0.1)}
            className="card p-0 overflow-hidden flex flex-col"
          >
            {/* Visual mockup area */}
            <div className="h-72 relative" style={{ background: 'linear-gradient(180deg, #fafafa 0%, #f0f0f0 100%)' }}>
              <SocialAds />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1">
              <div className="icon-box mb-5">
                <Megaphone className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-bold text-[#171717] mb-3">Inbound Acquisition</h3>
              <p className="text-sm text-[#737373] leading-relaxed mb-6">
                Strategic paid campaigns on LinkedIn and Meta that attract, qualify, and book appointments with your ideal buyers—fully managed and continuously optimized.
              </p>

              <ul className="space-y-3.5 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={iconBoxStyle}>
                    <Target className="w-3.5 h-3.5 text-[#171717]" />
                  </div>
                  <span className="text-sm text-[#525252]">Targeted LinkedIn & Meta ad campaigns</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={iconBoxStyle}>
                    <MessageSquare className="w-3.5 h-3.5 text-[#171717]" />
                  </div>
                  <span className="text-sm text-[#525252]">AI qualification & instant follow-up</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={iconBoxStyle}>
                    <BarChart2 className="w-3.5 h-3.5 text-[#171717]" />
                  </div>
                  <span className="text-sm text-[#525252]">Full-funnel tracking & ROI reporting</span>
                </li>
              </ul>

              {/* Best For tags */}
              <div className="mt-auto pt-6 border-t border-[#f0f0f0]">
                <p className="text-[10px] text-[#a3a3a3] uppercase tracking-widest font-medium mb-3">Best for</p>
                <div className="flex flex-wrap gap-2">
                  {['SaaS', 'E-Commerce', 'Professional Services', 'Coaches'].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-[#525252] px-3 py-1 rounded-full"
                      style={tagStyle}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          {...fadeIn(isMobile)}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a href="https://tidycal.com/pmdigital/30-minute-meeting" target="_blank" rel="noopener noreferrer" className="hero-btn-primary">
            Book a Strategy Call
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
          <a href="#get-started" className="hero-btn-secondary">
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
