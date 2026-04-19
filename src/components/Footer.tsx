import React from 'react';
import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[#3b4b37]/30 bg-[#0e0e0e] text-[#84967e]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-lg font-bold tracking-tighter text-[#3b4b37] font-['Space_Grotesk']">
          <Terminal className="w-5 h-5" /> LUXURY CAR CONFIG
        </div>
        <div className="text-xs font-mono uppercase tracking-widest opacity-50">
          SYSTEM_VERSION: 2.4.1 | ALL RIGHTS RESERVED © 2024
        </div>
        <div className="flex gap-6 text-xs font-mono uppercase tracking-widest">
          <a href="#" className="hover:text-[#00FF41] transition-colors">Privacy</a>
          <a href="#" className="hover:text-[#00FF41] transition-colors">Terms</a>
          <a href="#" className="hover:text-[#00FF41] transition-colors">Status</a>
        </div>
      </div>
    </footer>
  );
}
