'use client'

import { motion } from 'framer-motion'
import { Briefcase, Code, Users, PenTool } from 'lucide-react'
import { useIsMobile, fadeIn, ease } from '@/lib/motion'

const profiles = [
  {
    icon: Briefcase,
    title: 'B2B Service Companies',
    description: 'Consultants, accountants, law firms, and professional services looking to fill their pipeline without relying on referrals.',
    fits: ['High-ticket services', 'Long sales cycles', 'Decision-maker targeting'],
  },
  {
    icon: PenTool,
    title: 'Agencies',
    description: 'Marketing, design, dev, and creative agencies that want a predictable flow of qualified client meetings every month.',
    fits: ['Retainer-based models', 'Client acquisition', 'Scalable outreach'],
  },
  {
    icon: Code,
    title: 'SaaS Companies',
    description: 'Software companies targeting mid-market or enterprise buyers who need to book more demos and shorten sales cycles.',
    fits: ['Demo-driven sales', 'Enterprise outreach', 'Multi-touch sequences'],
  },
  {
    icon: Users,
    title: 'Local Businesses',
    description: 'Home service companies, contractors, clinics, and local operators ready to fill their calendar without relying on word-of-mouth.',
    fits: ['Service-area targeting', 'Appointment booking', 'Local lead generation'],
  },
]

const WhoItsFor = () => {
  const isMobile = useIsMobile()

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          {...fadeIn(isMobile)}
          className="text-center mb-16"
        >
          <div className="badge mb-6 mx-auto">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span>WHO IT&apos;S FOR</span>
          </div>
          <h2 className="section-title-gradient mb-4">Built for B2B Growth</h2>
          <p className="section-subtitle mx-auto">
            If you sell to other businesses and want a predictable way to fill your calendar, this was built for you.
          </p>
        </motion.div>

        {/* Profiles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.title}
              {...fadeIn(isMobile, index * 0.08)}
              className="card p-6 flex flex-col"
            >
              <div className="icon-box-neu mb-5">
                <profile.icon className="w-5 h-5" style={{ color: '#525252' }} strokeWidth={1.5} />
              </div>

              <h3 className="text-lg font-bold text-[#171717] mb-2">{profile.title}</h3>
              <p className="text-sm text-[#737373] leading-relaxed mb-5">{profile.description}</p>

              <ul className="mt-auto space-y-2">
                {profile.fits.map((fit) => (
                  <li key={fit} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#171717] flex-shrink-0" />
                    <span className="text-xs text-[#525252]">{fit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhoItsFor
