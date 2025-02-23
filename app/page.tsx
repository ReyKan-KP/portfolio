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
import { AnimatedGradient } from "@components/ui/components/ui/animated-gradient";
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

    // Update current section on scroll
    const handleScroll = () => {
      const newSection = getCurrentSection();
      if (newSection !== currentSection) {
        setCurrentSection(newSection);
      }
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

  return (
    <LazyMotion features={domAnimation}>
      <m.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {/* Fixed background gradient */}
        <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 -z-10" />
        
        {/* Animated background elements */}
        <div className="fixed inset-0 -z-5">
          <AnimatedGradient />
        </div>

        <Header />
        <SocialIcons />

        <AnimatePresence mode="wait">
          <m.main 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <section id="home" className="min-h-screen">
              <HeroSection />
            </section>

            <section id="work" className="min-h-screen">
              <WorkExperienceSection />
            </section>


            <section id="projects" className="min-h-screen">
              <ProjectsSection />
            </section>

            <section id="about" className="min-h-screen">
              <AboutSection />
            <TapeSection />
            </section>

            <section id="testimonials">
              <Testimonials />
            </section>

            <section id="achievement">
              <AchievementsList />
            </section>

            <section id="contact">
              <ContactSection />
            </section>

            <Footer />
          </m.main>
        </AnimatePresence>

        {/* Progress indicator */}
        <div className="fixed right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
          {["home", "work", "projects", "about", "testimonials", "achievement", "contact"].map((section) => (
            <m.div
              key={section}
              className="w-2 h-2 rounded-full cursor-pointer"
              animate={{
                scale: currentSection === section ? 1.5 : 1,
                backgroundColor: currentSection === section ? "#10B981" : "#6B7280",
              }}
              whileHover={{
                scale: 1.5,
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
            />
          ))}
        </div>
      </m.div>
    </LazyMotion>
  );
}
