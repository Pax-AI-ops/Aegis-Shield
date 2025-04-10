import React from 'react';

export default function TermsOfService() {
  return (
    <div className="container mx-auto p-6 text-white">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

      {/* 1. Acceptance of Terms */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="ml-6">
          By accessing Aegis Shield, you agree to these terms and our{' '}
          <a 
            href="/privacy-policy" 
            className="text-blue-300 underline"
          >
            Privacy Policy
          </a>.
        </p>
      </section>

      {/* 2. Eligibility */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
        <p className="ml-6">
          You must be at least 18 years old or the age of majority in your jurisdiction to use this software. By using Aegis Shield, you represent that you meet these requirements.
        </p>
      </section>

      {/* 3. Licensing */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Software Licensing</h2>
        <div className="ml-6 space-y-4">
          <div>
            <h3 className="text-xl font-medium mb-2">Apache 2.0 License</h3>
            <ul className="list-disc ml-6 space-y-2 mb-4">
              <li>Use, modify, and distribute the software</li>
              <li>Grant patent rights through licensing</li>
              <li>Use for commercial purposes</li>
              <li>Distribute copies with preserved copyright notices</li>
            </ul>
            <p className="mb-4">When distributing modified versions, you must:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Clearly indicate changes made</li>
              <li>Retain original license headers</li>
              <li>Include a copy of the Apache License</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Proprietary Restrictions</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Reverse-engineering of commercial versions (e.g., Aegis Pro) is prohibited</li>
              <li>Resale of volume licenses requires explicit permission under EU exhaustion rules</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Compliance */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Regulatory Compliance</h2>
        <div className="ml-6 space-y-6">
          <div>
            <h3 className="text-xl font-medium mb-2">EU Regulations</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>DSA: Transparency reports published quarterly</li>
              <li>DMA: Interoperability APIs available upon request</li>
              <li>No dark patterns in UI/UX design (DFA compliance)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Data Protection</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>GDPR: Right to erasure within 30 days</li>
              <li>CCPA: Opt-out of data sales via{' '}
                <a 
                  href="/privacy" 
                  className="text-blue-300 underline"
                >
                  privacy portal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Commercial Terms */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Commercial Terms</h2>
        <ul className="list-disc ml-6 space-y-4">
          <li>VAT calculated based on geolocation (EU One-Stop Shop compliant)</li>
          <li>Subscriptions auto-renew with 3-day pre-notification (cancel anytime)</li>
          <li>B2B transactions use reverse-charge VAT mechanism</li>
        </ul>
      </section>

      {/* 6. Dispute Resolution */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Dispute Resolution</h2>
        <p className="ml-6">
          Any disputes shall first be resolved through binding arbitration administered by JAMS under its Commercial Arbitration Rules. Arbitration shall occur in Minneapolis, MN, and conducted in English. Judgment may be entered in any court of competent jurisdiction.
        </p>
      </section>

      {/* 7. Governing Law */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
        <p className="ml-6">
          These terms shall be governed by the laws of the State of Minnesota, United States. Any disputes shall be resolved exclusively in the courts of Minneapolis, Minnesota.
        </p>
      </section>

      {/* Contact */}
      <div className="text-center md:text-left">
        <p>
          Questions? Contact{' '}
          <a 
            href="mailto:legal@syntexsecurity.com" 
            className="text-blue-300 underline"
          >
            legal@syntexsecurity.com
          </a>
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>
      </div>
    </div>
  );
}
