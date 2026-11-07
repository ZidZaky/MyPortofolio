"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "id";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "id",
  setLang: () => {},
  toggleLang: () => {},
});

export function LanguageProvider({
  children,
  initialLang = "id",
}: {
  children: React.ReactNode;
  initialLang?: Language;
}) {
  const [lang, setLangState] = useState<Language>(initialLang);

  useEffect(() => {
    // 1. Check if user arrived via explicit URL param (?lang=en or ?lang=id)
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get("lang");
      if (urlLang === "en" || urlLang === "id") {
        setLangState(urlLang);
        localStorage.setItem("preferred_lang", urlLang);
        localStorage.setItem("lang_consent_resolved", "true");
        return;
      }
    }

    // 2. Check if user already has an explicit preference saved in localStorage
    const saved = localStorage.getItem("preferred_lang") as Language | null;
    if (saved === "en" || saved === "id") {
      setLangState(saved);
      return;
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred_lang", newLang);
      localStorage.setItem("lang_consent_resolved", "true");
    }
  };

  const toggleLang = () => {
    const next = lang === "en" ? "id" : "en";
    setLang(next);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
