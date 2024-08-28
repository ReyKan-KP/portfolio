import { Header } from "@components/sections/Header";
import { HeroSection } from "@components/sections/Hero";
import { ProjectsSection } from "@components/sections/Projects";
import { TapeSection } from "@components/sections/Tape";
import { AboutSection } from "@components/sections/About";
import { ContactSection } from "@components/sections/Contact";
import AchievementsList from "@components/sections/Achievements";
import SocialIcons from "@components/SocialIcons";

export default function Home() {
  return (
    <div>
      <Header />
      <SocialIcons />
      <div id="home">
        <HeroSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="tape">
        <TapeSection />
      </div>
      <div id="about">
        <AboutSection />
        <AchievementsList />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}

