import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ServicesSection from "@/components/ServicesSection";
import AllProjectsAndJourney from "@/components/AllProjectsAndJourney";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import LocationConsentBanner from "@/components/LocationConsentBanner";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-cream text-dark">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProjects />
        <ServicesSection />
        <AllProjectsAndJourney />
        <FaqSection />
      </main>
      <Footer />
      <LocationConsentBanner />
    </div>
  );
}
