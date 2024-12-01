"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import memojiImage from "@public/assets/images/memoji-computer.png";
import OrbitAnimations from "@components/OrbitAnimations";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { LetterPullup } from "@/components/ui/letter-pullup";
import { FlipText } from "@/components/ui/flip-text";

export const HeroSection: React.FC = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  const titles = [
    "Full-Stack Developer",
    "Next.js Developer",
    "Programmer",
    "Coder",
    "MERN Stack Developer",
    "Open Source Contributor",
  ];

  const gradients = [
    "bg-gradient-to-r from-blue-400 via-teal-500 to-sky-600",
    "bg-gradient-to-r from-sky-400 via-blue-500 to-teal-500",
    "bg-gradient-to-r from-teal-400 via-sky-500 to-blue-500",
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
        return (
          <LetterPullup words={title} delay={0.05} className={baseClass} />
        );
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
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <OrbitAnimations />
      <div className="container">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} alt="Memoji" width={100} height={100} />
        </div>
        <div className="flex justify-center items-center mt-2">
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 w-2.5 h-2.5 rounded-full relative">
              <div className="bg-green-500 w-2.5 h-2.5 rounded-full absolute inset-0 animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Available for Work</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto gap-3">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide whitespace-nowrap">
            Hi, I&apos;m Kanishaka Pranjal
          </h1>

          {renderAnimatedTitle(currentTitleIndex)}

          <p className="mt-4 text-center text-white/60 md:text-lg">
            I&apos;m a <em>passionate</em> <strong>Full Stack Developer</strong>{" "}
            &nbsp; specializing in{" "}
            <strong>
              Next.js
            </strong>{" "}
            and the{" "}
            <strong>
            MERN stack
            </strong>
            , with a focus on creating intuitive and engaging frontend
            experiences. Proficient in
            <strong>React.js</strong>, <strong>Next.js</strong>,{" "}
            <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>, I
            bring ideas to life with clean, efficient code and innovative
            designs. Currently, I&apos;m honing my skills as a{" "}
            <strong>Full Stack Development Intern</strong> at&nbsp;
            <strong>
            Intellify
            </strong>
            , working on dynamic projects using <strong>Next.js</strong>,{" "}
            <strong>TypeScript</strong>, <strong>Supabase</strong>,{" "}
            <strong>Firebase</strong>, and&nbsp;
            <strong>PostgreSQL</strong>. I thrive on solving challenges,
            collaborating with teams, and delivering{" "}
            <strong>impactful solutions</strong> that elevate user experiences.
          </p>
        </div>
      </div>
    </div>
  );
};
