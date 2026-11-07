import type { Metadata } from "next";
import { LanguageProvider, Language } from "@/context/LanguageContext";
import HtmlLangSync from "@/components/HtmlLangSync";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import ServicesSection from "@/components/ServicesSection";
import AllProjectsAndJourney from "@/components/AllProjectsAndJourney";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import LocationConsentBanner from "@/components/LocationConsentBanner";

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: { lang?: string };
}): Promise<Metadata> {
  const isEn = searchParams?.lang === "en";

  if (isEn) {
    return {
      title: "Zidan Irfan Zaky (ZidZaky) - Software Engineer & Full-Stack Developer",
      description:
        "Official portfolio of Zidan Irfan Zaky (ZidZaky) — Software Engineer, Full-Stack Developer, and UI/UX Designer graduated from Telkom University Surabaya (GPA 3.96/4.00, TOEIC 915).",
      openGraph: {
        locale: "en_US",
        title: "Zidan Irfan Zaky (ZidZaky) - Software Engineer & Full-Stack Developer",
        description:
          "Official portfolio of Zidan Irfan Zaky (ZidZaky) — Software Engineer & Full-Stack Developer graduated from Telkom University Surabaya (GPA 3.96/4.00, TOEIC 915).",
      },
    };
  }

  return {
    title: "Zidan Irfan Zaky (ZidZaky) - Software Engineer & Full-Stack Developer",
    description:
      "Zidan Irfan Zaky (ZidZaky), Software Engineer & Full-Stack Developer lulusan Telkom University Surabaya (IPK 3.96). Portofolio 24 proyek web, mobile & QA.",
    openGraph: {
      locale: "id_ID",
    },
  };
}

export default function HomePage({
  searchParams,
}: {
  searchParams?: { lang?: string };
}) {
  const initialLang: Language = searchParams?.lang === "en" ? "en" : "id";

  return (
    <LanguageProvider initialLang={initialLang}>
      <HtmlLangSync />
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
    </LanguageProvider>
  );
}
