import type { Metadata } from "next";
import {
  Inter,
  Plus_Jakarta_Sans,
  Bebas_Neue,
  Kanit,
} from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-kanit",
  display: "swap",
});

const BASE_URL = "https://zidzaky-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Zidan Irfan Zaky (ZidZaky) - Software Engineer & Full-Stack Developer",
    template: "%s | Zidan Irfan Zaky (ZidZaky)",
  },
  description:
    "Zidan Irfan Zaky (ZidZaky), Software Engineer & Full-Stack Developer lulusan Telkom University Surabaya (IPK 3.96). Portofolio 24 proyek web, mobile & QA.",
  applicationName: "Zidan Irfan Zaky Portfolio",
  authors: [{ name: "Zidan Irfan Zaky", url: "https://github.com/ZidZaky" }],
  creator: "Zidan Irfan Zaky",
  publisher: "Zidan Irfan Zaky",
  generator: "Next.js",
  keywords: [
    "Zidan Irfan Zaky",
    "ZidZaky",
    "ZIDZAKY",
    "Zidan Zaky",
    "Zidan Zaky software engineer",
    "Zidan Irfan Zaky Telkom University",
    "Software Engineer Surabaya",
    "Full-Stack Developer Indonesia",
    "Software Engineer Portfolio",
    "Telkom University Surabaya",
    "Next.js Developer Portfolio",
    "UI/UX Designer",
    "Software Quality Assurance QA",
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Zidan Irfan Zaky (ZidZaky) - Software Engineer & Full-Stack Developer",
    description:
      "Portofolio resmi Zidan Irfan Zaky (ZidZaky). Software Engineer lulusan Telkom University Surabaya (IPK 3.96/4.00, TOEIC 915) dengan 24 proyek software.",
    url: BASE_URL,
    siteName: "Zidan Irfan Zaky Portfolio",
    type: "profile",
    locale: "id_ID",
    alternateLocale: ["en_US"],
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Zidan Irfan Zaky (ZidZaky) - Software Engineer Portfolio",
    description:
      "Software Engineer & Full-Stack Developer lulusan Telkom University Surabaya (IPK 3.96/4.00, TOEIC 915). Portofolio 24 proyek software.",
    images: ["/images/hero-banner.png"],
    creator: "@zid.zaky",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/images/zidan-bw.png", type: "image/png" },
    ],
    apple: [{ url: "/images/zidan-bw.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${plusJakartaSans.variable} ${bebasNeue.variable} ${kanit.variable} scroll-smooth`}
    >
      <head>
        <StructuredData />
        <link rel="alternate" hrefLang="id" href={BASE_URL} />
        <link rel="alternate" hrefLang="id-ID" href={BASE_URL} />
        <link rel="alternate" hrefLang="en" href={`${BASE_URL}?lang=en`} />
        <link rel="alternate" hrefLang="en-US" href={`${BASE_URL}?lang=en`} />
        <link rel="alternate" hrefLang="x-default" href={BASE_URL} />
      </head>
      <body className="font-sans bg-cream text-dark antialiased selection:bg-maroon selection:text-light">
        {children}
      </body>
    </html>
  );
}
