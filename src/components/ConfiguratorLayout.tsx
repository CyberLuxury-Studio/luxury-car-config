'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scene } from './3d/Scene';
import { MaterialSynthesis } from './panels/MaterialSynthesis';
import { PerformanceTelemetry } from './panels/PerformanceTelemetry';

export default function ConfiguratorLayout() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-full pt-20 pb-8 px-8 flex gap-8 z-10 relative pointer-events-none overflow-hidden">
      <Scene />

      {/* HUD Boot Sequence Animations */}
      <AnimatePresence>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
          className="w-[340px] flex flex-col gap-6 pointer-events-auto z-10"
        >
          <MaterialSynthesis />
        </motion.div>

        <div className="flex-1 pointer-events-none z-10" />

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
          className="w-[340px] flex flex-col gap-6 pointer-events-auto z-10"
        >
          <PerformanceTelemetry />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
