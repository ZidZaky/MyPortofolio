"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { personalProfile } from "@/data/portfolioData";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "SERVICES", href: "#services" },
  { label: "PROJECTS", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "CONTACT US", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          <span className="font-normal">{personalProfile.brandFirst}</span>
          <span className="font-extrabold">{personalProfile.brandSecond}</span>
        </a>

        {/* Right: Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-7 lg:gap-10"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm lg:text-[15px] font-medium tracking-wide text-dark hover:text-maroon transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-maroon after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-dark hover:bg-black/5 focus:outline-none"
          aria-expanded={isOpen}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Navigation */}
      {isOpen && (
        <div className="md:hidden bg-cream border-b-2 border-black px-5 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
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

