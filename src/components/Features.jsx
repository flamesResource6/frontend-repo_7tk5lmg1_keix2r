import React from 'react'
import { ShieldCheck, Timer, Wallet, Link as LinkIcon } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />, 
      title: 'Rug resistance',
      desc: 'Deploy with a time-locked dev wallet that cannot sell for the first hour.'
    },
    {
      icon: <Timer className="w-5 h-5 text-emerald-400" />,
      title: 'Live lock timer',
      desc: 'A visible countdown so the community knows exactly when the lock expires.'
    },
    {
      icon: <Wallet className="w-5 h-5 text-emerald-400" />,
      title: 'Wallet escrow',
      desc: 'Funds and tokens are held under enforced constraints to prevent dumping.'
    },
    {
      icon: <LinkIcon className="w-5 h-5 text-emerald-400" />,
      title: 'Works with pump.fun',
      desc: 'Use the familiar flow and tooling you already know from pump.fun.'
    }
  ]

  return (
    <section id="features" className="relative py-20 sm:py-28 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(800px_300px_at_20%_0%,rgba(16,185,129,0.1),transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why lockpump.fun?</h2>
          <p className="mt-3 text-slate-300">Give your community a fair launch. We add an enforced cooldown so no one gets blindsided.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors">
              <div className="size-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">{f.icon}</div>
              <div className="text-white font-semibold">{f.title}</div>
              <div className="text-slate-300 text-sm mt-1">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
