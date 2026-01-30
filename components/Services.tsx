'use client'

import { motion } from 'framer-motion'
import { Settings, BarChart3, MessageSquare, Workflow, User, Send } from 'lucide-react'
import Image from 'next/image'

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-white">
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
            <Settings className="w-4 h-4" />
            <span>SERVICES</span>
          </div>
          <h2 className="section-title mb-4">Our AI-Driven Services</h2>
          <p className="section-subtitle mx-auto">
            Leverage AI features that boost performance to your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* AI Strategy Consulting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-8"
          >
            {/* Visual mockup */}
            <div className="h-48 mb-6 flex items-center justify-center relative">
              {/* Floating elements */}
              <div className="absolute top-0 left-1/4 w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center border border-[#e5e5e5]">
                <BarChart3 className="w-6 h-6 text-[#171717]" />
              </div>
              <div className="absolute top-8 right-1/4 w-8 h-8 rounded-full bg-white shadow-lg border border-[#e5e5e5]" />
              <div className="absolute bottom-8 left-1/3 w-8 h-8 rounded-full bg-white shadow-lg border border-[#e5e5e5]" />

              {/* Center orb with logo */}
              <div className="neu-card-soft w-24 h-24 rounded-2xl flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M8 8L16 4L24 8L16 12L8 8Z" fill="#171717"/>
                  <path d="M8 8L16 12V20L8 16V8Z" fill="#171717" fillOpacity="0.7"/>
                  <path d="M24 8L16 12V20L24 16V8Z" fill="#171717" fillOpacity="0.4"/>
                </svg>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-[#171717] mb-3">AI Strategy Consulting</h3>
            <p className="text-sm text-[#737373] leading-relaxed">
              Get expert guidance to implement AI solutions that drive business growth
            </p>
          </motion.div>

          {/* Content Generation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-8"
          >
            {/* Visual mockup - AI writing interface */}
            <div className="h-48 mb-6 bg-[#f5f5f5] rounded-xl p-4 overflow-hidden">
              <div className="space-y-2">
                <div className="flex items-center gap-2 py-2.5 px-4 bg-white rounded-lg border border-[#e5e5e5]">
                  <div className="w-4 h-4 rounded-full bg-[#171717] flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-sm text-[#737373]">Continue writing</span>
                </div>
                <div className="flex items-center gap-2 py-2.5 px-4 bg-white rounded-lg border border-[#e5e5e5]">
                  <div className="w-4 h-4 rounded-full bg-[#171717] flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-sm text-[#737373]">Fix spelling</span>
                </div>
                <div className="flex items-center gap-2 py-2.5 px-4 bg-white rounded-lg border border-[#e5e5e5]">
                  <div className="w-4 h-4 rounded-full bg-[#171717] flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-sm text-[#737373]">Explain in detail</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-[#171717] mb-3">Content Generation</h3>
            <p className="text-sm text-[#737373] leading-relaxed">
              We provide seamless content creation solutions that generate captivating, high-quality content in line with your brand&apos;s voice.
            </p>
          </motion.div>

          {/* AI-Powered Chatbots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card p-8"
          >
            {/* Visual mockup - Chat interface */}
            <div className="h-48 mb-6 flex flex-col">
              <div className="flex-1 bg-[#f5f5f5] rounded-xl p-4">
                {/* User message */}
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-1 bg-white rounded-lg p-3 border border-[#e5e5e5]">
                    <p className="text-xs text-[#737373]">Set up a Zoom call with Emily at 10:00 AM on Wednesday.</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#e5e5e5] flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-[#737373]" />
                  </div>
                </div>
                {/* AI response */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#171717] flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 32 32" fill="none">
                      <path d="M8 12L16 8L24 12L16 16L8 12Z" fill="white"/>
                      <path d="M8 12L16 16V24L8 20V12Z" fill="white" fillOpacity="0.7"/>
                    </svg>
                  </div>
                  <div className="flex-1 bg-white rounded-lg p-3 border border-[#e5e5e5]">
                    <p className="text-xs text-[#171717]">Zoom call with Emily set for 10:00 AM Wednesday. <span className="text-blue-500">ZOOM</span></p>
                  </div>
                </div>
              </div>
              {/* Input field */}
              <div className="flex items-center gap-2 mt-3 py-3 px-4 bg-white rounded-xl border border-[#e5e5e5]">
                <span className="text-sm text-[#a3a3a3] flex-1">Type a message</span>
                <Send className="w-4 h-4 text-[#a3a3a3]" />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-[#171717] mb-3">AI-Powered Chatbots</h3>
            <p className="text-sm text-[#737373] leading-relaxed">
              We develop AI-driven chatbots with advanced cognitive technologies to elevate customer support and automate business operations.
            </p>
          </motion.div>

          {/* Automated Workflows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="card p-8"
          >
            {/* Visual mockup - Integration icons */}
            <div className="h-48 mb-6 flex items-center justify-center relative">
              {/* Center logo */}
              <div className="w-16 h-16 rounded-xl bg-[#171717] shadow-xl flex items-center justify-center z-10">
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <path d="M8 8L16 4L24 8L16 12L8 8Z" fill="white"/>
                  <path d="M8 8L16 12V20L8 16V8Z" fill="white" fillOpacity="0.7"/>
                  <path d="M24 8L16 12V20L24 16V8Z" fill="white" fillOpacity="0.4"/>
                </svg>
              </div>

              {/* Orbiting icons */}
              <div className="absolute w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center border border-[#e5e5e5]" style={{ top: '10%', left: '20%' }}>
                <Workflow className="w-5 h-5 text-[#171717]" />
              </div>
              <div className="absolute w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center border border-[#e5e5e5]" style={{ top: '10%', right: '20%' }}>
                <Settings className="w-5 h-5 text-[#171717]" />
              </div>
              <div className="absolute w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center border border-[#e5e5e5]" style={{ bottom: '10%', left: '25%' }}>
                <MessageSquare className="w-5 h-5 text-[#171717]" />
              </div>
              <div className="absolute w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center border border-[#e5e5e5]" style={{ bottom: '10%', right: '25%' }}>
                <BarChart3 className="w-5 h-5 text-[#171717]" />
              </div>
            </div>

            <h3 className="text-xl font-semibold text-[#171717] mb-3">Automated Workflows</h3>
            <p className="text-sm text-[#737373] leading-relaxed">
              Automate workflows to streamline tasks, boost efficiency, and save time
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Services
