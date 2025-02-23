"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SectionHeader from "@components/SectionHeader";
import {
  FaBriefcase,
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaStar,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiFirebase,
  SiPostgresql,
  SiNextdotjs,
  SiOpenai,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import grainImage from "@public/assets/images/grain.jpg";

interface WorkExperience {
  title: string;
  company: string;
  duration: string;
  description: string;
  responsibilities: string[];
  skills: Array<{
    name: string;
    level: number;
    icon: React.ElementType;
    color: string;
  }>;
}

const workExperience: WorkExperience = {
  title: "Full Stack Development Intern",
  company: "Intellify (Build Fast With AI)",
  duration: "Oct 2024 - Present",
  description:
    "As a Full Stack Development Intern at Intellify, I play a crucial role in developing and optimizing AI-powered EdTech platforms. I specialize in building high-performance, scalable applications using Next.js, TypeScript, and Tailwind CSS. My contributions include designing intuitive user interfaces, and optimizing database interactions with Supabase and PostgreSQL. I actively collaborate with cross-functional teams to create seamless and engaging learning experiences, focusing on performance improvements, AI-driven content generation, and enhancing overall user engagement. My work has led to measurable improvements in platform efficiency, load times, and user satisfaction, solidifying my expertise in full-stack development and AI-integrated solutions.",
  
  responsibilities: [
    "Develop and optimize AI-powered EdTech applications using Next.js, TypeScript, and Tailwind CSS, improving user engagement by 15%.",
    "Implement Supabase for efficient data handling and for real-time features, enhancing application responsiveness.",
    "Contribute to an AI-powered GMAT/GRE practice platform, improving adaptive learning experiences with AI-generated questions and personalized feedback.",
    "Enhance UI/UX across multiple web pages, reducing load times by 10% and improving user satisfaction by 20%.",
    "Collaborate with cross-functional teams to design, develop, and deploy scalable software solutions, ensuring seamless performance.",
  ],
  skills: [
    {
      name: "Next.js",
      level: 5,
      icon: SiNextdotjs,
      color: "text-teal-500",
    },
    {
      name: "TypeScript",
      level: 5,
      icon: SiTypescript,
      color: "text-blue-600",
    },
    {
      name: "Tailwind CSS",
      level: 5,
      icon: SiTailwindcss,
      color: "text-cyan-400",
    },
    { name: "Supabase", level: 4.5, icon: SiSupabase, color: "text-green-500" },
    { name: "React", level: 5, icon: FaReact, color: "text-blue-400" },
    { name: "Node.js", level: 4.5, icon: FaNodeJs, color: "text-green-600" },
    { name: "Git", level: 5, icon: FaGitAlt, color: "text-red-500" },
    {
      name: "PostgreSQL",
      level: 4.5,
      icon: SiPostgresql,
      color: "text-blue-300",
    },
    { name: "Firebase", level: 4.5, icon: SiFirebase, color: "text-yellow-400" },
    { name: "AI Integration", level: 4, icon: SiOpenai, color: "text-gray-500" },
  ],
};


const WorkExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "overview" | "responsibilities" | "skills"
  >("overview");

  const tabVariants = {
    inactive: { scale: 1 },
    active: { scale: 1.1 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const StarRating: React.FC<{ rating: number; color: string }> = ({
    rating,
    color,
  }) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            className={`${color} ${
              star <= rating ? "opacity-100" : "opacity-30"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      {/* Background Elements */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div> */}
      <div className="absolute inset-0 -z-10 opacity-10 mix-blend-overlay"
                 style={{ backgroundImage: `url(${grainImage.src})` }} />

      <div className="container max-w-5xl mx-auto px-4 relative">
        <SectionHeader
          eyebrow="Professional Journey"
          title="Work Experience"
          description="Dive into my internship experience and the skills I've developed along the way."
        />
        
        <div className="mt-12">
          <Card className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-500">
            <div className="p-4 md:p-8">
              {/* Company Header */}
              <div className="flex flex-col md:flex-row items-center mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-sky-500/10 blur-2xl"></div>
                <motion.div 
                  className="bg-gradient-to-r from-emerald-400 to-sky-500 p-4 rounded-xl mb-4 md:mb-0 md:mr-6"
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaBriefcase className="text-gray-900 text-4xl" />
                </motion.div>
                <div className="text-center md:text-left z-10">
                  <motion.h3 
                    className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {workExperience.title}
                  </motion.h3>
                  <div className="space-y-2">
                    <p className="text-xl text-gray-300 font-medium">
                      {workExperience.company}
                    </p>
                    <p className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-sky-500/20 border border-white/10 text-gray-300">
                      {workExperience.duration}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex justify-center mb-8">
                <div className="grid grid-cols-3 gap-4 w-full max-w-2xl backdrop-blur-sm bg-white/5 p-3 rounded-xl">
                  {[
                    {
                      key: "overview",
                      icon: FaCode,
                      label: "Overview",
                      bgColor: "bg-gradient-to-r from-emerald-400 to-sky-500",
                    },
                    {
                      key: "responsibilities",
                      icon: FaLaptopCode,
                      label: "Responsibilities",
                      bgColor:
                        "bg-gradient-to-r from-blue-400 via-teal-500 to-sky-600",
                    },
                    {
                      key: "skills",
                      icon: FaDatabase,
                      label: "Tech Stack",
                      bgColor:
                        "bg-gradient-to-r from-sky-400 via-blue-500 to-teal-500",
                    },
                  ].map((tab) => (
                    <motion.div
                      key={tab.key}
                      variants={tabVariants}
                      animate={activeTab === tab.key ? "active" : "inactive"}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant={activeTab === tab.key ? "default" : "outline"}
                        className={`w-full h-11 ${
                          activeTab === tab.key 
                            ? `${tab.bgColor} shadow-lg` 
                            : "hover:bg-white/10 border-white/10"
                        } transition-all duration-300 text-base font-medium`}
                        onClick={() => setActiveTab(tab.key as typeof activeTab)}
                      >
                        <tab.icon className={`mr-2 text-lg ${activeTab === tab.key ? 'animate-bounce' : ''}`} />
                        {tab.label}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="min-h-[300px] p-6 backdrop-blur-xl bg-white/5 rounded-xl border border-white/10"
                >
                  {activeTab === "overview" && (
                    <motion.p 
                      className="text-gray-300 text-lg leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {workExperience.description}
                    </motion.p>
                  )}
                  
                  {activeTab === "responsibilities" && (
                    <ul className="space-y-6">
                      {workExperience.responsibilities.map((resp, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start text-gray-300 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="bg-gradient-to-r from-emerald-500/20 to-sky-500/20 p-2 rounded-lg mr-3">
                            <FaServer className="text-emerald-400 text-lg group-hover:rotate-12 transition-transform duration-300" />
                          </div>
                          <span className="text-base group-hover:text-white transition-colors duration-300">
                            {resp}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  {activeTab === "skills" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {workExperience.skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          className="group"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="p-4 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-gray-700/50 hover:to-gray-600/50 border border-white/5 transition-all duration-300">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                                  <skill.icon
                                    className={`${skill.color} text-xl group-hover:scale-125 transition-transform duration-300`}
                                  />
                                </div>
                                <span className="ml-3 text-base text-gray-300 font-medium">
                                  {skill.name}
                                </span>
                              </div>
                              <StarRating rating={skill.level} color={skill.color} />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
