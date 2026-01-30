'use client'

import { motion } from 'framer-motion'
import { Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'

const Team = () => {
  const teamMembers = [
    {
      name: 'James Bond',
      role: 'Designer',
      image: '/images/W7xYkGKzPzvnPv58ZBNzxS3JZI_1.jpg'
    },
    {
      name: 'Emily Gwen',
      role: 'Support Team',
      image: '/images/PG5vQAQIzOrDyrT8NDWpDNTPoY_1.png'
    },
    {
      name: 'Ikta Sollork',
      role: 'Founder / CEO',
      image: '/images/cZ9VBNOcSpg8RiRzIkAXdz6ScF4_1.png'
    },
    {
      name: 'Gwen Chase',
      role: 'Marketing',
      image: '/images/gcvmIxm2XRx6NG3kYAPz3zZXc6E_1.jpg'
    },
  ]

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/' },
    { icon: Instagram, href: 'https://www.instagram.com/' },
    { icon: Linkedin, href: 'https://www.linkedin.com/' },
  ]

  return (
    <section className="py-24 px-6 bg-[#f5f5f5] overflow-hidden">
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span>TEAM</span>
          </div>
          <h2 className="section-title mb-4">Team Behind Success</h2>
          <p className="section-subtitle mx-auto">
            Meet the experts behind our AI—driven to deliver smart solutions.
          </p>
        </motion.div>

        {/* Team Carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {[...teamMembers, ...teamMembers].map((member, index) => (
              <motion.div
                key={`${member.name}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="card p-6 min-w-[260px] snap-start group flex-shrink-0"
              >
                {/* Info at top */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-base font-semibold text-[#171717]">{member.name}</h3>
                    <p className="text-sm text-[#737373]">{member.role}</p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-1.5">
                    {socialLinks.map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-full bg-[#f5f5f5] hover:bg-[#e5e5e5] flex items-center justify-center transition-colors"
                      >
                        <social.icon className="w-3 h-3 text-[#737373]" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Avatar */}
                <div className="w-full aspect-[4/5] rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-6">
            <button className="w-12 h-12 rounded-full bg-white border border-[#e5e5e5] flex items-center justify-center hover:border-[#171717] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-white border border-[#e5e5e5] flex items-center justify-center hover:border-[#171717] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
