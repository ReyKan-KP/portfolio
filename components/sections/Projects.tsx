"use client";
import CheckCircleIcon from "@public/assets/icons/check-circle.svg";
import grainImage from "@public/assets/images/grain.jpg";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import Card from "@components/Card";
import SectionHeader from "@components/SectionHeader";
import { motion, Variants } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Globe } from "lucide-react";
import { useState } from "react";

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
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
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
    <section className="pb-8 sm:pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging projects"
        />
        <motion.div 
          className="flex flex-col mt-6 sm:mt-10 md:mt-20 gap-10 sm:gap-20 "
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          {portfolioProjects.map((project, projectIndex) => (
            <div
              key={project.name}
              className="px-4 pt-4 sm:px-8 sm:pt-8 md:pt-12 md:px-15 lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(64px + ${projectIndex * 40}px)` }}
            >
              <motion.div 
                className="block md:hidden"
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card>
                  <div
                    className="absolute inset-0 -z-30 opacity-5"
                    style={{ backgroundImage: `url(${grainImage.src})` }}
                  ></div>

                  <div>
                    <div className="flex flex-col gap-3 mb-3 sm:mb-4">
                      <h3 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-4xl bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-wider sm:tracking-widest gap-2 text-transparent bg-clip-text break-words">
                        {project.name}
                      </h3>
                      <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                        <Link
                          href={project.live_site_link}
                          passHref
                          legacyBehavior
                        >
                          <a target="_blank" rel="noopener noreferrer" className="w-fit">
                            <span className="flex items-center text-xs sm:text-sm text-white/70 hover:text-white">
                              <Globe className="mr-1 sm:mr-2 w-4 h-4" />
                              Live-Site
                            </span>
                          </a>
                        </Link>
                        <Link
                          href={project.source_code_link}
                          passHref
                          legacyBehavior
                        >
                          <a target="_blank" rel="noopener noreferrer" className="w-fit">
                            <span className="flex items-center text-xs sm:text-sm text-white/70 hover:text-white">
                              <FaGithub className="mr-1 sm:mr-2 w-4 h-4" />
                              GitHub
                            </span>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`text-xs sm:text-sm font-medium ${tag.color}`}
                        >
                          #{tag.name}
                        </span>
                      ))}
                    </div>
                    <hr className="border-t-2 border-white/5 mt-3 sm:mt-4 md:mt-5" />
                    <div className="lg:flex lg:items-center lg:gap-10">
                      <div className="relative">
                        <ul className={`flex flex-col gap-3 sm:gap-5 mt-3 sm:mt-4 md:mt-5 lg:flex-1 ${!expandedDescriptions[project.name] ? 'max-h-[120px] sm:max-h-[150px] overflow-hidden' : ''}`}>
                          {project.description.map((desc, index) => (
                            <li
                              key={index}
                              className="flex gap-2 text-xs sm:text-sm md:text-base text-white/50"
                            >
                              <CheckCircleIcon className="size-4 sm:size-5 md:size-6 flex-shrink-0" />
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                        {project.description.length > 2 && (
                          <button
                            onClick={() => toggleDescription(project.name)}
                            className="mt-2 text-xs sm:text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                          >
                            {expandedDescriptions[project.name] ? 'Show Less' : 'Show More'}
                          </button>
                        )}
                      </div>
                      <div className="mt-6 sm:mt-8 lg:mt-0 lg:mb-1 lg:flex-1 -mb-4 md:-mb-0 lg:h-full lg:w-auto lg:max-w-none">
                        <div className="relative h-48 sm:h-60 md:h-80 lg:h-96">
                          <Image
                            src={project.image}
                            alt={project.name}
                            className="rounded-2xl sm:rounded-3xl object-contain w-full h-full"
                            style={{ objectFit: "contain" }}
                            fill
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                className="hidden md:block"
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  perspective={1000}
                  scale={1.01}
                  transitionSpeed={400}
                  className="will-change-transform"
                >
                  <Card>
                    <div
                      className="absolute inset-0 -z-30 opacity-5"
                      style={{ backgroundImage: `url(${grainImage.src})` }}
                    ></div>

                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest gap-2 text-transparent bg-clip-text">
                          {project.name}
                        </h3>
                        <div className="flex gap-4">
                          <Link
                            href={project.live_site_link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="flex items-center text-sm text-white/70 hover:text-white">
                              <Globe className="mr-2" />
                              Live-Site
                            </span>
                          </Link>
                          <Link
                            href={project.source_code_link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="flex items-center text-sm text-white/70 hover:text-white">
                              <FaGithub className="mr-2" />
                              GitHub
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className={`text-sm font-medium ${tag.color}`}
                          >
                            #{tag.name}
                          </span>
                        ))}
                      </div>
                      <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                      <div className="lg:flex lg:items-center lg:gap-10">
                        <ul className="flex flex-col gap-5 mt-4 md:mt-5 lg:flex-1">
                          {project.description.map((desc, index) => (
                            <li
                              key={index}
                              className="flex gap-2 text-sm md:text-base text-white/50"
                            >
                              <CheckCircleIcon className="size-5 md:size-6" />
                              <span>{desc}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-8 lg:mt-0 lg:mb-1 lg:flex-1 -mb-4 md:-mb-0 lg:h-full lg:w-auto lg:max-w-none">
                          <div className="relative h-60 sm:h-72 md:h-80 lg:h-96">
                            <Image
                              src={project.image}
                              alt={project.name}
                              className="rounded-3xl object-cover w-full h-full"
                              style={{ objectFit: "cover" }}
                              fill
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Tilt>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
