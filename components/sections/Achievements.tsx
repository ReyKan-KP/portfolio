"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Card from "../Card";

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
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200">
        Achievements Timeline
      </h1>
      <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
        <div className="border-2 absolute border-opacity-20 border-gray-700 dark:border-gray-300 h-full left-1/2 transform -translate-x-1/2"></div>
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
        y: 0,
        transition: { duration: 0.6, delay: index * 0.2 },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 50,
        transition: { duration: 0.6, delay: index * 0.2 },
      });
    }
  }, [controls, inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className={`mb-8 flex justify-between items-center w-full ${
        index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col`}
    >
      <div className="order-1 md:w-5/12 w-full"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 dark:bg-gray-200 shadow-xl w-8 h-8 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white dark:text-gray-800">
          <div className="bg-gradient-to-r from-emerald-300 to-sky-400 w-8 h-8 rounded-full relative"></div>
        </h1>
      </div>
      <motion.div
        className={`order-1 md:w-5/12 w-full px-4 md:px-6 py-4`}
        whileHover={{ scale: 1.03 }}
      >
        <Card>
          <div className="flex items-center mb-4">
            <div
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full"
              style={{ backgroundColor: achievement.iconBg }}
            >
              <Image
                src={achievement.icon}
                alt={`${achievement.company_name} logo`}
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
            <div className="ml-4 flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {achievement.title}
              </h3>
              <div className="flex text-gray-400">
                <p>{achievement.date}</p>
              </div>
            </div>
          </div>
          <ul className="text-white/70 font-sans list-disc ml-5">
            {achievement.points.map((point: any, i: any) => (
              <li key={i} className="mb-2">
                {point}
              </li>
            ))}
          </ul>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default AchievementsTimeline;
