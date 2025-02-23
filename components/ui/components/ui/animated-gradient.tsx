"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface AnimatedGradientProps {
  className?: string;
  color?: string;
}

export const AnimatedGradient = ({
  className = "",
  color = "rgba(147, 197, 253, 0.15)", // Default blue color
}: AnimatedGradientProps) => {
  const { scrollYProgress } = useScroll();

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <motion.div
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{
        background: `radial-gradient(circle at center, ${color} 0%, transparent 80%)`,
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    />
  );
};