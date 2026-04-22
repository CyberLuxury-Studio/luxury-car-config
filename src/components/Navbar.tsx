'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50 px-8 py-4 flex justify-between items-center glass-panel border-t-0 border-x-0"
    >
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 bg-white" />
        <span className="font-mono text-sm tracking-widest uppercase">Apex<span className="text-neon-green">Sys</span></span>
      </div>
      <div className="flex gap-8 font-mono text-xs text-white/50">
        <button className="hover:text-white transition-colors uppercase tracking-wider">Configure</button>
        <button className="hover:text-white transition-colors uppercase tracking-wider">Specs</button>
        <button className="hover:text-white transition-colors uppercase tracking-wider">Order</button>
      </div>
    </motion.nav>
  );
}
