'use client';

import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useConfiguratorStore } from '@/store/configuratorStore';
import { Activity, Zap, Wind } from 'lucide-react';

// Scramble Text Hook
const useScramble = (value: string | number, delay = 0) => {
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplay(String(value).split('').map((char, i) => {
        if(i < iterations) return char;
        return Math.floor(Math.random() * 10);
      }).join(''));

      if(iterations >= String(value).length) {
        clearInterval(interval);
      }
      iterations += 1/3;
    }, 30);

    return () => clearInterval(interval);
  }, [value]);

  return display;
};

const CAR_DATA = {
  'AERO-V1': { '0-60': '1.89s', bhp: '1840', drag: '0.19', topSpeed: '284' },
  'AERO-V2': { '0-60': '1.72s', bhp: '2100', drag: '0.17', topSpeed: '302' },
  'MACH-Z': { '0-60': '1.65s', bhp: '2450', drag: '0.15', topSpeed: '315' }
};

export function PerformanceTelemetry() {
  const { carModel, setCarModel, setCameraView } = useConfiguratorStore();
  const data = CAR_DATA[carModel];

  const scrambled060 = useScramble(data['0-60']);
  const scrambledBhp = useScramble(data.bhp);
  const scrambledDrag = useScramble(data.drag);
  const scrambledTopSpeed = useScramble(data.topSpeed);

  return (
    <div className="glass-panel p-6 rounded-xl flex flex-col gap-8 h-full shadow-2xl shadow-neon-orange/5">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <Activity className="text-neon-orange w-5 h-5" />
          <h2 className="font-mono text-sm tracking-widest uppercase">Telemetry</h2>
        </div>
        <div className="flex gap-2">
           {Object.keys(CAR_DATA).map((model) => (
             <button
                key={model}
                onClick={() => {
                  setCarModel(model as any);
                  setCameraView('side');
                }}
                className={`text-[9px] font-mono px-2 py-1 rounded border ${
                  carModel === model ? 'border-neon-orange text-neon-orange bg-neon-orange/10' : 'border-white/10 text-white/50 hover:border-white/30'
                }`}
             >
               {model}
             </button>
           ))}
        </div>
      </div>

      <div className="flex flex-col gap-6">

        {/* Metric 1 */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between font-mono text-[10px] text-white/50 uppercase">
            <span>[0-60 MPH]</span>
            <span className="text-neon-orange">{scrambled060}</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-neon-orange"
              initial={{ width: 0 }}
              animate={{ width: `${(2.5 - parseFloat(data['0-60'])) / 1.5 * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Metric 2 */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between font-mono text-[10px] text-white/50 uppercase">
            <span className="flex items-center gap-1"><Zap className="w-3 h-3"/> [Brake Horsepower]</span>
            <span className="text-neon-orange">{scrambledBhp} HP</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-neon-orange"
              initial={{ width: 0 }}
              animate={{ width: `${parseFloat(data.bhp) / 3000 * 100}%` }}
              transition={{ duration: 0.5, delay: 0.1 }}
            />
          </div>
        </div>

        {/* Metric 3 */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between font-mono text-[10px] text-white/50 uppercase">
            <span className="flex items-center gap-1"><Wind className="w-3 h-3"/> [Aero Drag Coef.]</span>
            <span className="text-neon-orange">{scrambledDrag} Cd</span>
          </div>
          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-neon-orange"
              initial={{ width: 0 }}
              animate={{ width: `${(0.3 - parseFloat(data.drag)) / 0.2 * 100}%` }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
        </div>

         {/* Metric 4 (Radial/Gauge style attempt) */}
         <div className="mt-4 flex justify-center items-center relative">
            <div className="w-32 h-32 rounded-full border-2 border-white/5 flex items-center justify-center relative">
               <motion.svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <motion.circle
                    cx="50" cy="50" r="48"
                    fill="none"
                    stroke="var(--neon-red)"
                    strokeWidth="2"
                    strokeDasharray="301.59"
                    initial={{ strokeDashoffset: 301.59 }}
                    animate={{ strokeDashoffset: 301.59 - (301.59 * (parseFloat(data.topSpeed) / 350)) }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
               </motion.svg>
               <div className="flex flex-col items-center">
                 <span className="font-mono text-2xl text-neon-red shadow-neon-red/50 drop-shadow-md">{scrambledTopSpeed}</span>
                 <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest mt-1">MPH Top Speed</span>
               </div>
            </div>
         </div>

      </div>
    </div>
  );
}
