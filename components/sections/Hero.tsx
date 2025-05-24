"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion as m, AnimatePresence } from "framer-motion";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { LetterPullup } from "@/components/ui/letter-pullup";
import { FlipText } from "@/components/ui/flip-text";
import OrbitAnimations from "@components/OrbitAnimations";
import { ArrowDown, Github, Linkedin, Twitter, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

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
    { icon: Github, href: "https://github.com/ReyKan-KP", color: "hover:text-white" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/kanishaka-pranjal-070a45235/", color: "hover:text-blue-400" },
    // { icon: Twitter, href: "https://twitter.com/KanishakaP", color: "hover:text-sky-400" },
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
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      <OrbitAnimations />
      
      {/* Neo-brutalist decorative elements */}
      <div className="absolute top-1/4 left-1/3 w-32 h-32 border-4 border-emerald-500/10 rounded-lg rotate-[15deg] hidden md:block"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-4 border-sky-500/10 rounded-full hidden md:block"></div>
      <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-purple-500/10 rotate-[30deg] hidden md:block"></div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <m.div 
          className="flex flex-col items-center max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Profile Image with neo-brutalist frame */}
          <m.div
            className="relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.2 
            }}
          >
            <m.div
              className="absolute -inset-4 bg-white/5 rounded-xl border-2 border-emerald-500/30 shadow-[4px_4px_0px_0px] shadow-emerald-500/20 rotate-[-3deg]"
              whileHover={{ rotate: 3, transition: { duration: 0.3 } }}
            ></m.div>
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

          {/* Availability Badge - Neo-brutalist style */}
          <m.div 
            className="mt-8 sm:mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <m.div 
              className={cn(
                "relative px-4 py-2 overflow-hidden group",
                "transition-all duration-300"
              )}
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <div className="absolute inset-0 bg-emerald-500/80 rounded-md border-2 border-white/30 shadow-[3px_3px_0px_0px] shadow-white/20"></div>
              <div className="relative flex items-center gap-2 sm:gap-3">
                <div className="relative">
                  <div className="size-2 sm:size-3 bg-white rounded-full" />
                  <div className="absolute inset-0 size-2 sm:size-3 bg-white rounded-full animate-ping opacity-75" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-black">
                  Available for Work
                </span>
              </div>
            </m.div>
          </m.div>

          {/* Main Content */}
          <m.div 
            className="mt-8 sm:mt-10 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Name with highlight effect */}
            <div className="relative inline-block">
              <m.h1 
                className="font-serif text-2xl sm:text-3xl md:text-6xl font-bold text-white py-2 px-4 sm:px-0 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Hi, I&apos;m Kanishaka Pranjal
              </m.h1>
              {/* Highlight effect */}
              <m.div 
                className="absolute bottom-2 left-0 h-4 md:h-6 bg-emerald-500/25 w-full -z-0 skew-x-12"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1.2 }}
              ></m.div>
            </div>

            {/* Title container with improved styling */}
            <m.div 
              className="relative mt-3 sm:mt-5 h-14 sm:h-16 md:h-20 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="absolute -inset-x-4 -inset-y-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"></div>
              <AnimatePresence mode="wait">
                {renderAnimatedTitle(currentTitleIndex)}
              </AnimatePresence>
            </m.div>

            {/* Description with neo-brutalist card */}
            <m.div
              className="relative mt-8 sm:mt-10 px-4 py-6 mx-auto max-w-3xl rotate-[-1deg]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ rotate: 1, transition: { duration: 0.3 } }}
            >
              <div className="absolute inset-0 bg-white/5 rounded-lg border-2 border-sky-500/20 shadow-[4px_4px_0px_0px] shadow-sky-500/10"></div>
              <p className="relative text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto px-4 sm:px-6">
                I&apos;m a <em>passionate</em> <strong className="text-emerald-400">Full Stack Developer</strong>{" "}
                specializing in <strong className="text-sky-400">Next.js</strong> and modern web technologies.
                Currently crafting Gen AI-powered solutions at{" "}
                <strong className="text-purple-400">Intellify</strong>, where innovation meets user experience.
              </p>
              
              {/* Decorative sparkle icon */}
              <m.div 
                className="absolute -top-3 -right-2 text-amber-400"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 0.9, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles size={20} />
              </m.div>
            </m.div>

            {/* Social Links - Enhanced neo-brutalist style */}
            <m.div 
              className="flex justify-center gap-5 sm:gap-7 mt-8 sm:mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              {socialLinks.map((social, index) => (
                <m.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-white/10 rounded-md border-2 border-white/20 shadow-[3px_3px_0px_0px] shadow-white/10 transition-all group-hover:shadow-[5px_5px_0px_0px] group-hover:shadow-white/20 group-hover:-translate-y-1 group-hover:-translate-x-1"></div>
                  <div className={`relative p-3 rounded-md ${social.color}`}>
                    <social.icon className="size-5 sm:size-6" />
                  </div>
                </m.a>
              ))}
            </m.div>
          </m.div>

          {/* Scroll Indicator - Enhanced style */}
          <m.div
            className="mt-10 sm:mt-12 py-6 sm:py-8 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5] }}
            transition={{ 
              duration: 1.5, 
              delay: 1.4,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
            <div className="p-2 rounded-full border border-white/10 bg-white/5">
              <ArrowDown className="size-5 sm:size-6 text-emerald-400" />
            </div>
          </m.div>
        </m.div>
      </div>
    </div>
  );
};
