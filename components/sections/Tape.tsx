"use client";
import StarIcon from "@public/assets/icons/star.svg";
import { Fragment, useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

const alternateWords = [
  "Intuitive",
  "Engaging",
  "Customizable",
  "Dynamic",
  "Modern",
  "Optimized",
  "Efficient",
  "Seamless",
  "Innovative",
  "Functional",
  "Flexible",
];

export const TapeSection = () => {
  // Track which tape is being hovered
  const [hoveredTape, setHoveredTape] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Get scroll position for parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Transform scrollYProgress for each tape
  const topTapeY = useTransform(scrollYProgress, [0, 1], [-10, 20]);
  const middleTapeY = useTransform(scrollYProgress, [0, 1], [5, -15]);
  const bottomTapeY = useTransform(scrollYProgress, [0, 1], [-15, 10]);
  
  // Change speed on hover
  const getAnimationSpeed = (tapeIndex: number) => {
    if (hoveredTape === tapeIndex) {
      return "20s"; // Slower when hovered
    }
    return ["60s", "50s", "55s"][tapeIndex];
  };
  
  const [speedStates, setSpeedStates] = useState(["60s", "50s", "55s"]);
  
  useEffect(() => {
    setSpeedStates([
      getAnimationSpeed(0),
      getAnimationSpeed(1),
      getAnimationSpeed(2)
    ]);
  }, [hoveredTape]);
  
  // Tape variants with different visual styles
  const tapeStyles = [
    {
      bg: "from-emerald-400 to-sky-500",
      shadowColor: "shadow-emerald-500/30",
      borderColor: "border-sky-500/40",
      rotate: "-12deg",
      hoverRotate: "-10deg",
      direction: "left",
      translateY: "-20px"
    },
    {
      bg: "from-sky-500 to-emerald-400",
      shadowColor: "shadow-sky-500/30",
      borderColor: "border-emerald-500/40",
      rotate: "8deg",
      hoverRotate: "6deg",
      direction: "right",
      translateY: "0px"
    },
    {
      bg: "from-violet-500 to-fuchsia-500",
      shadowColor: "shadow-violet-500/30", 
      borderColor: "border-fuchsia-500/40",
      rotate: "-10deg",
      hoverRotate: "-8deg",
      direction: "left",
      translateY: "20px"
    },
  ];

  return (
    <div ref={containerRef} className="relative py-24 sm:py-32 lg:py-40 max-w-7xl overflow-hidden ">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-24 h-24 border-4 border-emerald-500/10 rotate-12 hidden md:block"></div>
      <div className="absolute bottom-40 right-10 w-32 h-32 border-4 border-sky-500/10 rounded-full hidden md:block"></div>
      
      <motion.div 
        className="absolute top-40 right-20"
        animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 0.9, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <StarIcon className="w-12 h-12 text-amber-500/20" />
      </motion.div>
      
      <div className="relative w-screen -mx-[calc(50vw-50%)]">
        {/* Tapes */}
        {tapeStyles.map((style, index) => (
          <motion.div 
            key={`tape-${index}`}
            className="relative mb-16"
            style={{ 
              y: [topTapeY, middleTapeY, bottomTapeY][index],
              transform: `translateY(${style.translateY})`,
              zIndex: 10 - index
            }}
            onMouseEnter={() => setHoveredTape(index)}
            onMouseLeave={() => setHoveredTape(null)}
          >
            {/* Offset shadow for neo-brutalist effect */}
            <div className={cn(
              "absolute inset-0 bg-black/5 rounded-md",
              "transform translate-x-3 translate-y-3"
            )}></div>
            
            <motion.div 
              className={cn(
                `bg-gradient-to-r ${style.bg}`,
                "border-2 border-white/20",
                `${style.shadowColor} shadow-[6px_6px_0px_0px]`,
                "transition-all duration-500 ease-out",
                "overflow-hidden"
              )}
              style={{ 
                transform: `rotate(${style.rotate})`,
                width: "150%",
                marginLeft: "-25%",
              }}
              whileHover={{ 
                scale: 1.02, 
                rotate: style.hoverRotate,
              }}
            >
              <div className={cn(
                "flex overflow-hidden",
                "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
              )}>
                <div 
                  className={cn(
                    "flex flex-none gap-4 sm:gap-8 py-4 sm:py-6",
                    style.direction === "left" ? "animate-move-left" : "animate-move-right"
                  )}
                  style={{ animationDuration: speedStates[index] }}
                >
                  {[...new Array(2)].map((_, dupIndex) => (
                    <Fragment key={`${index}-${dupIndex}`}>
                      {(index === 2 ? alternateWords : index === 1 ? words.reverse() : words).map((word, wordIndex) => (
                        <motion.div
                          key={`${word}-${wordIndex}`}
                          className="inline-flex gap-3 sm:gap-5 items-center group"
                          whileHover={{ 
                            scale: 1.15, 
                            rotate: [0, -5, 5, 0],
                            transition: { duration: 0.5 }
                          }}
                        >
                          {style.direction === "right" && (
                            <motion.div 
                              whileHover={{ rotate: 180 }}
                              transition={{ duration: 0.3 }}
                            >
                              <StarIcon className="size-4 sm:size-6 text-white group-hover:text-yellow-200 transition-colors" />
                            </motion.div>
                          )}
                          
                          <motion.span 
                            className={cn(
                              "text-white uppercase font-black text-sm sm:text-lg md:text-xl tracking-wider",
                              "bg-clip-text group-hover:text-transparent",
                              style.direction === "left" 
                                ? "group-hover:bg-gradient-to-r from-yellow-200 via-white to-yellow-200" 
                                : "group-hover:bg-gradient-to-l from-yellow-200 via-white to-yellow-200",
                              "transition-all duration-300"
                            )}
                          >
                            {word}
                          </motion.span>
                          
                          {style.direction === "left" && (
                            <motion.div 
                              whileHover={{ rotate: 180 }}
                              transition={{ duration: 0.3 }}
                            >
                              <StarIcon className="size-4 sm:size-6 text-white group-hover:text-yellow-200 transition-colors" />
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </Fragment>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
