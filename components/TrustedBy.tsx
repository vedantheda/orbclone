'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useIsMobile, fadeIn } from '@/lib/motion'

interface BrandLogo {
  name: string
  displayName: string
  style: string
  decorator?: 'dot' | 'slash' | 'bar' | 'diamond' | 'circle'
  logo?: string
}

const brands: BrandLogo[] = [
  {
    name: 'adverat-consulting',
    displayName: 'ADVERAT',
    style: 'text-[22px] md:text-[26px] font-extrabold tracking-[0.2em] uppercase',
    decorator: 'dot',
  },
  {
    name: 'coastline-contractors',
    displayName: 'Coastline Contractors',
    style: 'text-[18px] md:text-[22px] font-medium tracking-[0.02em] italic',
    decorator: 'slash',
  },
  {
    name: 'foton-asesores',
    displayName: 'Fotón Asesores',
    style: '',
    logo: '/images/foton-asesores-logo.webp',
  },
  {
    name: 'home-solutions',
    displayName: 'HOME SOLUTIONS',
    style: 'text-[17px] md:text-[21px] font-semibold tracking-[0.28em] uppercase',
  },
  {
    name: 'electrifies-solutions',
    displayName: 'Electrifies',
    style: 'text-[22px] md:text-[26px] font-black tracking-[0.01em]',
    decorator: 'circle',
  },
  {
    name: 'highland-seeds',
    displayName: 'Highland Seeds',
    style: '',
    logo: '/images/highland-seeds-logo.png',
  },
  {
    name: 'pacific-united-power',
    displayName: 'PACIFIC UNITED',
    style: 'text-[20px] md:text-[24px] font-extrabold tracking-[0.16em] uppercase',
    decorator: 'dot',
  },
  {
    name: 'ever-solar',
    displayName: 'Ever Solar',
    style: '',
    logo: '/images/eversolar-logo.png',
  },
]

const Decorator = ({ type }: { type?: BrandLogo['decorator'] }) => {
  switch (type) {
    case 'dot':
      return (
        <span className="inline-block w-[5px] h-[5px] rounded-full bg-current opacity-60 ml-1 -translate-y-[6px]" />
      )
    case 'slash':
      return (
        <span className="inline-block opacity-40 font-light ml-0.5 -translate-y-[1px]">/</span>
      )
    case 'bar':
      return (
        <span className="inline-block w-[2px] h-[14px] bg-current opacity-30 ml-1.5 -translate-y-[1px]" />
      )
    case 'diamond':
      return (
        <span className="inline-block text-[8px] opacity-40 ml-1 -translate-y-[2px]">&#9670;</span>
      )
    case 'circle':
      return (
        <span className="inline-block w-[6px] h-[6px] rounded-full border-[1.5px] border-current opacity-40 ml-1 -translate-y-[4px]" />
      )
    default:
      return null
  }
}

const TrustedBy = () => {
  const isMobile = useIsMobile()
  // Double the brands array for seamless marquee looping
  const marqueeItems = [...brands, ...brands]

  return (
    <section
      className="py-12 px-6 bg-white border-y border-[#e5e5e5] overflow-hidden"
      aria-label="Trusted by"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          {...fadeIn(isMobile, 0, 24)}
          className="flex flex-col items-center gap-8"
        >
          {/* Google Reviews Badge */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{
                background: 'linear-gradient(180deg, #ffffff 0%, #f7f7f7 100%)',
                border: '1px solid #e8e8e8',
                borderTopColor: '#fff',
                boxShadow: '0 1px 0 rgba(255,255,255,1) inset, 0 2px 6px rgba(0,0,0,0.04)',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-[#171717]">4.9</span>
                <div className="flex gap-px">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#171717">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-[10px] text-[#a3a3a3]">(48 reviews)</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-[#999999] uppercase tracking-[0.2em] font-medium">
            Trusted by leading brands
          </p>

          {/* Marquee container with gradient fade masks */}
          <div className="relative w-full">
            {/* Left fade mask */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            {/* Right fade mask */}
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden">
              <ul className="flex items-center marquee list-none m-0 p-0 w-max">
                {marqueeItems.map((brand, index) => (
                  <li
                    key={`${brand.name}-${index}`}
                    className="flex items-center px-6 md:px-10 shrink-0"
                  >
                    {brand.logo ? (
                      <Image
                        src={brand.logo}
                        alt={brand.displayName}
                        width={140}
                        height={40}
                        className="h-[28px] md:h-[34px] w-auto object-contain opacity-40 grayscale brightness-0 hover:opacity-60 transition-opacity duration-300"
                      />
                    ) : (
                      <span
                        className={`
                          inline-flex items-center select-none whitespace-nowrap
                          text-[#a3a3a3] hover:text-[#737373] transition-colors duration-300
                          ${brand.style}
                        `}
                        aria-label={brand.name}
                      >
                        {brand.displayName}
                        <Decorator type={brand.decorator} />
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TrustedBy
