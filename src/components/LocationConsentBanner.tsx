"use client";

import React, { useState, useEffect } from "react";
import { useLanguage, Language } from "@/context/LanguageContext";
import { MapPin, Globe, X, Loader2, Check } from "lucide-react";

export default function LocationConsentBanner() {
  const { lang, setLang } = useLanguage();
  const [showBanner, setShowBanner] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    // If URL has explicit ?lang= param, skip prompt
    const params = new URLSearchParams(window.location.search);
    if (params.get("lang")) return;

    // Check if user already answered / dismissed consent
    const resolved = localStorage.getItem("lang_consent_resolved");
    if (!resolved) {
      // Small timeout for smooth natural appearance
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAllowLocation = () => {
    if (typeof navigator === "undefined" || !("geolocation" in navigator)) {
      dismissBanner();
      return;
    }

    setIsDetecting(true);
    setStatusMessage(lang === "en" ? "Detecting location..." : "Mendeteksi lokasi...");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // Indonesia bounding box approx:
        // Lat: -11.5 to 6.5, Lon: 95.0 to 141.5
        const isIndonesia =
          latitude >= -11.5 &&
          latitude <= 6.5 &&
          longitude >= 95.0 &&
          longitude <= 141.5;

        const detected: Language = isIndonesia ? "id" : "en";
        setLang(detected);
        setIsDetecting(false);
        setStatusMessage(
          detected === "id"
            ? "Lokasi terdeteksi: Indonesia (ID)"
            : "Location detected: International (EN)"
        );

        setTimeout(() => {
          dismissBanner();
        }, 1200);
      },
      () => {
        // Permission denied or timeout -> retain default Indonesian & close
        setIsDetecting(false);
        dismissBanner();
      },
      { timeout: 7000, maximumAge: 300000 }
    );
  };

  const handleSelectLanguage = (selected: Language) => {
    setLang(selected);
    dismissBanner();
  };

  const dismissBanner = () => {
    setShowBanner(false);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang_consent_resolved", "true");
    }
  };

  if (!showBanner) return null;

  return (
    <aside
      aria-label="Consent preferensi bahasa dan lokasi"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 max-w-md w-full bg-navy/95 backdrop-blur-md text-light border border-white/20 rounded-2xl p-4 sm:p-5 shadow-[0_18px_45px_rgba(0,0,0,0.45)] transition-all animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-maroon text-cream flex items-center justify-center flex-shrink-0 shadow-sm">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-heading font-extrabold text-sm sm:text-base text-white tracking-wide">
              {lang === "en"
                ? "Location & Language"
                : "Preferensi Lokasi & Bahasa"}
            </h4>
          </div>
        </div>

        <button
          type="button"
          onClick={dismissBanner}
          className="text-light/60 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
          aria-label="Tutup pemberitahuan lokasi"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs sm:text-[13px] text-light/85 mt-2.5 leading-relaxed">
        {lang === "en"
          ? "Allow location access so we can automatically set your language (Indonesian / English), or pick your preference directly:"
          : "Izinkan akses lokasi agar kami dapat menyesuaikan bahasa secara otomatis (Indonesia / English), atau pilih preferensi Anda:"}
      </p>

      {statusMessage && (
        <div className="mt-2.5 flex items-center gap-2 text-xs text-cream bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
          {isDetecting ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <Check className="w-3.5 h-3.5 text-emerald-400" />
          )}
          <span>{statusMessage}</span>
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-4 pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-2">
        <button
          type="button"
          onClick={handleAllowLocation}
          disabled={isDetecting}
          className="inline-flex items-center gap-1.5 bg-maroon hover:bg-black text-light font-heading font-extrabold text-xs uppercase tracking-wider px-4 py-2 rounded-xl transition-all shadow-md active:scale-95 disabled:opacity-60"
        >
          {isDetecting ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <MapPin className="w-3.5 h-3.5" />
          )}
          <span>
            {lang === "en" ? "Allow Location" : "Izinkan Lokasi"}
          </span>
        </button>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => handleSelectLanguage("id")}
            className={`text-xs font-heading font-bold px-3 py-1.5 rounded-lg border transition-all ${
              lang === "id"
                ? "bg-cream text-dark border-cream shadow-sm"
                : "bg-white/10 text-light/80 border-white/15 hover:text-white"
            }`}
          >
            🇮🇩 ID
          </button>
          <button
            type="button"
            onClick={() => handleSelectLanguage("en")}
            className={`text-xs font-heading font-bold px-3 py-1.5 rounded-lg border transition-all ${
              lang === "en"
                ? "bg-cream text-dark border-cream shadow-sm"
                : "bg-white/10 text-light/80 border-white/15 hover:text-white"
            }`}
          >
            🇬🇧 EN
          </button>
        </div>
      </div>
    </aside>
  );
}

