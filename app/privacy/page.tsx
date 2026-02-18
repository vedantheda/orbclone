import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy – Python Marketing',
  description: 'Privacy Policy for Python Marketing. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#f5f5f5] border-b border-[#e5e5e5]">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <Link href="/" className="text-sm text-[#737373] hover:text-[#171717] transition-colors mb-6 inline-block">&larr; Back to Home</Link>
          <h1 className="text-3xl md:text-4xl font-bold text-[#171717] mt-4">Privacy Policy</h1>
          <p className="text-[#737373] mt-3">Last updated: February 18, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12 md:py-16">
        <div className="prose prose-neutral max-w-none space-y-8 text-[#525252] text-[15px] leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">1. Introduction</h2>
            <p>
              Python Marketing (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-[#171717]">Personal Information:</strong> Name, email address, phone number, company name, and job title when you fill out forms, book a call, or contact us.</li>
              <li><strong className="text-[#171717]">Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on pages.</li>
              <li><strong className="text-[#171717]">Cookies and Tracking:</strong> We use cookies and similar technologies to improve your experience and analyze website traffic.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our services</li>
              <li>Communicate with you about our services, including scheduling strategy calls</li>
              <li>Send you marketing and promotional communications (with your consent)</li>
              <li>Analyze usage patterns to improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">4. Sharing of Information</h2>
            <p className="mb-3">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-[#171717]">Service Providers:</strong> Third-party vendors who assist us in operating our website and delivering services (e.g., analytics, email, scheduling tools).</li>
              <li><strong className="text-[#171717]">Legal Requirements:</strong> If required by law, regulation, or legal process.</li>
              <li><strong className="text-[#171717]">Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">5. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">6. Your Rights</h2>
            <p className="mb-3">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Object to or restrict the processing of your data</li>
              <li>Withdraw consent at any time</li>
              <li>File a complaint with a supervisory authority</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">7. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">9. Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#171717] mb-3">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us by booking a call or reaching out through our website.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
