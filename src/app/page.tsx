'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';

// Dynamically import ConfiguratorLayout to prevent SSR issues with Three.js
const ConfiguratorLayout = dynamic(() => import('@/components/ConfiguratorLayout'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-hidden bg-black text-white font-sans selection:bg-neon-green selection:text-black">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0" />
      <Navbar />
      <ConfiguratorLayout />
    </main>
  );
}
