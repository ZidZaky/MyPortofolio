import React from "react";

export default function StructuredData() {
  const baseUrl = "https://zidzaky-portfolio.vercel.app";

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
        telephone: "+6288989694349",
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
        mainEntity: [
          {
            "@type": "Question",
            name: "Siapa itu Zidan Irfan Zaky (ZidZaky)?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Zidan Irfan Zaky (nama panggilan: ZidZaky) adalah seorang Software Engineer, Full-Stack Developer, dan UI/UX Designer asal Surabaya/Sidoarjo, Indonesia. Beliau merupakan lulusan S1 Rekayasa Perangkat Lunak Telkom University Surabaya dengan IPK 3.96/4.00 dan skor TOEIC 915.",
            },
          },
          {
            "@type": "Question",
            name: "Apa keahlian utama dan tech stack yang dikuasai Zidan Irfan Zaky?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Keahlian utama Zidan Irfan Zaky mencakup Full-Stack Web Development modern (Next.js 14, React, TypeScript, Tailwind CSS, Node.js), Mobile Development (Flutter), Software Quality Assurance (QA & testing), dan desain antarmuka pengguna (UI/UX Design berbasis Figma).",
            },
          },
          {
            "@type": "Question",
            name: "Berapa banyak proyek yang telah diselesaikan Zidan Irfan Zaky?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Zidan Irfan Zaky telah menyelesaikan lebih dari 24 repositori proyek software yang terdokumentasi di GitHub (github.com/ZidZaky), termasuk sistem Enterprise Chain ERP, platform Jelajah Kuliner, gim edukasi Zero Waste Odyssey (Unity), serta aplikasi web interaktif publik seperti PhotoBooth-PhotoRek dan TourAtur App.",
            },
          },
          {
            "@type": "Question",
            name: "Di mana Zidan Irfan Zaky menempuh pendidikan dan apa pencapaian akademiknya?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Zidan Irfan Zaky menempuh pendidikan S1 Rekayasa Perangkat Lunak di Telkom University Surabaya, lulus dengan IPK 3.96 dari skala 4.00. Selama perkuliahan, Zidan dipercaya sebagai Asisten Praktikum Pemrograman Berorientasi Objek & Rekayasa Perangkat Lunak serta aktif dalam kepemimpinan organisasi kemahasiswaan.",
            },
          },
          {
            "@type": "Question",
            name: "Bagaimana cara menghubungi Zidan Irfan Zaky untuk kerja sama atau perekrutan?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Anda dapat menghubungi Zidan Irfan Zaky melalui email resmi zzidanirfan@gmail.com, pesan WhatsApp di +62 889-8969-4349, akun LinkedIn di linkedin.com/in/zidan-zaky, atau meninjau kode sumber di GitHub github.com/ZidZaky.",
            },
          },
        ],
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

