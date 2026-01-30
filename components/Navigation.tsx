'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Services', href: '#services' },
    { name: 'Updates', href: '#updates' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-2xl border-b border-white/20" style={{ backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo with text */}
          <a href="#hero" className="flex items-center gap-2.5">
            <svg width="24" height="18" viewBox="0 0 77 55" fill="none">
              <path fill="#171717" d="M53.691 19.255a4.047 4.047 0 0 1 0 5.723L24.978 53.69a4.047 4.047 0 0 1-5.723 0L1.185 35.62a4.047 4.047 0 0 1 0-5.722L29.9 1.185a4.047 4.047 0 0 1 5.723 0l18.07 18.07Z"/>
              <path fill="#171717" d="M60.435 24.978a4.047 4.047 0 0 0 0-5.723L47.15 5.968l4.783-4.783a4.047 4.047 0 0 1 5.723 0l18.07 18.07a4.047 4.047 0 0 1 0 5.723L47.01 53.69a4.047 4.047 0 0 1-5.723 0l-4.783-4.783 23.93-23.93Z"/>
            </svg>
            <span className="text-lg font-semibold text-[#171717]">OrbAI</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#737373] hover:text-[#171717] transition-colors duration-200 text-[15px] font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#pricing" className="nav-btn-primary">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#171717] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#e5e5e5] mt-3">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#737373] hover:text-[#171717] transition-colors duration-200 text-[15px] font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#pricing"
                className="nav-btn-primary text-center mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
