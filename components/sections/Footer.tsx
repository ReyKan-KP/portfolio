"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Heart, ExternalLink, ChevronUp } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/ReyKan-KP",
    icon: FaGithub,
    color: "hover:text-emerald-400 hover:bg-emerald-400/10",
    hoverColors: "from-emerald-500/20 to-emerald-500/10",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kanishaka-pranjal-070a45235/",
    icon: FaLinkedin,
    color: "hover:text-sky-400 hover:bg-sky-400/10",
    hoverColors: "from-sky-500/20 to-sky-500/10",
  },
  // {
  //   name: "Twitter",
  //   href: "https://twitter.com/KanishakaP",
  //   icon: FaTwitter,
  //   color: "hover:text-sky-400", 
  // },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kanishak_pranjal_/",
    icon: FaInstagram,
    color: "hover:text-pink-500 hover:bg-pink-500/10",
    hoverColors: "from-pink-500/20 to-pink-500/10",
  },
  {
    name: "Email",
    href: "mailto:kanishakpranjal@gmail.com",
    icon: MdEmail,
    color: "hover:text-emerald-400 hover:bg-emerald-400/10",
    hoverColors: "from-emerald-500/20 to-emerald-500/10",
  },
];

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Experience", href: "#work" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Projects",
    links: [
      { name: "FableWeaver.ai", href: "https://fable-weaver-ai.vercel.app/" },
      { name: "NexiMeet", href: "https://nexi-meet.vercel.app" },
      { name: "GoodWill", href: "https://good-will-2-0.vercel.app/" },
      { name: "Recommendation System", href: "https://anime-manga-recommendation-system-using.onrender.com/" },
    ],
  },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative pt-20 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 border-4 border-emerald-500/10 rotate-12 hidden md:block"></div>
      <div className="absolute bottom-40 right-10 w-32 h-32 border-4 border-sky-500/10 rounded-full hidden md:block"></div>
      
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute right-6 sm:right-12 -top-0 z-10 group "
        whileHover={{ y: -4 }}
        whileTap={{ y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-black/20 rounded-xl translate-x-1 translate-y-1"></div>
        <div className="relative bg-gradient-to-r from-emerald-500/20 to-sky-500/20 p-3 sm:p-4 rounded-xl border-2 border-white/10 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
          <ChevronUp className="w-5 h-5 text-white group-hover:text-emerald-400 transition-colors duration-300" />
        </div>
      </motion.button>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="relative">
          {/* Neo-brutalist container with offset shadow */}
          <div className="absolute inset-0 bg-black/20 rounded-2xl translate-x-3 translate-y-3"></div>
          
          <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm  border-2 border-white/10 rounded-2xl overflow-hidden p-8 sm:p-10 lg:p-12 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.2)]">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 w-full">
              {/* Logo & Description */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-2"
              >
                <div className="relative p-0.5 w-fit mb-6 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-sky-500/20 rounded-lg blur-md group-hover:blur-lg transition-all duration-500"></div>
                  <Link href="/" className="relative block bg-gray-900 rounded-lg p-2">
                    <Image
                      src="/images/kanishaka-pranjal-high-resolution-logo-transparent.png"
                      alt="Logo"
                      width={180}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </Link>
                </div>
                
                <div className="relative mb-6">
                  <p className="text-gray-300 text-base leading-relaxed max-w-md">
                    Passionate Full Stack Developer specializing in Next.js and modern web technologies. 
                    Building innovative solutions with clean, efficient code and exceptional user experiences.
                  </p>
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-6"></div>
                </div>
                
                <div className="space-y-3">
                  <p className="text-white/70 text-sm">Connect with me</p>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className={cn(
                          "relative group",
                          "p-3 rounded-lg border-2 border-white/10",
                          "transition-all duration-300",
                          "bg-gray-800/50 backdrop-blur-sm",
                          social.color
                        )}
                        whileHover={{ 
                          y: -4,
                          rotate: index % 2 === 0 ? 3 : -3,
                          transition: { type: "spring", stiffness: 400, damping: 10 }
                        }}
                        whileTap={{ y: 0, rotate: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                      >
                        <div className={cn(
                          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                          "bg-gradient-to-r rounded-lg",
                          social.hoverColors
                        )}></div>
                        <social.icon className="w-5 h-5 relative z-10" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Navigation Links */}
              {footerLinks.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="relative inline-block mb-5">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {section.title}
                    </h3>
                    <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/60 to-sky-500/60 rounded"></div>
                  </div>
                  
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <motion.li 
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + linkIndex * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          className="group flex items-center gap-1 text-gray-400 hover:text-white transition-colors duration-300"
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                        >
                          <span>{link.name}</span>
                          {link.href.startsWith("http") && (
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          )}
                          <span className="block max-w-0 group-hover:max-w-full h-px bg-gradient-to-r from-emerald-400 to-sky-500 transition-all duration-500"></span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Bottom Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-10 sm:pt-12 mt-12 sm:mt-16 border-t border-white/10"
            >
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 text-white/60 text-sm">
                  <span>© {new Date().getFullYear()} Kanishaka Pranjal</span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs">Made with</span>
                    <Heart className="w-3 h-3 text-red-500 animate-pulse" />
                  </div>
                </div>
                
                <div className="flex gap-8">
                  <Link 
                    href="/privacy" 
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300 relative group"
                  >
                    <span>Privacy Policy</span>
                    <span className="block max-w-0 group-hover:max-w-full h-px bg-gradient-to-r from-emerald-400 to-sky-500 transition-all duration-500"></span>
                  </Link>
                  <Link 
                    href="/terms" 
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-300 relative group"
                  >
                    <span>Terms of Service</span>
                    <span className="block max-w-0 group-hover:max-w-full h-px bg-gradient-to-r from-emerald-400 to-sky-500 transition-all duration-500"></span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};
