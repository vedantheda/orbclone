'use client'

import { ArrowUpRight } from 'lucide-react'

const Footer = () => {
  const footerLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' },
    { name: 'Projects', href: '#projects' },
    { name: 'Updates', href: '#updates' },
    { name: 'Privacy', href: '#privacy' },
  ]

  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/',
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ]

  return (
    <footer className="bg-white border-t border-[#e5e5e5]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#f5f5f5] hover:bg-[#e5e5e5] flex items-center justify-center transition-colors text-[#737373]"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Logo and tagline */}
          <div className="flex flex-col items-center text-center">
            <a href="#" className="flex items-center gap-2.5 mb-3">
              <svg width="32" height="24" viewBox="0 0 77 55" fill="none">
                <path fill="#171717" d="M53.691 19.255a4.047 4.047 0 0 1 0 5.723L24.978 53.69a4.047 4.047 0 0 1-5.723 0L1.185 35.62a4.047 4.047 0 0 1 0-5.722L29.9 1.185a4.047 4.047 0 0 1 5.723 0l18.07 18.07Z"/>
                <path fill="#171717" d="M60.435 24.978a4.047 4.047 0 0 0 0-5.723L47.15 5.968l4.783-4.783a4.047 4.047 0 0 1 5.723 0l18.07 18.07a4.047 4.047 0 0 1 0 5.723L47.01 53.69a4.047 4.047 0 0 1-5.723 0l-4.783-4.783 23.93-23.93Z"/>
              </svg>
              <span className="text-2xl font-bold text-[#171717]">ORB AI</span>
            </a>
            <p className="text-sm text-[#737373]">
              Next-gen AI systems, built for tomorrow&apos;s innovators
            </p>
          </div>

          {/* CTA Button */}
          <a href="#pricing" className="hero-btn-primary">
            Get Started
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
                className="text-sm text-[#737373] hover:text-[#171717] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-[#737373]">
            ORBAI &copy; {new Date().getFullYear()}. Designed by{' '}
            <a href="#" className="text-[#171717] hover:underline">
              FrameBase
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
