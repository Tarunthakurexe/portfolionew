import { ThemedToggle } from "../components/ThemedToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { Projects } from "../components/projects";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemedToggle/>
        <StarBackground/>
        <Navbar/>
        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <Projects/>
            <ContactSection/>
        </main>

        <Footer/>

    </div>
    );
};