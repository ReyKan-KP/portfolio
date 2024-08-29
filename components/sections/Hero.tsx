"use client"
import React, { useEffect, useRef, useState } from "react";
import memojiImage from "@public/assets/images/memoji-computer.png";
import Image from "next/image";
import OrbitAnimations from "@components/OrbitAnimations";
import gsap from "gsap";

export const HeroSection: React.FC = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const titles = React.useMemo(
    () => [
      "Full-Stack Developer",
      "Open Source Contributor",
      "Programmer",
    ],
    []
  );
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  const gradients = [
    "bg-gradient-to-r from-blue-400 via-teal-500 to-sky-600",
    "bg-gradient-to-r from-sky-400 via-blue-500 to-teal-500",
    "bg-gradient-to-r from-teal-400 via-sky-500 to-blue-500",
  ];

  useEffect(() => {
    if (!textRef.current) return;

    const changeText = () => {
      const nextTitle = titles[currentTitleIndex];
      const charsContainer = textRef.current;

      if (!charsContainer) return;

      charsContainer.innerHTML = "";

      nextTitle.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.className = "char";
        charsContainer.appendChild(span);
      });

      const chars = charsContainer.querySelectorAll<HTMLSpanElement>(".char");

      gsap.fromTo(
        chars,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.09 }
      );
      setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
    };

    gsap.delayedCall(4, changeText);
    const interval = setInterval(changeText, 6000);

    return () => clearInterval(interval);
  }, [currentTitleIndex, titles]);

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

          <h2
            className={`font-serif text-2xl md:text-4xl text-center mt-2 tracking-wide bg-clip-text text-transparent ${gradients[currentTitleIndex]}`}
            ref={textRef}
          >
            {titles[0].split("").map((char, index) => (
              <span className="char" key={index}>
                {char}
              </span>
            ))}
          </h2>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I&apos;m a MERN Stack Developer specializing in ReactJS and Next.js,
            with expertise in JavaScript and TypeScript. I build dynamic,
            server-rendered applications and ensure robust, type-safe code. My
            skills extend to MongoDB, Firebase and PostgreSQl, and I&apos;m
            passionate about contributing to open-source projects and
            continuously improving my craft.
          </p>
          {/* <ButtonsLink /> */}
        </div>
      </div>
    </div>
  );
};
