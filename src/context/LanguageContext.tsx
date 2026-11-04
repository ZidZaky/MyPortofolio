"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "id";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default language is English ("en")
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    // 1. Check if user already has an explicit preference saved in localStorage
    const saved = localStorage.getItem("preferred_lang") as Language | null;
    if (saved === "en" || saved === "id") {
      setLangState(saved);
      return;
    }

    // 2. If no saved preference, attempt geolocation detection
    if (typeof navigator !== "undefined" && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Indonesia bounding box approx:
          // Latitude: -11.5 to 6.5
          // Longitude: 95.0 to 141.5
          const isIndonesia =
            latitude >= -11.5 &&
            latitude <= 6.5 &&
            longitude >= 95.0 &&
            longitude <= 141.5;

          const detectedLang: Language = isIndonesia ? "id" : "en";
          setLangState(detectedLang);
          localStorage.setItem("preferred_lang", detectedLang);
        },
        () => {
          // If location access is denied, times out, or error: default to English ("en")
          setLangState("en");
          localStorage.setItem("preferred_lang", "en");
        },
        { timeout: 6000, maximumAge: 300000 }
      );
    } else {
      // No geolocation access available -> default to English
      setLangState("en");
      localStorage.setItem("preferred_lang", "en");
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred_lang", newLang);
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

