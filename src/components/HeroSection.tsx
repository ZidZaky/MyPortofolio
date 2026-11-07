"use client";

import React, { useState } from "react";
import { getPortfolioData } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const [imgError, setImgError] = useState(false);
  const { lang } = useLanguage();
  const { profile, t } = getPortfolioData(lang);

  return (
    <section
      id="home"
      className="bg-cream text-dark pt-4 sm:pt-8 pb-16 sm:pb-24 px-4 sm:px-8 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Accessible SEO Heading */}
        <h1 className="sr-only">
          Zidan Irfan Zaky (ZidZaky) — Software Engineer &amp; Full-Stack Developer Portfolio
        </h1>

        {/* Exported Hero Graphic Composition */}
        <div className="w-full max-w-[920px] mx-auto flex items-center justify-center">
          {!imgError ? (
            <img
              src="/images/hero-banner.png"
              alt="Zidan Irfan Zaky (ZidZaky) — Software Engineer & Full-Stack Developer Portfolio Banner"
              width={924}
              height={422}
              fetchPriority="high"
              onError={() => setImgError(true)}
              className="w-full h-auto object-contain block select-none"
            />
          ) : (
            <div className="w-full py-16 border-b-2 border-black text-center">
              <p className="font-poster text-6xl sm:text-8xl tracking-tight uppercase text-dark">
                MY PORTFOLIO
              </p>
              <span className="inline-block mt-2 bg-maroon text-light font-badge font-black italic text-xl sm:text-2xl px-6 py-2 rounded-xl uppercase">
                {profile.heroBadgeAlt}
              </span>
            </div>
          )}
        </div>

        {/* Sub-caption & CTA Button below the Hero Graphic */}
        <div className="pt-8 sm:pt-10 flex flex-col items-center text-center">
          <p className="max-w-[650px] text-dark/90 text-xs sm:text-sm md:text-[15px] leading-relaxed font-medium px-2">
            {profile.heroCaption}
          </p>

          <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-black text-light font-heading font-bold text-xs sm:text-sm tracking-widest uppercase px-10 py-3.5 rounded-xl shadow-[0_8px_18px_rgba(0,0,0,0.32)] hover:bg-maroon hover:scale-105 active:scale-95 transition-all duration-200"
            >
              {t.hero.contactBtn}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
