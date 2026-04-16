import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Planet3D from "./Planet3D";

function CameraRig() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.0005; // slow cinematic drift
  });

  return <group ref={ref} />;
}

export default function Universe({ planets }) {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Canvas camera={{ position: [0, 5, 15], fov: 60 }}>
        <Suspense fallback={null}>
          
          {/* 🌌 Space lighting */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={2} />

          {/* 🌠 Background stars */}
          <Stars 
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />

          <CameraRig />

          {/* 🪐 Planets */}
          {planets.map((p, i) => (
            <Planet3D key={i} planet={p} index={i} />
          ))}

          <OrbitControls enableZoom={true} />
        </Suspense>
      </Canvas>
    </div>
  );
}