"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold uppercase tracking-widest text-center mb-16 font-['Space_Grotesk'] text-[#e5e2e1]"
        >
          Deployment Nodes
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
           {/* Basic */}
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-[#0e0e0e] p-8 border border-[#3b4b37]/50 hover:border-[#84967e] transition-colors"
           >
             <h3 className="text-xl uppercase tracking-widest text-[#84967e] font-['Space_Grotesk'] mb-2">Standard</h3>
             <div className="text-4xl font-bold font-mono mb-8 text-[#e5e2e1]">$0</div>
             <ul className="space-y-4 mb-8 text-[#84967e] text-sm font-mono">
               <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Rate Limited API</li>
               <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Community Support</li>
             </ul>
             <button className="w-full py-3 border border-[#84967e] text-[#84967e] font-mono uppercase tracking-widest text-sm hover:bg-[#84967e] hover:text-black transition-colors">Select Plan</button>
           </motion.div>
           
           {/* Pro */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-[#131313] p-10 border-2 border-[#00FF41] shadow-[0_0_30px_rgba(0,255,65,0.15)] relative transform md:-translate-y-4 z-10"
           >
             <div className="absolute top-0 right-0 bg-[#00FF41] text-black text-xs font-bold font-mono uppercase tracking-widest px-3 py-1">Enterprise</div>
             <h3 className="text-xl uppercase tracking-widest text-[#00FF41] font-['Space_Grotesk'] mb-2">Pro Node</h3>
             <div className="text-4xl font-bold font-mono mb-8 text-[#e5e2e1]">$299<span className="text-lg text-[#84967e]">/mo</span></div>
             <ul className="space-y-4 mb-8 text-[#e5e2e1] text-sm font-mono">
               <li className="flex items-center gap-2 text-[#00FF41]"><Check className="w-4 h-4" /> Unlimited Compute</li>
               <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Dedicated SLA</li>
               <li className="flex items-center gap-2"><Check className="w-4 h-4" /> 24/7 Priority Support</li>
             </ul>
             <button className="w-full py-4 bg-[#00FF41] text-black font-mono uppercase font-bold tracking-widest text-sm hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] transition-all">Select Plan</button>
           </motion.div>
           
           {/* Custom */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-[#0e0e0e] p-8 border border-[#3b4b37]/50 hover:border-[#84967e] transition-colors"
           >
             <h3 className="text-xl uppercase tracking-widest text-[#84967e] font-['Space_Grotesk'] mb-2">Dedicated</h3>
             <div className="text-4xl font-bold font-mono mb-8 text-[#e5e2e1]">Custom</div>
             <ul className="space-y-4 mb-8 text-[#84967e] text-sm font-mono">
               <li className="flex items-center gap-2"><Check className="w-4 h-4" /> On-Premise Install</li>
               <li className="flex items-center gap-2"><Check className="w-4 h-4" /> White-glove setup</li>
             </ul>
             <button className="w-full py-3 border border-[#84967e] text-[#84967e] font-mono uppercase tracking-widest text-sm hover:bg-[#84967e] hover:text-black transition-colors">Contact Sales</button>
           </motion.div>
        </div>
      </div>
    </section>
  );
}
