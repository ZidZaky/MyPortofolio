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

const BASE_URL = "https://zidzaky-portfolio.vercel.app";

// Shared OpenGraph base so page-level metadata does NOT wipe the images/url/type
// defined in the root layout (Next.js shallow-merges openGraph as one field).
function buildOpenGraph(locale: "id_ID" | "en_US") {
  return {
    locale,
    url: BASE_URL,
    siteName: "Zidan Irfan Zaky Portfolio",
    type: "profile",
    alternateLocale: [locale === "id_ID" ? "en_US" : "id_ID"],
    images: [
      {
        url: "/images/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "Zidan Irfan Zaky (ZidZaky) - Software Engineer Portfolio Banner",
      },
      {
        url: "/images/zidan-full.jpg",
        width: 800,
        height: 600,
        alt: "Zidan Irfan Zaky - Telkom University Surabaya Graduation",
      },
    ],
  };
}

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
        ...buildOpenGraph("en_US"),
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
      ...buildOpenGraph("id_ID"),
      title: "Zidan Irfan Zaky (ZidZaky) - Software Engineer & Full-Stack Developer",
      description:
        "Portofolio resmi Zidan Irfan Zaky (ZidZaky). Software Engineer lulusan Telkom University Surabaya (IPK 3.96/4.00, TOEIC 915) dengan 24 proyek software.",
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
