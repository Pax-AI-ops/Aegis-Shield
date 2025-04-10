import React from 'react';

export default function Upgrade() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Upgrade to Aegis Pro</h1>
        <p className="text-gray-300 mb-6">
          Unlock real-time telemetry, deeper suppression analytics, and full bridge integration with OMEGA Core.
        </p>

        <div className="bg-gray-800 p-6 rounded mb-6">
          <h2 className="text-xl font-semibold mb-2">Included in Pro:</h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>Live suppression monitoring</li>
            <li>System-wide ethical telemetry defense</li>
            <li>Bridge sync with OMEGA Core (offline included)</li>
            <li>Priority update & alert system</li>
          </ul>
        </div>

        <div className="text-center">
          <a
            href="https://buy.stripe.com/test_00g2bY8W0gkR5OcdQQ"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-lg inline-block"
          >
            Upgrade for $5/month or $39.99/year
          </a>
        </div>
      </div>
    </div>
  );
}
