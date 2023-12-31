import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./earth/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <Spotlight position={[-90, -20, 10]} />
      <primitive object={earth.scene} scale={12} position-y={0} rotation-y={0} />
    </mesh>
  );
};

const Spotlight = (props) => {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Calculate the angle of the spotlight based on the current time
    const angle = (t * Math.PI * 2) / 86400;

    // Set the position of the spotlight based on the angle and the distance from the Earth
    const x = Math.cos(angle) * 100;
    const y = Math.sin(angle) * 100;
    ref.current.position.set(x, y, 10);

    // Point the spotlight at the Earth
    ref.current.lookAt(0, 0, 0);
  });

  return (
    <spotLight ref={ref} angle={0.12} penumbra={1} intensity={3} color="#FDECC7" castShadow shadow-mapSize={1024} {...props} />
  );
};


const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
