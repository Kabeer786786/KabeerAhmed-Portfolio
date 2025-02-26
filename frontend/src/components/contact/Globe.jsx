/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

const Globe = () => {
  const kurnoolCoordinates = { lat: 15.8281, lon: 78.0373 };

  // Convert latitude and longitude to 3D coordinates on the sphere
  const getCoordinates = (lat, lon, radius) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    return [x, y, z];
  };

  const pointPosition = getCoordinates(
    kurnoolCoordinates.lat,
    kurnoolCoordinates.lon,
    1.1
  ); // Slightly above the sphere for the point

  return (
    <Canvas camera={{ position: [3, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={300} depth={60} count={20000} factor={7} fade />
      <Suspense fallback={null}>
        {/* Earth Sphere */}
        <mesh>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial
            map={new THREE.TextureLoader().load(
              "https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg"
            )}
            normalMap={new THREE.TextureLoader().load(
              "https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg"
            )}
          />
        </mesh>

        {/* Pinpoint Location */}
        <mesh position={pointPosition}>
          <sphereGeometry args={[0.02, 32, 32]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </Suspense>
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default Globe;
