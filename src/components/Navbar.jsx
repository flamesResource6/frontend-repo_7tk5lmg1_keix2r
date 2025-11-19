import React from 'react'
import { Menu, ShieldCheck } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <span className="text-white font-semibold tracking-tight">lockpump.fun</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
          <a href="#how" className="text-slate-300 hover:text-white transition-colors">How it works</a>
          <a href="#faq" className="text-slate-300 hover:text-white transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#launch" className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 transition-colors">
            Launch with lock
          </a>
          <button className="md:hidden text-slate-200" aria-label="Open menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
}
