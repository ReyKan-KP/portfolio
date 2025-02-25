"use client";
import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";
import { motion } from "framer-motion";

function SocialIcons() {
  const socialLinks = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "https://github.com/ReyKan-KP",
      color: "#171515",
    },
    {
      name: "Resume",
      icon: <SiReaddotcv className="rotate-10" />,
      link: "/assets/KanishakaPranjal_Resume.pdf",
      color: "#e7ee9e",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/kanishaka-pranjal-070a45235/",
      color: "#0A66C2",
    },
    {
      name: "Email",
      icon: <FiMail />,
      link: "mailto:kanishakpranjal@gmail.com",
      color: "#D44638",
    },
    // {
    //   name: "Instagram",
    //   icon: <FiInstagram />,
    //   link: "https://www.instagram.com/kanishak_pranjal_/",
    //   color: "#E1306C",
    // },
    {
      name: "Phone",
      icon: <FiPhone />,
      link: "tel:+917488313013",
      color: "#678fcc",
    },
    {
      name: "Whatsapp",
      icon: <FaWhatsapp />,
      link: "https://wa.me/7488313013",
      color: "#075E54",
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

  return (
    <motion.div
      className="fixed top-1/2 left-2 sm:left-4 md:left-8 lg:left-16 transform -translate-y-1/2 flex flex-col items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 z-30"
      initial="hidden"
      animate="visible"
    >
      <ul className="flex flex-col items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
        {socialLinks.map(({ name, icon, link, color }, index) => (
          <motion.li
            key={name}
            title={name}
            className="transition-transform duration-300 ease-in-out transform"
            variants={iconVariants}
            custom={index}
            whileHover={{ scale: 1.3 }}
          >
            <Link href={link} target="_blank">
              <motion.div
                className="p-1 sm:p-2 md:p-3 lg:p-4 text-xl sm:text-2xl md:text-2xl lg:text-3xl text-lightest-slate hover:text-white-100 focus:outline-none focus:text-white-100"
                whileHover={{ color: color }}
                transition={{ type: "tween", duration: 0.8 }}
              >
                {icon}
              </motion.div>
            </Link>
          </motion.li>
        ))}
      </ul>
      <div className="w-px bg-light-slate flex-1 mt-2 sm:mt-4 md:mt-6 lg:mt-8"></div>
    </motion.div>
  );
}

export default SocialIcons;
