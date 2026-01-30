'use client'

import { motion } from 'framer-motion'
import { Layers, Settings, TrendingUp, MessageCircle, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 bg-[#f5f5f5]">
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
            <Layers className="w-4 h-4" />
            <span>FEATURES</span>
          </div>
          <h2 className="section-title mb-4">All features in 1 tool</h2>
          <p className="section-subtitle mx-auto">
            Discover features that simplify workflows & grow your business.
          </p>
        </motion.div>

        {/* Bento Grid - Matching template layout */}
        <div className="space-y-6 mb-10">
          {/* First Row */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Large Card - Cutting-Edge AI */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card p-0 flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-[#f0f0f0] to-[#e5e5e5] flex items-center justify-center relative">
                <Image
                  src="/images/N22bVoJydO38s0kOIVYogSPk7IE_1.png"
                  alt="Cutting-Edge AI"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col">
                <div className="icon-box mb-4">
                  <Layers className="w-5 h-5 text-[#171717]" />
                </div>
                <h3 className="text-xl font-semibold text-[#171717] mb-3">Cutting-Edge AI</h3>
                <p className="text-sm text-[#737373] leading-relaxed">
                  Deploy AI solutions that adapt quickly, learn fast, and scale with your business needs.
                </p>
              </div>
            </motion.div>

            {/* Automated Workflows */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-0 flex flex-col overflow-hidden"
            >
              {/* Visual mockup */}
              <div className="h-48 bg-[#f5f5f5] flex items-center justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 opacity-30">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-12 h-12 rounded-lg bg-[#e5e5e5]" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col">
                <div className="icon-box mb-4">
                  <Settings className="w-5 h-5 text-[#171717]" />
                </div>
                <h3 className="text-xl font-semibold text-[#171717] mb-3">Automated Workflows</h3>
                <p className="text-sm text-[#737373] leading-relaxed">
                  Streamline tasks and boost efficiency with powerful, scalable AI-powered automation tools for growing teams and projects.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Insightful Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-0 flex flex-col overflow-hidden"
            >
              {/* Visual mockup */}
              <div className="h-48 bg-[#f5f5f5] flex items-end justify-center relative px-6 pb-4">
                <div className="flex items-end gap-3 w-full max-w-[200px]">
                  {[40, 60, 45, 80, 65, 70, 50].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-lg bg-gradient-to-t from-[#d5d5d5] to-[#e5e5e5]"
                      style={{ height: `${h}%`, maxHeight: '120px' }}
                    />
                  ))}
                </div>
              </div>
              <div className="p-8 flex flex-col">
                <div className="icon-box mb-4">
                  <TrendingUp className="w-5 h-5 text-[#171717]" />
                </div>
                <h3 className="text-xl font-semibold text-[#171717] mb-3">Insightful Analytics</h3>
                <p className="text-sm text-[#737373] leading-relaxed">
                  Gain deep, real-time data insights with advanced AI analytics to guide smarter strategies, decisions, and scalable business growth.
                </p>
              </div>
            </motion.div>

            {/* AI-Powered Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card p-0 flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-[#f5f0eb] to-[#e8e3de] flex items-center justify-center relative">
                <Image
                  src="/images/ozpQ1n5ntn1iNwWiM7StpAZO2IM.jpeg"
                  alt="AI-Powered Support"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col">
                <div className="icon-box mb-4">
                  <MessageCircle className="w-5 h-5 text-[#171717]" />
                </div>
                <h3 className="text-xl font-semibold text-[#171717] mb-3">AI-Powered Support</h3>
                <p className="text-sm text-[#737373] leading-relaxed">
                  Enhance customer experience with AI-driven virtual assistants available for support and engagement.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a href="#pricing" className="hero-btn-primary">
            Get Started
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
          <a href="#services" className="hero-btn-secondary">
            See Our Services
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
