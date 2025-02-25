"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion as m, AnimatePresence } from "framer-motion";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { LetterPullup } from "@/components/ui/letter-pullup";
import { FlipText } from "@/components/ui/flip-text";
import OrbitAnimations from "@components/OrbitAnimations";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

export const HeroSection: React.FC = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  const titles = [
    "Full-Stack Developer",
    "Next.js Developer",
    "Gen AI Enthusiast",
    "Problem Solver",
    "Open Source Contributor",
  ];

  const gradients = [
    "bg-gradient-to-r from-emerald-400 to-sky-500",
    "bg-gradient-to-r from-blue-400 via-teal-500 to-sky-600",
    "bg-gradient-to-r from-sky-400 via-blue-500 to-teal-500",
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/ReyKan-KP", color: "hover:text-white" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/kanishaka-pranjal-070a45235/", color: "hover:text-blue-400" },
    // { icon: FaTwitter, href: "https://twitter.com/KanishakaP", color: "hover:text-sky-400" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [titles.length]);

  const renderAnimatedTitle = (index: number) => {
    const title = titles[index];
    const gradientClass = gradients[index % gradients.length];
    const baseClass = `font-serif text-2xl md:text-4xl text-center mt-2 tracking-wide bg-clip-text text-transparent ${gradientClass}`;

    switch (index % 3) {
      case 0:
        return (
          <GradualSpacing
            text={title}
            duration={0.5}
            delayMultiple={0.04}
            framerProps={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            className={baseClass}
          />
        );
      case 1:
        return <LetterPullup words={title} delay={0.05} className={baseClass} />;
      case 2:
        return (
          <FlipText
            word={title}
            duration={0.5}
            delayMultiple={0.08}
            framerProps={{
              hidden: { rotateX: -90, opacity: 0 },
              visible: { rotateX: 0, opacity: 1 },
            }}
            className={baseClass}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen relative z-0 flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      <OrbitAnimations />
      
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div> */}
        {/* <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl"></div> */}
      </div>

      <div className="container relative px-4 sm:px-6">
        <m.div 
          className="flex flex-col items-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile Image */}
          <m.div
            className="relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="relative size-28 sm:size-32 md:size-40">
              <Image 
                src="/images/kp.png" 
                alt="Kanishaka Pranjal" 
                fill
                priority
                className="rounded-full object-cover border-4 border-white/10 hover:border-white/20 transition-all duration-300" 
              />
              <m.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/20 to-sky-500/20"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </m.div>

          {/* Availability Badge */}
          <m.div 
            className="mt-6 sm:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-r from-emerald-500/10 to-sky-500/10 backdrop-blur-sm border border-white/10 px-4 sm:px-6 py-2 sm:py-3 rounded-2xl inline-flex items-center gap-2 sm:gap-3 hover:border-white/20 transition-all duration-300">
              <div className="relative">
                <div className="size-2 sm:size-3 bg-emerald-500 rounded-full" />
                <div className="absolute inset-0 size-2 sm:size-3 bg-emerald-500 rounded-full animate-ping" />
              </div>
              <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-emerald-400 to-sky-500 bg-clip-text text-transparent">
                Available for Work
              </span>
            </div>
          </m.div>

          {/* Main Content */}
          <m.div 
            className="mt-6 sm:mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="font-serif text-2xl sm:text-3xl md:text-6xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent py-2 px-4 sm:px-0">
              Hi, I&apos;m Kanishaka Pranjal
            </h1>

            <div className="h-12 sm:h-16 md:h-20 flex items-center justify-center mt-3 sm:mt-4">
              <AnimatePresence mode="wait">
                {renderAnimatedTitle(currentTitleIndex)}
              </AnimatePresence>
            </div>

            {/* Description */}
            <m.p 
              className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto px-4 sm:px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I&apos;m a <em>passionate</em> <strong>Full Stack Developer</strong>{" "}
              specializing in <strong>Next.js</strong> and modern web technologies.
              Currently crafting Gen AI-powered solutions at{" "}
              <strong>Intellify</strong>, where innovation meets user experience.
            </m.p>

            {/* Social Links */}
            <m.div 
              className="flex justify-center gap-4 sm:gap-6 mt-6 sm:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <m.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 sm:p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="size-5 sm:size-6" />
                </m.a>
              ))}
            </m.div>
          </m.div>

          {/* Scroll Indicator */}
          <m.div
            className="py-6 sm:py-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 1,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            <HiArrowDown className="size-5 sm:size-6 text-gray-400 animate-bounce" />
          </m.div>
        </m.div>
      </div>
    </div>
  );
};
