"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionHeader from "@components/SectionHeader";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Kanishaka excelled in working with Next.js, managing both frontend and backend tasks efficiently. He was proactive, quick to learn, and a great team player. His contributions added real value to the project.",
      name: "Prathmesh Sadake",
      designation: "Software Engineer at Intellify (Build Fast With AI)",
      src: "/images/testimonials1.png",
      rating: 5,
      accentColor: "from-blue-500/20 to-purple-500/20",
      borderColor: "border-blue-500/40",
      shadowColor: "shadow-blue-500/30",
      rotate: "-2deg"
    },
    {
      quote:
        "Kanishaka is Great Developer and also as in person. He's always willing to work, excels in UI/UX, ships products efficiently, and has a good understanding of what's needed.",
      name: "Aaryan",
      designation: "Generative AI Developer at Intellify (Build Fast With AI)",
      src: "/images/testimonials2.png",
      rating: 5,
      accentColor: "from-emerald-500/20 to-sky-500/20",
      borderColor: "border-emerald-500/40",
      shadowColor: "shadow-emerald-500/30",
      rotate: "1deg"
    },
    {
      quote:
        "Kanishaka excelled in React and Next.js, showcasing strong problem-solving skills and a proactive mindset. His adaptability and teamwork greatly contributed to the project's success.",
      name: "Sanjeev Patel",
      designation: "Full Stack Developer at Intellify (Build Fast With AI)",
      src: "/images/testimonials3.png",
      rating: 5,
      accentColor: "from-amber-500/20 to-orange-500/20",
      borderColor: "border-amber-500/40",
      shadowColor: "shadow-amber-500/30",
      rotate: "-1deg"
    },
    // {
    //   quote:
    //     "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    //   name: "James Kim",
    //   designation: "Engineering Lead at DataPro",
    //   src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   quote:
    //     "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    //   name: "Lisa Thompson",
    //   designation: "VP of Technology at FutureNet",
    //   src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for previous

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="py-12 md:py-24 lg:py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border-4 border-emerald-500/10 rounded-lg rotate-12 hidden md:block"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 border-4 border-sky-500/10 rounded-full hidden md:block"></div>
      
      <motion.div 
        className="absolute top-1/4 left-1/3"
        animate={{ 
          rotate: [0, 360],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Sparkles className="w-24 h-24 text-amber-500/10" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          eyebrow="What People Say"
          title="Testimonials"
          description="Feedback from professionals I've worked with"
        />

        <div className="mt-8 md:mt-16 lg:mt-20 max-w-6xl mx-auto">
          <div ref={testimonialsRef} className="relative">
            {/* Large quote mark decorative element */}
            <motion.div 
              className="absolute -top-8 -left-4 md:-left-12 text-gray-200 opacity-20 transform -scale-x-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.2, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Quote className="w-12 h-12 md:w-24 md:h-24" />
            </motion.div>
            
            {/* Testimonial cards */}
            <div className="relative h-auto sm:h-[40rem] md:h-[24rem]">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className={cn(
                    "absolute inset-0 w-full transition-all duration-500",
                    index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  )}
                  initial={{ 
                    opacity: 0, 
                    x: direction === 1 ? 100 : direction === -1 ? -100 : 0,
                    scale: 0.95
                  }}
                  animate={{ 
                    opacity: index === currentIndex ? 1 : 0,
                    x: index === currentIndex ? 0 : direction === 1 ? -100 : 100,
                    scale: index === currentIndex ? 1 : 0.95
                  }}
                  transition={{ 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                >
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center h-full">
                    {/* Testimonial image */}
                    <motion.div 
                      className="w-full sm:w-3/4 md:w-2/5 mb-6 md:mb-0 mx-auto"
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ 
                        opacity: index === currentIndex ? 1 : 0, 
                        x: index === currentIndex ? 0 : -50 
                      }}
                      transition={{ duration: 0.4, delay: index === currentIndex ? 0.2 : 0 }}
                    >
                      <div className={cn(
                        "relative",
                        `rotate-[${testimonial.rotate}]`,
                        "transition-all duration-300 hover:rotate-0 hover:-translate-y-2"
                      )}>
                        <div className={cn(
                          "absolute inset-0",
                          `border-2 ${testimonial.borderColor}`,
                          `shadow-[6px_6px_0px_0px] sm:shadow-[8px_8px_0px_0px] ${testimonial.shadowColor}`,
                          "rounded-xl"
                        )}></div>
                        <div className="relative p-2 sm:p-3 bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden aspect-square">
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-800/80"></div>
                          <Image
                            src={testimonial.src}
                            alt={testimonial.name}
                            className="rounded-lg object-cover"
                            fill
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                            <div className="flex items-center space-x-1">
                              {Array(testimonial.rating).fill(null).map((_, i) => (
                                <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Testimonial content */}
                    <motion.div 
                      className="w-full md:w-3/5"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ 
                        opacity: index === currentIndex ? 1 : 0, 
                        y: index === currentIndex ? 0 : 30 
                      }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index === currentIndex ? 0.3 : 0,
                        type: "spring"
                      }}
                    >
                      <div className={cn(
                        "relative p-5 sm:p-6 md:p-8",
                        `bg-gradient-to-br ${testimonial.accentColor}`,
                        "rounded-xl"
                      )}>
                        <div className={cn(
                          "absolute inset-0",
                          `border-2 ${testimonial.borderColor}`,
                          `shadow-[4px_4px_0px_0px] sm:shadow-[6px_6px_0px_0px] ${testimonial.shadowColor}`,
                          "rounded-xl"
                        )}></div>
                        
                        <blockquote className="relative z-10">
                          <p className="text-base sm:text-lg md:text-xl font-medium text-white leading-relaxed mb-4 sm:mb-6">
                            &quot;{testimonial.quote}&quot;
                          </p>
                          
                          <footer className="flex items-center">
                            <div>
                              <cite className="block font-bold text-white not-italic text-sm sm:text-base">
                                {testimonial.name}
                              </cite>
                              <span className="mt-1 text-xs sm:text-sm text-white/70">
                                {testimonial.designation}
                              </span>
                            </div>
                          </footer>
                        </blockquote>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Navigation controls */}
            <div className="flex justify-center mt-6 md:mt-12 gap-3">
              <motion.button
                onClick={handlePrevious}
                className={cn(
                  "relative p-2 sm:p-3 md:p-4 rounded-lg text-white",
                  "bg-white/5 backdrop-blur-sm",
                  "border-2 border-white/20",
                  "shadow-[2px_2px_0px_0px] sm:shadow-[3px_3px_0px_0px] shadow-white/10",
                  "hover:shadow-[3px_3px_0px_0px] sm:hover:shadow-[5px_5px_0px_0px] hover:-translate-y-1 hover:-translate-x-1",
                  "transition-all duration-300"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.button>
              
              <motion.button
                onClick={handleNext}
                className={cn(
                  "relative p-2 sm:p-3 md:p-4 rounded-lg text-white",
                  "bg-white/5 backdrop-blur-sm",
                  "border-2 border-white/20",
                  "shadow-[2px_2px_0px_0px] sm:shadow-[3px_3px_0px_0px] shadow-white/10",
                  "hover:shadow-[3px_3px_0px_0px] sm:hover:shadow-[5px_5px_0px_0px] hover:-translate-y-1 hover:-translate-x-1",
                  "transition-all duration-300"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </motion.button>
            </div>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center mt-4 sm:mt-6 gap-1.5 sm:gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={cn(
                  "w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-emerald-500 w-4 sm:w-6" : "bg-gray-500"
                )}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={{ 
                  opacity: index === currentIndex ? 1 : 0.6,
                  scale: index === currentIndex ? 1.1 : 1
                }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
