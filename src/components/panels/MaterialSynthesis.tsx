'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useConfiguratorStore, PaintColor, MaterialDetail } from '@/store/configuratorStore';
import { Hexagon, Layers, Palette } from 'lucide-react';

const COLORS: { id: PaintColor; hex: string; name: string; specs: string }[] = [
  { id: 'stealth-black', hex: '#050505', name: 'Stealth Black', specs: 'Vanta-grade light absorption. Radar cross-section: < 0.01m².' },
  { id: 'neon-green', hex: '#00FF00', name: 'Toxic Green', specs: 'Bioluminescent nanocoating. Active photoluminescent response.' },
  { id: 'hyper-orange', hex: '#FF4500', name: 'Hyper Orange', specs: 'Thermoreflective ceramic composite. Heat dissipation rating: A++.' },
  { id: 'void-white', hex: '#FFFFFF', name: 'Void White', specs: 'Hyper-reflective graphene matrix. UV shielding: 99.99%.' },
];

const MATERIALS: { id: MaterialDetail; name: string; specs: string }[] = [
  { id: 'matte', name: 'Matte Finish', specs: 'Micro-textured anti-glare surface. Diffuse reflection coeff: 0.02.' },
  { id: 'gloss', name: 'Gloss Finish', specs: 'Self-healing poly-ceramic clearcoat. Specular reflection coeff: 0.95.' },
  { id: 'pearlescent', name: 'Pearlescent', specs: 'Multi-layer interference pigment. Structural color shifting active.' },
];

export function MaterialSynthesis() {
  const { paintColor, setPaintColor, paintMaterial, setPaintMaterial } = useConfiguratorStore();

  return (
    <div className="glass-panel p-6 rounded-xl flex flex-col gap-8 h-full shadow-2xl shadow-neon-green/5">
      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
        <Layers className="text-neon-green w-5 h-5" />
        <h2 className="font-mono text-sm tracking-widest uppercase">Material Synthesis</h2>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-mono text-xs text-white/50 flex items-center gap-2">
          <Palette className="w-3 h-3" />
          Pigment Matrix
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {COLORS.map((c) => (
            <div key={c.id} className="relative group">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9, borderColor: '#00FF00' }}
                onClick={() => setPaintColor(c.id)}
                className={`w-full p-3 rounded-lg border flex items-center gap-3 transition-all ${
                  paintColor === c.id ? 'border-neon-green bg-neon-green/10' : 'border-white/10 hover:border-white/30'
                }`}
              >
                <div className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: c.hex }} />
                <span className="font-mono text-[10px] uppercase truncate">{c.name}</span>
              </motion.button>

              {/* Monospace Tooltip */}
              <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 w-48 p-3 glass-panel rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                <p className="font-mono text-[9px] text-neon-green mb-1">{c.name}</p>
                <p className="font-mono text-[9px] text-white/70 leading-relaxed">{c.specs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="font-mono text-xs text-white/50 flex items-center gap-2">
          <Hexagon className="w-3 h-3" />
          Surface Topology
        </h3>
        <div className="flex flex-col gap-3">
          {MATERIALS.map((m) => (
            <div key={m.id} className="relative group">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95, borderColor: '#00FF00' }}
                onClick={() => setPaintMaterial(m.id)}
                className={`w-full p-3 rounded-lg border text-left transition-all ${
                  paintMaterial === m.id ? 'border-neon-green bg-neon-green/10 text-neon-green' : 'border-white/10 hover:border-white/30 text-white/70'
                }`}
              >
                <span className="font-mono text-[11px] uppercase tracking-wider">{m.name}</span>
              </motion.button>

               {/* Monospace Tooltip */}
               <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 w-48 p-3 glass-panel rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                <p className="font-mono text-[9px] text-neon-green mb-1">{m.name}</p>
                <p className="font-mono text-[9px] text-white/70 leading-relaxed">{m.specs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
