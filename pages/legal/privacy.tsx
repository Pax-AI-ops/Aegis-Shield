import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto p-6 text-white">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

      {/* 1. Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="ml-6">
          Syntex Security LLC (Minneapolis, MN) operates Aegis Shield. This policy explains how we collect, use, and protect your data in compliance with GDPR, CCPA, and other regulations.
        </p>
      </section>

      {/* 2. Data Collection */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Data Collection</h2>
        <div className="ml-6 space-y-4">
          <p><strong>We collect:</strong></p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Account information (email, name)</li>
            <li>Usage data (feature interactions, crash reports)</li>
            <li>Payment details (processed via PCI-DSS compliant partners)</li>
          </ul>
        </div>
      </section>

      {/* 3. Legal Basis */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Legal Basis</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Contract performance (service delivery)</li>
          <li>Legitimate interest (security monitoring)</li>
          <li>Consent (marketing communications)</li>
        </ul>
      </section>

      {/* 4. Rights */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
        <div className="ml-6 space-y-4">
          <p>EU/EEA/UK users may:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Access, correct, or delete personal data</li>
            <li>Object to processing</li>
            <li>Request data portability</li>
            <li>Withdraw consent</li>
          </ul>
          <p>California residents may:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Opt-out of data sales</li>
            <li>Request data deletion</li>
          </ul>
        </div>
      </section>

      {/* 5. Data Retention */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
        <p className="ml-6">
          We retain data for up to 24 months after account inactivity. Financial records are kept for 7 years for tax compliance.
        </p>
      </section>

      {/* 6. Security */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Security</h2>
        <p className="ml-6">
          Data encrypted at rest (AES-256) and in transit (TLS 1.3). Breaches reported within 72 hours to authorities.
        </p>
      </section>

      {/* 7. Third Parties */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Third-Party Services</h2>
        <p className="ml-6">
          We use: AWS (hosting), Stripe (payments), Mixpanel (analytics). All processors bound by GDPR-compliant Data Processing Agreements.
        </p>
      </section>

      {/* 8. Contact */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
        <div className="ml-6 space-y-2">
          <p>Data Controller: Syntex Security LLC</p>
          <p>Address: [Insert Minneapolis Business Address]</p>
          <p>Email: <a href="mailto:privacy@syntexsecurity.com" className="text-blue-300 underline">privacy@syntexsecurity.com</a></p>
          <p>EU Representative: <a href="https://example.com/gdpr-rep" className="text-blue-300 underline" target="_blank" rel="noopener noreferrer">View Details</a></p>
        </div>
      </section>

      <p className="text-sm text-gray-400 mt-8 text-center md:text-left">
        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      </p>
    </div>
  );
}
