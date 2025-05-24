"use client";
import Link from "next/link";
import React from "react";
import { Github, Instagram, Linkedin, Mail, Phone, FileText, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function SocialIcons() {
  const socialLinks = [
    {
      name: "Github",
      icon: <Github strokeWidth={1.5} />,
      link: "https://github.com/ReyKan-KP",
      color: "#171515",
      hoverBg: "hover:bg-gray-900",
      borderColor: "border-gray-700",
      shadowColor: "shadow-gray-900/30",
      rotate: "-3deg"
    },
    {
      name: "Resume",
      icon: <FileText strokeWidth={1.5} />,
      link: "/assets/KanishakaPranjal_Resume.pdf",
      color: "#e7ee9e",
      hoverBg: "hover:bg-emerald-900",
      borderColor: "border-emerald-500/40",
      shadowColor: "shadow-emerald-500/30",
      rotate: "2deg"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin strokeWidth={1.5} />,
      link: "https://www.linkedin.com/in/kanishaka-pranjal-070a45235/",
      color: "#0A66C2",
      hoverBg: "hover:bg-blue-900",
      borderColor: "border-blue-500/40",
      shadowColor: "shadow-blue-500/30",
      rotate: "-2deg"
    },
    {
      name: "Email",
      icon: <Mail strokeWidth={1.5} />,
      link: "mailto:kanishakpranjal@gmail.com",
      color: "#D44638",
      hoverBg: "hover:bg-red-900",
      borderColor: "border-red-500/40",
      shadowColor: "shadow-red-500/30",
      rotate: "3deg"
    },
    {
      name: "Phone",
      icon: <Phone strokeWidth={1.5} />,
      link: "tel:+917488313013",
      color: "#678fcc",
      hoverBg: "hover:bg-indigo-900",
      borderColor: "border-indigo-500/40",
      shadowColor: "shadow-indigo-500/30",
      rotate: "-1deg"
    },
    {
      name: "Whatsapp",
      icon: <MessageCircle strokeWidth={1.5} />,
      link: "https://wa.me/7488313013",
      color: "#075E54",
      hoverBg: "hover:bg-green-900",
      borderColor: "border-green-500/40",
      shadowColor: "shadow-green-500/30",
      rotate: "2deg"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 10, rotate: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1 * i,
      },
    }),
  };

  return (
    <motion.div
      className="fixed md:top-1/2 md:left-5 md:left-8 lg:left-12 md:-translate-y-1/2 
                 sm:bottom-5 bottom-4 sm:mx-auto  
                 flex md:flex-col sm:flex-row items-center gap-4 sm:gap-5 md:gap-6 z-30"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-white/10">
        <ul className="flex md:flex-col sm:flex-row items-center gap-4 sm:gap-5">
          {socialLinks.map(({ name, icon, link, color, hoverBg, borderColor, shadowColor, rotate }, index) => (
            <motion.li
              key={name}
              title={name}
              variants={iconVariants}
              custom={index}
              whileHover={{ 
                scale: 1.15, 
                rotate: rotate, 
                transition: { duration: 0.2 } 
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={link} target="_blank" className="relative block group">
                <motion.div 
                  className={cn(
                    "absolute inset-0 rounded-lg",
                    `border-2 ${borderColor}`,
                    `shadow-[2px_2px_0px_0px] ${shadowColor}`,
                    "group-hover:shadow-[4px_4px_0px_0px] group-hover:-translate-y-1 group-hover:-translate-x-1",
                    "transition-all duration-300"
                  )}
                />
                <motion.div
                  className={cn(
                    "relative p-2 rounded-lg text-white/80 group-hover:text-white",
                    "bg-white/5 backdrop-blur-sm",
                    hoverBg,
                    "transition-colors duration-300 z-10"
                  )}
                  style={{ color: `${color}90` }}
                  whileHover={{ color: color }}
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 font-bold text-white">
                    {icon}
                  </div>
                </motion.div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.div 
        className="md:flex hidden flex-col items-center"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 120 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/30 to-white/5"></div>
      </motion.div>
    </motion.div>
  );
}

export default SocialIcons;
