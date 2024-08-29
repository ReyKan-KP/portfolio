"use client"
import React from "react";
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i:any) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.svg
        className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
        viewBox="0 0 600 600"
        initial="hidden"
        animate="visible"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#6EE7B7" />
            <stop offset="100%" stopColor="#7DD3FC" />
          </linearGradient>
        </defs>
        <motion.circle
          cx="300"
          cy="300"
          r="140"
          stroke="url(#gradient)"
          strokeWidth="10"
          fill="none"
          variants={draw}
          custom={1}
        />
        <motion.line
          x1="270"
          y1="240"
          x2="270"
          y2="360"
          stroke="#ff0055"
          strokeWidth="10"
          variants={draw}
          custom={1.5}
        />
        <motion.line
          x1="270"
          y1="300"
          x2="320"
          y2="240"
          stroke="#ff0055"
          strokeWidth="10"
          variants={draw}
          custom={2}
        />
        <motion.line
          x1="270"
          y1="300"
          x2="320"
          y2="360"
          stroke="#ff0055"
          strokeWidth="10"
          variants={draw}
          custom={2.5}
        />
        <motion.line
          x1="340"
          y1="240"
          x2="340"
          y2="360"
          stroke="#ff0055"
          strokeWidth="10"
          variants={draw}
          custom={3}
        />
        <motion.path
          d="
            M 340 240
            A 100 35 1 0 1 340 300
          "
          stroke="#ff0055"
          strokeWidth="10"
          fill="none"
          variants={draw}
          custom={3.5}
        />
      </motion.svg>
    </div>
  );
};

export default Loading;
