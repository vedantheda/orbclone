'use client'

import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const footerLinks = [
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Book a Strategy Call', href: 'https://tidycal.com/pmdigital/30-minute-meeting', external: true },
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/pythonmarketing',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100064016445814',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-white border-t border-[#e5e5e5]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="flex flex-col items-center md:flex-row md:items-center justify-between gap-8 mb-12">
          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all text-[#737373]"
                style={{
                  background: 'linear-gradient(180deg, #ffffff 0%, #f7f7f7 100%)',
                  border: '1px solid #e8e8e8',
                  borderTopColor: '#fff',
                  boxShadow: '0 1px 0 0 rgba(255,255,255,0.9) inset, 0 3px 8px rgba(0,0,0,0.06)',
                }}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Logo and tagline */}
          <div className="flex flex-col items-center text-center">
            <a href="#" className="flex items-center gap-2.5 mb-3">
              <Image
                src="/brand/logo-small.png"
                alt="Python Marketing"
                width={180}
                height={45}
                className="h-10 w-auto"
              />
            </a>
            <p className="text-sm text-[#737373]">
              Client acquisition systems for local businesses
            </p>
          </div>

          {/* CTA Button */}
          <a href="https://tidycal.com/pmdigital/30-minute-meeting" target="_blank" rel="noopener noreferrer" className="hero-btn-primary">
            Book a Strategy Call
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-[#e5e5e5]">
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-sm text-[#737373] hover:text-[#171717] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-sm text-[#737373]">
              Python Marketing &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#a3a3a3]">
              <a href="#" className="hover:text-[#737373] transition-colors">Privacy Policy</a>
              <span>&middot;</span>
              <a href="#" className="hover:text-[#737373] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
