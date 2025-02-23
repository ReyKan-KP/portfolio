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
import { useRef, useState } from "react";
import { useInView } from "framer-motion";

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

// Add fade-in animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const AboutSection = () => {
  const constraintRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInVariants}
        >
          <SectionHeader
            eyebrow="About Me"
            title="A Glimpse Into My World"
            description="I'm a software engineer with a passion for building digital products that solve real-world problems. I specialize in front-end development and have experience working with a variety of technologies."
          />
        </motion.div>

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={fadeInVariants}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.02}
                transitionSpeed={2000}
                className="h-full"
              >
                <Card className="h-[320px] md:col-span-2 lg:col-span-1 hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-gray-700/50 hover:to-gray-600/50 border border-white/5">
                  <CardHeader
                    title="My Reads"
                    description="Explore the stories that fuel my creativity and shape my coding journey"
                  />
                  <motion.div 
                    className="w-40 mx-auto mt-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image 
                      src={bookImage} 
                      alt="Book"
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </motion.div>
                </Card>
              </Tilt>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={fadeInVariants}
              className="md:col-span-3 lg:col-span-2"
            >
              <Card className="h-[320px] p-0 hover:shadow-xl transition-shadow duration-300">
                <CardHeader
                  title="My Toolbox"
                  description="Explore the technologies and tools I use to craft exceptional digital experiences"
                  className="px-6 pt-6"
                />
                <div className="relative overflow-hidden">
                  <ToolboxItems
                    toolboxItems={toolboxItems}
                    className="mt-6"
                    itemsWrapperClassName="animate-move-left [animation-duration:80s] hover:[animation-play-state:paused]"
                  />
                  <ToolboxItems
                    toolboxItems={toolboxItems}
                    className="mt-6"
                    itemsWrapperClassName="animate-move-right [animation-duration:80s] hover:[animation-play-state:paused]"
                  />
                </div>
              </Card>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              variants={fadeInVariants}
              className="md:col-span-3 lg:col-span-2"
            >
              <Card className="h-[320px] p-0 flex flex-col hover:shadow-xl transition-shadow duration-300">
                <CardHeader
                  title="Beyond the Code"
                  description="Explore my interests and hobbies beyond the digital realm"
                  className="px-6 py-6"
                />
                <div className="relative flex-1" ref={constraintRef}>
                  {hobbies.map((hobby, index) => (
                    <motion.div
                      key={hobby.title}
                      className={`inline-flex gap-2 px-6 py-1.5 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full items-center absolute ${hobby.styles.default} sm:${hobby.styles.sm} cursor-grab active:cursor-grabbing`}
                      drag
                      dragConstraints={constraintRef}
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <span className="font-medium text-gray-950">
                        {hobby.title}
                      </span>
                      <span className="animate-bounce">{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              variants={fadeInVariants}
              className="md:col-span-2 lg:col-span-1"
            >
              <Card className="h-[320px] p-0 relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={mapImage}
                  alt="Map"
                  className="h-full w-full object-cover object-left-top transition-transform duration-300 hover:scale-110"
                />
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  animate={{ 
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                  <Image src={smileMemoji} alt="Memoji" className="hover:rotate-12 transition-transform duration-300" />
                </motion.div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
