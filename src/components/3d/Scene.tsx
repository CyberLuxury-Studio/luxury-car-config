'use client';

import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, CameraControls } from '@react-three/drei';
import { CarPrimitive } from './CarPrimitive';
import { useConfiguratorStore } from '@/store/configuratorStore';

function CameraRig() {
  const controlsRef = useRef<any>(null);
  const { cameraView } = useConfiguratorStore();

  useEffect(() => {
    if (!controlsRef.current) return;
    const controls = controlsRef.current;

    // Smooth swooping animations based on cameraView state
    switch (cameraView) {
      case 'front':
        controls.setLookAt(0, 1.5, 6, 0, 0.5, 0, true);
        break;
      case 'side':
        controls.setLookAt(6, 1.5, 0, 0, 0.5, 0, true);
        break;
      case 'rear':
        controls.setLookAt(0, 2, -6, 0, 0.5, 0, true);
        break;
      case 'top':
        controls.setLookAt(0, 8, 0, 0, 0, 0, true);
        break;
      case 'detail':
        // Swoop in close to the hood/front quarter
        controls.setLookAt(2, 1.2, 3, 0.5, 0.6, 1, true);
        break;
    }
  }, [cameraView]);

  return <CameraControls ref={controlsRef} makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2 + 0.1} minDistance={2} maxDistance={10} />;
}

export function Scene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <Canvas shadows camera={{ position: [5, 2, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <color attach="background" args={['#020202']} />

          {/* Spotlights to simulate engineering bay radial floor lighting */}
          <spotLight position={[0, 10, 0]} intensity={0.5} penumbra={1} castShadow angle={0.5} />
          <pointLight position={[-5, 2, -5]} intensity={1} color="#00FF00" distance={10} />
          <pointLight position={[5, 2, 5]} intensity={0.5} color="#ffffff" distance={10} />

          <CarPrimitive />

          {/* Subtle radial gradient floor spotlight effect */}
          <ContactShadows resolution={1024} scale={20} blur={2} opacity={0.5} far={10} color="#00FF00" />

          {/* Grid helper for the blueprint/engineering bay look */}
          <gridHelper args={[20, 40, '#ffffff', '#ffffff']} position={[0, -0.01, 0]} rotation={[0, 0, 0]}>
            <lineBasicMaterial attach="material" color="#ffffff" transparent opacity={0.05} />
          </gridHelper>

          <Environment preset="city" environmentIntensity={0.2} />
          <CameraRig />
        </Suspense>
      </Canvas>
    </div>
  );
}
