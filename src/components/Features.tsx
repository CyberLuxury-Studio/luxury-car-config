"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Activity, Lock } from 'lucide-react';

const features = [
  { t: "Real-Time Telemetry", c: "#00FF41", icon: <Activity className="w-8 h-8" /> },
  { t: "Zero Latency Execution", c: "#FF003C", icon: <Cpu className="w-8 h-8" /> },
  { t: "Encrypted Data Packets", c: "#00FF41", icon: <Lock className="w-8 h-8" /> }
];

export default function Features() {
  return (
    <section id="features" className="py-32 bg-[#0e0e0e] border-y border-[#3b4b37]/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(#3b4b37_1px,transparent_1px),linear-gradient(90deg,#3b4b37_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.03]"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold uppercase tracking-widest mb-16 font-['Space_Grotesk'] text-center text-[#e5e2e1]"
        >
          System Specs
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10, borderColor: f.c }}
              className="p-8 bg-[#131313] border-l-2 border-[#3b4b37]/30 transition-all duration-300"
              style={{ borderLeftColor: f.c }}
            >
              <div className="mb-6 opacity-50" style={{color: f.c}}>
                {f.icon}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-widest text-[#e5e2e1] mb-4 font-['Space_Grotesk']">{f.t}</h3>
              <p className="text-[#84967e] text-sm leading-relaxed">
                Industrial-grade infrastructure built for high-stakes environments. No bloat, just pure function.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
