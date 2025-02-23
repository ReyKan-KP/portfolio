"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const menuItems = [
  { 
    href: "#home", 
    label: "Home",
    description: "Back to homepage",
    icon: "🏠"
  },
  { 
    href: "#work", 
    label: "Work Experience",
    description: "View my professional experience",
    icon: "💼"
  },
  { 
    href: "#projects", 
    label: "Projects",
    description: "Check out my portfolio projects",
    icon: "🚀"
  },
  { 
    href: "#about", 
    label: "About",
    description: "Learn more about me",
    icon: "👨‍💻"
  },
  { 
    href: "#testimonials", 
    label: "Testimonials",
    description: "What others say about my work",
    icon: "💬"
  },
  { 
    href: "#achievement", 
    label: "Achievement",
    description: "My accomplishments and certifications",
    icon: "🏆"
  },
  { 
    href: "#contact", 
    label: "Contact",
    description: "Get in touch with me",
    icon: "📧"
  },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<string | null>("hero");
  const [hoveredNav, setHoveredNav] = useState<string | null>(
    "hero"
  );

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = menuItems.map((item) => item.href.slice(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 sm:top-2 md:top-5 lg:top-10 left-0 sm:left-2 md:left-5 lg:left-10 right-0 sm:right-2 md:right-5 lg:right-10 z-50 px-4 sm:px-6 py-2 rounded-full bg-white/10 dark:bg-gray-900/10 backdrop-blur-lg shadow-lg border border-white/20"
      >
        <div className="container mx-auto flex items-center justify-between h-12 sm:h-14 max-w-7xl">
          {/* Logo */}
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-4"
          >
            <Link href="/" className="relative w-8 h-8 sm:w-10 sm:h-10">
              <Image
                src="/images/kanishaka-pranjal-high-resolution-logo-transparent.png"
                alt="Logo"
                fill
                priority
                className="object-contain"
              />
            </Link>
          </m.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            
            <TooltipProvider>
              {menuItems.map((item) => (
                <div 
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setHoveredNav(item.href)}
                  onMouseLeave={() => setHoveredNav(null)}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <m.button
                        onClick={() => scrollToSection(item.href)}
                        className={`relative px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300
                          ${activeSection === item.href.slice(1)
                            ? "text-white bg-teal-500"
                            : "text-teal-500 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400"
                          }`}
                        onHoverStart={() => setHoveredItem(item.href)}
                        onHoverEnd={() => setHoveredItem(null)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="flex items-center gap-1 sm:gap-2">
                          <span className="text-base">{item.icon}</span>
                          <span className="hidden sm:inline">{item.label}</span>
                        </span>
                        {hoveredItem === item.href && (
                          <m.div
                            className="absolute inset-0 bg-teal-500/10 rounded-full -z-10"
                            layoutId="hoverBackground"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                      </m.button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.description}</p>
                    </TooltipContent>
                  </Tooltip>

                  {/* Anime Mascot Animation */}
                  {activeSection === item.href.slice(1) && (
                    <m.div
                      layoutId="anime-mascot"
                      className="absolute hidden md:block -top-8 lg:-top-10 left-1/2 -translate-x-1/2 pointer-events-none"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="relative w-12 h-12">
                        <m.div
                          className="absolute w-10 h-10 bg-[#cdbcff] rounded-full left-1/2 -translate-x-1/2"
                          animate={
                            hoveredNav === item.href
                              ? {
                                  scale: [1, 1.1, 1],
                                  rotate: [0, -5, 5, 0],
                                  transition: {
                                    duration: 0.5,
                                    ease: "easeInOut",
                                  },
                                }
                              : {
                                  y: [0, -3, 0],
                                  transition: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                  },
                                }
                          }
                        >
                          {/* Eyes */}
                          <m.div
                            className="absolute w-2 h-2 bg-black rounded-full"
                            animate={
                              hoveredNav === item.href
                                ? {
                                    scaleY: [1, 0.2, 1],
                                    transition: {
                                      duration: 0.2,
                                      times: [0, 0.5, 1],
                                    },
                                  }
                                : {}
                            }
                            style={{ left: "25%", top: "40%" }}
                          />
                          <m.div
                            className="absolute w-2 h-2 bg-black rounded-full"
                            animate={
                              hoveredNav === item.href
                                ? {
                                    scaleY: [1, 0.2, 1],
                                    transition: {
                                      duration: 0.2,
                                      times: [0, 0.5, 1],
                                    },
                                  }
                                : {}
                            }
                            style={{ right: "25%", top: "40%" }}
                          />

                          {/* Blush */}
                          <m.div
                            className="absolute w-2 h-1.5 bg-pink-300 rounded-full"
                            animate={{
                              opacity: hoveredNav === item.href ? 0.8 : 0.6,
                            }}
                            style={{ left: "15%", top: "55%" }}
                          />
                          <m.div
                            className="absolute w-2 h-1.5 bg-pink-300 rounded-full"
                            animate={{
                              opacity: hoveredNav === item.href ? 0.8 : 0.6,
                            }}
                            style={{ right: "15%", top: "55%" }}
                          />

                          {/* Mouth */}
                          <m.div
                            className="absolute w-4 h-2 border-b-2 border-black rounded-full"
                            animate={
                              hoveredNav === item.href
                                ? {
                                    scaleY: 1.5,
                                    y: -1,
                                  }
                                : {
                                    scaleY: 1,
                                    y: 0,
                                  }
                            }
                            style={{ left: "30%", top: "60%" }}
                          />

                          {/* Sparkles */}
                          <AnimatePresence>
                            {hoveredNav === item.href && (
                              <>
                                <m.div
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0 }}
                                  className="absolute -top-1 -right-1 w-2 h-2 text-yellow-300"
                                >
                                  ✨
                                </m.div>
                                <m.div
                                  initial={{ opacity: 0, scale: 0 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0 }}
                                  transition={{ delay: 0.1 }}
                                  className="absolute -top-2 left-0 w-2 h-2 text-yellow-300"
                                >
                                  ✨
                                </m.div>
                              </>
                            )}
                          </AnimatePresence>
                        </m.div>
                        
                        {/* Tail */}
                        <m.div
                          className="absolute -bottom-1 left-1/2 w-4 h-4 -translate-x-1/2"
                          animate={
                            hoveredNav === item.href
                              ? {
                                  y: [0, -4, 0],
                                  transition: {
                                    duration: 0.3,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                  },
                                }
                              : {
                                  y: [0, 2, 0],
                                  transition: {
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5,
                                  },
                                }
                          }
                        >
                          <div className="w-full h-full bg-[#cdbcff] rotate-45 transform origin-center" />
                        </m.div>
                      </div>
                    </m.div>
                  )}
                </div>
              ))}
            </TooltipProvider>
          </nav>

          {/* Mobile Menu Button */}
          <m.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 sm:p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </m.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <m.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 mt-2 p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 md:hidden"
            >
              {menuItems.map((item, index) => (
                <m.div
                  key={item.href}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="py-2"
                >
                  <button
                    onClick={() => {
                      scrollToSection(item.href);
                      toggleMenu();
                    }}
                    className="flex items-center space-x-3 w-full text-left text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-base">{item.label}</span>
                  </button>
                </m.div>
              ))}
            </m.div>
          )}
        </AnimatePresence>
      </m.nav>
    </LazyMotion>
  );
};
