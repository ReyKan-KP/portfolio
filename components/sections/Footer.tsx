"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/ReyKan-KP",
    icon: FaGithub,
    color: "hover:text-emerald-400",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kanishaka-pranjal-070a45235/",
    icon: FaLinkedin,
    color: "hover:text-sky-400",
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
    color: "hover:text-pink-500",
  },
  {
    name: "Email",
    href: "mailto:kanishakpranjal@gmail.com",
    icon: MdEmail,
    color: "hover:text-emerald-400",
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
  return (
    <footer className="relative pt-32 pb-16 px-4 overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl"></div> */}
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/kanishaka-pranjal-high-resolution-logo-transparent.png"
                alt="Logo"
                width={150}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 mb-8 max-w-md">
              Passionate Full Stack Developer specializing in Next.js and modern web technologies. 
              Building innovative solutions with clean, efficient code and exceptional user experiences.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 ${social.color}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="font-medium text-lg mb-6 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                {section.title}
              </h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-8 mt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Kanishaka Pranjal. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link 
                href="/privacy" 
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
