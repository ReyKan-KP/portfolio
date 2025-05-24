"use client";
import React, { useState, useEffect } from "react";
import { Header } from "@components/sections/Header";
import { HeroSection } from "@components/sections/Hero";
import { ProjectsSection } from "@components/sections/Projects";
import { TapeSection } from "@components/sections/Tape";
import { AboutSection } from "@components/sections/About";
import { ContactSection } from "@components/sections/Contact";
import AchievementsList from "@components/sections/Achievements";
import WorkExperienceSection from "@components/sections/WorkExperience";
import SocialIcons from "@components/SocialIcons";
import Loading from "@components/Loading";
import { Testimonials } from "@components/sections/Testimonials";
import { LazyMotion, domAnimation, m, AnimatePresence } from "framer-motion";
import { Footer } from "@components/sections/Footer";
import { AnimatedGradient } from "@components/ui/animated-gradient";
import { Sparkles, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
// Remove or comment out the smooth-scroll library code since we'll use native behavior
// if (typeof window !== 'undefined') {
//   require('smooth-scroll')('a[href*="#"]', {
//     speed: 800,
//     speedAsDuration: true,
//     easing: 'easeInOutQuart'
//   });
// }
interface HTMLElement {
  id: string;
}
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);

    // Function to get the section closest to the viewport center
    const getCurrentSection = () => {
      const sections = Array.from(document.querySelectorAll("section[id]"));
      let closestSection: Element | null = null;
      let closestDistance = Infinity;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = section;
        }
      });
      
      return closestSection ? ((closestSection as unknown) as HTMLElement).id : "home";
    };

    // Calculate scroll progress
    const handleScroll = () => {
      // Update current section
      const newSection = getCurrentSection();
      if (newSection !== currentSection) {
        setCurrentSection(newSection);
      }

      // Calculate scroll progress percentage
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / windowHeight;
      setScrollProgress(scrolled);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSection]);

  if (loading) {
    return <Loading />;
  }

  const sectionIds = ["home", "work", "projects", "about", "testimonials", "achievement", "contact"];

  return (
    <LazyMotion features={domAnimation}>
      <m.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        {/* Fixed background gradient */}
        <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 -z-10" />
        
        {/* Animated background elements */}
        <div className="fixed inset-0 -z-5">
          <AnimatedGradient />
        </div>

        {/* Decorative neo-brutalist elements */}
        <div className="fixed inset-0 -z-5 overflow-hidden">
          
          <m.div 
            className="absolute w-32 h-32 md:w-64 md:h-64 rounded-full bg-emerald-500/10 blur-3xl"
            animate={{
              x: [-20, 30, -20],
              y: [50 + scrollProgress * 400, 100 + scrollProgress * 500, 50 + scrollProgress * 400],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <m.div 
            className="absolute right-0 w-40 h-40 md:w-80 md:h-80 rounded-full bg-blue-500/10 blur-3xl"
            animate={{
              x: [20, -30, 20],
              y: [300 - scrollProgress * 200, 400 - scrollProgress * 300, 300 - scrollProgress * 200],
              rotate: [0, -180, -360],
              scale: [1.2, 1, 1.2]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <m.div 
            className="absolute left-1/3 w-24 h-24 md:w-48 md:h-48 rounded-full bg-amber-500/10 blur-3xl"
            animate={{
              x: [-40, 30, -40],
              y: [600 + scrollProgress * 300, 700 + scrollProgress * 400, 600 + scrollProgress * 300],
              rotate: [0, 90, 180],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Grid pattern overlay */}
        {/* <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-[0.02] -z-5"></div> */}
        
        <div className="z-50">
          <Header />
        </div>
          
        <SocialIcons />

        {/* Progress bar */}
        <m.div 
          className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-50"
          style={{ scaleX: scrollProgress }}
        />

        <AnimatePresence mode="wait">
          <m.main 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <section id="home" className="min-h-screen pt-20 min-w-screen">
              <HeroSection />
            </section>

            <section id="work" className="min-h-screen min-w-screen">
              <WorkExperienceSection />
            </section>

            <section id="projects" className="min-h-screen min-w-screen">
              <ProjectsSection />
            </section>

            <section id="about" className="min-h-screen min-w-screen">
              <AboutSection />
              <TapeSection />
            </section>

            <section id="testimonials" className="min-h-screen min-w-screen">
              <Testimonials />
            </section>

            <section id="achievement" className="min-h-screen min-w-screen pt-20">
              <AchievementsList />
            </section>

            <section id="contact" className=" min-w-screen">
              <ContactSection />
            </section>
            <div className="h-20"></div>
            <Footer />
          </m.main>
        </AnimatePresence>

        {/* Neo-brutalist navigation indicator */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-40">
          <m.div 
            className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg border-2 border-white/10 shadow-[4px_4px_0px_0px] shadow-emerald-500/20 -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          ></m.div>
          
          <div className="py-3 px-1">
            {sectionIds.map((section, index) => (
              <m.div
                key={section}
                className={cn(
                  "w-3 h-3 my-4 rounded-full cursor-pointer relative",
                  "transition-all duration-300 hover:scale-125",
                  currentSection === section ? "scale-125" : ""
                )}
                animate={{
                  backgroundColor: currentSection === section ? "#10B981" : "#6B7280",
                }}
                whileHover={{
                  backgroundColor: currentSection === section ? "#10B981" : "#9CA3AF",
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut"
                }}
                onClick={() => {
                  const element = document.getElementById(section);
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    });
                  }
                }}
              >
               
                
                {/* Subtle indicator of active section */}
                {currentSection === section && (
                  <m.span
                    className="absolute inset-0 rounded-full bg-emerald-500"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1.5 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ opacity: 0.3 }}
                  />
                )}
              </m.div>
            ))}
          </div>
        </div>
        
        {/* Scroll indicator for first load */}
        <m.div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-sm text-white/60"
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: [0, 1, 0], 
            y: [0, 10, 0] 
          }}
          transition={{ 
            repeat: 3, 
            duration: 2,
            delay: 1 
          }}
        >
          <span className="mb-1">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </m.div>
      </m.div>
    </LazyMotion>
  );
}
