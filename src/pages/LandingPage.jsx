{/* Downloads Section */}
<div className="bg-gray-900 py-16 px-4 text-center">
  <h2 className="text-3xl font-bold text-white mb-6">Download Aegis Shield</h2>
  <div className="flex flex-col md:flex-row justify-center items-center gap-6">
    <a
      href="/static/downloads/aegis_windows.exe"
      download
      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-lg transition-all"
    >
      Download for Windows
    </a>
    <a
      href="/static/downloads/aegis_linux.deb"
      download
      className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md shadow-lg transition-all"
    >
      Download for Linux
    </a>
  </div>
</div>

{/* Contact Form */}
<div className="bg-black py-16 px-4 text-center border-t border-gray-800">
  <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
  <form
    action="mailto:contact@syntexsecurity.com"
    method="POST"
    encType="text/plain"
    className="max-w-xl mx-auto space-y-6"
  >
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:border-cyan-500"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:border-cyan-500"
      required
    />
    <textarea
      name="message"
      placeholder="Your Message"
      rows="4"
      className="w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-md focus:outline-none focus:border-cyan-500"
      required
    />
    <button
      type="submit"
      className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-md shadow-lg transition-all"
    >
      Send Message
    </button>
  </form>
</div>
