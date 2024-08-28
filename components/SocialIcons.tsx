"use client";
import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { SiReaddotcv } from "react-icons/si";
import { motion } from "framer-motion";

function SocialIcons() {
  const socialLinks = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "https://github.com/ReyKan-KP",
    },
    {
      name: "Resume",
      icon: (
        <motion.div className="rotate-70">
          <SiReaddotcv />
        </motion.div>
      ),
      link: "/assets/KanishakaPranjal_Resume.pdf",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "www.linkedin.com/in/kanishak-pranjal-070a45235",
    },
    {
      name: "Email", // Adding the email option
      icon: <FiMail />,
      link: "mailto:kanishakpranjal@gmail.com",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://www.instagram.com/kanishak_pranjal_/",
    },
  ];

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 + i * 0.2,
        duration: 1,
        ease: "easeInOut",
      },
    }),
  };

  const hoverAnimations = [
    { scale: 1.5, rotate: 20 },
    { scale: 1.5, rotate: -20 },
    { scale: 1.5, x: 10 },
    { scale: 1.5, x: -10 },
    { scale: 1.5, y: -30 },
    { scale: 1.5, y: 30 },
    { scale: 1.5, rotate: 15, x: 5 },
    { scale: 1.5, rotate: -15, y: -5 },
  ];

  const getRandomHoverAnimation = () => {
    const randomIndex = Math.floor(Math.random() * hoverAnimations.length);
    return hoverAnimations[randomIndex];
  };

  return (
    <motion.div
      className="fixed top-1/2 left-4 md:left-8 lg:left-16 transform -translate-y-1/2 flex flex-col items-center gap-4 sm:gap-6 md:gap-8 z-50"
      initial="hidden"
      animate="visible"
    >
      <ul className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
        {socialLinks.map(({ name, icon, link }, index) => (
          <motion.li
            key={name}
            title={name}
            className="transition-transform duration-300 ease-in-out transform"
            variants={iconVariants}
            custom={index}
            whileHover={getRandomHoverAnimation()}
          >
            <Link href={link} target="_blank">
              <motion.div className="p-2 sm:p-3 md:p-4 text-2xl sm:text-2xl md:text-3xl text-lightest-slate hover:text-theme-color focus:outline-none focus:text-theme-color">
                {icon}
              </motion.div>
            </Link>
          </motion.li>
        ))}
      </ul>
      <div className="w-px bg-light-slate flex-1 mt-4 sm:mt-6 md:mt-8"></div>
    </motion.div>
  );
}

export default SocialIcons;
