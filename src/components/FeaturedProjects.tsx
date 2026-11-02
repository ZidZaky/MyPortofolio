import React from "react";
import {
  featuredProjectsData,
  liveDemoProjectsData,
  personalProfile,
  ProjectItem,
} from "@/data/portfolioData";
import {
  ArrowUpRight,
  BarChart3,
  Boxes,
  MapPin,
  Utensils,
  Gamepad2,
  Star,
  Sparkles,
  Globe,
} from "lucide-react";

function ProjectPreviewGraphic({ project }: { project: ProjectItem }) {
  if (project.previewType === "erp") {
    return (
      <div className="w-full h-full bg-slate-50 rounded-lg p-3.5 flex flex-col justify-between border border-slate-200/80 select-none overflow-hidden">
        {/* Top ERP Window Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-maroon" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="ml-1.5 text-[10px] font-heading font-bold text-slate-700 tracking-wide">
              CHAIN-ERP // DASHBOARD
            </span>
          </div>
          <span className="text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-navy text-light">
            ENTERPRISE
          </span>
        </div>

        {/* Middle ERP KPI & Chart Mockup */}
        <div className="grid grid-cols-3 gap-2 my-auto py-2">
          <div className="col-span-2 bg-white rounded-md p-2.5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] font-bold uppercase text-slate-400">
                Supply Chain Flow
              </span>
              <BarChart3 className="w-3.5 h-3.5 text-navy" />
            </div>
            {/* Mini Bar Chart Graphic */}
            <div className="flex items-end gap-1.5 h-12 pt-2 px-1">
              <div className="w-full bg-navy/30 rounded-t h-[45%]" />
              <div className="w-full bg-navy/50 rounded-t h-[65%]" />
              <div className="w-full bg-navy/75 rounded-t h-[55%]" />
              <div className="w-full bg-maroon rounded-t h-[90%]" />
              <div className="w-full bg-navy rounded-t h-[100%]" />
            </div>
          </div>

          <div className="col-span-1 flex flex-col gap-2">
            <div className="flex-1 bg-navy text-light rounded-md p-2 flex flex-col justify-center">
              <Boxes className="w-3.5 h-3.5 text-cream mb-1" />
              <span className="font-heading font-extrabold text-xs leading-none">
                99.4%
              </span>
              <span className="text-[8px] text-cream/80 mt-0.5">
                Stock Sync
              </span>
            </div>
            <div className="flex-1 bg-white rounded-md p-2 border border-slate-200 flex flex-col justify-center">
              <span className="text-[8px] font-bold uppercase text-slate-400">
                Modules
              </span>
              <span className="font-heading font-extrabold text-[11px] text-navy">
                ERP + QA
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Status Strip */}
        <div className="flex items-center justify-between text-[10px] pt-1.5 border-t border-slate-200 text-slate-600 font-semibold">
          <span>Full-Stack System</span>
          <span className="inline-flex items-center gap-1 text-maroon font-bold group-hover:translate-x-0.5 transition-transform">
            Preview <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    );
  }

  if (project.previewType === "culinary") {
    return (
      <div className="w-full h-full bg-[#FAF6F0] rounded-lg p-3.5 flex flex-col justify-between border border-stone-200 select-none overflow-hidden">
        {/* Top App Bar */}
        <div className="flex items-center justify-between border-b border-stone-200/80 pb-2">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-md bg-maroon text-light flex items-center justify-center">
              <Utensils className="w-3 h-3" />
            </div>
            <span className="text-[10px] font-heading font-extrabold text-dark tracking-wide">
              JELAJAH KULINER
            </span>
          </div>
          <span className="inline-flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
            <MapPin className="w-2.5 h-2.5" /> GPS Live
          </span>
        </div>

        {/* Visual Map & Culinary Card Mockup */}
        <div className="my-auto py-2 space-y-2">
          <div className="bg-white rounded-lg p-2.5 border border-stone-200 shadow-sm flex items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center text-maroon font-heading font-black text-xs">
                🍜
              </div>
              <div>
                <p className="font-heading font-extrabold text-[11px] text-dark leading-tight">
                  Rekomendasi Terdekat
                </p>
                <p className="text-[9px] text-stone-500 mt-0.5">
                  Realtime Location • UI/UX v2
                </p>
              </div>
            </div>
            <div className="flex items-center gap-0.5 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded text-[10px] font-bold text-amber-700">
              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
              4.9
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5 text-center">
            <div className="bg-white/90 border border-stone-200 rounded py-1 px-1.5 text-[9px] font-bold text-navy">
              📍 Geolocation
            </div>
            <div className="bg-white/90 border border-stone-200 rounded py-1 px-1.5 text-[9px] font-bold text-maroon">
              ✨ Modern UX
            </div>
            <div className="bg-white/90 border border-stone-200 rounded py-1 px-1.5 text-[9px] font-bold text-dark">
              ⚡ Fast Search
            </div>
          </div>
        </div>

        {/* Bottom Status Strip */}
        <div className="flex items-center justify-between text-[10px] pt-1.5 border-t border-stone-200 text-stone-600 font-semibold">
          <span>Web App &amp; UI/UX Rework</span>
          <span className="inline-flex items-center gap-1 text-maroon font-bold group-hover:translate-x-0.5 transition-transform">
            GitHub <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    );
  }

  // Pixel Art Game Preview (Zero Waste Odyssey / Pixel Adventure)
  return (
    <div className="w-full h-full bg-[#111827] rounded-lg p-3.5 flex flex-col justify-between border border-slate-700 text-light select-none overflow-hidden relative">
      {/* Top Retro HUD Bar */}
      <div className="flex items-center justify-between border-b border-slate-700/80 pb-2 z-10">
        <div className="flex items-center gap-1 text-rose-400 text-xs leading-none tracking-widest">
          <span>♥</span>
          <span>♥</span>
          <span>♥</span>
          <span className="ml-1.5 text-[9px] font-mono font-bold text-emerald-400 uppercase">
            LVL 01
          </span>
        </div>
        <span className="font-mono text-[10px] font-bold text-amber-300 tracking-wider">
          SCORE 04920
        </span>
      </div>

      {/* Middle 8-Bit Pixel Scene Canvas */}
      <div className="my-auto py-2 relative z-10 flex flex-col items-center justify-center">
        <div className="w-full rounded-md bg-gradient-to-b from-[#1E3A5F] to-[#153B47] border border-emerald-400/30 p-2.5 flex flex-col items-center justify-between h-20 relative overflow-hidden">
          <div className="w-full flex justify-between text-[9px] font-mono text-sky-200/70">
            <span>[::]</span>
            <span className="text-emerald-300 font-bold tracking-widest">
              PIXEL 2D ENGINE
            </span>
            <span>[::]</span>
          </div>

          <div className="w-full flex items-end justify-around pt-1">
            <div className="w-5 h-5 bg-emerald-400 border-2 border-white shadow-[2px_2px_0px_#000] flex items-center justify-center text-[10px] text-dark font-black">
              ♻
            </div>
            <div className="px-2 py-0.5 bg-maroon border border-amber-300 rounded text-[9px] font-mono font-bold text-amber-200 flex items-center gap-1 shadow-[2px_2px_0px_#000]">
              <Gamepad2 className="w-3 h-3" /> PLAY
            </div>
            <div className="w-5 h-5 bg-amber-400 border-2 border-white shadow-[2px_2px_0px_#000] flex items-center justify-center text-[10px] text-dark font-black">
              ★
            </div>
          </div>

          <div className="w-full h-2 bg-emerald-500 border-t-2 border-emerald-300 -mx-2.5 -mb-2.5" />
        </div>
      </div>

      {/* Bottom Status Strip */}
      <div className="flex items-center justify-between text-[10px] pt-1.5 border-t border-slate-700/80 text-slate-300 font-mono z-10">
        <span className="inline-flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-400" /> Unity 2D / Pixel Art
        </span>
        <span className="inline-flex items-center gap-1 text-emerald-400 font-bold group-hover:translate-x-0.5 transition-transform">
          GitHub <ArrowUpRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="bg-navy text-light py-20 sm:py-24 px-5 sm:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* 2-Column Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start mb-12 sm:mb-16">
          <div className="md:col-span-5">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] tracking-tight text-light">
              Here is <br />
              My Portofolio
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-light/85 text-xs sm:text-sm md:text-[15px] leading-relaxed">
              {personalProfile.featuredIntro}
            </p>
          </div>
        </div>

        {/* 3-Card Featured Projects Grid (Chain ERP, Jelajah Kuliner, Zero Waste Odyssey) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
          {featuredProjectsData.map((project) => (
            <article
              key={project.id}
              className="group bg-maroon rounded-xl p-5 sm:p-6 shadow-[0_14px_30px_rgba(0,0,0,0.35)] border border-white/10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
            >
              <div>
                {/* Clean Visual App Preview Widget */}
                <a
                  href={project.demoUrl || project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Buka proyek ${project.displayName}`}
                  className="block bg-white text-dark rounded-lg p-1.5 h-[195px] mb-5 shadow-md group-hover:ring-2 group-hover:ring-cream transition-all"
                >
                  <ProjectPreviewGraphic project={project} />
                </a>

                {/* Card Title & Role Badge */}
                <div className="text-center mb-3">
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl tracking-wide uppercase text-light">
                    {project.displayName}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center justify-center gap-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-black/30 text-cream border border-white/10">
                      {project.roles[0]}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-cream text-dark">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-light/85 text-xs leading-relaxed text-left mt-3">
                  {project.description}
                </p>
              </div>

              {/* Card Footer Tech Pills & Repo Link */}
              <div className="mt-5 pt-3.5 border-t border-white/15 flex items-center justify-between gap-2 text-xs">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded bg-black/25 text-cream/90 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-cream hover:text-white transition-colors flex-shrink-0"
                >
                  View Repo
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Live Deployed Web Apps Showcase Bar (PhotoBooth-PhotoRek & TourAtur App) */}
        {liveDemoProjectsData.length > 0 && (
          <div className="mt-10 bg-black/20 border border-white/15 rounded-2xl p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <h3 className="font-heading font-extrabold text-sm sm:text-base uppercase tracking-wider text-cream">
                  Live Interactive Web Demos (Deployed on Vercel)
                </h3>
              </div>
              <span className="text-xs text-light/70">
                Klik untuk mencoba aplikasi secara langsung di browser
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {liveDemoProjectsData.map((demo) => (
                <a
                  key={demo.id}
                  href={demo.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/5 hover:bg-maroon/80 border border-white/15 hover:border-cream/40 rounded-xl p-4 flex items-center justify-between gap-4 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-cream/15 text-cream mt-0.5">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-heading font-extrabold text-sm sm:text-base text-white group-hover:text-cream transition-colors">
                          {demo.displayName}
                        </h4>
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                          Live Demo
                        </span>
                      </div>
                      <p className="text-xs text-light/80 mt-1 line-clamp-1">
                        {demo.description}
                      </p>
                      <p className="text-[11px] font-mono text-cream/85 mt-1">
                        {demo.demoUrl?.replace(/^https?:\/\//, "")}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-cream flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Bottom quick link to Full Archive */}
        <div className="mt-10 text-center">
          <a
            href="#archive"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-bold tracking-wider uppercase text-cream hover:text-white border border-cream/30 hover:border-cream px-6 py-2.5 rounded-full transition-all"
          >
            Explore Complete Project Archive (2023–2026)
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
