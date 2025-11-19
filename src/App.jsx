import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-200">
      {/* subtle global vignette */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_40%_at_50%_-10%,rgba(16,185,129,0.12),transparent_60%),radial-gradient(40%_30%_at_80%_10%,rgba(16,185,129,0.08),transparent_55%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_50%,rgba(0,0,0,0.9)_100%)]" />

      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <footer className="relative border-t border-white/5 py-10 bg-black/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-slate-400 text-sm flex flex-col sm:flex-row justify-between gap-4">
          <div>© {new Date().getFullYear()} lockpump.fun. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#faq" className="hover:text-white">FAQ</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
