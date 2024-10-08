"use client";
import SectionHeader from "@components/SectionHeader";
import Card from "@components/Card";
import bookImage from "@public/assets/images/book-cover.png";
import Image from "next/image";
import mapImage from "@public/assets/images/map.png";
import smileMemoji from "@public/assets/images/memoji-smile.png";
import CardHeader from "@components/CardHeader";
import ToolboxItems from "@components/ToolboxItems";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaDocker,
  FaJava,
  FaBootstrap,
  FaSearch,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiCplusplus,
  SiC,
  SiFlask,
  SiDjango,
  SiGraphql,
  SiFirebase,
  SiSwagger,
  SiJenkins,
  SiPrisma,
  SiGooglecloud,
  SiExpress,
} from "react-icons/si";
import { RiFirebaseLine } from "react-icons/ri";
import JsIcon from "@public/assets/icons/square-js.svg";
import { useRef } from "react";

const toolboxItems = [
  {
    title: "React",
    iconType: FaReact,
  },
  {
    title: "Next.js",
    iconType: SiNextdotjs,
  },
  {
    title: "Node.js",
    iconType: FaNodeJs,
  },
  {
    title: "Express.js",
    iconType: SiExpress,
  },
  {
    title: "MongoDB",
    iconType: SiMongodb,
  },
  {
    title: "JavaScript",
    iconType: JsIcon,
  },
  {
    title: "TypeScript",
    iconType: SiTypescript,
  },
  {
    title: "HTML5",
    iconType: FaHtml5,
  },
  {
    title: "CSS",
    iconType: FaCss3Alt,
  },
  {
    title: "Redux.js",
    iconType: SiRedux,
  },
  {
    title: "NextAuth.js",
    iconType: SiNextdotjs,
  },
  {
    title: "Python",
    iconType: FaPython,
  },
  {
    title: "Java",
    iconType: FaJava,
  },
  {
    title: "C++",
    iconType: SiCplusplus,
  },
  {
    title: "C Programming",
    iconType: SiC,
  },
  {
    title: "Flask",
    iconType: SiFlask,
  },
  {
    title: "Django",
    iconType: SiDjango,
  },
  {
    title: "Bootstrap",
    iconType: FaBootstrap,
  },
  {
    title: "Tailwind CSS",
    iconType: SiTailwindcss,
  },
  {
    title: "PostgreSQL",
    iconType: SiPostgresql,
  },
  {
    title: "MySQL",
    iconType: SiMysql,
  },
  {
    title: "Prisma",
    iconType: SiPrisma,
  },
  {
    title: "Docker",
    iconType: FaDocker,
  },
  {
    title: "Google Cloud Platform",
    iconType: SiGooglecloud,
  },
  {
    title: "Firebase",
    iconType: RiFirebaseLine,
  },
  {
    title: "Jenkins",
    iconType: SiJenkins,
  },
  {
    title: "GraphQL",
    iconType: SiGraphql,
  },
  {
    title: "Swagger",
    iconType: SiSwagger,
  },
  {
    title: "Information Retrieval Techniques",
    iconType: FaSearch,
  },
];
const hobbies = [
  {
    title: "Reading Novels",
    emoji: "📚",
    styles: {
      default: "left-[5%] top-[5%]",
      sm: "left-[10%] top-[10%]",
    },
  },
  {
    title: "Listening to Music",
    emoji: "🎵",
    styles: {
      default: "left-[50%] top-[15%]",
      sm: "left-[40%] top-[20%]",
    },
  },
  {
    title: "Watching TV Shows",
    emoji: "📺",
    styles: {
      default: "left-[10%] top-[75%]",
      sm: "left-[20%] top-[70%]",
    },
  },
  {
    title: "Watching Movies",
    emoji: "🎬",
    styles: {
      default: "left-[35%] top-[40%]",
      sm: "left-[30%] top-[50%]",
    },
  },
  {
    title: "Gaming",
    emoji: "🎮",
    styles: {
      default: "left-[70%] top-[45%]",
      sm: "left-[60%] top-[55%]",
    },
  },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow=" About Me"
          title="A Glimpse Into My World"
          description="I'm a software engineer with a passion for building digital products that solve real-world problems. I specialize in front-end development and have experience working with a variety of technologies."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the stories that fuel my creativity and shape my coding journey"
              />
              <div className="w-40 mx-auto mt-0">
                <Image src={bookImage} alt="Book" />
              </div>
              {/* <div className="px-6 py-4">
                <h3 className="font-bold text-lg">
                  Omniscient Reader’s Viewpoint
                </h3>
                <p className="text-gray-700 mt-2">
                  A captivating web novel that inspires me with its complex
                  storytelling and strategic thinking. Just like in ORV, where
                  the protagonist navigates a world full of challenges and
                  unknowns, I approach full-stack development with the same
                  resilience and adaptability.
                </p>
              </div> */}
            </Card>

            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences"
                className="px-6 pt-6"
              />
              <ToolboxItems
                toolboxItems={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-left [animation-duration:100s] [animation-delay:1s]"
              />
              <ToolboxItems
                toolboxItems={toolboxItems}
                className="mt-6 "
                itemsWrapperClassName="animate-move-right [animation-duration:100s] [animation-delay:1s] "
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
            <Card className=" h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm"
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className={`inline-flex gap-2 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full items-center absolute ${hobby.styles.default} sm:${hobby.styles.sm}`}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 size-20 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full  after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 "></div>
                <Image src={smileMemoji} alt="Memoji" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
