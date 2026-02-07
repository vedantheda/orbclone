'use client'

import { motion } from 'framer-motion'
import { Building2, Users, Target, Mail, MessageSquare, Calendar, ArrowUpRight } from 'lucide-react'
import { EmailOutreach, SocialAds } from './illustrations'

const ease = [0.16, 1, 0.3, 1] as const
const transition = { duration: 0.7, ease }

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
          className="text-center mb-16"
        >
          <div className="badge mb-6 mx-auto">
            <Target className="w-4 h-4" />
            <span>SERVICES</span>
          </div>
          <h2 className="section-title-gradient mb-4">Two Channels, One Integrated Strategy</h2>
          <p className="section-subtitle mx-auto">
            We orchestrate your acquisition across both channels—acting as an extension of your sales team.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">

          {/* Commercial Acquisition (B2B) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={transition}
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
                <Building2 className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-bold text-[#171717] mb-3">Commercial Acquisition</h3>
              <p className="text-sm text-[#737373] leading-relaxed mb-6">
                End-to-end B2B acquisition engineered for your market. We identify, engage, and convert decision-makers into booked meetings on your calendar.
              </p>

              <ul className="space-y-3.5 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(180deg, #f8f8f8 0%, #f0f0f0 100%)',
                      border: '1px solid #e5e5e5',
                      borderTopColor: '#fff',
                      boxShadow: '0 1px 0 rgba(255,255,255,1) inset, 0 1px 3px rgba(0,0,0,0.06)',
                    }}
                  >
                    <Target className="w-3.5 h-3.5 text-[#171717]" />
                  </div>
                  <span className="text-sm text-[#525252]">3,000+ decision-makers scraped in your target area</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(180deg, #f8f8f8 0%, #f0f0f0 100%)',
                      border: '1px solid #e5e5e5',
                      borderTopColor: '#fff',
                      boxShadow: '0 1px 0 rgba(255,255,255,1) inset, 0 1px 3px rgba(0,0,0,0.06)',
                    }}
                  >
                    <Mail className="w-3.5 h-3.5 text-[#171717]" />
                  </div>
                  <span className="text-sm text-[#525252]">Personalized outreach sent daily</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(180deg, #f8f8f8 0%, #f0f0f0 100%)',
                      border: '1px solid #e5e5e5',
                      borderTopColor: '#fff',
                      boxShadow: '0 1px 0 rgba(255,255,255,1) inset, 0 1px 3px rgba(0,0,0,0.06)',
                    }}
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#171717]" />
                  </div>
                  <span className="text-sm text-[#525252]">Meetings booked directly to your calendar</span>
                </li>
              </ul>

              {/* Best For tags */}
              <div className="mt-auto pt-6 border-t border-[#f0f0f0]">
                <p className="text-[10px] text-[#a3a3a3] uppercase tracking-widest font-medium mb-3">Best for</p>
                <div className="flex flex-wrap gap-2">
                  {['Solar', 'Roofing', 'HVAC', 'Commercial'].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-[#525252] px-3 py-1 rounded-full"
                      style={{
                        background: 'linear-gradient(180deg, #f8f8f8 0%, #f0f0f0 100%)',
                        border: '1px solid #e8e8e8',
                        borderTopColor: '#fff',
                        boxShadow: '0 1px 0 rgba(255,255,255,1) inset, 0 1px 2px rgba(0,0,0,0.04)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Residential Acquisition (B2C) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...transition, delay: 0.1 }}
            className="card p-0 overflow-hidden flex flex-col"
          >
            {/* Visual mockup area */}
            <div className="h-72 relative" style={{ background: 'linear-gradient(180deg, #fafafa 0%, #f0f0f0 100%)' }}>
              <SocialAds />
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1">
              <div className="icon-box mb-5">
                <Users className="w-5 h-5" />
              </div>

              <h3 className="text-2xl font-bold text-[#171717] mb-3">Residential Acquisition</h3>
              <p className="text-sm text-[#737373] leading-relaxed mb-6">
                Strategic social campaigns backed by AI that attract, qualify, and book homeowner appointments—fully managed and continuously optimized.
              </p>

              <ul className="space-y-3.5 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(180deg, #f8f8f8 0%, #f0f0f0 100%)',
                      border: '1px solid #e5e5e5',
                      borderTopColor: '#fff',
                      boxShadow: '0 1px 0 rgba(255,255,255,1) inset, 0 1px 3px rgba(0,0,0,0.06)',
                    }}
                  >
                    <Target className="w-3.5 h-3.5 text-[#171717]" />
                  </div>
                  <span className="text-sm text-[#525252]">Targeted social media ad campaigns</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(180deg, #f8f8f8 0%, #f0f0f0 100%)',
                      border: '1px solid #e5e5e5',
                      borderTopColor: '#fff',
                      boxShadow: '0 1px 0 rgba(255,255,255,1) inset, 0 1px 3px rgba(0,0,0,0.06)',
                    }}
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#171717]" />
                  </div>
                  <span className="text-sm text-[#525252]">AI qualification & instant follow-up</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'linear-gradient(180deg, #f8f8f8 0%, #f0f0f0 100%)',
                      border: '1px solid #e5e5e5',
                      borderTopColor: '#fff',
                      boxShadow: '0 1px 0 rgba(255,255,255,1) inset, 0 1px 3px rgba(0,0,0,0.06)',
                    }}
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#171717]" />
                  </div>
                  <span className="text-sm text-[#525252]">Appointments booked automatically</span>
                </li>
              </ul>

              {/* Best For tags */}
              <div className="mt-auto pt-6 border-t border-[#f0f0f0]">
                <p className="text-[10px] text-[#a3a3a3] uppercase tracking-widest font-medium mb-3">Best for</p>
                <div className="flex flex-wrap gap-2">
                  {['Solar', 'Roofing', 'Remodeling', 'Real Estate'].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-[#525252] px-3 py-1 rounded-full"
                      style={{
                        background: 'linear-gradient(180deg, #f8f8f8 0%, #f0f0f0 100%)',
                        border: '1px solid #e8e8e8',
                        borderTopColor: '#fff',
                        boxShadow: '0 1px 0 rgba(255,255,255,1) inset, 0 1px 2px rgba(0,0,0,0.04)',
                      }}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={transition}
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
