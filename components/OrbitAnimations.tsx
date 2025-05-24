import React, { useState, useEffect } from "react";
import grainImage from "@public/assets/images/grain.jpg";
import StarIcon from "@public/assets/icons/star.svg";
import SparkleIcon from "@public/assets/icons/sparkle.svg";
import Image from "next/image";
import { HeroOrbit } from "@components/HeroOrbit";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

const OrbitAnimations = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring physics for smoother movement
  const springConfig = { damping: 30, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);
  
  // Transform values for different orbit layers
  const slowTransformX = useTransform(springX, (value) => value / 20);
  const slowTransformY = useTransform(springY, (value) => value / 20);
  const mediumTransformX = useTransform(springX, (value) => value / 10);
  const mediumTransformY = useTransform(springY, (value) => value / 10);
  const fastTransformX = useTransform(springX, (value) => value / 5);
  const fastTransformY = useTransform(springY, (value) => value / 5);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    mouseX.set(x);
    mouseY.set(y);
    setMousePosition({ x, y });
  };
  
  // Color palette for neo-brutalist design
  const neoColors = [
    "text-emerald-300", 
    "text-pink-300", 
    "text-yellow-300", 
    "text-blue-300", 
    "text-purple-300"
  ];
  
  return (
    <>
      <motion.div 
        className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Noise texture */}
        <div
          className="absolute inset-0 -z-30 opacity-5 animate-grain"
          style={{ 
            backgroundImage: `url(${grainImage.src})`,
            backgroundSize: '200px 200px'
          }}
        />
        
        {/* Neo-brutalist decorative elements */}
        <motion.div 
          className="absolute top-40 left-[5%] w-16 h-16 border-4 border-yellow-300 rounded-md rotate-12 opacity-60"
          style={{ x: fastTransformX, y: fastTransformY }}
          whileHover={{ scale: 1.2, rotate: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        
        <motion.div 
          className="absolute top-[20%] right-[15%] w-24 h-12 bg-pink-300/20 border-2 border-pink-500 -rotate-6 opacity-50"
          style={{ x: mediumTransformX, y: mediumTransformY }}
          whileHover={{ scale: 1.1, rotate: 0, opacity: 0.8 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
        
        <motion.div 
          className="absolute bottom-[30%] left-[20%] w-20 h-20 bg-blue-300/10 border-4 border-blue-400 rotate-12 opacity-40"
          style={{ x: slowTransformX, y: slowTransformY }}
          whileHover={{ scale: 1.2, rotate: 0, opacity: 0.7 }}
          transition={{ type: "spring", stiffness: 150 }}
        />
        
        {/* Orbit rings with neo-brutalist design */}
        <motion.div 
          className="size-[620px] hero-ring"
          animate={{ opacity: [0.4, 0.7, 0.4], borderWidth: ["1px", "3px", "1px"] }} 
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ x: slowTransformX, y: slowTransformY }}
        />
        
        <motion.div 
          className="size-[820px] hero-ring"
          animate={{ opacity: [0.3, 0.5, 0.3], borderWidth: ["2px", "4px", "2px"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ x: mediumTransformX, y: mediumTransformY }}
        />
        
        <motion.div 
          className="size-[1020px] hero-ring"
          animate={{ opacity: [0.2, 0.4, 0.2], borderWidth: ["1px", "3px", "1px"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ x: fastTransformX, y: fastTransformY }}
        />
        
        <motion.div 
          className="size-[1220px] hero-ring"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        
        {/* Interactive orbiting elements */}
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration={isHovering ? 15 : 25}
          shouldSpin
          spinDuration={4}
        >
          <motion.div whileHover={{ scale: 1.5 }} className="cursor-pointer">
            <SparkleIcon className="size-8 text-emerald-300/30 animate-twinkle" />
          </motion.div>
        </HeroOrbit>
        
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration={isHovering ? 18 : 28}
          shouldSpin
          spinDuration={3}
        >
          <motion.div whileHover={{ scale: 1.4 }} className="cursor-pointer">
            <SparkleIcon className="size-5 text-pink-300/40 animate-twinkle-delayed" />
          </motion.div>
        </HeroOrbit>
        
        <HeroOrbit 
          size={520} 
          rotation={-41} 
          shouldOrbit 
          orbitDuration={isHovering ? 22 : 32}
        >
          <motion.div 
            whileHover={{ scale: 2 }} 
            className="size-3 rounded-full bg-emerald-300/30 animate-pulse cursor-pointer"
          />
        </HeroOrbit>
        
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration={isHovering ? 26 : 36}
          shouldSpin
          spinDuration={5}
        >
          <motion.div whileHover={{ scale: 1.5, rotate: 180 }} className="cursor-pointer">
            <SparkleIcon className="size-10 text-yellow-300/40 animate-float" />
          </motion.div>
        </HeroOrbit>
        
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration={isHovering ? 28 : 38}
          shouldSpin
          spinDuration={6}
        >
          <motion.div 
            whileHover={{ scale: 1.3, filter: "brightness(1.5)" }}
            className="cursor-pointer neo-brutalist-element"
          >
            <StarIcon className="size-12 text-emerald-300 animate-glow" />
          </motion.div>
        </HeroOrbit>
        
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration={isHovering ? 32 : 42}
          shouldSpin
          spinDuration={4}
        >
          <motion.div 
            whileHover={{ scale: 1.4, rotate: -45 }}
            className="cursor-pointer"
          >
            <StarIcon className="size-8 text-blue-300 animate-glow-delayed" />
          </motion.div>
        </HeroOrbit>
        
        <HeroOrbit 
          size={650} 
          rotation={-5} 
          shouldOrbit 
          orbitDuration={isHovering ? 34 : 44}
        >
          <motion.div 
            whileHover={{ scale: 2.5 }}
            className="size-3 rounded-full bg-purple-300/30 animate-pulse-fast cursor-pointer"
          />
        </HeroOrbit>
        
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration={isHovering ? 36 : 46}
          shouldSpin
          spinDuration={3}
        >
          <motion.div 
            whileHover={{ scale: 1.3, rotate: 90 }}
            className="cursor-pointer"
          >
            <SparkleIcon className="size-14 text-emerald-300/30 animate-twinkle" />
          </motion.div>
        </HeroOrbit>
        
        <HeroOrbit 
          size={720} 
          rotation={85} 
          shouldOrbit 
          orbitDuration={isHovering ? 38 : 48}
        >
          <motion.div 
            whileHover={{ scale: 2 }}
            className="size-3 rounded-full bg-pink-300/40 animate-pulse-delayed cursor-pointer"
          />
        </HeroOrbit>
        
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration={isHovering ? 40 : 50}
          shouldSpin
          spinDuration={8}
        >
          <motion.div 
            whileHover={{ 
              scale: 1.2, 
              boxShadow: "0 0 20px rgba(52, 211, 153, 0.7)",
              filter: "brightness(1.3)"
            }}
            className="cursor-pointer relative"
          >
            <StarIcon className="size-28 text-emerald-300 animate-glow-slow" />
            <motion.div
              className="absolute inset-0 bg-emerald-500/20 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </HeroOrbit>
        
        {/* Neo-brutalist decorative block that follows cursor */}
        <motion.div
          className="fixed hidden md:block w-12 h-12 border-4 border-teal-300 pointer-events-none mix-blend-screen"
          style={{ 
            x: mousePosition.x, 
            y: mousePosition.y,
            rotate: 12,
            opacity: isHovering ? 0.6 : 0
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            borderColor: ["rgb(94 234 212)", "rgb(249 168 212)", "rgb(94 234 212)"]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </motion.div>
    </>
  );
};

export default OrbitAnimations;
