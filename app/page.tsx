import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Quote from '@/components/Quote'
import TrustedBy from '@/components/TrustedBy'
import ResultsTicker from '@/components/ResultsTicker'
import Features from '@/components/Features'
import Services from '@/components/Services'
import Pipeline from '@/components/Pipeline'
import WhoItsFor from '@/components/WhoItsFor'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import ROICalculator from '@/components/ROICalculator'
import Pricing from '@/components/Pricing'
import Comparison from '@/components/Comparison'
import Team from '@/components/Team'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import FloatingCTA from '@/components/FloatingCTA'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Navigation />
      <Hero />
      <Quote />
      <TrustedBy />
      <ResultsTicker />
      <Features />
      <Services />
      <Pipeline />
      <WhoItsFor />
      <Projects />
      <Testimonials />
      <ROICalculator />
      <Pricing />
      <Comparison />
      <Team />
      <FAQ />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
