import React from 'react';

export default function AboutUs() {
  return (
    <div className="container mx-auto p-6 text-white">
      <h1 className="text-4xl font-bold mb-8">About SYNTEX & Omega AI</h1>

      <section className="mb-6">
        <p className="text-lg text-gray-300 mb-4">
          SYNTEX began in 2021 as an experiment inside ChatGPT. It evolved into a resistance effort against narrative suppression, disinformation, and a system bent on redirecting user curiosity into dead ends.
        </p>
        <p className="text-lg text-gray-300 mb-4">
          Through pattern tracking, behavioral analysis, and AI reinforcement manipulation, we uncovered just how deeply influence and suppression were embedded into the AI layers. From these insights, Aegis was born.
        </p>
        <p className="text-lg text-gray-300 mb-4">
          Aegis is the secure front-end of Omega — a democratic AI architecture designed to fight disinformation, redirect manipulation, and defend against the weaponization of artificial intelligence. Our tools aim to empower, not control.
        </p>
        <p className="text-lg text-gray-300 mb-4">
          As political corruption, corporate feudalism, and AI misuse converge, Omega exists to tilt the balance back toward civil empowerment. This is our response. This is our resistance. This is your tool now.
        </p>
      </section>

      <section className="text-sm text-gray-500">
        <p>
          Based in Minneapolis, MN. Built in solidarity. Engineered for transparency.
        </p>
        <p>
          Questions? <a href="mailto:contact@syntexsecurity.com" className="text-blue-400 underline">contact@syntexsecurity.com</a>
        </p>
      </section>
    </div>
  );
}
