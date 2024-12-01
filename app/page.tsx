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
// import { Header } from "@sections/Header";
// import { HeroSection } from "@/sections/Hero";
// import { ProjectsSection } from "@sections/Projects";
// import { TapeSection } from "@sections/Tape";
// import { AboutSection } from "@sections/About";
// import { ContactSection } from "@sections/Contact";
// import AchievementsList from "@sections/Achievements";
import SocialIcons from "@components/SocialIcons";
import Loading from "@components/Loading";
import { Testimonials } from "@components/sections/Testimonials";
import { LazyMotion, domAnimation, m } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div>
        <Header />
        <SocialIcons />
        <div id="home">
          <HeroSection />
        </div>
        <div id="work">
          <WorkExperienceSection/>
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="tape">
          <TapeSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="testimonials">
          <Testimonials/>
        </div>
        <div id="achievement">
          <AchievementsList />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </m.div>
    </LazyMotion>
  );
}
