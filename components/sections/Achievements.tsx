"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Card from "../Card";
import SectionHeader from "@components/SectionHeader";
import gcp from "@public/assets/images/gcp.png";
import h23 from "@public/assets/images/h23.png";

const AchievementsTimeline = () => {
  const achievements = [
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

  return (
    <div className="container mx-auto px-4 py-16 relative">
      {/* <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" /> */}
      {/* <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-500/10 to-sky-500/10 rounded-full blur-3xl" /> */}

      <SectionHeader
        eyebrow="Milestones Achieved"
        title="My Journey So Far"
        description="Explore the key moments and accomplishments that have shaped my professional growth."
      />
      
      <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="border-2 absolute border-opacity-20 border-gray-700 dark:border-gray-300 h-full left-1/2 transform -translate-x-1/2"
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
  );
};

const AchievementCard = ({
  achievement,
  index,
}: {
  achievement: any;
  index: number;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 0.8, delay: index * 0.2 },
      });
    } else {
      controls.start({
        opacity: 0,
        x: index % 2 === 0 ? 100 : -100,
        scale: 0.8,
        transition: { duration: 0.8, delay: index * 0.2 },
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100, scale: 0.8 }}
      animate={controls}
      className={`mb-16 flex justify-between items-center w-full ${
        index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col`}
    >
      <div className="order-1 md:w-5/12 w-full"></div>
      
      <motion.div 
        className="z-20 flex items-center order-1 bg-gradient-to-r from-emerald-300 to-sky-400 shadow-xl w-12 h-12 rounded-full"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.div 
          className="w-8 h-8 mx-auto rounded-full bg-gray-900 dark:bg-gray-100"
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      <motion.div
        className={`order-1 md:w-5/12 w-full px-4 md:px-6 py-4`}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Card>
          <div className="relative overflow-hidden rounded-xl p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm" />
            
            <div className="relative">
              <div className="flex items-center mb-6">
                <motion.div
                  className={`w-14 h-14 flex items-center justify-center rounded-xl bg-opacity-20`}
                  style={{ backgroundColor: achievement.iconBg }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  <Image
                    src={achievement.icon}
                    alt={`${achievement.company_name} logo`}
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                </motion.div>
                <div className="ml-4 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 font-medium">{achievement.date}</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {achievement.points.map((point: string, i: number) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start space-x-3 text-gray-300"
                  >
                    <span className="mt-1 block h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-sky-500" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default AchievementsTimeline;
