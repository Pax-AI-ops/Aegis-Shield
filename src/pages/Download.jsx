import React from 'react';

export default function Download() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Download Aegis Shield</h1>
        <p className="text-gray-300 mb-6">
          Choose your operating system below to get started with the freemium edition of Aegis Shield. Designed to provide real-time protection against suppression and narrative manipulation.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded text-center">
            <img src="/linux-logo.svg" alt="Linux" className="h-16 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Linux (.deb)</h2>
            <p className="text-gray-400 mb-4">Secure, lightweight, terminal-integrated. Built for Debian-based systems.</p>
            <a href="/downloads/aegis-linux.deb" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded inline-block">
              Download for Linux
            </a>
          </div>

          <div className="bg-gray-800 p-6 rounded text-center">
            <img src="/windows-logo.svg" alt="Windows" className="h-16 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Windows (.exe)</h2>
            <p className="text-gray-400 mb-4">Fast, stealth-ready version designed for real-time protection on Windows 10/11.</p>
            <a href="/downloads/aegis-windows.exe" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded inline-block">
              Download for Windows
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
