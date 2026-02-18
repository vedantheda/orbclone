'use client'

import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import Image from 'next/image'
import { useIsMobile, fadeIn } from '@/lib/motion'

const Team = () => {
  const isMobile = useIsMobile()

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          {...fadeIn(isMobile)}
          className="text-center mb-12"
        >
          <div className="badge mb-6 mx-auto">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <span>FOUNDER</span>
          </div>
          <h2 className="section-title-gradient mb-4">The Person Behind It All</h2>
          <p className="section-subtitle mx-auto">
            Built from real experience helping businesses grow.
          </p>
        </motion.div>

        {/* Founder Card */}
        <motion.div
          {...fadeIn(isMobile)}
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
                After years in digital marketing, I saw businesses struggling with the same problem:
                they were great at what they do but had no reliable way to find new clients.
                That&apos;s why I built Python Marketing—to give B2B companies a predictable,
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
