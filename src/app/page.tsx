import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ServicesSection from "@/components/ServicesSection";
import AllProjectsAndJourney from "@/components/AllProjectsAndJourney";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-dark">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProjects />
        <ServicesSection />
        <AllProjectsAndJourney />
      </main>
      <Footer />
    </div>
  );
}

