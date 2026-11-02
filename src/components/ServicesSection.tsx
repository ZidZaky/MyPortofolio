"use client";

import React, { useState } from "react";
import { personalProfile, servicesData } from "@/data/portfolioData";
import {
  Layers,
  Palette,
  ShieldCheck,
  GraduationCap,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

function getServiceIcon(id: string) {
  switch (id) {
    case "service-fullstack":
      return <Layers className="w-6 h-6 text-maroon" />;
    case "service-uiux":
      return <Palette className="w-6 h-6 text-navy" />;
    case "service-qa-game":
      return <ShieldCheck className="w-6 h-6 text-maroon" />;
    default:
      return <Layers className="w-6 h-6 text-maroon" />;
  }
}

export default function ServicesSection() {
  const [imgSrc, setImgSrc] = useState("/images/zidan-full.jpg");
  const [imgFailed, setImgFailed] = useState(false);

  const handleImageError = () => {
    if (imgSrc === "/images/zidan-full.jpg") {
      setImgSrc("/images/zidan-full.png");
    } else {
      setImgFailed(true);
    }
  };

  return (
    <section
      id="services"
      className="bg-cream text-dark py-20 sm:py-28 px-5 sm:px-8 border-y border-black/10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Top Section: Left Graduation Photo Card + Right Editorial Heading & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16 sm:mb-20">
          {/* Left Column: Graduation Portrait Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-[380px] rounded-2xl bg-white/80 p-3 border border-black/15 shadow-lg">
              {!imgFailed ? (
                <div className="relative overflow-hidden rounded-xl bg-dark aspect-[4/3]">
                  <img
                    src={imgSrc}
                    alt={`${personalProfile.fullName} - Graduation Telkom University Surabaya`}
                    width={420}
                    height={315}
                    loading="lazy"
                    onError={handleImageError}
                    className="w-full h-full object-cover object-center select-none hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="rounded-xl bg-navy text-light aspect-[4/3] p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded bg-maroon text-cream">
                      Telkom University
                    </span>
                    <GraduationCap className="w-6 h-6 text-cream" />
                  </div>
                  <div className="my-auto text-center">
                    <p className="font-heading font-black text-4xl text-cream">
                      3.96
                    </p>
                    <p className="text-xs uppercase tracking-widest text-light/80 mt-1">
                      Cumulative GPA / 4.00
                    </p>
                  </div>
                </div>
              )}

              {/* Bottom Academic Badge */}
              <div className="mt-3 bg-dark text-light rounded-xl px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-cream/80 font-semibold">
                    S1 Rekayasa Perangkat Lunak
                  </p>
                  <p className="font-heading font-extrabold text-xs sm:text-sm">
                    Telkom University Surabaya
                  </p>
                </div>
                <span className="bg-maroon text-cream font-heading font-extrabold text-xs px-3 py-1 rounded-lg flex-shrink-0">
                  IPK 3.96
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Main Heading, Sub-Description, Stats & Key Coursework */}
          <div className="lg:col-span-7">
            <span className="inline-block text-xs font-heading font-extrabold tracking-widest uppercase text-maroon bg-maroon/10 px-3.5 py-1 rounded-full mb-3">
              SERVICES &amp; CAPABILITIES
            </span>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] tracking-tight text-dark">
              What can i offer to enhance <br className="hidden sm:inline" />
              our project.
            </h2>

            <p className="mt-4 text-dark/85 text-xs sm:text-sm md:text-[15px] leading-relaxed">
              {personalProfile.servicesIntro}
            </p>

            {/* 4 Key Summary Stats (GPA, Repos, Teaching Assistant, Understated English Note) */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {personalProfile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/75 backdrop-blur-sm border border-black/10 rounded-xl p-3.5 shadow-sm"
                >
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading font-extrabold text-xl sm:text-2xl text-maroon">
                      {stat.value}
                    </span>
                    <span className="text-[11px] font-bold text-navy">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="font-heading font-bold text-xs text-dark mt-1">
                    {stat.label}
                  </p>
                  <p className="text-[10px] text-dark/70 mt-0.5 leading-snug">
                    {stat.subtext}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Relevant Coursework & Engineering Focus */}
            <div className="mt-5 bg-white/65 border border-black/10 rounded-xl p-4">
              <div className="flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-wider text-navy mb-2.5">
                <BookOpen className="w-4 h-4 text-maroon" />
                <span>Core Software Engineering Coursework &amp; Focus</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {personalProfile.keyCourses.map((course) => (
                  <span
                    key={course}
                    className="text-[11px] font-semibold px-3 py-1 rounded-lg bg-cream text-dark border border-black/10"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3 Columns: Services Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 pt-8 border-t-2 border-black/15">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group bg-white/60 hover:bg-white rounded-2xl p-6 sm:p-7 border border-black/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-cream flex items-center justify-center border border-black/10">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="font-heading font-black text-2xl text-dark/20 group-hover:text-maroon/40 transition-colors">
                    {service.number}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-dark leading-snug">
                  {service.title}
                </h3>

                <p className="mt-3 text-dark/80 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-4 space-y-2 border-t border-black/10 pt-4">
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-xs text-dark/85"
                    >
                      <CheckCircle2 className="w-4 h-4 text-maroon flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 pt-3 border-t border-black/10 flex flex-wrap gap-1.5">
                {service.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-cream text-dark border border-black/10"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
