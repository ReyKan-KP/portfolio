"use client";

import { motion } from "framer-motion";
import HyperText from "./ui/hyper-text";
import SparklesText from "./ui/sparkles-text";
import WordFadeIn from "./ui/word-fade-in";

export default function SectionHeader({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants} className="flex justify-center">
        <motion.p
          className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center lg:text-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {eyebrow}
        </motion.p>
      </motion.div>
      <motion.h2
        variants={itemVariants}
        className="font-serif text-3xl md:text-5xl text-center"
      >
        {title}
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="text-center md:text-lg text-white/60 max-w-md mx-auto"
        whileHover={{ color: "rgba(255, 255, 255, 0.8)" }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
