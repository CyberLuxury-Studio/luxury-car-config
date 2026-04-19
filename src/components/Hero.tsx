"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-40 pb-20 px-6 text-center relative overflow-hidden min-h-[90vh] flex flex-col justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FF41] rounded-full mix-blend-screen filter blur-[250px] opacity-10 pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-2 px-4 py-1 border border-[#00FF41]/30 text-[#00FF41] font-mono text-xs uppercase tracking-widest mx-auto mb-8 bg-[#00FF41]/5 shadow-[0_0_15px_rgba(0,255,65,0.1)]"
      >
        <ShieldAlert className="w-4 h-4" /> SYSTEM_STATUS: SECURE
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 font-['Space_Grotesk'] uppercase relative z-10 leading-none"
      >
        THE luxury car config <br/><span className="text-[#00FF41] underline decoration-[#FF003C] underline-offset-8">PROTOCOL.</span>
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-xl text-[#84967e] mb-12 max-w-2xl mx-auto relative z-10 font-light"
      >
        Build a vehicle customizer. Engineered for extreme data density and uncompromising security.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex gap-6 justify-center relative z-10"
      >
        <button className="flex items-center gap-3 px-10 py-5 bg-[#00FF41] text-[#003907] font-['Space_Grotesk'] font-bold uppercase tracking-widest text-lg hover:shadow-[0_0_30px_rgba(0,255,65,0.5)] hover:scale-105 transition-all">
          <Zap className="w-5 h-5" /> INITIALIZE SEQUENCE
        </button>
      </motion.div>
    </section>
  );
}
