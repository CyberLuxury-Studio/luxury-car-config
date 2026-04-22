import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useConfiguratorStore } from '@/store/configuratorStore';
import * as THREE from 'three';

export function CarPrimitive() {
  const meshRef = useRef<THREE.Group>(null);
  const { paintColor, paintMaterial } = useConfiguratorStore();

  const colors = {
    'stealth-black': '#050505',
    'neon-green': '#00FF00',
    'hyper-orange': '#FF4500',
    'void-white': '#FFFFFF',
  };

  const materialProps = {
    matte: { roughness: 0.8, metalness: 0.2, clearcoat: 0 },
    gloss: { roughness: 0.1, metalness: 0.8, clearcoat: 1 },
    pearlescent: { roughness: 0.2, metalness: 0.6, clearcoat: 0.5, iridescence: 1, iridescenceIOR: 1.5 },
  };

  const color = colors[paintColor];
  const matProps = materialProps[paintMaterial];

  return (
    <group ref={meshRef}>
      {/* Main Body */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 0.5, 4.5]} />
        <meshPhysicalMaterial
          color={color}
          {...matProps}

        />
      </mesh>
      {/* Cabin */}
      <mesh position={[0, 0.9, -0.2]} castShadow receiveShadow>
        <boxGeometry args={[1.6, 0.4, 2]} />
        <meshPhysicalMaterial color="#111" roughness={0} metalness={1} transmission={0.9} thickness={0.5} />
      </mesh>
      {/* Wheels */}
      {[-1, 1].map((x) =>
        [-1.5, 1.5].map((z) => (
          <mesh key={`${x}-${z}`} position={[x * 1.1, 0.3, z]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.3, 0.3, 0.2, 32]} />
            <meshStandardMaterial color="#222" roughness={0.8} metalness={0.2} />
          </mesh>
        ))
      )}
    </group>
  );
}
