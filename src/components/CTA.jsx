import React from 'react'

export default function CTA() {
  return (
    <section id="launch" className="relative py-20 sm:py-24 bg-gradient-to-b from-zinc-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to launch with a lock?</h3>
          <p className="mt-3 text-slate-300">Protect your community from instant rugs. Your dev wallet can’t sell for 1 hour.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex justify-center items-center rounded-lg bg-emerald-500 text-white px-6 py-3 font-semibold shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 transition-colors">
              Connect wallet
            </a>
            <a href="#how" className="inline-flex justify-center items-center rounded-lg bg-white/10 text-white px-6 py-3 font-semibold ring-1 ring-inset ring-white/15 hover:bg-white/15 transition-colors">
              Learn more
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-400">Note: This is a landing preview. Full launch flow integrates with pump.fun.</p>
        </div>
      </div>
    </section>
  )
}
