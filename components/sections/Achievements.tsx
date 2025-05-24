"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Card from "../Card";
import SectionHeader from "@components/SectionHeader";
import gcp from "@public/assets/images/gcp.png";
import h23 from "@public/assets/images/h23.png";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp, ExternalLink, Award } from "lucide-react";

interface Achievement {
  title: string;
  company_name: string;
  icon: any;
  iconBg: string;
  date: string;
  points: string[];
}

const achievements: Achievement[] = [
  {
    title: "Google Cloud Skills Boost",
    company_name: "Google Cloud",
    icon: gcp,
    iconBg: "#090a0f",
    date: "Oct 2023 - Nov 2023",
    points: [
      "Participated and achieved the Google Cloud Skills Boost program.",
      "Earned certifications in Cloud Computing Fundamentals, Infrastructure, Prompt Engineering, Networking & Security, Data, ML, and AI in Google Cloud.",
      "Gained practical skills like resource management and network building.",
      "This journey honed my abilities in cloud technologies, showcasing my commitment to staying ahead in the fast-paced corporate tech landscape.",
      "These certifications validate my hands-on expertise, reflecting my dedication to continuous learning and proficiency in Google Cloud.",
    ],
  },
  {
    title: "Hacktoberfest 2023",
    company_name: "Hacktoberfest",
    icon: h23,
    iconBg: "#090a0f",
    date: "Oct 2023 - Nov 2023",
    points: [
      "Actively contributed to the open-source community during Hacktoberfest 2023.",
      "Demonstrated passion for collaborative software development and innovation.",
      "Leveraged coding and problem-solving skills to contribute meaningfully to various projects.",
      "Further honed abilities in a collaborative and dynamic environment.",
      "Showcased dedication to industry trends and commitment to open source principles.",
    ],
  },
  {
    title: "Hacktoberfest 2024",
    company_name: "Hacktoberfest",
    icon: h23,
    iconBg: "#1a1b21",
    date: "Oct 2024 - Nov 2024",
    points: [
      "Actively participated in the global open-source event, Hacktoberfest 2024, by contributing to impactful projects.",
      "Collaborated with developers worldwide, showcasing a strong commitment to open-source development.",
      "Applied advanced problem-solving and coding skills to improve and optimize various repositories.",
      "Enhanced expertise in version control, issue tracking, and pull request workflows in dynamic team environments.",
      "Demonstrated dedication to fostering innovation and building sustainable, community-driven solutions.",
    ],
  },
];

interface AchievementCardProps {
  achievement: Achievement;
  index: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.8, type: "spring", stiffness: 100, damping: 15 },
      });
    } else {
      controls.start({
        opacity: 0,
        x: 0,
        scale: 0.8,
        transition: { duration: 0.8, delay: index * 0.2 },
      });
    }
  }, [controls, inView, index]);

  // Alternate card styles for visual interest
  const cardStyles = [
    {
      rotate: "-1deg",
      shadow: "shadow-emerald-500/30",
      border: "border-emerald-500/40",
      gradientFrom: "from-emerald-500",
      gradientTo: "to-sky-500",
    },
    {
      rotate: "1deg",
      shadow: "shadow-violet-500/30",
      border: "border-violet-500/40",
      gradientFrom: "from-violet-500",
      gradientTo: "to-indigo-500",
    },
    {
      rotate: "-1.5deg",
      shadow: "shadow-amber-500/30",
      border: "border-amber-500/40",
      gradientFrom: "from-amber-500",
      gradientTo: "to-orange-500",
    },
  ];

  const style = cardStyles[index % cardStyles.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={controls}
      className={`mb-8 sm:mb-16 flex justify-between items-start w-full ${
        index % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"
      } flex-col pl-8 sm:pl-0`}
    >
      {/* Timeline node */}
      <motion.div
        className={cn(
          "z-10 absolute left-1/2 -translate-x-1/2 -translate-y-1/2",
          "w-12 h-12 rounded-xl",
          "border-2 border-white/20 shadow-lg",
          `bg-gradient-to-br ${style.gradientFrom} ${style.gradientTo}`
        )}
        initial={{ scale: 0 }}
        animate={{ 
          scale: inView ? 1 : 0, 
          rotate: inView ? [0, 45, 0, -45, 0] : 0 
        }}
        transition={{ 
          scale: { delay: 0.2 },
          rotate: { delay: 0.5, duration: 1 }
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <Award className="text-white/80 w-6 h-6" />
        </div>
      </motion.div>

      {/* Date marker */}
      <motion.div
        className={cn(
          "absolute left-1/2 transform -translate-x-1/2 top-8",
          "bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg",
          "border border-white/10 shadow-lg z-10"
        )}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: inView ? 0 : -20, opacity: inView ? 1 : 0 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-xs md:text-sm font-medium text-white whitespace-nowrap">
          {achievement.date}
        </p>
      </motion.div>

      {/* Card content */}
      <motion.div
        className={cn(
          "w-full md:w-5/6 lg:w-3/4 mt-16 relative",
          `rotate-[${style.rotate}] hover:rotate-0`,
          "transition-all duration-500"
        )}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {/* Neo-brutalist card with offset shadow */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50",
          "rounded-xl border-2",
          style.border,
          style.shadow,
          "translate-x-3 translate-y-3"
        )}></div>

        <Card className={cn(
          "relative border-2 border-white/10",
          `shadow-[5px_5px_0px_0px] ${style.shadow}`,
          "backdrop-blur-sm overflow-hidden"
        )}>
          <div className="relative p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
              <motion.div
                className={cn(
                  "w-14 h-14 flex items-center justify-center rounded-xl",
                  "border-2 border-white/20",
                  `bg-gradient-to-br ${style.gradientFrom}/10 ${style.gradientTo}/10`
                )}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={achievement.icon}
                  alt={`${achievement.company_name} logo`}
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </motion.div>

              <div className="flex-1">
                <div className="relative inline-block">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{achievement.title}</h3>
                  <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500/60 to-sky-500/60 -z-10 skew-x-3 rounded"></div>
                </div>
                <p className="text-sm text-gray-400">{achievement.company_name}</p>
              </div>

              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className={cn(
                  "p-2 rounded-lg",
                  "bg-white/5 hover:bg-white/10",
                  "border border-white/10",
                  "transition-colors",
                  "flex items-center justify-center"
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isExpanded ? <ChevronUp className="w-5 h-5 text-gray-300" /> : <ChevronDown className="w-5 h-5 text-gray-300" />}
              </motion.button>
            </div>

            <AnimatePresence initial={false}>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: isExpanded ? "auto" : "80px", 
                  opacity: 1 
                }}
                exit={{ height: "80px", opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <ul className="space-y-4">
                  {achievement.points.map((point: string, i: number) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex group text-gray-300"
                    >
                      <div className="mr-3 mt-1.5">
                        <motion.div 
                          className={cn(
                            "h-2 w-2 rounded-full flex-shrink-0",
                            `bg-gradient-to-r ${style.gradientFrom} ${style.gradientTo}`,
                            "group-hover:scale-150 transition-all duration-300"
                          )}
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm md:text-base">{point}</p>
                        <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-white/0 via-white/10 to-white/0 mt-1 transition-all duration-500"></div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            {!isExpanded && achievement.points.length > 2 && (
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
            )}

            {!isExpanded && (
              <motion.button
                onClick={() => setIsExpanded(true)}
                className={cn(
                  "mt-4 px-4 py-2 text-sm font-medium w-full",
                  "bg-gradient-to-r",
                  `${style.gradientFrom}/20 ${style.gradientTo}/20`,
                  "rounded-lg border border-white/10",
                  "hover:border-white/20 transition-all",
                  "flex items-center justify-center gap-2"
                )}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ y: 0, scale: 0.99 }}
              >
                View All Details <ChevronDown className="w-4 h-4" />
              </motion.button>
            )}
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

const AchievementsTimeline: React.FC = () => {
  return (
    <div className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 border-4 border-emerald-500/10 rotate-12 hidden md:block"></div>
      <div className="absolute bottom-40 right-10 w-32 h-32 border-4 border-sky-500/10 rounded-full hidden md:block"></div>
      
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
        <Award className="w-12 h-12 text-amber-500/20" />
      </motion.div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            eyebrow="Milestones Achieved"
            title="My Journey So Far"
            description="Explore the key moments and accomplishments that have shaped my professional growth."
          />
        </motion.div>
        
        <div className="relative mt-16 md:mt-20">
          {/* Timeline connector */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-white/20 to-transparent"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              achievement={achievement}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementsTimeline;
