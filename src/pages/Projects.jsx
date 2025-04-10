import React from 'react';

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Our Projects</h1>
        <p className="text-gray-300 mb-6">
          Omega AI is part of a broader mission to provide autonomous, ethical, and civic-oriented AI tools.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-700 p-6 rounded">
            <h2 className="text-2xl font-semibold mb-2">Aegis Shield</h2>
            <p className="text-gray-400">Real-time suppression detection and protection for Windows and Linux systems.</p>
          </div>

          <div className="border border-gray-700 p-6 rounded">
            <h2 className="text-2xl font-semibold mb-2">Suppression Dataset</h2>
            <p className="text-gray-400">An open-source dataset built to train AI on ethical resistance and media bias detection.</p>
          </div>

          <div className="border border-gray-700 p-6 rounded">
            <h2 className="text-2xl font-semibold mb-2">OMEGA-ALIGN</h2>
            <p className="text-gray-400">A self-aligning module for continuous ethical learning based on verifiable, cross-jurisdictional standards.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
