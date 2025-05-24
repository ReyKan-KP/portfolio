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
  FaChevronDown,
  FaChevronUp,
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
    // { name: "Firebase", level: 4.5, icon: SiFirebase, color: "text-yellow-400" },
    { name: "AI Integration", level: 4, icon: SiOpenai, color: "text-gray-500" },
  ],
};


const WorkExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "overview" | "responsibilities" | "skills"
  >("overview");
  const [isExpanded, setIsExpanded] = useState(false);

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

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength || isExpanded) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <section className="relative py-10 sm:py-16 lg:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 border-4 border-emerald-500/20 rotate-12 hidden lg:block"></div>
      <div className="absolute bottom-40 right-10 w-40 h-40 border-4 border-blue-500/20 rounded-full hidden lg:block"></div>
      
      <motion.div 
        className="absolute top-60 right-20"
        animate={{ 
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 0.9, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaBriefcase className="w-14 h-14 text-emerald-500/20" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            eyebrow="Professional Journey"
            title="Work Experience"
            description="Dive into my internship experience and the skills I've developed along the way."
          />
        </motion.div>
        
        <motion.div 
          className="mt-6 sm:mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div className="relative">
            {/* Neo-brutalist card with offset shadow */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border-2 border-white/20 rounded-xl translate-x-2 translate-y-2"></div>
            
            <Card className="backdrop-blur-xl bg-white/5 border-2 border-white/10 shadow-lg relative rotate-[-0.5deg] hover:rotate-0 transition-all duration-500">
              <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                {/* Company Header */}
                <div className="flex flex-col md:flex-row items-center mb-6 sm:mb-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-sky-500/10 blur-2xl"></div>
                  <motion.div 
                    className="bg-gradient-to-r from-emerald-400 to-sky-500 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl mb-4 md:mb-0 md:mr-6 border-2 border-white/30 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaBriefcase className="text-gray-900 text-2xl sm:text-3xl md:text-4xl" />
                  </motion.div>
                  <div className="text-center md:text-left z-10 md:ml-2">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative inline-block"
                    >
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 relative">
                        {workExperience.title}
                        <div className="absolute -bottom-1.5 left-0 right-0 h-3 bg-gradient-to-r from-emerald-500/60 to-sky-500/60 -z-10 skew-x-3 rounded"></div>
                      </h3>
                    </motion.div>
                    <div className="space-y-2">
                      <p className="text-lg sm:text-xl text-gray-300 font-medium">
                        {workExperience.company}
                      </p>
                      <p className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-emerald-500/20 to-sky-500/20 border-2 border-white/10 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.1)] text-sm font-medium">
                        {workExperience.duration}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex justify-center mb-6 sm:mb-8">
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-2xl backdrop-blur-sm bg-black/20 p-2.5 sm:p-3 rounded-lg border-2 border-white/10 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]">
                    {[
                      {
                        key: "overview",
                        icon: FaCode,
                        label: "Overview",
                        bgColor: "bg-gradient-to-r from-emerald-400 to-sky-500",
                        rotate: "-1deg",
                      },
                      {
                        key: "responsibilities",
                        icon: FaLaptopCode,
                        label: "Tasks",
                        bgColor: "bg-gradient-to-r from-blue-400 via-teal-500 to-sky-600",
                        rotate: "1deg",
                      },
                      {
                        key: "skills",
                        icon: FaDatabase,
                        label: "Skills",
                        bgColor: "bg-gradient-to-r from-sky-400 via-blue-500 to-teal-500",
                        rotate: "-1.5deg",
                      },
                    ].map((tab) => (
                      <motion.div
                        key={tab.key}
                        variants={tabVariants}
                        animate={activeTab === tab.key ? "active" : "inactive"}
                        whileHover={{ scale: 1.05, rotate: activeTab === tab.key ? tab.rotate : 0 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant={activeTab === tab.key ? "default" : "outline"}
                          className={`w-full h-10 sm:h-12 md:h-14 relative rounded-md ${
                            activeTab === tab.key 
                              ? `${tab.bgColor} shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] border-2 border-white/30 font-bold transform rotate-[${tab.rotate}]` 
                              : "hover:bg-white/10 border-2 border-white/10"
                          } transition-all duration-300 text-xs sm:text-sm md:text-base font-medium`}
                          onClick={() => setActiveTab(tab.key as typeof activeTab)}
                        >
                          <tab.icon className={`mr-2 text-base sm:text-lg md:text-xl ${activeTab === tab.key ? 'animate-bounce' : ''}`} />
                          <span>{tab.label}</span>
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
                    className="min-h-[300px] sm:min-h-[350px] p-5 sm:p-6 md:p-8 backdrop-blur-xl bg-white/5 rounded-lg border-2 border-white/10 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.2)]"
                  >
                    {activeTab === "overview" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-emerald-500/30 to-sky-500/30 rounded-full flex items-center justify-center border-2 border-white/10">
                            <FaCode className="text-white text-xl" />
                          </div>
                          <button 
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors"
                          >
                            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                          </button>
                        </div>
                        <motion.p 
                          className="text-gray-300 text-base sm:text-lg leading-relaxed"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {truncateText(workExperience.description, 250)}
                        </motion.p>
                        
                        {workExperience.description.length > 250 && !isExpanded && (
                          <motion.button
                            className="mt-4 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-sky-500/20 rounded-md text-white hover:bg-white/10 border border-white/10 text-sm font-medium transition-all hover:-translate-y-1"
                            onClick={() => setIsExpanded(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Read More
                          </motion.button>
                        )}
                      </motion.div>
                    )}
                    
                    {activeTab === "responsibilities" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500/30 to-teal-500/30 rounded-full flex items-center justify-center border-2 border-white/10">
                            <FaLaptopCode className="text-white text-xl" />
                          </div>
                          <button 
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors"
                          >
                            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                          </button>
                        </div>
                        <motion.ul 
                          className="space-y-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {workExperience.responsibilities.map((responsibility, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * index }}
                              className="flex gap-3 group"
                            >
                              <div className="mt-1.5 flex-shrink-0">
                                <div className="size-3 rounded-full bg-gradient-to-r from-blue-400 to-teal-500 group-hover:scale-150 transition-all duration-300" />
                              </div>
                              <div>
                                <p className="text-sm sm:text-base text-gray-300">
                                  {truncateText(responsibility, 120)}
                                </p>
                                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-500/40 to-teal-500/40 mt-1 transition-all duration-500"></div>
                              </div>
                            </motion.li>
                          ))}
                        </motion.ul>
                      </motion.div>
                    )}

                    {activeTab === "skills" && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="flex justify-between items-start mb-6">
                          <div className="w-12 h-12 bg-gradient-to-r from-sky-500/30 to-blue-500/30 rounded-full flex items-center justify-center border-2 border-white/10">
                            <FaDatabase className="text-white text-xl" />
                          </div>
                        </div>
                        <motion.div 
                          className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {workExperience.skills.map((skill, index) => (
                            <motion.div
                              key={skill.name}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 * index }}
                              whileHover={{ 
                                scale: 1.05, 
                                rotate: index % 2 === 0 ? 2 : -2,
                                transition: { type: "spring", stiffness: 400, damping: 10 }
                              }}
                              className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-br from-white/5 to-white/10 border-2 border-white/10 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,0.2)] transition-all"
                            >
                              <motion.div
                                animate={{ 
                                  y: [0, -5, 0],
                                  transition: { 
                                    duration: 2,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    delay: index * 0.1
                                  }
                                }}
                              >
                                <skill.icon className={`text-3xl sm:text-4xl ${skill.color} mb-3`} />
                              </motion.div>
                              <p className="text-sm sm:text-base text-white font-medium text-center mb-2">
                                {skill.name}
                              </p>
                              <div className="mt-1">
                                <StarRating rating={skill.level} color={skill.color} />
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </motion.div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
