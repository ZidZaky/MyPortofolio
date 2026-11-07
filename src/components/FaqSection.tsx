"use client";

import React, { useState } from "react";
import { getPortfolioData } from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown, HelpCircle, Mail, MessageCircle } from "lucide-react";

export default function FaqSection() {
  const { lang } = useLanguage();
  const { profile, t } = getPortfolioData(lang);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="bg-cream text-dark py-20 sm:py-28 px-5 sm:px-8 border-t border-black/10"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-heading font-extrabold tracking-widest uppercase text-maroon bg-maroon/10 px-3.5 py-1 rounded-full mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            {t.faq.badge}
          </span>
          <h2
            id="faq-heading"
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] tracking-tight text-dark"
          >
            {t.faq.headingPart1} <br className="hidden sm:inline" />
            {t.faq.headingPart2}
          </h2>
          <p className="mt-4 text-dark/80 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-2xl mx-auto">
            {t.faq.sub}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="bg-white/80 rounded-2xl border border-black/10 shadow-sm transition-all duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full py-5 px-6 sm:px-7 flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-dark leading-snug">
                    {item.question}
                  </h3>
                  <span
                    className={`w-8 h-8 rounded-full bg-cream flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-maroon text-cream" : "text-dark"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-xs sm:text-sm text-dark/85 leading-relaxed border-t border-black/5">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="mt-12 text-center bg-white/60 border border-black/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="font-heading font-extrabold text-base text-dark">
              {lang === "en"
                ? "Have other specific questions or collaboration requests?"
                : "Punya pertanyaan khusus atau kebutuhan kolaborasi proyek?"}
            </p>
            <p className="text-xs text-dark/70 mt-1">
              {lang === "en"
                ? "Reach out directly via WhatsApp or email for immediate response."
                : "Hubungi langsung melalui WhatsApp atau email untuk respons cepat."}
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-maroon text-light font-heading font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl hover:bg-black transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href={`mailto:${profile.primaryEmail}`}
              className="inline-flex items-center gap-2 bg-dark text-light font-heading font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl hover:bg-maroon transition-all shadow-sm"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

