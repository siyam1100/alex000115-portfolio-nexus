import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

/**
 * @title RepoGalaxy
 * @dev 3D visualization of the 100-repo library using Three.js.
 */
function StarField() {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(300), { radius: 1.5 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#0052ff" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
}

export default function PortfolioGalaxy() {
  return (
    <div className="h-screen w-full bg-black">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
      </Canvas>
      <div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none">
        <h1 className="text-6xl font-black text-white tracking-tighter uppercase italic">Alex000115</h1>
        <p className="text-blue-500 font-mono mt-4">100 REPOS // 1 FORGE // INFINITE UTILITY</p>
      </div>
    </div>
  );
}
