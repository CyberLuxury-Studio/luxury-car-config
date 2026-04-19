import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#e5e2e1] font-['Inter'] selection:bg-[#00FF41] selection:text-black">
      <nav className="fixed w-full z-50 bg-[#050505]/90 backdrop-blur-xl border-b border-[#3b4b37]/30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter text-[#00FF41] font-['Space_Grotesk'] uppercase">luxury_SYSTEM</div>
          <button className="px-6 py-2 border border-[#00FF41]/50 text-[#00FF41] text-sm uppercase font-bold tracking-widest font-['Space_Grotesk'] hover:bg-[#00FF41] hover:text-black transition-all">
            Connect Device
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 text-center relative overflow-hidden min-h-[90vh] flex flex-col justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00FF41] rounded-full mix-blend-screen filter blur-[250px] opacity-10 pointer-events-none"></div>
        <div className="inline-block px-4 py-1 border border-[#00FF41]/30 text-[#00FF41] font-mono text-xs uppercase tracking-widest mx-auto mb-8 bg-[#00FF41]/5 shadow-[0_0_15px_rgba(0,255,65,0.1)]">
          V2.4 DEPLOYED
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 font-['Space_Grotesk'] uppercase relative z-10 leading-none">
          THE luxury car config <br/><span className="text-[#00FF41] underline decoration-[#FF003C] underline-offset-8">PROTOCOL.</span>
        </h1>
        <p className="text-xl text-[#84967e] mb-12 max-w-2xl mx-auto relative z-10 font-light">
          A high-performance, ultra-dense data environment. Real-time visualization and execution for the modern enterprise.
        </p>
        <div className="flex gap-6 justify-center">
          <button className="px-10 py-5 bg-[#00FF41] text-[#003907] font-['Space_Grotesk'] font-bold uppercase tracking-widest text-lg hover:shadow-[0_0_30px_rgba(0,255,65,0.5)] transition-all">
            START NOW
          </button>
        </div>
      </section>

      {/* Dashboard Demo Area */}
      <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="bg-[#0e0e0e] border border-[#3b4b37]/50 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
          <div className="bg-[#131313] border-b border-[#3b4b37]/30 px-6 py-3 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF003C]/50"></div>
              <div className="w-3 h-3 rounded-full bg-[#e5e2e1]/30"></div>
              <div className="w-3 h-3 rounded-full bg-[#00FF41]/50"></div>
            </div>
            <div className="font-mono text-xs text-[#84967e]">TERMINAL_VIEW</div>
          </div>
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-[linear-gradient(rgba(59,75,55,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,75,55,0.05)_1px,transparent_1px)] bg-[size:40px_40px]">
            <div className="border border-[#00FF41]/30 bg-[#050505]/80 backdrop-blur-sm p-6 h-64 flex items-center justify-center relative group">
               <div className="absolute inset-0 bg-[#00FF41]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="text-center font-mono text-[#00FF41]">
                 <div className="text-5xl font-bold mb-2">99.8%</div>
                 <div className="text-xs tracking-widest uppercase">System Efficiency</div>
               </div>
            </div>
            <div className="border border-[#FF003C]/30 bg-[#050505]/80 backdrop-blur-sm p-6 h-64 flex flex-col justify-end relative overflow-hidden">
               <div className="absolute top-4 left-4 text-[#FF003C] font-mono text-xs">LIVE_FEED</div>
               {/* Simulated Data Bars */}
               <div className="flex items-end gap-2 h-32 w-full">
                 {[40, 70, 30, 90, 50, 80, 20].map((h, i) => (
                   <div key={i} className="flex-1 bg-[#FF003C]/50 hover:bg-[#FF003C] transition-colors" style={{height: `${h}%`}}></div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-[#0e0e0e] border-y border-[#3b4b37]/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold uppercase tracking-widest mb-16 font-['Space_Grotesk'] text-center">System Specs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {t: "Real-Time Telemetry", c: "#00FF41"},
              {t: "Zero Latency Execution", c: "#FF003C"},
              {t: "Encrypted Data Packets", c: "#00FF41"}
            ].map((f, i) => (
              <div key={i} className="p-8 bg-[#131313] border-l-2" style={{borderColor: f.c}}>
                <div className="text-3xl font-mono mb-4 opacity-50" style={{color: f.c}}>0{i+1}</div>
                <h3 className="text-xl font-bold uppercase tracking-widest text-[#e5e2e1] mb-4 font-['Space_Grotesk']">{f.t}</h3>
                <p className="text-[#84967e] text-sm leading-relaxed">Industrial-grade infrastructure built for high-stakes environments. No compromises.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 px-6 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold uppercase tracking-widest text-center mb-16 font-['Space_Grotesk']">Deployment Node</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-[#0e0e0e] p-8 border border-[#3b4b37]">
               <h3 className="text-xl uppercase tracking-widest text-[#84967e] font-['Space_Grotesk'] mb-2">Standard</h3>
               <div className="text-4xl font-bold font-mono mb-8">./process_batch5_true_stitch.sh</div>
               <button className="w-full py-3 border border-[#84967e] text-[#84967e] font-mono uppercase tracking-widest text-sm hover:bg-[#84967e] hover:text-black transition-colors">Select Plan</button>
             </div>
             <div className="bg-[#131313] p-10 border-2 border-[#00FF41] shadow-[0_0_30px_rgba(0,255,65,0.15)] relative transform md:-translate-y-4">
               <div className="absolute top-0 right-0 bg-[#00FF41] text-black text-xs font-bold font-mono uppercase tracking-widest px-3 py-1">Enterprise</div>
               <h3 className="text-xl uppercase tracking-widest text-[#00FF41] font-['Space_Grotesk'] mb-2">Pro Node</h3>
               <div className="text-4xl font-bold font-mono mb-8">99<span className="text-lg text-[#84967e]">/mo</span></div>
               <button className="w-full py-4 bg-[#00FF41] text-black font-mono uppercase font-bold tracking-widest text-sm hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] transition-all">Select Plan</button>
             </div>
             <div className="bg-[#0e0e0e] p-8 border border-[#3b4b37]">
               <h3 className="text-xl uppercase tracking-widest text-[#84967e] font-['Space_Grotesk'] mb-2">Dedicated</h3>
               <div className="text-4xl font-bold font-mono mb-8">Custom</div>
               <button className="w-full py-3 border border-[#84967e] text-[#84967e] font-mono uppercase tracking-widest text-sm hover:bg-[#84967e] hover:text-black transition-colors">Contact Sales</button>
             </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center bg-[#0e0e0e] border-t border-[#3b4b37]/30">
         <p className="text-xs text-[#84967e] font-mono uppercase tracking-widest">SYSTEM © 2024 | ALL RIGHTS RESERVED</p>
      </footer>
    </main>
  );
}
