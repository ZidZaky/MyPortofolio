"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { getPortfolioData } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLanguage();
  const { profile, t } = getPortfolioData(lang);

  const navItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contactUs, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-black/10 py-3.5"
          : "bg-cream py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Left: Brand Logo ZIDZAKY */}
        <a
          href="#home"
          className="text-xl sm:text-2xl tracking-tight text-dark select-none focus:outline-none"
          aria-label="ZIDZAKY Home"
        >
          <span className="font-normal">{profile.brandFirst}</span>
          <span className="font-extrabold">{profile.brandSecond}</span>
        </a>

        {/* Right: Desktop Navigation Links & Language Switcher */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          <nav
            className="flex items-center gap-7 lg:gap-8"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm lg:text-[15px] font-medium tracking-wide text-dark hover:text-maroon transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-maroon after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Language Switcher Toggle */}
          <div
            className="flex items-center bg-black/5 hover:bg-black/10 border border-black/10 rounded-full p-1 transition-colors"
            role="group"
            aria-label="Language selection"
          >
            <Globe className="w-3.5 h-3.5 text-dark/60 ml-1.5 mr-0.5" />
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-2.5 py-0.5 rounded-full text-xs font-heading font-extrabold tracking-wider transition-all ${
                lang === "en"
                  ? "bg-maroon text-light shadow-sm"
                  : "text-dark/70 hover:text-dark"
              }`}
              aria-label="Switch language to English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("id")}
              className={`px-2.5 py-0.5 rounded-full text-xs font-heading font-extrabold tracking-wider transition-all ${
                lang === "id"
                  ? "bg-maroon text-light shadow-sm"
                  : "text-dark/70 hover:text-dark"
              }`}
              aria-label="Ganti bahasa ke Indonesia"
            >
              ID
            </button>
          </div>
        </div>

        {/* Mobile: Language Switcher + Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <div
            className="flex items-center bg-black/5 border border-black/10 rounded-full p-0.5"
            role="group"
            aria-label="Language selection mobile"
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-2 py-0.5 rounded-full text-[11px] font-heading font-extrabold tracking-wider transition-all ${
                lang === "en"
                  ? "bg-maroon text-light shadow-sm"
                  : "text-dark/70"
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("id")}
              className={`px-2 py-0.5 rounded-full text-[11px] font-heading font-extrabold tracking-wider transition-all ${
                lang === "id"
                  ? "bg-maroon text-light shadow-sm"
                  : "text-dark/70"
              }`}
            >
              ID
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center justify-center p-2 rounded-lg text-dark hover:bg-black/5 focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {isOpen && (
        <div className="md:hidden bg-cream border-b-2 border-black px-5 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-2 px-3 rounded-lg text-sm font-bold tracking-wider text-dark hover:bg-maroon hover:text-light transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
