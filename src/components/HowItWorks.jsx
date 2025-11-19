import React from 'react'
import { StepForward, Lock, Rocket } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      title: 'Connect & configure',
      desc: 'Set your token details and connect your wallet. Choose “Launch with lock”.',
      icon: <Lock className="w-5 h-5" />,
    },
    {
      title: 'Deploy via pump.fun',
      desc: 'We route through the normal deploy flow with our lock layer enabled.',
      icon: <Rocket className="w-5 h-5" />,
    },
    {
      title: 'Fair trading opens',
      desc: 'The deployer wallet is unable to sell for 60 minutes. A timer displays for everyone.',
      icon: <StepForward className="w-5 h-5" />,
    },
  ]

  return (
    <section id="how" className="relative py-20 sm:py-28 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(700px_280px_at_80%_0%,rgba(16,185,129,0.08),transparent_70%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white">How it works</h2>
          <p className="mt-3 text-slate-300">Launch in minutes. We add protections automatically.</p>
        </div>

        <ol className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <li key={i} className="rounded-2xl border border-white/5 bg-white/[0.03] p-6">
              <div className="size-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                {s.icon}
              </div>
              <div className="text-white font-semibold">{i + 1}. {s.title}</div>
              <div className="text-slate-300 text-sm mt-1">{s.desc}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
