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
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

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
  company: "Intellify",
  duration: "Oct 2024 - Present",
  description:
    "As a Full Stack Development Intern at Intellify, I have played a key role in designing and developing cutting-edge web applications, leveraging modern frameworks and tools to deliver scalable, high-performance solutions.",
  responsibilities: [
    "Architect and maintain dynamic, responsive web applications using Next.js, TypeScript, and Tailwind CSS.",
    "Implement robust backend functionality with Supabase and integrate Firebase for real-time features and seamless user experiences.",
    "Collaborate with cross-functional teams, including designers and product managers, to craft intuitive and impactful software solutions.",
    "Conduct code reviews to ensure best practices, maintainability, and high-quality standards across the project lifecycle.",
    "Enhance application performance, scalability, and responsiveness, ensuring seamless functionality across various devices.",
  ],
  skills: [
    {
      name: "Next.js",
      level: 5,
      icon: SiNextdotjs,
      color: "text-gray-400/50",
    },
    {
      name: "TypeScript",
      level: 4,
      icon: SiTypescript,
      color: "text-blue-600",
    },
    {
      name: "Tailwind CSS",
      level: 5,
      icon: SiTailwindcss,
      color: "text-cyan-400",
    },
    { name: "Supabase", level: 4, icon: SiSupabase, color: "text-green-500" },
    { name: "React", level: 5, icon: FaReact, color: "text-blue-400" },
    { name: "Node.js", level: 4, icon: FaNodeJs, color: "text-green-600" },
    { name: "Git", level: 4.5, icon: FaGitAlt, color: "text-red-500" },
    {
      name: "PostgreSQL",
      level: 4,
      icon: SiPostgresql,
      color: "text-blue-300",
    },
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
    <section className="py-20 lg:py-28">
      <div className="container max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="Professional Journey"
          title="Work Experience"
          description="Dive into my internship experience and the skills I've developed along the way."
        />
        <div className="mt-16">
          <Card className="overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-none">
            <div className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row items-center mb-8">
                <div className="bg-gradient-to-r from-emerald-400 to-sky-500 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
                  <FaBriefcase className="text-gray-900 text-3xl" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {workExperience.title}
                  </h3>
                  <p className="text-xl text-gray-300 mb-1">
                    {workExperience.company}
                  </p>
                  <p className="text-gray-400">{workExperience.duration}</p>
                </div>
              </div>

              <div className="flex justify-center mb-8">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    {
                      key: "overview",
                      icon: FaCode,
                      label: "Overview",
                      bgColor:
                        "bg-gradient-to-r from-teal-400 via-sky-500 to-blue-500",
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
                        className={`w-full ${
                          activeTab === tab.key ? tab.bgColor : ""
                        }`}
                        onClick={() =>
                          setActiveTab(tab.key as typeof activeTab)
                        }
                      >
                        <tab.icon className="mr-2" /> {tab.label}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {activeTab === "overview" && (
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {workExperience.description}
                    </p>
                  )}
                  {activeTab === "responsibilities" && (
                    <ul className="space-y-4">
                      {workExperience.responsibilities.map((resp, index) => (
                        <motion.li
                          key={index}
                          className="flex items-start text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <FaServer className="mt-1 mr-3 text-emerald-400 flex-shrink-0" />
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                  {activeTab === "skills" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {workExperience.skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center justify-between"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex items-center">
                            <skill.icon
                              className={`mr-2 ${skill.color} text-2xl`}
                            />
                            <span className="text-gray-300">{skill.name}</span>
                          </div>
                          <StarRating
                            rating={skill.level}
                            color={skill.color}
                          />
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
