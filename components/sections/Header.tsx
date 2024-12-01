"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, LazyMotion, domAnimation, m } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Image from "next/image";

const menuItems = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#achievement", label: "Achievement" },
  { href: "#contact", label: "Contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollY, setScrollY] = useState(0);

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

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-gray-900 to-transparent pb-8"
        style={{
          background: `linear-gradient(to bottom, rgba(17, 24, 39, ${Math.min(
            scrollY / 500,
            0.9
          )}), transparent)`,
        }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <m.div
            initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex items-center space-x-2"
          >
            <Image
              src="/images/kanishaka-pranjal-high-resolution-logo-transparent.png"
              alt="Logo"
              width={40}
              height={40}
              // className="rounded-full"
            />
          </m.div>

          <nav className="hidden md:flex space-x-1">
            <AnimatePresence>
              {menuItems.map((item, index) => (
                <m.div
                  key={item.href}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: index * 0.05,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.href}
                    className={`nav-item text-sm px-3 py-2 rounded-full transition-all duration-300 relative overflow-hidden ${
                      activeSection === item.href.slice(1)
                        ? "bg-teal-500 text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <m.span
                      className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 transition-opacity duration-300 rounded-full"
                      initial={false}
                      animate={
                        activeSection === item.href.slice(1)
                          ? { opacity: 1 }
                          : { opacity: 0 }
                      }
                    />
                  </Link>
                </m.div>
              ))}
            </AnimatePresence>
          </nav>

          <div className="md:hidden">
            <m.button
              onClick={toggleMenu}
              className="text-white p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <m.div
                    key="close"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    exit={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HiOutlineX size={24} />
                  </m.div>
                ) : (
                  <m.div
                    key="menu"
                    initial={{ rotate: 180 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HiOutlineMenuAlt3 size={24} />
                  </m.div>
                )}
              </AnimatePresence>
            </m.button>
          </div>
        </div>
      </m.div>

      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full sm:w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-lg flex flex-col items-center justify-center gap-4 z-40"
          >
            {menuItems.map((item, index) => (
              <m.div
                key={item.href}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="nav-item text-lg hover:text-teal-400 transition-colors relative group"
                  onClick={toggleMenu}
                >
                  {item.label}
                  <m.span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"
                    initial={false}
                    animate={
                      activeSection === item.href.slice(1)
                        ? { width: "100%" }
                        : { width: 0 }
                    }
                  />
                </Link>
              </m.div>
            ))}
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
};
