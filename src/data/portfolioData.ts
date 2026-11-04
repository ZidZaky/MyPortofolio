import { Language } from "@/context/LanguageContext";

export type ProjectYear = "All" | "2026" | "2025" | "2024" | "2023";
export type ProjectCategory =
  | "All"
  | "Web"
  | "Backend"
  | "Mobile"
  | "Game"
  | "Desktop"
  | "QA";

export interface ProjectItem {
  id: number;
  name: string;
  displayName: string;
  year: Exclude<ProjectYear, "All">;
  roles: string[];
  categories: Exclude<ProjectCategory, "All">[];
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  featured?: boolean;
  previewType?: "erp" | "culinary" | "pixelgame";
  previewBadge?: string;
  previewSubtitle?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: "work" | "academic" | "organization" | "event";
  description: string;
  highlights?: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  coursework?: string[];
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  score: string;
  details: string;
  badge: string;
}

export interface AwardItem {
  title: string;
  year: string;
  category: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  tools: string[];
}

export interface StatItem {
  label: string;
  value: string;
  suffix: string;
  subtext: string;
}

export interface PersonalProfile {
  fullName: string;
  brandName: string;
  brandFirst: string;
  brandSecond: string;
  title: string;
  heroBadge: string;
  heroBadgeAlt: string;
  heroCaption: string;
  featuredIntro: string;
  servicesIntro: string;
  archiveIntro: string;
  quote: string;
  quoteSource: string;
  location: string;
  locationShort: string;
  emails: string[];
  primaryEmail: string;
  phone: string;
  whatsappUrl: string;
  socials: {
    github: string;
    githubHandle: string;
    instagram: string;
    instagramHandle: string;
    linkedin: string;
    linkedinHandle: string;
  };
  coreSkills: string[];
  keyCourses: string[];
  stats: StatItem[];
}

export interface TranslationDictionary {
  nav: {
    home: string;
    services: string;
    projects: string;
    experience: string;
    contactUs: string;
  };
  hero: {
    contactBtn: string;
  };
  featured: {
    headingPart1: string;
    headingPart2: string;
    liveDemosTitle: string;
    liveDemosSub: string;
    liveDemoBadge: string;
    exploreArchiveBtn: string;
    viewRepo: string;
  };
  services: {
    badge: string;
    headingPart1: string;
    headingPart2: string;
    academicDegree: string;
    academicGpa: string;
    courseworkTitle: string;
  };
  archive: {
    headingPart1: string;
    headingPart2: string;
    filterByYear: string;
    filterByCategory: string;
    all: string;
    resetFilter: string;
    showing: string;
    of: string;
    projectsCountSuffix: string;
    featuredBadge: string;
    demoBadge: string;
    journeyBadge: string;
    journeyHeading: string;
    journeySub: string;
    workAcademicTitle: string;
    eduTitle: string;
    relevantCoursework: string;
    orgTitle: string;
    honorsTitle: string;
    langProficiencyTitle: string;
  };
  footer: {
    collaborateBtn: string;
    bio: string;
    coreCompetenciesTitle: string;
    contactInfoTitle: string;
    socialTitle: string;
    allRightsReserved: string;
  };
}

const commonSocials = {
  github: "https://github.com/ZidZaky",
  githubHandle: "github.com/ZidZaky",
  instagram: "https://instagram.com/zid.zaky",
  instagramHandle: "@zid.zaky",
  linkedin: "https://www.linkedin.com/in/zidan-zaky",
  linkedinHandle: "zidan zaky",
};

export const uiTranslations: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      home: "HOME",
      services: "SERVICES",
      projects: "PROJECTS",
      experience: "EXPERIENCE",
      contactUs: "CONTACT US",
    },
    hero: {
      contactBtn: "CONTACT US",
    },
    featured: {
      headingPart1: "Here is",
      headingPart2: "My Portofolio",
      liveDemosTitle: "Live Interactive Web Demos (Deployed on Vercel)",
      liveDemosSub: "Click to explore and interact with the live apps directly in your browser",
      liveDemoBadge: "Live Demo",
      exploreArchiveBtn: "Explore Complete Project Archive (2023–2026)",
      viewRepo: "View Repo",
    },
    services: {
      badge: "SERVICES & CAPABILITIES",
      headingPart1: "What can i offer to enhance",
      headingPart2: "our project.",
      academicDegree: "B.S. Software Engineering",
      academicGpa: "GPA 3.96",
      courseworkTitle: "Core Software Engineering Coursework & Focus",
    },
    archive: {
      headingPart1: "Here is",
      headingPart2: "My Portofolio & Journey",
      filterByYear: "Filter by Year",
      filterByCategory: "Filter by Category",
      all: "All",
      resetFilter: "Reset Filter",
      showing: "Showing",
      of: "of",
      projectsCountSuffix: "projects & repositories (2023–2026)",
      featuredBadge: "Featured",
      demoBadge: "Demo",
      journeyBadge: "EXPERIENCE, EDUCATION & LEADERSHIP",
      journeyHeading: "Academic Background & Professional Journey",
      journeySub: "Professional track record in industry, academic teaching assistantships at Telkom University Surabaya, and student organization leadership.",
      workAcademicTitle: "Work & Academic Experience",
      eduTitle: "Education & Key Coursework",
      relevantCoursework: "Relevant Coursework & Core Subjects:",
      orgTitle: "Organization & Leadership",
      honorsTitle: "Honors & Certifications",
      langProficiencyTitle: "Language Proficiency",
    },
    footer: {
      collaborateBtn: "Let's Collaborate",
      bio: "Software Engineering graduate from Telkom University Surabaya (GPA 3.96/4.00) specializing in Full-Stack web & mobile development, modern UI/UX design, and software quality assurance.",
      coreCompetenciesTitle: "Core Competencies",
      contactInfoTitle: "Contact Information",
      socialTitle: "Social & Channels",
      allRightsReserved: "All rights reserved.",
    },
  },
  id: {
    nav: {
      home: "BERANDA",
      services: "LAYANAN",
      projects: "PROYEK",
      experience: "PENGALAMAN",
      contactUs: "HUBUNGI KAMI",
    },
    hero: {
      contactBtn: "HUBUNGI KAMI",
    },
    featured: {
      headingPart1: "Inilah",
      headingPart2: "Portofolio Saya",
      liveDemosTitle: "Demo Web Interaktif Langsung (Dideploy di Vercel)",
      liveDemosSub: "Klik untuk mencoba aplikasi secara langsung di browser",
      liveDemoBadge: "Live Demo",
      exploreArchiveBtn: "Jelajahi Arsip Lengkap Proyek (2023–2026)",
      viewRepo: "Buka Repo",
    },
    services: {
      badge: "LAYANAN & KAPABILITAS",
      headingPart1: "Apa yang bisa saya berikan untuk",
      headingPart2: "memajukan proyek kita.",
      academicDegree: "S1 Rekayasa Perangkat Lunak",
      academicGpa: "IPK 3.96",
      courseworkTitle: "Mata Kuliah Inti & Fokus Rekayasa Perangkat Lunak",
    },
    archive: {
      headingPart1: "Inilah",
      headingPart2: "Portofolio & Perjalanan Saya",
      filterByYear: "Filter Berdasarkan Tahun",
      filterByCategory: "Filter Berdasarkan Kategori",
      all: "Semua",
      resetFilter: "Reset Filter",
      showing: "Menampilkan",
      of: "dari",
      projectsCountSuffix: "proyek & repositori (2023–2026)",
      featuredBadge: "Unggulan",
      demoBadge: "Demo",
      journeyBadge: "PENGALAMAN, PENDIDIKAN & KEPEMIMPINAN",
      journeyHeading: "Latar Belakang Akademik & Perjalanan Profesional",
      journeySub: "Rekam jejak karir di industri, kontribusi pengajaran akademik di Telkom University Surabaya, serta kepemimpinan organisasi.",
      workAcademicTitle: "Pengalaman Kerja & Akademik",
      eduTitle: "Pendidikan & Mata Kuliah Inti",
      relevantCoursework: "Mata Kuliah Relevan & Bidang Inti:",
      orgTitle: "Organisasi & Kepemimpinan",
      honorsTitle: "Penghargaan & Sertifikasi",
      langProficiencyTitle: "Kemampuan Bahasa",
    },
    footer: {
      collaborateBtn: "Mari Berkolaborasi",
      bio: "Lulusan S1 Rekayasa Perangkat Lunak Telkom University Surabaya (IPK 3.96/4.00) dengan fokus pada rekayasa aplikasi Full-Stack, desain UI/UX modern, dan jaminan kualitas perangkat lunak.",
      coreCompetenciesTitle: "Kompetensi Utama",
      contactInfoTitle: "Informasi Kontak",
      socialTitle: "Media Sosial & Kanal",
      allRightsReserved: "Hak cipta dilindungi.",
    },
  },
};

export function getPersonalProfile(lang: Language): PersonalProfile {
  return {
    fullName: "Zidan Irfan Zaky",
    brandName: "ZIDZAKY",
    brandFirst: "ZID",
    brandSecond: "ZAKY",
    title:
      lang === "en"
        ? "Software Engineer | Full-Stack Developer | UI/UX Enthusiast"
        : "Software Engineer | Full-Stack Developer | Penggiat UI/UX",
    heroBadge: "SOFTWARE ENGINEER & UI/UX",
    heroBadgeAlt: "UI/UX DESIGNS",
    heroCaption:
      lang === "en"
        ? "An enthusiastic learner who never backs down from challenges. Equipped with strong software engineering, public speaking, and decisive problem-solving skills, with a proven ability to structure and communicate information effectively."
        : "Seorang pemuda yang antusias untuk belajar dan tidak pernah menyerah dalam menghadapi tantangan. Memiliki kemampuan software engineering, public speaking, dan pengambilan keputusan yang luar biasa serta keahlian dalam mengatur dan menyampaikan informasi dengan baik.",
    featuredIntro:
      lang === "en"
        ? "Dedicated to designing, architecting, and testing modern web applications, enterprise ERP solutions, cross-platform mobile apps, and interactive games from 2023 to 2026."
        : "Seorang pemuda yang antusias untuk belajar dan tidak pernah menyerah dalam menghadapi tantangan. Memiliki kemampuan software engineering, public speaking, serta keahlian dalam merancang dan mengembangkan aplikasi web, enterprise ERP, mobile, dan gim interaktif.",
    servicesIntro:
      lang === "en"
        ? "A Software Engineering graduate from Telkom University Surabaya (GPA 3.96/4.00) combining end-to-end software engineering, system requirements analysis (APKL), modern UI/UX design, and rigorous software QA & testing to elevate project quality."
        : "Lulusan S1 Rekayasa Perangkat Lunak Telkom University Surabaya (IPK 3.96/4.00) yang memadukan fondasi rekayasa perangkat lunak end-to-end, analisis kebutuhan sistem (APKL), desain UI/UX modern, serta pengujian kualitas perangkat lunak (QA & Testing).",
    archiveIntro:
      lang === "en"
        ? "A comprehensive archive documenting my software engineering journey across GitHub repositories & Live Demos (2023–2026), industry experience, teaching assistantships, and organizational leadership."
        : "Dokumentasi lengkap perjalanan rekayasa perangkat lunak melalui repositori GitHub & Live Demo (2023–2026), pengalaman industri, kontribusi akademik sebagai Asisten Praktikum & Dosen, serta kepemimpinan organisasi.",
    quote: "I know what kind of person I need to be, for you, for all of us.",
    quoteSource: "Loki (Season 2)",
    location:
      "Jl. Cempaka B-25, Graha Sedati Mas, Buncitan, Sedati, Sidoarjo, Indonesia",
    locationShort:
      lang === "en"
        ? "Sidoarjo, East Java, Indonesia"
        : "Sidoarjo, Jawa Timur, Indonesia",
    emails: ["zzidanirfan@gmail.com"],
    primaryEmail: "zzidanirfan@gmail.com",
    phone: "+62 889-8969-4349",
    whatsappUrl: "https://wa.me/6288989694349",
    socials: commonSocials,
    coreSkills:
      lang === "en"
        ? [
            "Full-Stack Web Development",
            "Backend & API Design",
            "UI/UX Design",
            "Software Quality Assurance (QA) & Testing",
            "Mobile Dev (Flutter)",
            "Game/Desktop Dev (C#, Unity, Java)",
            "Public Speaking",
            "Leadership",
            "Time Management",
            "Problem Solving",
            "Editing & Documentation",
          ]
        : [
            "Full-Stack Web Development",
            "Backend & API Design",
            "UI/UX Design",
            "Software Quality Assurance (QA) & Testing",
            "Mobile Dev (Flutter)",
            "Game/Desktop Dev (C#, Unity, Java)",
            "Public Speaking",
            "Leadership",
            "Manajemen Waktu",
            "Pemecahan Masalah",
            "Editing & Dokumentasi",
          ],
    keyCourses:
      lang === "en"
        ? [
            "Web Development & Frameworks",
            "Mobile App Development (Flutter)",
            "APKL (Software Requirements & Analysis)",
            "Software Testing & QA (IPPL)",
            "Software Construction & OOP",
            "Database Systems, Algorithms & Data Structures",
          ]
        : [
            "Web Development & Framework",
            "Mobile App Development (Flutter)",
            "APKL (Analisis & Perancangan Kebutuhan PL)",
            "Software Testing & QA (IPPL)",
            "Konstruksi Perangkat Lunak & OOP",
            "Basis Data, Algoritma & Struktur Data",
          ],
    stats: [
      {
        label: lang === "en" ? "Cumulative GPA" : "IPK Kumulatif",
        value: "3.96",
        suffix: "/ 4.00",
        subtext:
          lang === "en"
            ? "B.S. Software Engineering — Telkom University"
            : "S1 Rekayasa Perangkat Lunak — Telkom University",
      },
      {
        label: lang === "en" ? "GitHub Repositories" : "Repositori GitHub",
        value: "25+",
        suffix: lang === "en" ? "Projects" : "Proyek",
        subtext: "Web, ERP, Mobile, Game, Desktop & QA",
      },
      {
        label: lang === "en" ? "Teaching Assistant" : "Asisten Praktikum",
        value: "3+",
        suffix: lang === "en" ? "Years" : "Tahun",
        subtext:
          lang === "en"
            ? "Lab & Lecturer Assistant (2022–2025)"
            : "Asisten Praktikum & Dosen (2022–2025)",
      },
      {
        label: lang === "en" ? "English Proficiency" : "Kemampuan B. Inggris",
        value: "B2",
        suffix: "CEFR",
        subtext: "TOEIC 915/990 • EPrT 560",
      },
    ],
  };
}

export function getEducationData(lang: Language): EducationItem[] {
  return [
    {
      institution: "Telkom University (Kampus Surabaya)",
      degree:
        lang === "en"
          ? "B.S. Software Engineering (Rekayasa Perangkat Lunak)"
          : "S1 Rekayasa Perangkat Lunak (Software Engineering)",
      period: lang === "en" ? "2022 – 2026 (Graduated)" : "2022 – 2026 (Lulus)",
      gpa: "3.96 / 4.00",
      coursework:
        lang === "en"
          ? [
              "Web Development (Web Programming & Frameworks)",
              "Mobile Development (Flutter Cross-Platform)",
              "APKL (Software Requirements Engineering & Analysis)",
              "Software Testing & QA (Software Testing & Implementation)",
              "Software Construction & Object-Oriented Programming",
              "Database Systems, Programming Algorithms & Data Structures",
            ]
          : [
              "Web Development (Pemrograman Web & Framework)",
              "Mobile Development (Flutter Cross-Platform)",
              "APKL (Analisis & Perancangan Kebutuhan Perangkat Lunak)",
              "Software Testing & QA (Implementasi & Pengujian Perangkat Lunak)",
              "Konstruksi Perangkat Lunak & Object-Oriented Programming",
              "Basis Data, Algoritma Pemrograman & Struktur Data",
            ],
      highlights:
        lang === "en"
          ? [
              "Graduated in Software Engineering with a Cumulative GPA of 3.96 / 4.00",
              "Core specialization in Full-Stack Web/Mobile, System Analysis (APKL), and Software QA Testing",
              "Actively served as Teaching Assistant & Lecturer Assistant across core engineering subjects",
            ]
          : [
              "Lulusan S1 Rekayasa Perangkat Lunak dengan IPK Kumulatif 3.96 / 4.00",
              "Fokus keahlian pada Full-Stack Web/Mobile, Analisis Sistem (APKL), dan Software QA Testing",
              "Aktif sebagai Asisten Praktikum & Asisten Dosen pada berbagai mata kuliah inti keahlian",
            ],
    },
    {
      institution: "SMA Al-Fattah Buduran",
      degree:
        lang === "en"
          ? "Natural Sciences Major (MIPA)"
          : "Jurusan MIPA (Matematika dan Ilmu Pengetahuan Alam)",
      period: "2019 – 2022",
      highlights:
        lang === "en"
          ? [
              "Best High School Graduate in the Non-Academic Category, Class of 2022",
              "HISFA Teladan Exemplary Student Period 2020–2021",
            ]
          : [
              "Best High School Graduate in the Non-Academic Category, Class of 2022",
              "HISFA Teladan Periode 2020–2021",
            ],
    },
  ];
}

export function getCertificationsData(lang: Language): CertificationItem[] {
  return [
    {
      title: "ETS TOEIC",
      issuer: "Educational Testing Service",
      score: "915 / 990",
      details: "Listening: 490/495 • Reading: 425/495",
      badge: lang === "en" ? "Working Proficiency" : "Profisiensi Mahir",
    },
    {
      title: "EPrT Telkom University",
      issuer: "Language Center",
      score: "560 (CEFR B2)",
      details: "Listening: 58 • Grammar: 56 • Reading: 54",
      badge: "CEFR B2",
    },
  ];
}

export function getAwardsData(lang: Language): AwardItem[] {
  return [
    {
      title: "Best Project Dolanan Data",
      year: "2023",
      category:
        lang === "en"
          ? "Academic & Data Innovation Award"
          : "Penghargaan Inovasi Data & Akademik",
    },
    {
      title: "Best High School Graduate in the Non-Academic Category, Class of 2022",
      year: "2022",
      category:
        lang === "en"
          ? "Leadership & Non-Academic Excellence"
          : "Kepemimpinan & Prestasi Non-Akademik",
    },
    {
      title: "HISFA Teladan Periode 2020–2021",
      year: "2021",
      category:
        lang === "en"
          ? "Student Organization Leadership Award"
          : "Penghargaan Teladan Organisasi Siswa",
    },
  ];
}

export function getExperienceData(lang: Language): ExperienceItem[] {
  return [
    {
      id: "exp-1",
      role: "Fullstack Developer Intern",
      organization: "PT Mega Superfood Nusantara",
      period: "2025 – 2026",
      type: "work",
      description:
        lang === "en"
          ? "Developed and tested enterprise systems (Chain ERP), back-end, front-end, UI/UX, and comprehensive system analysis to support company operational flows."
          : "Mengembangkan dan menguji sistem enterprise (Chain ERP), back-end, front-end, UI/UX, serta analisis sistem secara menyeluruh untuk mendukung operasional bisnis perusahaan.",
      highlights:
        lang === "en"
          ? [
              "Full-Stack architecture development (Back-End & Front-End)",
              "User interface & user experience redesign (UI/UX)",
              "End-to-end system analysis (APKL) and Quality Assurance (QA)",
            ]
          : [
              "Pengembangan arsitektur Full-Stack (Back-End & Front-End)",
              "Perancangan antarmuka & pengalaman pengguna (UI/UX)",
              "Analisis sistem menyeluruh (APKL) serta Quality Assurance (QA)",
            ],
    },
    {
      id: "exp-2",
      role:
        lang === "en"
          ? "Teaching Assistant & Lecturer Assistant"
          : "Asisten Praktikum & Asisten Dosen",
      organization: "Telkom University Surabaya",
      period: "2022 – 2025",
      type: "academic",
      description:
        lang === "en"
          ? "Guided undergraduate students in programming practicums, data structures, databases, web development, and software testing for 3 consecutive years."
          : "Membimbing mahasiswa dalam praktikum pemrograman, struktur data, basis data, pengembangan web, serta pengujian perangkat lunak selama 3 tahun berturut-turut.",
      highlights:
        lang === "en"
          ? [
              "2024–2025: Practicum Assistant for Database Systems & Programming Algorithms",
              "2023–2024: Practicum Assistant for Data Structures, Programming Algorithms, Database Systems, Web Programming, and Lecturer Assistant for Software Testing & Implementation",
              "2022–2023: Practicum Assistant for Programming Algorithms and Data Structures",
            ]
          : [
              "2024–2025: Mata kuliah Basis Data & Algoritma Pemrograman",
              "2023–2024: Mata kuliah Struktur Data, Algoritma Pemrograman, Basis Data, Pemrograman Web, serta Asisten Dosen Implementasi dan Pengujian Perangkat Lunak",
              "2022–2023: Mata kuliah Algoritma Pemrograman dan Struktur Data",
            ],
    },
    {
      id: "exp-3",
      role: "Master of Ceremony (MC)",
      organization: "Telkom University Surabaya",
      period: "2022 – 2023",
      type: "event",
      description:
        lang === "en"
          ? "Hosted official faculty and university ceremonies with structured public speaking and stage communication skills."
          : "Memandu jalannya acara resmi tingkat fakultas dan universitas dengan kemampuan public speaking serta komunikasi panggung yang terstruktur.",
      highlights:
        lang === "en"
          ? [
              "Master of Ceremony — FTIB 4th Graduation (Yudisium FTIB 4th, 2023)",
              "Master of Ceremony — LPPM Awards (2022)",
            ]
          : [
              "Master of Ceremony — Yudisium FTIB 4th (2023)",
              "Master of Ceremony — LPPM Awards (2022)",
            ],
    },
    {
      id: "org-1",
      role: "Head Master of UKM TSE",
      organization: "Telkom Surabaya Esport (UKM TSE)",
      period: "2024 – 2025",
      type: "organization",
      description:
        lang === "en"
          ? "Led strategic vision, organizational executive management, and execution of campus esports tournaments and programs."
          : "Memimpin arah strategis organisasi, manajemen kepengurusan, serta pelaksanaan program kerja dan turnamen esport kampus.",
    },
    {
      id: "org-2",
      role: "Leader of Media Promotion",
      organization: "Telkom Surabaya Esport (UKM TSE)",
      period: "2023 – 2024",
      type: "organization",
      description:
        lang === "en"
          ? "Managed visual brand strategy, creative content publishing, and promotion of events and championships."
          : "Mengelola strategi branding visual, publikasi konten kreatif, serta promosi acara dan kejuaraan UKM TSE.",
    },
    {
      id: "org-3",
      role: "Member of Kominfo",
      organization: "BEM KEMA Telkom University Surabaya (TUS)",
      period: "2023 – 2024",
      type: "organization",
      description:
        lang === "en"
          ? "Active contributor to public information distribution, documentation, and external media communications for the Student Executive Board."
          : "Berperan aktif dalam pengelolaan media informasi, dokumentasi, dan komunikasi publik Badan Eksekutif Mahasiswa.",
    },
    {
      id: "org-4",
      role: "Member of PDD (Publication, Decoration & Documentation)",
      organization: "Telkom Surabaya Esport (UKM TSE)",
      period: "2022 – 2023",
      type: "organization",
      description:
        lang === "en"
          ? "Handled promotional graphic design, event documentation, and creative assets for esports events."
          : "Menangani desain publikasi, dokumentasi kegiatan, dan kebutuhan kreatif organisasi.",
    },
  ];
}

export function getServicesData(lang: Language): ServiceItem[] {
  return [
    {
      id: "service-fullstack",
      number: "01",
      title:
        lang === "en"
          ? "Full-Stack Web & Mobile Development"
          : "Full-Stack Web & Mobile Development",
      description:
        lang === "en"
          ? "Development of modern web applications, enterprise ERP systems, REST APIs, databases, and Flutter-based mobile applications with clean, secure, and scalable architectures."
          : "Pengembangan aplikasi web modern, sistem ERP, REST API, database, dan aplikasi mobile berbasis Flutter dengan arsitektur yang bersih, aman, dan skalabel.",
      deliverables:
        lang === "en"
          ? [
              "End-to-End Web Apps & Enterprise ERP (Next.js, React, PHP MVC)",
              "RESTful API Design, Authentication & Database Architecture",
              "Cross-Platform Mobile Apps with Flutter",
            ]
          : [
              "Aplikasi Web & Enterprise ERP End-to-End (Next.js, React, PHP MVC)",
              "Perancangan RESTful API, Autentikasi & Arsitektur Database",
              "Aplikasi Mobile Lintas Platform berbasis Flutter",
            ],
      tools: ["Next.js", "TypeScript", "Flutter", "REST API", "PHP", "SQL"],
    },
    {
      id: "service-uiux",
      number: "02",
      title:
        lang === "en"
          ? "UI/UX Design & System Analysis (APKL)"
          : "UI/UX Design & System Analysis (APKL)",
      description:
        lang === "en"
          ? "Software requirements engineering & system analysis (APKL), interactive interface design, modern UX overhaul, and user-centered interactive prototyping."
          : "Analisis kebutuhan perangkat lunak (APKL), perancangan antarmuka interaktif, rework UX modern, serta prototyping yang berorientasi pada pengguna.",
      deliverables:
        lang === "en"
          ? [
              "Software Requirements Analysis & System Design (APKL)",
              "Modern UI/UX Rework & Design System",
              "Responsive Frontend Architecture & Interactive Prototyping",
            ]
          : [
              "Analisis & Perancangan Kebutuhan Perangkat Lunak (APKL)",
              "Modern UI/UX Rework & Design System",
              "Responsive Frontend Architecture & Interactive Prototyping",
            ],
      tools: ["Tailwind CSS", "UI/UX Design", "Figma", "System Analysis", "React"],
    },
    {
      id: "service-qa-game",
      number: "03",
      title:
        lang === "en"
          ? "QA Testing, Game & Desktop Dev"
          : "QA Testing, Game & Desktop Dev",
      description:
        lang === "en"
          ? "Implementation of automated unit/integration testing (PHPUnit, QA), desktop GUI application development (C#), and pixel/2D games (Unity/Java) with optimized performance."
          : "Implementasi unit/integration testing (PHPUnit, QA), serta pengembangan aplikasi desktop (C#) dan pixel/2D game (Unity/Java) dengan performa optimal.",
      deliverables:
        lang === "en"
          ? [
              "Automated Unit & Integration Testing (PHPUnit & Software QA)",
              "Desktop Applications & Software Construction (C#)",
              "2D Pixel Game Development, Gameplay Mechanics & Shaders (Unity/Java)",
            ]
          : [
              "Automated Unit & Integration Testing (PHPUnit & Software QA)",
              "Aplikasi Desktop Berbasis GUI & Konstruksi Perangkat Lunak (C#)",
              "Pengembangan Pixel / 2D Game, Gameplay Mechanics & Shaders (Unity/Java)",
            ],
      tools: ["PHPUnit", "C# .NET GUI", "Unity", "Java", "C++", "QA Testing"],
    },
  ];
}

export function getProjectsData(lang: Language): ProjectItem[] {
  return [
    // ======================== 2026 ========================
    {
      id: 1,
      name: "Chain-ERP",
      displayName: "Chain ERP",
      year: "2026",
      roles:
        lang === "en"
          ? ["Full-Stack Developer", "System Analyst", "UI/UX Engineer"]
          : ["Full-Stack Developer", "Analis Sistem", "UI/UX Engineer"],
      categories: ["Web", "Backend", "QA"],
      description:
        lang === "en"
          ? "Developed and tested an integrated Enterprise Resource Planning (ERP) system encompassing inventory management, supply chain flows, system analysis, and modern operational interfaces."
          : "Mengembangkan dan menguji sistem Enterprise Resource Planning (ERP) terintegrasi mencakup manajemen inventori, rantai pasok, analisis sistem, serta antarmuka operasional modern.",
      techStack: ["Full-Stack ERP", "REST API", "Database", "System Analysis"],
      githubUrl: "https://github.com/ZidZaky",
      featured: true,
      previewType: "erp",
      previewBadge: "ENTERPRISE ERP • 2026",
      previewSubtitle:
        lang === "en"
          ? "Integrated Supply Chain, Inventory & Business Operations ERP"
          : "Sistem ERP Rantai Pasok, Inventori & Operasional Bisnis Terpadu",
    },
    {
      id: 2,
      name: "PhotoBooth-PhotoRek",
      displayName: "PhotoBooth — PhotoRek",
      year: "2026",
      roles:
        lang === "en"
          ? ["Full-Stack Developer", "Frontend Developer", "Web App Developer"]
          : ["Full-Stack Developer", "Frontend Developer", "Web App Developer"],
      categories: ["Web", "QA"],
      description:
        lang === "en"
          ? "Built an interactive photobooth web application, frame customization and upload workflows, UX testing, and Vercel cloud deployment."
          : "Membangun aplikasi web foto booth interaktif, menyusun fungsionalitas ambil foto, kustomisasi frame & upload, pengujian UX serta deployment di Vercel.",
      techStack: ["Web App", "Full-Stack", "UI/UX", "Vercel"],
      githubUrl: "https://github.com/ZidZaky/PhotoBooth-PhotoRek",
      demoUrl: "https://photobooth-photorek.vercel.app/",
    },
    {
      id: 26,
      name: "TourAtur-App",
      displayName: "TourAtur — Travel & Tour App",
      year: "2026",
      roles:
        lang === "en"
          ? ["Full-Stack Developer", "Frontend Engineer", "UI/UX Designer"]
          : ["Full-Stack Developer", "Frontend Engineer", "Desainer UI/UX"],
      categories: ["Web"],
      description:
        lang === "en"
          ? "Developed TourAtur, an interactive travel & tour planning web platform with an intuitive and responsive user interface."
          : "Mengembangkan aplikasi web perencanaan perjalanan & wisata interaktif (TourAtur) dengan antarmuka modern dan responsif.",
      techStack: ["Web App", "Modern UI/UX", "Frontend", "Vercel"],
      githubUrl: "https://github.com/ZidZaky",
      demoUrl: "https://touratur-app.vercel.app/",
    },
    {
      id: 3,
      name: "kalkulator",
      displayName:
        lang === "en" ? "Desktop Calculator" : "Kalkulator Desktop",
      year: "2026",
      roles:
        lang === "en"
          ? ["Desktop App Developer", "C# Developer"]
          : ["Pengembang Aplikasi Desktop", "C# Developer"],
      categories: ["Desktop"],
      description:
        lang === "en"
          ? "Built a desktop calculator application in C#, implementing calculation logic, GUI design, and core mathematical function tests."
          : "Membuat aplikasi kalkulator desktop, pengembangan interface & logika perhitungan, pengujian fungsi dasar.",
      techStack: ["C#", ".NET Desktop", "GUI", "Logic Validation"],
      githubUrl: "https://github.com/ZidZaky/kalkulator",
    },
    {
      id: 4,
      name: "Modul12",
      displayName: "Modul 12 — Java OOP",
      year: "2026",
      roles: ["Java Developer", "Software Engineer"],
      categories: ["Desktop", "Backend"],
      description:
        lang === "en"
          ? "Java OOP practicum module exploring object-oriented design patterns, inheritance, and clean application architecture."
          : "Praktikum dan modul pembelajaran Java, struktur aplikasi berorientasi objek.",
      techStack: ["Java", "OOP", "Software Engineering"],
      githubUrl: "https://github.com/ZidZaky/Modul12",
    },

    // ======================== 2025 ========================
    {
      id: 5,
      name: "jelajah-kuliner-v2",
      displayName: "Jelajah Kuliner",
      year: "2025",
      roles:
        lang === "en"
          ? ["Full-Stack Developer", "Frontend Engineer", "UI/UX Developer"]
          : ["Full-Stack Developer", "Frontend Engineer", "Pengembang UI/UX"],
      categories: ["Web", "Backend"],
      description:
        lang === "en"
          ? "Location-based culinary discovery web platform with a modern UI/UX rework, interactive search, real-time geolocation tracking, and performance tuning."
          : "Platform eksplorasi kuliner berbasis lokasi dengan rework UI/UX modern, fitur pencarian interaktif, realtime tracking lokasi, serta optimasi performa.",
      techStack: ["Full-Stack Web", "Modern UI/UX", "Geolocation"],
      githubUrl: "https://github.com/ZidZaky/jelajah-kuliner-v2",
      featured: true,
      previewType: "culinary",
      previewBadge: "WEB PLATFORM • 2025",
      previewSubtitle:
        lang === "en"
          ? "Interactive Culinary Discovery & Geolocation Platform"
          : "Platform Eksplorasi Kuliner & Geolokasi Interaktif",
    },
    {
      id: 6,
      name: "Game-ZeroWasteOdyssey",
      displayName: "Zero Waste Odyssey",
      year: "2025",
      roles:
        lang === "en"
          ? ["Game Developer", "Unity/Shader Developer", "Pixel Art & Assets"]
          : ["Game Developer", "Pengembang Unity/Shader", "Aset & Pixel Art"],
      categories: ["Game"],
      description:
        lang === "en"
          ? "Educational 2D pixel-art environmental adventure game, developing interactive gameplay mechanics, custom sprite art, and tested physics."
          : "Pembuatan game pixel/2D petualangan edukasi lingkungan, implementasi visual & gameplay interaktif, penyusunan aset karakter & pengujian mekanik game.",
      techStack: ["Unity", "Pixel Art 2D", "C# Scripting", "Shaders"],
      githubUrl: "https://github.com/ZidZaky/Game-ZeroWasteOdyssey",
      featured: true,
      previewType: "pixelgame",
      previewBadge: "PIXEL 2D GAME • 2025",
      previewSubtitle:
        lang === "en"
          ? "2D Pixel Art Environmental Adventure & Action Gameplay"
          : "Petualangan Edukasi Lingkungan Pixel Art 2D & Aksi",
    },
    {
      id: 7,
      name: "Ecommerce-ABP",
      displayName: "Ecommerce ABP",
      year: "2025",
      roles: ["Full-Stack Developer", "E-commerce Developer"],
      categories: ["Web", "Backend"],
      description:
        lang === "en"
          ? "Developed an e-commerce platform with product catalog management, shopping cart, checkout transactions, and backend-frontend integration."
          : "Membangun toko online, pengelolaan produk, katalog, transaksi, serta integrasi backend-frontend.",
      techStack: ["Full-Stack", "E-Commerce", "REST API", "Database"],
      githubUrl: "https://github.com/ZidZaky/Ecommerce-ABP",
    },
    {
      id: 8,
      name: "Assets-ZWO",
      displayName: "Assets — Zero Waste Odyssey",
      year: "2025",
      roles:
        lang === "en"
          ? ["Game Asset Developer", "Visual Designer", "2D/3D Asset Creator"]
          : ["Pengembang Aset Game", "Desainer Visual", "Kreator Aset 2D/3D"],
      categories: ["Game"],
      description:
        lang === "en"
          ? "Game visual assets creation, sprite design, and 2D/3D art pipeline for the Zero Waste Odyssey project with cohesive design language."
          : "Pembuatan aset game, menyusun elemen visual untuk project Zero Waste Odyssey, konsistensi desain.",
      techStack: ["2D/3D Assets", "Visual Design", "Unity Pipeline"],
      githubUrl: "https://github.com/ZidZaky/Assets-ZWO",
    },
    {
      id: 9,
      name: "AutoVending-GUI",
      displayName: "AutoVending GUI",
      year: "2025",
      roles:
        lang === "en"
          ? ["Desktop App Developer", "C# Developer", "GUI Engineer"]
          : ["Pengembang Aplikasi Desktop", "C# Developer", "GUI Engineer"],
      categories: ["Desktop", "QA"],
      description:
        lang === "en"
          ? "Built an automated vending machine GUI application in C#, implementing purchase state machines, transaction flows, and interface testing."
          : "Membangun antarmuka aplikasi auto vending, implementasi logika pembelian otomatis, pengujian alur transaksi.",
      techStack: ["C#", "Windows GUI", "State Machine", "Transaction Flow"],
      githubUrl: "https://github.com/ZidZaky/AutoVending-GUI",
    },
    {
      id: 10,
      name: "KonsPL-PEOPLEEEE",
      displayName: "KonsPL — PEOPLEEEE",
      year: "2025",
      roles:
        lang === "en"
          ? ["C# Developer", "Software Engineer", "Desktop App Developer"]
          : ["C# Developer", "Software Engineer", "Pengembang Aplikasi Desktop"],
      categories: ["Desktop", "QA"],
      description:
        lang === "en"
          ? "Software construction application in C#, architecting business process modules, system integration, and software verification."
          : "Pengembangan aplikasi konstruksi perangkat lunak, struktur fitur & proses bisnis, integrasi & testing.",
      techStack: ["C#", "Software Construction", "System Integration", "Testing"],
      githubUrl: "https://github.com/ZidZaky/KonsPL-PEOPLEEEE",
    },
    {
      id: 11,
      name: "Simple-Calculator-PHPUnit-Testing",
      displayName: "Simple Calculator — PHPUnit Testing",
      year: "2025",
      roles: ["Backend Developer", "QA Engineer", "Testing Engineer"],
      categories: ["QA", "Backend"],
      description:
        lang === "en"
          ? "Built a calculator service with automated unit test suites using PHPUnit, edge-case validation, and quality assurance."
          : "Membangun kalkulator sederhana, implementasi automated unit testing dengan PHPUnit, validasi & debugging.",
      techStack: ["PHP", "PHPUnit", "Automated Unit Testing", "QA"],
      githubUrl: "https://github.com/ZidZaky/Simple-Calculator-PHPUnit-Testing",
    },
    {
      id: 12,
      name: "MyProject-Praktikum",
      displayName: "MyProject Praktikum",
      year: "2025",
      roles:
        lang === "en"
          ? ["C++ Developer", "Algorithm/Systems Developer"]
          : ["C++ Developer", "Pengembang Algoritma & Sistem"],
      categories: ["Desktop", "Backend"],
      description:
        lang === "en"
          ? "C++ practicum project implementing core algorithmic problems, data structures, memory management, and debugging."
          : "Pembuatan project praktikum, implementasi algoritma & struktur data, debugging.",
      techStack: ["C++", "Algorithms", "Data Structures", "Debugging"],
      githubUrl: "https://github.com/ZidZaky/MyProject-Praktikum",
    },

    // ======================== 2024 ========================
    {
      id: 13,
      name: "jelajah-kuliner",
      displayName: "Jelajah Kuliner v1",
      year: "2024",
      roles: ["Full-Stack Developer", "Backend & Frontend Developer"],
      categories: ["Web", "Backend"],
      description:
        lang === "en"
          ? "Initial location-based culinary web application with interactive geolocation mapping, route tracking, and frontend-backend integration."
          : "Membangun aplikasi web berbasis lokasi, implementasi fitur realtime tracking lokasi, integrasi & pengujian.",
      techStack: ["Full-Stack Web", "Geolocation API", "Realtime Tracking"],
      githubUrl: "https://github.com/ZidZaky/jelajah-kuliner",
    },
    {
      id: 14,
      name: "Backend-MyRT",
      displayName: "Backend — MyRT",
      year: "2024",
      roles:
        lang === "en"
          ? ["Backend Engineer", "API Developer", "Database Developer"]
          : ["Backend Engineer", "Pengembang API", "Pengembang Database"],
      categories: ["Backend", "QA"],
      description:
        lang === "en"
          ? "Built a REST API for digital neighborhood (RT) administration, data management, authentication, endpoint security, and testing."
          : "Membuat REST API untuk aplikasi RT digital, pengolahan data & autentikasi, keamanan backend & testing endpoint.",
      techStack: ["REST API", "Authentication", "Database Design", "API Testing"],
      githubUrl: "https://github.com/ZidZaky/Backend-MyRT",
    },
    {
      id: 15,
      name: "Android-MyRT",
      displayName: "Android — MyRT",
      year: "2024",
      roles:
        lang === "en"
          ? ["Mobile Developer", "Flutter Developer", "UI/UX Designer"]
          : ["Pengembang Mobile", "Flutter Developer", "Desainer UI/UX"],
      categories: ["Mobile", "QA"],
      description:
        lang === "en"
          ? "Built the Flutter Android mobile frontend for MyRT digital administration, citizen record viewing, and mobile UX optimization."
          : "Membangun frontend aplikasi mobile Flutter, integrasi tampilan data RT, pengujian UI/UX.",
      techStack: ["Flutter", "Dart", "Android", "Mobile UI/UX"],
      githubUrl: "https://github.com/ZidZaky/Android-MyRT",
    },
    {
      id: 16,
      name: "RuangEkspresi",
      displayName: "Ruang Ekspresi",
      year: "2024",
      roles:
        lang === "en"
          ? ["Full-Stack Developer", "UI/UX Developer"]
          : ["Full-Stack Developer", "Pengembang UI/UX"],
      categories: ["Web"],
      description:
        lang === "en"
          ? "Digital creative expression portal, developing primary publishing features, content display, and UX improvements."
          : "Pembangunan portal/platform ekspresi digital, pengembangan fitur utama, penyempurnaan UX.",
      techStack: ["Full-Stack Web", "UI/UX Design", "Digital Platform"],
      githubUrl: "https://github.com/ZidZaky/RuangEkspresi",
    },
    {
      id: 17,
      name: "Film-Finder",
      displayName: "Film Finder",
      year: "2024",
      roles:
        lang === "en"
          ? ["Frontend Developer", "API Integrator"]
          : ["Frontend Developer", "Integrator API"],
      categories: ["Web"],
      description:
        lang === "en"
          ? "Movie exploration and search interface integrating external entertainment REST APIs with a responsive media catalog UI."
          : "Membangun interface pencarian film, integrasi data film dari API eksternal, desain UI.",
      techStack: ["Frontend Web", "REST API Integration", "Responsive UI"],
      githubUrl: "https://github.com/ZidZaky/Film-Finder",
    },
    {
      id: 18,
      name: "Flappy-Hawk",
      displayName: "Flappy Hawk",
      year: "2024",
      roles:
        lang === "en"
          ? ["Game Developer", "Java Game Programmer"]
          : ["Game Developer", "Programmer Game Java"],
      categories: ["Game"],
      description:
        lang === "en"
          ? "Java 2D arcade game featuring custom physics, collision mechanics, smooth character controls, and performance tuning."
          : "Desain mekanik permainan, pembangunan gameplay & kontrol karakter, optimasi performa.",
      techStack: ["Java", "2D Game Engine", "Physics & Controls"],
      githubUrl: "https://github.com/ZidZaky/Flappy-Hawk",
    },
    {
      id: 19,
      name: "block-adventure",
      displayName: "Block Adventure",
      year: "2024",
      roles:
        lang === "en"
          ? ["Game Developer", "Gameplay Programmer"]
          : ["Game Developer", "Programmer Gameplay"],
      categories: ["Game"],
      description:
        lang === "en"
          ? "2D pixel block adventure game, crafting level layouts, block physics interaction, and gameplay balance testing."
          : "Perancangan dunia dan mekanik game pixel/blok 2D, pembuatan level & interaksi blok, uji coba gameplay.",
      techStack: ["Game Development", "Pixel Block 2D", "Gameplay Mechanics"],
      githubUrl: "https://github.com/ZidZaky/block-adventure",
    },
    {
      id: 20,
      name: "Pemrograman-Framework",
      displayName: "Pemrograman Framework",
      year: "2024",
      roles:
        lang === "en"
          ? ["Backend Developer", "Web Developer", "Full-Stack Developer"]
          : ["Backend Developer", "Pengembang Web", "Full-Stack Developer"],
      categories: ["Web", "Backend"],
      description:
        lang === "en"
          ? "PHP web application implementing MVC architecture, CRUD database operations, session management, and business logic."
          : "Penerapan framework web berbasis PHP, struktur MVC, CRUD, dan logika bisnis.",
      techStack: ["PHP Framework", "MVC Architecture", "CRUD", "MySQL"],
      githubUrl: "https://github.com/ZidZaky/Pemrograman-Framework",
    },
    {
      id: 21,
      name: "graf-kom",
      displayName: "Grafika Komputer (graf-kom)",
      year: "2024",
      roles:
        lang === "en"
          ? ["Computer Graphics Programmer", "Java Developer"]
          : ["Programmer Grafika Komputer", "Java Developer"],
      categories: ["Desktop", "Game"],
      description:
        lang === "en"
          ? "Computer graphics laboratory in Java, implementing 2D/3D transformations, object rendering, visual shaders, and geometry algorithms."
          : "Praktik grafika komputer, implementasi rendering & visualisasi objek, eksperimen grafik 2D/3D.",
      techStack: ["Java", "Computer Graphics", "2D/3D Rendering"],
      githubUrl: "https://github.com/ZidZaky/graf-kom",
    },
    {
      id: 22,
      name: "Mat-dist",
      displayName: "Matematika Diskrit (Mat-dist)",
      year: "2024",
      roles:
        lang === "en"
          ? ["Full-Stack Developer", "Web Application Developer"]
          : ["Full-Stack Developer", "Pengembang Aplikasi Web"],
      categories: ["Web"],
      description:
        lang === "en"
          ? "Discrete mathematics web application, developing algorithmic solvers, logic visualizations, and clean responsive interfaces."
          : "Pengembangan aplikasi web Matematika Diskrit, implementasi fitur utama dan pengelolaan tampilan.",
      techStack: ["Web Application", "Discrete Math Logic", "Full-Stack"],
      githubUrl: "https://github.com/ZidZaky/Mat-dist",
    },
    {
      id: 23,
      name: "asprak-pemweb",
      displayName: "Asprak Pemrograman Web",
      year: "2024",
      roles:
        lang === "en"
          ? ["Frontend Developer", "Web Developer"]
          : ["Frontend Developer", "Pengembang Web"],
      categories: ["Web"],
      description:
        lang === "en"
          ? "Web development instructional project, creating modular interface components, HTML5/CSS3/JS integration, and student guides."
          : "Proyek pemrograman web, pengembangan halaman antarmuka, integrasi UI.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Web UI"],
      githubUrl: "https://github.com/ZidZaky/asprak-pemweb",
    },
    {
      id: 24,
      name: "mini-project",
      displayName: "Mini Project Web Prototype",
      year: "2024",
      roles:
        lang === "en"
          ? ["Full-Stack Developer", "Prototype Developer"]
          : ["Full-Stack Developer", "Pengembang Prototipe"],
      categories: ["Web"],
      description:
        lang === "en"
          ? "Rapid prototype web experiment exploring interactive UI components, state management, and architectural validation."
          : "Pembuatan prototipe eksperimen fitur web dan evaluasi proyek.",
      techStack: ["Web Prototype", "Full-Stack", "Feature Experimentation"],
      githubUrl: "https://github.com/ZidZaky/mini-project",
    },

    // ======================== 2023 ========================
    {
      id: 25,
      name: "My-Collegue",
      displayName: "My-Collegue",
      year: "2023",
      roles:
        lang === "en"
          ? ["Full-Stack Developer", "UI/UX Designer", "QA / Debugging"]
          : ["Full-Stack Developer", "Desainer UI/UX", "QA / Debugging"],
      categories: ["Web", "QA"],
      description:
        lang === "en"
          ? "Academic and peer collaboration platform, designing application architecture, core social & study features, QA, and debugging."
          : "Perencanaan aplikasi & arsitektur proyek, pengembangan fitur utama, testing & perbaikan bug.",
      techStack: ["Full-Stack", "UI/UX Design", "QA & Debugging"],
      githubUrl: "https://github.com/ZidZaky/My-Collegue",
    },
  ];
}

export function getPortfolioData(lang: Language) {
  const profile = getPersonalProfile(lang);
  const education = getEducationData(lang);
  const certifications = getCertificationsData(lang);
  const awards = getAwardsData(lang);
  const experience = getExperienceData(lang);
  const services = getServicesData(lang);
  const projects = getProjectsData(lang);
  const featuredProjects = projects.filter((p) => p.featured);
  const liveDemoProjects = projects.filter((p) => Boolean(p.demoUrl));
  const t = uiTranslations[lang];

  return {
    profile,
    education,
    certifications,
    awards,
    experience,
    services,
    projects,
    featuredProjects,
    liveDemoProjects,
    t,
  };
}

// Default export helpers for backwards compatibility
export const personalProfile = getPersonalProfile("en");
export const educationData = getEducationData("en");
export const certificationsData = getCertificationsData("en");
export const awardsData = getAwardsData("en");
export const experienceData = getExperienceData("en");
export const servicesData = getServicesData("en");
export const projectsData = getProjectsData("en");
export const featuredProjectsData = projectsData.filter((p) => p.featured);
export const liveDemoProjectsData = projectsData.filter((p) => Boolean(p.demoUrl));
