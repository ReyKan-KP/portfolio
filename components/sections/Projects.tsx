"use client";
import CheckCircleIcon from "@public/assets/icons/check-circle.svg";
import grainImage from "@public/assets/images/grain.jpg";
import Link from "next/link";
import Image from "next/image";
import { Github, Globe, ExternalLink, Code, Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import Card from "@components/Card";
import SectionHeader from "@components/SectionHeader";
import { motion, Variants } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useState } from "react";
import { cn } from "@/lib/utils";

const portfolioProjects = [
  {
    "name": "FableWeaver.ai",
    "description": [
      "An AI-powered storytelling platform that enables users to create, interact with, and develop unique story characters through dynamic AI-driven interactions.",
      "Features include character customization, adaptive recommendations, multi-character interactions, and AI-powered story generation.",
      "Built with Next.js, GenAI, and Supabase and the AI SDK for real-time interactions.",
      "Enhances user engagement with a Story Weaving Engine for AI-driven content creation and real-time plot progression."
    ],
    "tags": [
      {
        "name": "Next.js",
        "color": "text-blue-500"
      },
      {
        "name": "GenAI",
        "color": "text-purple-500"
      },
      {
        "name": "AI SDK",
        "color": "text-yellow-500"
      },
      {
        "name": "Gemini API",
        "color": "text-orange-500"
      },
      {
        "name": "Supabase",
        "color": "text-green-500"
      }
    ],
    image: "/assets/images/FableWeaver.png",
    source_code_link: "https://github.com/ReyKan-KP/FableWeaver.ai",
    live_site_link: "https://fable-weaver-ai.vercel.app/",
    accentColor: "from-purple-500/20 to-blue-500/20",
    shadowColor: "shadow-blue-500/30",
    borderColor: "border-blue-500/40",
    rotate: "-1deg"
  },

  {
    name: "NexiMeet",
    description: [
      "An all-in-one solution for hosting dynamic and engaging virtual events.",
      "Offers live streaming capabilities, interactive sessions, and customizable virtual exhibitor booths.",
      "Built with Next.js, TypeScript, and MongoDB, utilizing NextAuth.js and Firebase for authentication, and Stream for video and chat integration.",
      "Key features include live streaming, interactive tools, customizable exhibitor booths, attendee engagement tools, and streamlined registration and management.",
    ],
    tags: [
      {
        name: "Next.js",
        color: "text-blue-500",
      },
      {
        name: "TypeScript",
        color: "text-yellow-500",
      },
      {
        name: "MongoDB",
        color: "text-green-500",
      },
      {
        name: "NextAuth.js",
        color: "text-purple-500",
      },
      {
        name: "Firebase",
        color: "text-orange-500",
      },
      {
        name: "Stream",
        color: "text-pink-500",
      },
    ],
    image: "/assets/images/neximeet.png",
    source_code_link: "https://github.com/ReyKan-KP/nexi-meet",
    live_site_link: "https://nexi-meet.vercel.app",
    accentColor: "from-emerald-500/20 to-sky-500/20",
    shadowColor: "shadow-emerald-500/30",
    borderColor: "border-emerald-500/40",
    rotate: "2deg"
  },
  {
    name: "GoodWill",
    description: [
      "NGO Funding Website designed to connect NGOs with potential donors and volunteers.",
      "Showcases NGO causes and projects for greater visibility.",
      "Allows users to browse and donate to the causes they support.",
    ],
    tags: [
      {
        name: "React.js",
        color: "text-blue-500",
      },
      {
        name: "Redux.js",
        color: "text-purple-500",
      },
      {
        name: "MongoDB",
        color: "text-green-500",
      },
      {
        name: "Express.js",
        color: "text-orange-500",
      },
      {
        name: "TailwindCSS",
        color: "text-pink-500",
      },
    ],
    image: "/assets/images/goodwill.png",
    source_code_link: "https://github.com/ReyKan-KP/GoodWill_2.0",
    live_site_link: "https://good-will-2-0.vercel.app/",
    accentColor: "from-amber-500/20 to-rose-500/20",
    shadowColor: "shadow-amber-500/30",
    borderColor: "border-amber-500/40",
    rotate: "-2deg"
  },
  {
    name: "Recommendation System",
    description: [
      "Flask-based Anime/Manga recommendation system utilizing an IR similarity algorithm.",
      "Provides personalized suggestions based on user preferences, including descriptions, ratings, interactions, and viewing history.",
      "Features document search, ranking, spell correction, and user feedback for a comprehensive platform.",
    ],
    tags: [
      {
        name: "Flask",
        color: "text-blue-500",
      },
      {
        name: "Python",
        color: "text-yellow-500",
      },
      {
        name: "HTML/CSS",
        color: "text-pink-500",
      },
      {
        name: "IR Similarity Algorithm",
        color: "text-green-500",
      },
    ],
    image: "/assets/images/recommendation.png",
    source_code_link:
      "https://github.com/ReyKan-KP/Anime-Manga-Recommendation-System-Using-IR",
    live_site_link:
      "https://anime-manga-recommendation-system-using.onrender.com/",
    accentColor: "from-purple-500/20 to-indigo-500/20",
    shadowColor: "shadow-purple-500/30",
    borderColor: "border-purple-500/40",
    rotate: "1deg"
  },
  {
    name: "CityDex",
    description: [
      "CLI City Guide project crafted in Java, integrated with a MySQL database.",
      "Offers a dynamic city exploration experience, with information on attractions, dining, and accommodations.",
      "Features a responsive and user-friendly interface for effortless navigation through cities.",
    ],
    tags: [
      {
        name: "Java",
        color: "text-blue-500",
      },
      {
        name: "JDBC",
        color: "text-purple-500",
      },
      {
        name: "MySQL Database",
        color: "text-green-500",
      },
    ],
    image: "/assets/images/CityDex.png",
    source_code_link: "https://github.com/ReyKan-KP/CityDex",
    live_site_link: "#",
    accentColor: "from-blue-500/20 to-teal-500/20",
    shadowColor: "shadow-blue-500/30", 
    borderColor: "border-blue-500/40",
    rotate: "-1.5deg"
  },
];

const cardVariants: Variants = {
  offscreen: {
    y: 150,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
      staggerChildren: 0.15
    }
  }
};

const tagVariants: Variants = {
  offscreen: { opacity: 0, y: 20 },
  onscreen: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};

const linkVariants: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.1, transition: { duration: 0.2 } }
};

export const ProjectsSection = () => {
  const [expandedDescriptions, setExpandedDescriptions] = useState<{ [key: string]: boolean }>({});

  const toggleDescription = (projectName: string) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [projectName]: !prev[projectName]
    }));
  };

  return (
    <section className="pb-8 sm:pb-16 lg:py-24 relative">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 border-4 border-emerald-500/10 rotate-12"></div>
      <div className="absolute bottom-40 right-10 w-32 h-32 border-4 border-sky-500/10 rounded-full"></div>
      
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
        <Sparkles className="w-12 h-12 text-amber-500/20" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging projects"
        />
        <motion.div 
          className="flex flex-col mt-6 sm:mt-10 md:mt-20 gap-10 sm:gap-20"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          {portfolioProjects.map((project, projectIndex) => (
            <motion.div
              key={project.name}
              className="px-4 pt-4 sm:px-8 sm:pt-8 md:pt-12 md:px-15 lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
              variants={cardVariants}
            >
              {/* Mobile View */}
              <motion.div 
                className="block md:hidden"
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className={cn(
                  "relative overflow-hidden rounded-xl",
                  "transition-all duration-500",
                  `bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900`,
                  `border-2 ${project.borderColor}`,
                  `shadow-[6px_6px_0px_0px] ${project.shadowColor}`,
                  `rotate-[${project.rotate}]`,
                  "group hover:shadow-[8px_8px_0px_0px] hover:-translate-y-1 hover:-translate-x-1"
                )}>
                  <div
                    className="absolute inset-0 -z-30 opacity-5"
                    style={{ backgroundImage: `url(${grainImage.src})` }}
                  ></div>

                  <div className="p-5">
                    <div className="flex flex-col gap-3 mb-3 sm:mb-4">
                      <h3 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold uppercase tracking-wider sm:tracking-widest gap-2 text-white break-words">
                        {project.name}
                      </h3>
                      <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 mt-3">
                        <motion.a
                          href={project.live_site_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative flex items-center justify-center gap-2 text-sm sm:text-base text-white bg-white/10 backdrop-blur-sm border border-white/20 py-2 px-3 rounded-md group overflow-hidden"
                          variants={linkVariants}
                          whileHover="hover"
                        >
                          <Globe className="w-4 h-4" />
                          <span>Live Demo</span>
                          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </motion.a>
                        <motion.a
                          href={project.source_code_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative flex items-center justify-center gap-2 text-sm sm:text-base text-white bg-white/10 backdrop-blur-sm border border-white/20 py-2 px-3 rounded-md group overflow-hidden"
                          variants={linkVariants}
                          whileHover="hover"
                        >
                          <Github className="w-4 h-4" />
                          <span>Source Code</span>
                          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        </motion.a>
                      </div>
                    </div>

                    <div className="relative overflow-hidden h-44 sm:h-52 mb-5 rounded-lg border-2 border-white/20">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
                    </div>

                    <div>
                      <div className="space-y-2">
                        {(expandedDescriptions[project.name] ? project.description : project.description.slice(0, 2)).map((desc, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-emerald-400 mt-0.5" />
                            <p className="text-sm sm:text-base text-gray-300">{desc}</p>
                          </div>
                        ))}
                      </div>

                      {project.description.length > 2 && (
                        <button
                          onClick={() => toggleDescription(project.name)}
                          className="mt-3 text-sm flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
                        >
                          {expandedDescriptions[project.name] ? (
                            <>Show Less <ChevronUp className="w-4 h-4" /></>
                          ) : (
                            <>Show More <ChevronDown className="w-4 h-4" /></>
                          )}
                        </button>
                      )}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag.name}
                          className={cn(
                            "text-xs font-medium px-2 py-1 rounded-md",
                            "bg-white/10 backdrop-blur-sm",
                            "border border-white/10",
                            tag.color
                          )}
                          variants={tagVariants}
                        >
                          {tag.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Desktop View */}
              <div className="hidden md:flex">
                <motion.div className="w-full md:w-2/5 md:flex-shrink-0 relative" variants={cardVariants}>
                  <Tilt
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    glareEnable={true}
                    glareMaxOpacity={0.1}
                    glareColor="#ffffff"
                    glarePosition="all"
                    glareBorderRadius="12px"
                    className="h-full"
                  >
                    <div className={cn(
                      "relative overflow-hidden rounded-xl w-full h-full",
                      "transition-all duration-500",
                      `border-2 ${project.borderColor}`,
                      `shadow-[6px_6px_0px_0px] ${project.shadowColor}`,
                      `rotate-[${project.rotate}]`,
                      "hover:shadow-[8px_8px_0px_0px] hover:-translate-y-1 hover:-translate-x-1"
                    )}>
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        
                        className="aspect-[16/9]   opacity-60 hover:opacity-80 transition-opacity duration-500"
                      />

                      <div className="absolute top-4 left-4 flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                        <div className="flex gap-3">
                          <motion.a
                            href={project.live_site_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              "relative flex items-center justify-center gap-2",
                              "text-sm text-white bg-white/10 backdrop-blur-sm",
                              "border border-white/20 py-2 px-3 rounded-md",
                              "transition-all duration-300 group overflow-hidden"
                            )}
                            variants={linkVariants}
                            whileHover="hover"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                          </motion.a>
                          <motion.a
                            href={project.source_code_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              "relative flex items-center justify-center gap-2",
                              "text-sm text-white bg-white/10 backdrop-blur-sm",
                              "border border-white/20 py-2 px-3 rounded-md",
                              "transition-all duration-300 group overflow-hidden"
                            )}
                            variants={linkVariants}
                            whileHover="hover"
                          >
                            <Code className="w-4 h-4" />
                            <span>Code</span>
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </Tilt>
                </motion.div>

                <motion.div className="md:w-3/5 ml-0 md:ml-6" variants={cardVariants}>
                  <div className={cn(
                    "h-full p-6 sm:p-8 relative overflow-hidden rounded-xl",
                    "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900",
                    `border-2 ${project.borderColor}`,
                    `shadow-[4px_4px_0px_0px] ${project.shadowColor}`,
                    "backdrop-blur-sm"
                  )}>
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text break-words">
                      {project.name}
                    </h3>

                    <div className="space-y-3 mb-6">
                      {project.description.map((desc, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircleIcon className="flex-shrink-0 w-5 h-5 text-emerald-400 mt-0.5" />
                          <p className="text-sm sm:text-base text-gray-300">{desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag.name}
                          className={cn(
                            "text-xs font-medium px-2 py-1 rounded-md",
                            "bg-white/10 backdrop-blur-sm",
                            "border border-white/10",
                            tag.color
                          )}
                          variants={tagVariants}
                        >
                          {tag.name}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
