'use client'

import { motion } from 'framer-motion'
import { Linkedin, Target, Send, BarChart2, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const roles = [
  { icon: Target, title: 'Growth Strategist', description: 'Maps your market and designs campaigns' },
  { icon: Send, title: 'Outreach Specialist', description: 'Writes and sends personalized sequences' },
  { icon: BarChart2, title: 'Data Analyst', description: 'Optimizes every metric weekly' },
  { icon: MessageCircle, title: 'AI Systems Manager', description: 'Manages qualification and follow-up bots' },
]

const Team = () => {
  return (
    <section className="py-24 px-6 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <div className="badge mb-6 mx-auto">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>YOUR TEAM</span>
          </div>
          <h2 className="section-title-gradient mb-4">Your Dedicated Growth Team</h2>
          <p className="section-subtitle mx-auto">
            When you partner with us, you get a full team of specialists—not a single freelancer.
          </p>
        </motion.div>

        {/* Roles Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
              className="card p-6 text-center"
            >
              <div className="icon-box-neu mx-auto mb-4">
                <role.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold text-[#171717] mb-1">{role.title}</h3>
              <p className="text-xs text-[#737373]">{role.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="card p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Photo */}
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden relative flex-shrink-0"
              style={{
                boxShadow: '8px 8px 24px rgba(0,0,0,0.08), -8px -8px 24px rgba(255,255,255,0.9), 0 0 0 4px white',
              }}
            >
              <Image
                src="/images/founder.png"
                alt="Andrés Di"
                fill
                sizes="(max-width: 768px) 160px, 208px"
                className="object-cover"
              />
            </div>

            {/* Info */}
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-[#171717] mb-2">
                Andrés Di
              </h3>
              <p className="text-[#737373] mb-4">Founder & CEO</p>

              <p className="text-[#525252] leading-relaxed mb-6">
                After years in digital marketing, I saw local businesses struggling with the same problem:
                they were great at their craft but had no reliable way to find new clients.
                That&apos;s why I built Python Marketing—to give businesses a predictable,
                done-for-you acquisition system that actually works.
              </p>

              {/* Social */}
              <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
                <a
                  href="https://www.linkedin.com/in/andresdi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="feature-pill text-sm !py-2.5 !px-5 hover:!shadow-[0_1px_0_0_rgba(255,255,255,0.9)_inset,0_5px_14px_rgba(0,0,0,0.08)] text-[#525252]"
                >
                  <Linkedin className="w-4 h-4 text-[#171717]" />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Team
