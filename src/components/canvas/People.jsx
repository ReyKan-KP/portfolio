import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const People = ({isMobile}) => {
  const people = useGLTF("./people/scene.gltf")
  
  return (
    <mesh >
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <spotLight position={[-20, -50, 10]} angle={0.12} penumbra={1} intensity={2} castShadow shadow-mapSize={1024} />
      <pointLight intensity={1} />
      <primitive object={people.scene} scale={isMobile? 1.1 : 1.2} position={isMobile? [0, 0, -1.5] :[0, 0, -1.5]} rotation={[-0.1, 6.5, -0.01]} />
    </mesh>
  )
}

const PeopleCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange =(event) => {setIsMobile(event.matches);}
    mediaQuery.addEventListener('change',handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };

  }, [])
  

  return (
    <Canvas frameloop="demand" shadows camera={{ position:[20, 3, 100], fov: 30 }} gl={{ preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
        <People isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default PeopleCanvas;

