'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#pipeline' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Get Started', href: '#get-started' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-neutral-200/30">
      <div className="container-custom flex items-center justify-between py-3">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <Image
            src="/brand/logo-small.png"
            alt="Python Marketing"
            width={200}
            height={50}
            className="h-16 w-auto brightness-0"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#525252] hover:text-[#171717] transition-all duration-200 text-[15px] font-medium px-4 py-2 rounded-lg hover:bg-[#f5f5f5]/80"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="https://tidycal.com/pmdigital/30-minute-meeting" target="_blank" rel="noopener noreferrer" className="nav-btn-primary">
            Book a Strategy Call
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#171717] p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="container-custom md:hidden pb-4">
          <div className="flex flex-col gap-4 border-t border-[#e5e5e5] pt-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#737373] hover:text-[#171717] transition-colors duration-200 text-[15px] font-medium py-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://tidycal.com/pmdigital/30-minute-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-btn-primary text-center mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
