import type { Metadata } from "next";
import {
  Inter,
  Plus_Jakarta_Sans,
  Bebas_Neue,
  Kanit,
} from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Zidan Irfan Zaky - Software Engineer Portfolio | ZIDZAKY",
  description:
    "Personal Branding & Portfolio of Zidan Irfan Zaky (ZIDZAKY) — Software Engineer, Full-Stack Developer, and UI/UX Enthusiast from Telkom University Surabaya (GPA 3.96/4.00).",
  keywords: [
    "Zidan Irfan Zaky",
    "ZIDZAKY",
    "Software Engineer Portfolio",
    "Full-Stack Developer",
    "UI/UX Designer",
    "Telkom University Surabaya",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Zidan Irfan Zaky", url: "https://github.com/ZidZaky" }],
  openGraph: {
    title: "Zidan Irfan Zaky - Software Engineer Portfolio",
    description:
      "Full-Stack Web & Mobile Developer, UI/UX Enthusiast, and Software Engineering Graduate from Telkom University Surabaya (IPK 3.96/4.00).",
    type: "website",
    locale: "id_ID",
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
      <body className="font-sans bg-cream text-dark antialiased selection:bg-maroon selection:text-light">
        {children}
      </body>
    </html>
  );
}
