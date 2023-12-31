import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile, scaleFactor }) => {
  const computer = useGLTF("./spaceship_-_cb2/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <spotLight
        position={[-20, -50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={[scaleFactor, scaleFactor, scaleFactor]}
        position={isMobile ? [0, -2.5, -1.5] : [0, -2.8, -1.5]}
        rotation={[-0.1, -0.2, -0.01]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scaleFactor, setScaleFactor] = useState(.02);

  useEffect(() => {
    const updateScaleFactor = () => {
      const newScaleFactor = window.innerWidth > 500 ? 0.08 : 0.0;
      setScaleFactor(newScaleFactor);
    };

    updateScaleFactor(); // Call initially

    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
      updateScaleFactor();
    };

    const handleResize = () => {
      updateScaleFactor();
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    window.addEventListener("resize", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 25], fov: 15 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} />
        <Computers isMobile={isMobile} scaleFactor={scaleFactor} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
