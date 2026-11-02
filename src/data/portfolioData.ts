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

export const personalProfile = {
  fullName: "Zidan Irfan Zaky",
  brandName: "ZIDZAKY",
  brandFirst: "ZID",
  brandSecond: "ZAKY",
  title: "Software Engineer | Full-Stack Developer | UI/UX Enthusiast",
  heroBadge: "SOFTWARE ENGINEER & UI/UX",
  heroBadgeAlt: "UI/UX DESIGNS",
  heroCaption:
    "Seorang pemuda yang antusias untuk belajar dan tidak pernah menyerah dalam menghadapi tantangan. Memiliki kemampuan software engineering, public speaking, dan pengambilan keputusan yang luar biasa serta keahlian dalam mengatur dan menyampaikan informasi dengan baik.",
  featuredIntro:
    "Seorang pemuda yang antusias untuk belajar dan tidak pernah menyerah dalam menghadapi tantangan. Memiliki kemampuan software engineering, public speaking, serta keahlian dalam merancang dan mengembangkan aplikasi web, enterprise ERP, mobile, dan gim interaktif.",
  servicesIntro:
    "Lulusan S1 Rekayasa Perangkat Lunak Telkom University Surabaya (IPK 3.96/4.00) yang memadukan fondasi rekayasa perangkat lunak end-to-end, analisis kebutuhan sistem (APKL), desain UI/UX modern, serta pengujian kualitas perangkat lunak (QA & Testing).",
  archiveIntro:
    "Dokumentasi lengkap perjalanan rekayasa perangkat lunak melalui repositori GitHub (2023–2026), pengalaman industri, kontribusi akademik sebagai Asisten Praktikum & Dosen, serta kepemimpinan organisasi.",
  quote: "I know what kind of person I need to be, for you, for all of us.",
  quoteSource: "Loki (Season 2)",
  location:
    "Jl. Cempaka B-25, Graha Sedati Mas, Buncitan, Sedati, Sidoarjo, Indonesia",
  locationShort: "Sidoarjo, Jawa Timur, Indonesia",
  emails: ["zzidanirfan@gmail.com"],
  primaryEmail: "zzidanirfan@gmail.com",
  phone: "+62 889-8969-4349",
  whatsappUrl: "https://wa.me/6288989694349",
  socials: {
    github: "https://github.com/ZidZaky",
    githubHandle: "github.com/ZidZaky",
    instagram: "https://instagram.com/zid.zaky",
    instagramHandle: "@zid.zaky",
    linkedin: "https://www.linkedin.com/in/zidan-zaky",
    linkedinHandle: "zidan zaky",
  },
  coreSkills: [
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
  ],
  keyCourses: [
    "Web Development & Framework",
    "Mobile App Development (Flutter)",
    "APKL (Analisis & Perancangan Kebutuhan PL)",
    "Software Testing & QA (IPPL)",
    "Konstruksi Perangkat Lunak & OOP",
    "Basis Data, Algoritma & Struktur Data",
  ],
  stats: [
    {
      label: "Cumulative GPA",
      value: "3.96",
      suffix: "/ 4.00",
      subtext: "S1 Software Engineering — Telkom University",
    },
    {
      label: "GitHub Repositories",
      value: "24+",
      suffix: "Projects",
      subtext: "Web, ERP, Mobile, Game, Desktop & QA",
    },
    {
      label: "Teaching Assistant",
      value: "3+",
      suffix: "Years",
      subtext: "Asisten Praktikum & Dosen (2022–2025)",
    },
    {
      label: "English Proficiency",
      value: "B2",
      suffix: "CEFR",
      subtext: "TOEIC 915/990 • EPrT 560",
    },
  ],
};

export const educationData: EducationItem[] = [
  {
    institution: "Telkom University (Kampus Surabaya)",
    degree: "S1 Rekayasa Perangkat Lunak (Software Engineering)",
    period: "2022 – 2026 (Lulus)",
    gpa: "3.96 / 4.00",
    coursework: [
      "Web Development (Pemrograman Web & Framework)",
      "Mobile Development (Flutter Cross-Platform)",
      "APKL (Analisis & Perancangan Kebutuhan Perangkat Lunak)",
      "Software Testing & QA (Implementasi & Pengujian Perangkat Lunak)",
      "Konstruksi Perangkat Lunak & Object-Oriented Programming",
      "Basis Data, Algoritma Pemrograman & Struktur Data",
    ],
    highlights: [
      "Lulusan S1 Rekayasa Perangkat Lunak dengan IPK Kumulatif 3.96 / 4.00",
      "Fokus keahlian pada Full-Stack Web/Mobile, Analisis Sistem (APKL), dan Software QA Testing",
      "Aktif sebagai Asisten Praktikum & Asisten Dosen pada berbagai mata kuliah inti keahlian",
    ],
  },
  {
    institution: "SMA Al-Fattah Buduran",
    degree: "Jurusan MIPA (Matematika dan Ilmu Pengetahuan Alam)",
    period: "2019 – 2022",
    highlights: [
      "Best High School Graduate in the Non-Academic Category, Class of 2022",
      "HISFA Teladan Periode 2020–2021",
    ],
  },
];

export const certificationsData: CertificationItem[] = [
  {
    title: "ETS TOEIC",
    issuer: "Educational Testing Service",
    score: "915 / 990",
    details: "Listening: 490/495 • Reading: 425/495",
    badge: "Working Proficiency",
  },
  {
    title: "EPrT Telkom University",
    issuer: "Language Center",
    score: "560 (CEFR B2)",
    details: "Listening: 58 • Grammar: 56 • Reading: 54",
    badge: "CEFR B2",
  },
];

export const awardsData: AwardItem[] = [
  {
    title: "Best Project Dolanan Data",
    year: "2023",
    category: "Academic & Data Innovation Award",
  },
  {
    title: "Best High School Graduate in the Non-Academic Category, Class of 2022",
    year: "2022",
    category: "Leadership & Non-Academic Excellence",
  },
  {
    title: "HISFA Teladan Periode 2020–2021",
    year: "2021",
    category: "Student Organization Leadership Award",
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Fullstack Developer Intern",
    organization: "PT Mega Superfood Nusantara",
    period: "2025 – 2026",
    type: "work",
    description:
      "Mengembangkan dan menguji sistem enterprise (Chain ERP), back-end, front-end, UI/UX, serta analisis sistem secara menyeluruh untuk mendukung operasional bisnis perusahaan.",
    highlights: [
      "Pengembangan arsitektur Full-Stack (Back-End & Front-End)",
      "Perancangan antarmuka & pengalaman pengguna (UI/UX)",
      "Analisis sistem menyeluruh (APKL) serta Quality Assurance (QA)",
    ],
  },
  {
    id: "exp-2",
    role: "Asisten Praktikum & Asisten Dosen",
    organization: "Telkom University Surabaya",
    period: "2022 – 2025",
    type: "academic",
    description:
      "Membimbing mahasiswa dalam praktikum pemrograman, struktur data, basis data, pengembangan web, serta pengujian perangkat lunak selama 3 tahun berturut-turut.",
    highlights: [
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
      "Memandu jalannya acara resmi tingkat fakultas dan universitas dengan kemampuan public speaking serta komunikasi panggung yang terstruktur.",
    highlights: [
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
      "Memimpin arah strategis organisasi, manajemen kepengurusan, serta pelaksanaan program kerja dan turnamen esport kampus.",
  },
  {
    id: "org-2",
    role: "Leader of Media Promotion",
    organization: "Telkom Surabaya Esport (UKM TSE)",
    period: "2023 – 2024",
    type: "organization",
    description:
      "Mengelola strategi branding visual, publikasi konten kreatif, serta promosi acara dan kejuaraan UKM TSE.",
  },
  {
    id: "org-3",
    role: "Member of Kominfo",
    organization: "BEM KEMA Telkom University Surabaya (TUS)",
    period: "2023 – 2024",
    type: "organization",
    description:
      "Berperan aktif dalam pengelolaan media informasi, dokumentasi, dan komunikasi publik Badan Eksekutif Mahasiswa.",
  },
  {
    id: "org-4",
    role: "Member of PDD (Publikasi, Dekorasi & Dokumentasi)",
    organization: "Telkom Surabaya Esport (UKM TSE)",
    period: "2022 – 2023",
    type: "organization",
    description:
      "Menangani desain publikasi, dokumentasi kegiatan, dan kebutuhan kreatif organisasi.",
  },
];

export const servicesData: ServiceItem[] = [
  {
    id: "service-fullstack",
    number: "01",
    title: "Full-Stack Web & Mobile Development",
    description:
      "Pengembangan aplikasi web modern, sistem ERP, REST API, database, dan aplikasi mobile berbasis Flutter dengan arsitektur yang bersih, aman, dan skalabel.",
    deliverables: [
      "Aplikasi Web & Enterprise ERP End-to-End (Next.js, React, PHP MVC)",
      "Perancangan RESTful API, Autentikasi & Arsitektur Database",
      "Aplikasi Mobile Lintas Platform berbasis Flutter",
    ],
    tools: ["Next.js", "TypeScript", "Flutter", "REST API", "PHP", "SQL"],
  },
  {
    id: "service-uiux",
    number: "02",
    title: "UI/UX Design & System Analysis (APKL)",
    description:
      "Analisis kebutuhan perangkat lunak (APKL), perancangan antarmuka interaktif, rework UX modern, serta prototyping yang berorientasi pada pengguna.",
    deliverables: [
      "Analisis & Perancangan Kebutuhan Perangkat Lunak (APKL)",
      "Modern UI/UX Rework & Design System",
      "Responsive Frontend Architecture & Interactive Prototyping",
    ],
    tools: ["Tailwind CSS", "UI/UX Design", "Figma", "System Analysis", "React"],
  },
  {
    id: "service-qa-game",
    number: "03",
    title: "QA Testing, Game & Desktop Dev",
    description:
      "Implementasi unit/integration testing (PHPUnit, QA), serta pengembangan aplikasi desktop (C#) dan pixel/2D game (Unity/Java) dengan performa optimal.",
    deliverables: [
      "Automated Unit & Integration Testing (PHPUnit & Software QA)",
      "Aplikasi Desktop Berbasis GUI & Konstruksi Perangkat Lunak (C#)",
      "Pengembangan Pixel / 2D Game, Gameplay Mechanics & Shaders (Unity/Java)",
    ],
    tools: ["PHPUnit", "C# .NET GUI", "Unity", "Java", "C++", "QA Testing"],
  },
];

export const projectsData: ProjectItem[] = [
  // ======================== 2026 ========================
  {
    id: 1,
    name: "Chain-ERP",
    displayName: "Chain ERP",
    year: "2026",
    roles: ["Full-Stack Developer", "System Analyst", "UI/UX Engineer"],
    categories: ["Web", "Backend", "QA"],
    description:
      "Mengembangkan dan menguji sistem Enterprise Resource Planning (ERP) terintegrasi mencakup manajemen inventori, rantai pasok, analisis sistem, serta antarmuka operasional modern.",
    techStack: ["Full-Stack ERP", "REST API", "Database", "System Analysis"],
    githubUrl: "https://github.com/ZidZaky",
    featured: true,
    previewType: "erp",
    previewBadge: "ENTERPRISE ERP • 2026",
    previewSubtitle: "Integrated Supply Chain, Inventory & Business Operations ERP",
  },
  {
    id: 2,
    name: "PhotoBooth-PhotoRek",
    displayName: "PhotoBooth — PhotoRek",
    year: "2026",
    roles: ["Full-Stack Developer", "Frontend Developer", "Web App Developer"],
    categories: ["Web", "QA"],
    description:
      "Membangun aplikasi web foto booth, menyusun fungsionalitas upload dan tampilan, pengujian UX dan deployment.",
    techStack: ["Web App", "Full-Stack", "UI/UX", "Cloud Deployment"],
    githubUrl: "https://github.com/ZidZaky/PhotoBooth-PhotoRek",
  },
  {
    id: 3,
    name: "kalkulator",
    displayName: "Kalkulator Desktop",
    year: "2026",
    roles: ["Desktop App Developer", "C# Developer"],
    categories: ["Desktop"],
    description:
      "Membuat aplikasi kalkulator desktop, pengembangan interface & logika perhitungan, pengujian fungsi dasar.",
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
      "Praktikum dan modul pembelajaran Java, struktur aplikasi berorientasi objek.",
    techStack: ["Java", "OOP", "Software Engineering"],
    githubUrl: "https://github.com/ZidZaky/Modul12",
  },

  // ======================== 2025 ========================
  {
    id: 5,
    name: "jelajah-kuliner-v2",
    displayName: "Jelajah Kuliner",
    year: "2025",
    roles: ["Full-Stack Developer", "Frontend Engineer", "UI/UX Developer"],
    categories: ["Web", "Backend"],
    description:
      "Platform eksplorasi kuliner berbasis lokasi dengan rework UI/UX modern, fitur pencarian interaktif, realtime tracking lokasi, serta optimasi performa.",
    techStack: ["Full-Stack Web", "Modern UI/UX", "Geolocation"],
    githubUrl: "https://github.com/ZidZaky/jelajah-kuliner-v2",
    featured: true,
    previewType: "culinary",
    previewBadge: "WEB PLATFORM • 2025",
    previewSubtitle: "Interactive Culinary Discovery & Geolocation Platform",
  },
  {
    id: 6,
    name: "Game-ZeroWasteOdyssey",
    displayName: "Zero Waste Odyssey",
    year: "2025",
    roles: ["Game Developer", "Unity/Shader Developer", "Pixel Art & Assets"],
    categories: ["Game"],
    description:
      "Pembuatan game pixel/2D petualangan edukasi lingkungan, implementasi visual & gameplay interaktif, penyusunan aset karakter & pengujian mekanik game.",
    techStack: ["Unity", "Pixel Art 2D", "C# Scripting", "Shaders"],
    githubUrl: "https://github.com/ZidZaky/Game-ZeroWasteOdyssey",
    featured: true,
    previewType: "pixelgame",
    previewBadge: "PIXEL 2D GAME • 2025",
    previewSubtitle: "2D Pixel Art Environmental Adventure & Action Gameplay",
  },
  {
    id: 7,
    name: "Ecommerce-ABP",
    displayName: "Ecommerce ABP",
    year: "2025",
    roles: ["Full-Stack Developer", "E-commerce Developer"],
    categories: ["Web", "Backend"],
    description:
      "Membangun toko online, pengelolaan produk, katalog, transaksi, serta integrasi backend-frontend.",
    techStack: ["Full-Stack", "E-Commerce", "REST API", "Database"],
    githubUrl: "https://github.com/ZidZaky/Ecommerce-ABP",
  },
  {
    id: 8,
    name: "Assets-ZWO",
    displayName: "Assets — Zero Waste Odyssey",
    year: "2025",
    roles: ["Game Asset Developer", "Visual Designer", "2D/3D Asset Creator"],
    categories: ["Game"],
    description:
      "Pembuatan aset game, menyusun elemen visual untuk project Zero Waste Odyssey, konsistensi desain.",
    techStack: ["2D/3D Assets", "Visual Design", "Unity Pipeline"],
    githubUrl: "https://github.com/ZidZaky/Assets-ZWO",
  },
  {
    id: 9,
    name: "AutoVending-GUI",
    displayName: "AutoVending GUI",
    year: "2025",
    roles: ["Desktop App Developer", "C# Developer", "GUI Engineer"],
    categories: ["Desktop", "QA"],
    description:
      "Membangun antarmuka aplikasi auto vending, implementasi logika pembelian otomatis, pengujian alur transaksi.",
    techStack: ["C#", "Windows GUI", "State Machine", "Transaction Flow"],
    githubUrl: "https://github.com/ZidZaky/AutoVending-GUI",
  },
  {
    id: 10,
    name: "KonsPL-PEOPLEEEE",
    displayName: "KonsPL — PEOPLEEEE",
    year: "2025",
    roles: [
      "C# Developer",
      "Software Engineer",
      "Full-Stack/Desktop App Developer",
    ],
    categories: ["Desktop", "QA"],
    description:
      "Pengembangan aplikasi konstruksi perangkat lunak, struktur fitur & proses bisnis, integrasi & testing.",
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
      "Membangun kalkulator sederhana, implementasi automated unit testing dengan PHPUnit, validasi & debugging.",
    techStack: ["PHP", "PHPUnit", "Automated Unit Testing", "QA"],
    githubUrl: "https://github.com/ZidZaky/Simple-Calculator-PHPUnit-Testing",
  },
  {
    id: 12,
    name: "MyProject-Praktikum",
    displayName: "MyProject Praktikum",
    year: "2025",
    roles: ["C++ Developer", "Algorithm/Systems Developer"],
    categories: ["Desktop", "Backend"],
    description:
      "Pembuatan project praktikum, implementasi algoritma & struktur data, debugging.",
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
      "Membangun aplikasi web berbasis lokasi, implementasi fitur realtime tracking lokasi, integrasi & pengujian.",
    techStack: ["Full-Stack Web", "Geolocation API", "Realtime Tracking"],
    githubUrl: "https://github.com/ZidZaky/jelajah-kuliner",
  },
  {
    id: 14,
    name: "Backend-MyRT",
    displayName: "Backend — MyRT",
    year: "2024",
    roles: ["Backend Engineer", "API Developer", "Database Developer"],
    categories: ["Backend", "QA"],
    description:
      "Membuat REST API untuk aplikasi RT digital, pengolahan data & autentikasi, keamanan backend & testing endpoint.",
    techStack: ["REST API", "Authentication", "Database Design", "API Testing"],
    githubUrl: "https://github.com/ZidZaky/Backend-MyRT",
  },
  {
    id: 15,
    name: "Android-MyRT",
    displayName: "Android — MyRT",
    year: "2024",
    roles: ["Mobile Developer", "Flutter Developer", "UI/UX Designer"],
    categories: ["Mobile", "QA"],
    description:
      "Membangun frontend aplikasi mobile Flutter, integrasi tampilan data RT, pengujian UI/UX.",
    techStack: ["Flutter", "Dart", "Android", "Mobile UI/UX"],
    githubUrl: "https://github.com/ZidZaky/Android-MyRT",
  },
  {
    id: 16,
    name: "RuangEkspresi",
    displayName: "Ruang Ekspresi",
    year: "2024",
    roles: ["Full-Stack Developer", "UI/UX Developer"],
    categories: ["Web"],
    description:
      "Pembangunan portal/platform ekspresi digital, pengembangan fitur utama, penyempurnaan UX.",
    techStack: ["Full-Stack Web", "UI/UX Design", "Digital Platform"],
    githubUrl: "https://github.com/ZidZaky/RuangEkspresi",
  },
  {
    id: 17,
    name: "Film-Finder",
    displayName: "Film Finder",
    year: "2024",
    roles: ["Frontend Developer", "API Integrator"],
    categories: ["Web"],
    description:
      "Membangun interface pencarian film, integrasi data film dari API eksternal, desain UI.",
    techStack: ["Frontend Web", "REST API Integration", "Responsive UI"],
    githubUrl: "https://github.com/ZidZaky/Film-Finder",
  },
  {
    id: 18,
    name: "Flappy-Hawk",
    displayName: "Flappy Hawk",
    year: "2024",
    roles: ["Game Developer", "Java Game Programmer"],
    categories: ["Game"],
    description:
      "Desain mekanik permainan, pembangunan gameplay & kontrol karakter, optimasi performa.",
    techStack: ["Java", "2D Game Engine", "Physics & Controls"],
    githubUrl: "https://github.com/ZidZaky/Flappy-Hawk",
  },
  {
    id: 19,
    name: "block-adventure",
    displayName: "Block Adventure",
    year: "2024",
    roles: ["Game Developer", "Gameplay Programmer"],
    categories: ["Game"],
    description:
      "Perancangan dunia dan mekanik game pixel/blok 2D, pembuatan level & interaksi blok, uji coba gameplay.",
    techStack: ["Game Development", "Pixel Block 2D", "Gameplay Mechanics"],
    githubUrl: "https://github.com/ZidZaky/block-adventure",
  },
  {
    id: 20,
    name: "Pemrograman-Framework",
    displayName: "Pemrograman Framework",
    year: "2024",
    roles: ["Backend Developer", "Web Developer", "Full-Stack Developer"],
    categories: ["Web", "Backend"],
    description:
      "Penerapan framework web berbasis PHP, struktur MVC, CRUD, dan logika bisnis.",
    techStack: ["PHP Framework", "MVC Architecture", "CRUD", "MySQL"],
    githubUrl: "https://github.com/ZidZaky/Pemrograman-Framework",
  },
  {
    id: 21,
    name: "graf-kom",
    displayName: "Grafika Komputer (graf-kom)",
    year: "2024",
    roles: ["Computer Graphics Programmer", "Java Developer"],
    categories: ["Desktop", "Game"],
    description:
      "Praktik grafika komputer, implementasi rendering & visualisasi objek, eksperimen grafik 2D/3D.",
    techStack: ["Java", "Computer Graphics", "2D/3D Rendering"],
    githubUrl: "https://github.com/ZidZaky/graf-kom",
  },
  {
    id: 22,
    name: "Mat-dist",
    displayName: "Matematika Diskrit (Mat-dist)",
    year: "2024",
    roles: ["Full-Stack Developer", "Web Application Developer"],
    categories: ["Web"],
    description:
      "Pengembangan aplikasi web Matematika Diskrit, implementasi fitur utama dan pengelolaan tampilan.",
    techStack: ["Web Application", "Discrete Math Logic", "Full-Stack"],
    githubUrl: "https://github.com/ZidZaky/Mat-dist",
  },
  {
    id: 23,
    name: "asprak-pemweb",
    displayName: "Asprak Pemrograman Web",
    year: "2024",
    roles: ["Frontend Developer", "Web Developer"],
    categories: ["Web"],
    description:
      "Proyek pemrograman web, pengembangan halaman antarmuka, integrasi UI.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Web UI"],
    githubUrl: "https://github.com/ZidZaky/asprak-pemweb",
  },
  {
    id: 24,
    name: "mini-project",
    displayName: "Mini Project Web Prototype",
    year: "2024",
    roles: ["Full-Stack Developer", "Prototype Developer"],
    categories: ["Web"],
    description:
      "Pembuatan prototipe eksperimen fitur web dan evaluasi proyek.",
    techStack: ["Web Prototype", "Full-Stack", "Feature Experimentation"],
    githubUrl: "https://github.com/ZidZaky/mini-project",
  },

  // ======================== 2023 ========================
  {
    id: 25,
    name: "My-Collegue",
    displayName: "My-Collegue",
    year: "2023",
    roles: ["Full-Stack Developer", "UI/UX Designer", "QA / Debugging"],
    categories: ["Web", "QA"],
    description:
      "Perencanaan aplikasi & arsitektur proyek, pengembangan fitur utama, testing & perbaikan bug.",
    techStack: ["Full-Stack", "UI/UX Design", "QA & Debugging"],
    githubUrl: "https://github.com/ZidZaky/My-Collegue",
  },
];

export const featuredProjectsData: ProjectItem[] = projectsData.filter(
  (project) => project.featured
);
