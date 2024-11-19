import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Photography from './components/Photography';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Skills />
      <Projects />
      <Photography />
      
      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-b from-black to-blue-900" id="contact">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white h-32"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </form>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              <div className="space-y-6 text-gray-300">
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href="mailto:john@example.com" className="hover:text-blue-400 transition-colors">
                    anishbhowmick77187@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">
                    +918583045918
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p>Kolkata, India</p>
                </div>
                <div className="pt-6 border-t border-gray-700">
                  <p className="font-semibold text-white mb-4">Social Links</p>
                  <div className="flex gap-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
                    {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/50 backdrop-blur-lg border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 md:px-8 text-center text-gray-400">
          <p>© 2024 Anish Bhowmick. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;