import React, { useState } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <LazyMotion features={domAnimation}>
      <div className="fixed top-3 w-full flex justify-between sm:justify-center z-10">
        <nav className="hidden sm:flex flex-col sm:flex-row gap-2 sm:gap-4 p-2 sm:p-2 border border-white/15 rounded-full bg-white/10 backdrop-blur max-w-xs sm:max-w-none">
          <Link
            href="#home"
            className="nav-item text-sm sm:text-base hover:text-teal-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#projects"
            className="nav-item text-sm sm:text-base hover:text-teal-500 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#about"
            className="nav-item text-sm sm:text-base hover:text-teal-500 transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="nav-item text-sm sm:text-base hover:text-teal-500 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Hamburger Menu for small screens */}
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-white transition-transform transform hover:scale-110"
          >
            {isOpen ? (
              <m.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <HiOutlineX size={24} />
              </m.div>
            ) : (
              <m.div
                initial={{ rotate: 90 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <HiOutlineMenuAlt3 size={24} />
              </m.div>
            )}
          </button>
        </div>

        {/* Side Menu Animation */}
        <m.div
          initial={{ x: "100%", borderRadius: "0% 0% 0% 100%" }}
          animate={{
            x: isOpen ? 0 : "100%",
            borderRadius: isOpen ? "0% 0% 0% 0%" : "0% 0% 0% 100%",
          }}
          transition={{ type: "tween", duration: 0.5 }}
          className="fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-white shadow-lg flex flex-col items-center justify-center gap-4 sm:hidden"
        >
          <Link
            href="#home"
            className="nav-item text-lg hover:text-teal-400 transition-colors"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="#projects"
            className="nav-item text-lg hover:text-teal-400 transition-colors"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            href="#about"
            className="nav-item text-lg hover:text-teal-400 transition-colors"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="#contact"
            className="nav-item text-lg hover:text-teal-400 transition-colors"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </m.div>
      </div>
    </LazyMotion>
  );
};
