import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#e5e2e1] p-10 font-mono">
      <header className="mb-10 border-b border-[#00FF41]/30 pb-4">
         <h1 className="text-3xl font-bold text-[#00FF41] uppercase tracking-widest">luxury-car-config</h1>
         <p className="text-[#84967e] text-sm mt-2">SYSTEM: ONLINE | SECURE CONNECTION</p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="h-96 border border-[#3b4b37]/30 bg-[#0e0e0e] p-6 relative overflow-hidden flex flex-col items-center justify-center">
           {/* Abstract Data Visualization Area */}
           <div className="absolute inset-0 bg-[linear-gradient(#3b4b37_1px,transparent_1px),linear-gradient(90deg,#3b4b37_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>
           <div className="w-32 h-32 rounded-full border-4 border-t-[#00FF41] border-r-[#00FF41] border-b-[#FF003C] border-l-[#FF003C] animate-spin shadow-[0_0_30px_rgba(0,255,65,0.2)]"></div>
           <p className="mt-8 text-[#00FF41] animate-pulse">PROCESSING DATA STREAM...</p>
        </div>
        
        <div className="space-y-6">
           <div className="border border-[#3b4b37]/30 bg-[#0e0e0e] p-6">
             <h3 className="text-[#84967e] text-xs uppercase mb-4 tracking-widest">System Telemetry</h3>
             <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span>CPU USAGE</span><span className="text-[#FF003C]">94%</span></li>
                <li className="flex justify-between"><span>MEMORY</span><span className="text-[#00FF41]">42%</span></li>
                <li className="flex justify-between"><span>LATENCY</span><span className="text-[#00FF41]">12ms</span></li>
             </ul>
           </div>
           
           <div className="border border-[#3b4b37]/30 bg-[#131313] p-6">
             <h3 className="text-[#84967e] text-xs uppercase mb-4 tracking-widest">Execute Command</h3>
             <div className="flex gap-2">
               <input type="text" className="flex-1 bg-[#050505] border border-[#3b4b37]/50 p-2 text-xs outline-none focus:border-[#00FF41]" placeholder="> _" />
               <button className="bg-[#00FF41] text-[#003907] px-4 py-2 text-xs font-bold uppercase tracking-widest hover:shadow-[0_0_15px_rgba(0,255,65,0.4)]">RUN</button>
             </div>
           </div>
        </div>
      </div>
    </main>
  );
}
