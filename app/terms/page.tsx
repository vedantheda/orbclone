import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service – Python Marketing',
  description: 'Terms of Service for Python Marketing. Read the terms and conditions governing the use of our website and services.',
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#f5f5f5] border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <Link href="/" className="text-sm text-[#737373] hover:text-[#171717] transition-colors mb-6 inline-block">&larr; Back to Home</Link>
          <h1 className="text-3xl md:text-4xl font-bold text-[#171717] mt-4">Terms of Service</h1>
          <p className="text-[#737373] mt-3">Last updated: February 18, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <div className="prose prose-neutral max-w-none space-y-8 text-[#525252] text-[15px] leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing or using the Python Marketing website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">2. Description of Services</h2>
            <p>
              Python Marketing provides B2B client acquisition services including but not limited to lead generation, email outreach campaigns, social media advertising, appointment setting, and sales pipeline management. The specific scope of services will be defined in individual service agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">3. Use of Website</h2>
            <p className="mb-3">You agree to use our website only for lawful purposes. You shall not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Use the website to transmit any harmful or malicious content</li>
              <li>Reproduce, duplicate, or exploit any part of the website without express permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of Python Marketing or its content suppliers and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">5. Service Agreements</h2>
            <p>
              Engagement of our services requires a separate service agreement that outlines the scope, deliverables, timelines, and fees. These Terms of Service apply in addition to any individual service agreement. In the event of a conflict, the service agreement shall prevail.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">6. Payment Terms</h2>
            <p>
              Payment terms will be specified in your individual service agreement. All fees are non-refundable unless otherwise stated in the agreement. We reserve the right to suspend services for overdue payments.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">7. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of any proprietary or sensitive information shared during the course of the engagement. This includes business strategies, client data, campaign results, and any other information not publicly available.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Python Marketing shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of our website or services. Our total liability shall not exceed the amount paid by you for the services in question.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">9. Disclaimer of Warranties</h2>
            <p>
              Our website and services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied. While we strive to deliver results, we do not guarantee specific outcomes from our lead generation and outreach services, as results depend on various factors including market conditions and client responsiveness.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Python Marketing, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our website or services, or your violation of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">11. Termination</h2>
            <p>
              We may terminate or suspend your access to our website at any time, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users or our business. Termination of services is governed by your individual service agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">12. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">13. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on this page. Your continued use of the website after changes are posted constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">14. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us by booking a call or reaching out through our website.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
