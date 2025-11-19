import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[82vh] w-full flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/k3vzWf8TfEDJKl71/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20">
              <span className="size-1.5 rounded-full bg-red-500"></span>
              Prevent dev rugs on pump.fun
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Launch with confidence. Lock the dev wallet for 1 hour.
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.12 }} className="mt-6 text-lg md:text-xl text-slate-200 max-w-2xl">
            lockpump.fun lets builders deploy on pump.fun using a time-locked wallet so the deployer can't dump on the community. Safer launches. Cleaner vibes.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.18 }} className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a href="#launch" className="inline-flex justify-center items-center rounded-lg bg-red-500 text-white px-5 py-3 font-semibold shadow-lg shadow-red-500/30 hover:bg-red-600 transition-colors">
              Launch with lock
            </a>
            <a href="#how" className="inline-flex justify-center items-center rounded-lg bg-white/10 text-white px-5 py-3 font-semibold ring-1 ring-inset ring-white/15 hover:bg-white/15 transition-colors">
              How it works
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.24 }} className="mt-10 grid grid-cols-2 sm:flex gap-6 text-sm text-slate-300">
            <div>
              <div className="text-white font-semibold">1h dev lock</div>
              <div className="text-slate-400">No instant dumps</div>
            </div>
            <div>
              <div className="text-white font-semibold">Pump.fun native</div>
              <div className="text-slate-400">Seamless deploy flow</div>
            </div>
            <div>
              <div className="text-white font-semibold">Transparent</div>
              <div className="text-slate-400">Public lock timer</div>
            </div>
            <div>
              <div className="text-white font-semibold">Community first</div>
              <div className="text-slate-400">Protect early buyers</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
