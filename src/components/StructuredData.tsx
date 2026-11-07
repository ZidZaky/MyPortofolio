import React from "react";
import { uiTranslations } from "@/data/portfolioData";

export default function StructuredData() {
  const baseUrl = "https://zidzaky-portfolio.vercel.app";
  const faqItems = uiTranslations.id.faq.items;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: "Zidan Irfan Zaky",
        alternateName: ["ZidZaky", "ZIDZAKY", "Zidan Zaky", "Zidan"],
        url: baseUrl,
        image: `${baseUrl}/images/zidan-full.jpg`,
        jobTitle: "Software Engineer",
        description:
          "Software Engineer, Full-Stack Developer, dan UI/UX Designer (nickname: ZidZaky) lulusan S1 Rekayasa Perangkat Lunak Telkom University Surabaya (IPK 3.96/4.00, TOEIC 915). Menguasai Next.js, TypeScript, Tailwind CSS, Flutter, dan Software QA.",
        gender: "Male",
        nationality: {
          "@type": "Country",
          name: "Indonesia",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Graha Sedati Mas, Buncitan, Sedati",
          addressLocality: "Sidoarjo",
          addressRegion: "Jawa Timur",
          addressCountry: "ID",
        },
        email: "mailto:zzidanirfan@gmail.com",
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Telkom University Surabaya",
          url: "https://surabaya.telkomuniversity.ac.id",
          sameAs: [
            "https://id.wikipedia.org/wiki/Universitas_Telkom",
            "https://surabaya.telkomuniversity.ac.id",
          ],
        },
        knowsAbout: [
          "Software Engineering",
          "Full-Stack Web Development",
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Node.js",
          "Mobile App Development",
          "Flutter",
          "Software Quality Assurance (QA)",
          "UI/UX Design",
          "Figma",
          "Enterprise Resource Planning (ERP)",
          "Game Development (Unity)",
          "C#",
          "Java",
        ],
        sameAs: [
          "https://github.com/ZidZaky",
          "https://www.linkedin.com/in/zidan-zaky",
          "https://instagram.com/zid.zaky",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Zidan Irfan Zaky Portfolio",
        alternateName: "ZidZaky",
        description:
          "Website personal portfolio software engineering resmi Zidan Irfan Zaky (nickname: ZidZaky).",
        publisher: {
          "@id": `${baseUrl}/#person`,
        },
        inLanguage: ["id-ID", "en-US"],
      },
      {
        "@type": "ProfilePage",
        "@id": `${baseUrl}/#webpage`,
        url: baseUrl,
        name: "Zidan Irfan Zaky (ZidZaky) - Software Engineer & Full-Stack Developer Portfolio",
        isPartOf: {
          "@id": `${baseUrl}/#website`,
        },
        about: {
          "@id": `${baseUrl}/#person`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${baseUrl}/images/hero-banner.png`,
          caption: "Zidan Irfan Zaky (ZidZaky) Portfolio Banner",
        },
        inLanguage: "id-ID",
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
