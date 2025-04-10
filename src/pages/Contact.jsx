import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="mb-4 text-gray-300">
          Reach out with questions, support requests, or collaborations.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block mb-1">Name</label>
            <input type="text" className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded" />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input type="email" className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded" />
          </div>
          <div>
            <label className="block mb-1">Message</label>
            <textarea rows="5" className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded" />
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
