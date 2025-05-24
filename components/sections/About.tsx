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
  Sparkles,
  BookOpen,
  Wrench,
  MapPin,
  Coffee,
  Music,
  Tv,
  Film,
  Gamepad,
} from "lucide-react";
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
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// Add custom CSS for boundary flash
import { styled } from "@stitches/react";

const BoundaryContainer = styled('div', {
  position: 'relative',
  '&.flash-boundary': {
    animation: 'flash-animation 300ms ease',
  },
  '@keyframes flash-animation': {
    '0%': { boxShadow: 'inset 0 0 0 2px rgba(255, 255, 255, 0.1)' },
    '50%': { boxShadow: 'inset 0 0 0 2px rgba(255, 255, 255, 0.6)' },
    '100%': { boxShadow: 'inset 0 0 0 2px rgba(255, 255, 255, 0.1)' },
  },
});

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
    icon: <BookOpen className="size-4 text-white" />,
    styles: {
      rotate: "-3deg",
      bg: "from-blue-500/70 to-purple-500/70",
      borderColor: "border-blue-500/40",
      shadowColor: "shadow-blue-500/30",
      position: "top-8 left-8",
    },
  },
  {
    title: "Listening to Music",
    icon: <Music className="size-4 text-white" />,
    styles: {
      rotate: "2deg",
      bg: "from-emerald-500/70 to-sky-500/70",
      borderColor: "border-emerald-500/40",
      shadowColor: "shadow-emerald-500/30",
      position: "top-20 right-16",
    },
  },
  {
    title: "Watching TV Shows",
    icon: <Tv className="size-4 text-white" />,
    styles: {
      rotate: "-2deg",
      bg: "from-rose-500/70 to-orange-500/70",
      borderColor: "border-rose-500/40",
      shadowColor: "shadow-rose-500/30",
      position: "bottom-10 left-10",
    },
  },
  {
    title: "Watching Movies",
    icon: <Film className="size-4 text-white" />,
    styles: {
      rotate: "3deg",
      bg: "from-violet-500/70 to-indigo-500/70",
      borderColor: "border-violet-500/40",
      shadowColor: "shadow-violet-500/30",
      position: "top-32 left-40",
    },
  },
  {
    title: "Gaming",
    icon: <Gamepad className="size-4 text-white" />,
    styles: {
      rotate: "-1deg",
      bg: "from-amber-500/70 to-yellow-500/70",
      borderColor: "border-amber-500/40",
      shadowColor: "shadow-amber-500/30",
      position: "bottom-32 right-10",
    },
  },
];

// Animation variants
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const toolItemVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 }
  },
  hover: { 
    scale: 1.1, 
    y: -5,
    transition: { type: "spring", stiffness: 300, damping: 10 }
  }
};

export const AboutSection = () => {
  const constraintRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState<{[key: string]: boolean}>({});
  // Track the current positions of each hobby item
  const [hobbyPositions, setHobbyPositions] = useState<{[key: string]: {x: number, y: number}}>({});
  // Store container dimensions
  const [containerBounds, setContainerBounds] = useState({ width: 0, height: 0 });

  // Set up container bounds on first render and window resize
  useEffect(() => {
    const updateBounds = () => {
      if (constraintRef.current) {
        const rect = constraintRef.current.getBoundingClientRect();
        setContainerBounds({ width: rect.width, height: rect.height });
      }
    };

    // Initial update
    updateBounds();
    
    // Update on resize
    window.addEventListener('resize', updateBounds);
    return () => window.removeEventListener('resize', updateBounds);
  }, []);

  // Keep items within bounds after dragging
  const checkBounds = (title: string, newPosition: {x: number, y: number}) => {
    const itemWidth = 120; // Approximate width of hobby items
    const itemHeight = 40; // Approximate height of hobby items
    const padding = 10; // Safety padding
    
    let { x, y } = newPosition;
    const maxX = containerBounds.width - itemWidth - padding;
    const maxY = containerBounds.height - itemHeight - padding;
    
    // Check if position would be out of bounds
    const hitBoundary = x < padding || x > maxX || y < padding || y > maxY;
    
    // Constrain within bounds with padding
    x = Math.max(padding, Math.min(x, maxX));
    y = Math.max(padding, Math.min(y, maxY));
    
    return { x, y, hitBoundary };
  };

  // Track dragging state for each hobby
  const handleDragStart = (title: string) => {
    setIsDragging(prev => ({...prev, [title]: true}));
  };
  
  const handleDragEnd = (title: string, info: any) => {
    setIsDragging(prev => ({...prev, [title]: false}));
    
    // Calculate new position
    const currentPos = hobbyPositions[title] || { x: 0, y: 0 };
    const newPosition = { 
      x: currentPos.x + info.offset.x,
      y: currentPos.y + info.offset.y
    };
    
    // Constrain within bounds
    const { x, y, hitBoundary } = checkBounds(title, newPosition);
    
    // Store the constrained position
    setHobbyPositions(prev => ({
      ...prev,
      [title]: { x, y }
    }));
    
    // Show border flash effect if hitting boundary
    if (hitBoundary && constraintRef.current) {
      const container = constraintRef.current;
      container.classList.add('flash-boundary');
      setTimeout(() => {
        container.classList.remove('flash-boundary');
      }, 300);
    }
  };

  // Function to generate random motion from current position
  const getRandomMotion = (index: number, title: string) => {
    // Get current position or default to 0,0
    const currentPos = hobbyPositions[title] || { x: 0, y: 0 };
    const range = 5 + (index * 2);
    
    // Constrain animations to stay within bounds
    const constrainedMotion = {
      x: [
        currentPos.x,
        currentPos.x - Math.min(range, currentPos.x),
        currentPos.x + Math.min(range/2, containerBounds.width - currentPos.x - 100),
        currentPos.x - Math.min(range/2, currentPos.x),
        currentPos.x
      ],
      y: [
        currentPos.y, 
        currentPos.y + Math.min(range/2, containerBounds.height - currentPos.y - 40),
        currentPos.y - Math.min(range, currentPos.y),
        currentPos.y + Math.min(range, containerBounds.height - currentPos.y - 40),
        currentPos.y
      ],
      rotate: [`${hobbies[index].styles.rotate}`, `-2deg`, `3deg`, `-1deg`, `${hobbies[index].styles.rotate}`],
      opacity: 1, // Ensure opacity is always 1
      scale: [1, 1.02, 0.98, 1.01, 1],
      transition: {
        duration: 8 + index * 2,
        repeat: Infinity,
        repeatType: "mirror" as const,
        ease: "easeInOut",
        delay: index * 0.2,
      }
    };
    
    return constrainedMotion;
  };

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
        <Sparkles className="w-12 h-12 text-amber-500/20" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
        >
          <SectionHeader
            eyebrow="About Me"
            title="A Glimpse Into My World"
            description="I'm a software engineer with a passion for building digital products that solve real-world problems. I specialize in front-end development and have experience working with a variety of technologies."
          />
        </motion.div>

        <div className="mt-16 md:mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* My Reads Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              className="lg:col-span-1"
            >
              <div className={cn(
                "relative overflow-hidden h-[320px]",
                "rotate-[-2deg] hover:rotate-0",
                "transition-all duration-500"
              )}>
                {/* Neo-brutalist card */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl border-2 border-blue-500/40 shadow-[6px_6px_0px_0px] shadow-blue-500/30"></div>
                
                <div className="relative h-full p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20">
                      <BookOpen className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">My Reads</h3>
                      <p className="text-sm text-white/70">Books that inspire me</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex items-center justify-center">
                    <motion.div 
                      className="w-40 mx-auto"
                      whileHover={{ 
                        scale: 1.05,
                        rotate: [0, -5, 5, 0],
                        transition: { 
                          rotate: { repeat: 0, duration: 0.5 },
                          scale: { duration: 0.3 }
                        }
                      }}
                    >
                      <Image 
                        src={bookImage} 
                        alt="Book"
                        className="w-full h-full object-contain drop-shadow-xl"
                      />
                      
                      {/* Decorative sparkle */}
                      <motion.div 
                        className="absolute top-3 right-3 text-amber-400"
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 0.9, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Sparkles size={16} />
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <p className="text-sm text-white/70 font-medium">Explore the stories that fuel my creativity and shape my coding journey</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* My Toolbox Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              className="md:col-span-3 lg:col-span-2"
            >
              <div className={cn(
                "relative overflow-hidden h-[320px]",
                "rotate-[1deg] hover:rotate-0",
                "transition-all duration-500"
              )}>
                {/* Neo-brutalist card */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-sky-500/20 rounded-xl border-2 border-emerald-500/40 shadow-[6px_6px_0px_0px] shadow-emerald-500/30"></div>
                
                <div className="relative h-full p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20">
                      <Wrench className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">My Toolbox</h3>
                      <p className="text-sm text-white/70">Technologies I work with</p>
                    </div>
                  </div>
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
                  {/* <div className="relative overflow-hidden">
                    <div className="flex flex-wrap gap-2 mt-4">
                      {toolboxItems.slice(0, 15).map((tool, index) => (
                        <motion.div
                          key={tool.title}
                          className="relative group"
                          variants={toolItemVariant}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          whileHover="hover"
                          custom={index}
                          transition={{ delay: index * 0.05 }}
                        >
                          <motion.div 
                            className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-md border border-white/20 shadow-[2px_2px_0px_0px] shadow-white/10 group-hover:shadow-[4px_4px_0px_0px] group-hover:-translate-y-1 group-hover:-translate-x-1 transition-all duration-300"
                          ></motion.div>
                          <div className="relative flex items-center gap-2 px-3 py-2">
                            <div className="w-5 h-5 text-emerald-400">
                              {typeof tool.iconType === "function" ? 
                                <tool.iconType className="w-full h-full" /> : 
                                <tool.iconType width="100%" height="100%" />
                              }
                            </div>
                            <span className="text-xs font-medium text-white/80">{tool.title}</span>
                          </div>
                        </motion.div>
                      ))}
                      
                      <motion.div
                        className="relative group mt-1"
                        variants={toolItemVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover="hover"
                        transition={{ delay: 0.8 }}
                      >
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 to-sky-500/30 rounded-md border border-white/20 shadow-[2px_2px_0px_0px] shadow-white/10 group-hover:shadow-[4px_4px_0px_0px] group-hover:-translate-y-1 group-hover:-translate-x-1 transition-all duration-300"
                        ></motion.div>
                        <div className="relative flex items-center gap-2 px-3 py-2">
                          <span className="text-xs font-medium text-white">And many more...</span>
                        </div>
                      </motion.div>
                    </div>
                  </div> */}
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 lg:grid-cols-3">
            {/* Beyond the Code Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              className="md:col-span-3 lg:col-span-2"
            >
              <div className={cn(
                "relative overflow-hidden h-[320px]",
                "rotate-[-1deg] hover:rotate-0",
                "transition-all duration-500"
              )}>
                {/* Neo-brutalist card */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-xl border-2 border-amber-500/40 shadow-[6px_6px_0px_0px] shadow-amber-500/30"></div>
                
                <div className="relative h-full p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20">
                      <Coffee className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Beyond the Code</h3>
                      <p className="text-sm text-white/70">My interests and hobbies</p>
                    </div>
                  </div>
                  
                  <div 
                    className="relative h-[200px] w-full overflow-hidden mt-4 border-2 border-dashed border-white/10 rounded-lg p-2" 
                    ref={constraintRef}
                  >
                    {/* Visual indicator for collision boundaries */}
                    <div className="absolute inset-0 pointer-events-none rounded-lg bg-gradient-to-br from-transparent to-white/5"></div>
                    
                    {hobbies.map((hobby, index) => (
                      <motion.div
                        key={hobby.title}
                        className={cn(
                          "absolute inline-flex items-center gap-2 px-3 py-2",
                          `bg-gradient-to-r ${hobby.styles.bg} rounded-md`,
                          "border-2 border-white/30",
                          "cursor-grab active:cursor-grabbing",
                          `rotate-[${hobby.styles.rotate}]`,
                          hobby.styles.position
                        )}
                        drag
                        dragConstraints={constraintRef}
                        dragElastic={0.2}
                        dragMomentum={true}
                        dragTransition={{ 
                          bounceStiffness: 600, 
                          bounceDamping: 15,
                          power: 0.2
                        }}
                        onDragStart={() => handleDragStart(hobby.title)}
                        onDragEnd={(e, info) => handleDragEnd(hobby.title, info)}
                        // Apply random motion animation only when not being dragged
                        animate={isDragging[hobby.title] ? 
                          { opacity: 1, scale: 1 } : 
                          { ...getRandomMotion(index, hobby.title) }
                        }
                        style={{
                          x: hobbyPositions[hobby.title]?.x || 0,
                          y: hobbyPositions[hobby.title]?.y || 0,
                          zIndex: isDragging[hobby.title] ? 10 : 1,
                          opacity: 1, // Always visible
                        }}
                        whileHover={{ 
                          scale: 1.05, 
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                          rotate: 0,
                          zIndex: 10
                        }}
                        whileTap={{ scale: 1.02, zIndex: 10 }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        // This animation is for the initial appearance only
                        // The random motion is controlled by the animate prop above
                        transition={{ 
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                          delay: index * 0.1 
                        }}
                      >
                        <div className="bg-white/10 backdrop-blur-sm p-1 rounded-full">
                          {hobby.icon}
                        </div>
                        <span className="font-medium text-white text-sm">
                          {hobby.title}
                        </span>
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 2 + index,
                            repeatType: "mirror"
                          }}
                          className="ml-1"
                        >
                          {index === 0 && "📚"}
                          {index === 1 && "🎵"}
                          {index === 2 && "📺"}
                          {index === 3 && "🎬"}
                          {index === 4 && "🎮"}
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              className="md:col-span-2 lg:col-span-1"
            >
              <div className={cn(
                "relative overflow-hidden h-[320px]",
                "rotate-[2deg] hover:rotate-0",
                "transition-all duration-500"
              )}>
                {/* Neo-brutalist card */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-indigo-500/20 rounded-xl border-2 border-violet-500/40 shadow-[6px_6px_0px_0px] shadow-violet-500/30"></div>
                
                <div className="relative h-full">
                  <div className="absolute inset-0 overflow-hidden rounded-xl">
                    <Image
                      src={mapImage}
                      alt="Map"
                      className="h-full w-full object-cover object-left-top opacity-60 transition-transform duration-1000 hover:scale-110"
                    />
                  </div>

                  <motion.div 
                    className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-[40%] size-16 z-10"
                    whileHover={{ scale: 1.1 }}
                    animate={{ 
                      y: [0, -15, 0],
                    }}
                    transition={{ 
                      y: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/80 to-sky-500/80 rounded-full"></div>
                    <div className="absolute -inset-1 rounded-full border-2 border-white/30"></div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500 -z-10 animate-ping [animation-duration:3s] opacity-30"></div>
                    <Image src="/images/kp.png" alt="Memoji" 
                    fill
                    className="hover:rotate-12 transition-transform duration-300 object-contain rounded-full " />
                  </motion.div>
                  
                  {/* Location pin */}
                  <div className="absolute top-6 right-6 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/20">
                    <MapPin className="w-4 h-4 text-rose-400" />
                    <span className="text-xs font-medium text-white">India</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
