import React, { useRef, useContext } from "react";
import { useFrame } from "@react-three/fiber";
import { GameContext } from "../context/GameContext";

export default function Planet3D({ planet, index }) {
  const mesh = useRef();
  const orbit = useRef();
  const { setSelectedPlanet } = useContext(GameContext);

  const distance = 4 + index * 2;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    orbit.current.position.x = Math.cos(t * 0.3 + index) * distance;
    orbit.current.position.z = Math.sin(t * 0.3 + index) * distance;

    mesh.current.rotation.y += 0.01;
  });

  return (
    <group ref={orbit}>
      <mesh
        ref={mesh}
        onClick={() => setSelectedPlanet(planet)}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial emissive={"cyan"} emissiveIntensity={0.6} />
      </mesh>
    </group>
  );
}