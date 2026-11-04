"use client";

import React, { useState, useMemo } from "react";
import {
  getPortfolioData,
  ProjectYear,
  ProjectCategory,
} from "@/data/portfolioData";
import { useLanguage } from "@/context/LanguageContext";
import {
  FolderGit2,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Users,
  Trophy,
  Filter,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Globe,
} from "lucide-react";

const yearOptions: ProjectYear[] = ["All", "2026", "2025", "2024", "2023"];
const categoryOptions: ProjectCategory[] = [
  "All",
  "Web",
  "Backend",
  "Mobile",
  "Game",
  "Desktop",
  "QA",
];

export default function AllProjectsAndJourney() {
  const [selectedYear, setSelectedYear] = useState<ProjectYear>("All");
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");
  const { lang } = useLanguage();
  const {
    profile,
    projects,
    experience,
    education,
    certifications,
    awards,
    t,
  } = getPortfolioData(lang);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchYear =
        selectedYear === "All" || project.year === selectedYear;
      const matchCategory =
        selectedCategory === "All" ||
        project.categories.includes(selectedCategory);
      return matchYear && matchCategory;
    });
  }, [projects, selectedYear, selectedCategory]);

  const workAndAcademicExp = experience.filter(
    (exp) =>
      exp.type === "work" || exp.type === "academic" || exp.type === "event"
  );
  const organizationExp = experience.filter(
    (exp) => exp.type === "organization"
  );

  return (
    <section
      id="archive"
      className="deferred-section bg-maroon text-light py-20 sm:py-28 px-5 sm:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* 2-Column Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start mb-12">
          <div className="md:col-span-5">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] tracking-tight text-light">
              {t.archive.headingPart1} <br />
              {t.archive.headingPart2}
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="text-light/85 text-xs sm:text-sm md:text-[15px] leading-relaxed">
              {profile.archiveIntro}
            </p>
          </div>
        </div>

        {/* Interactive Filter Controls */}
        <div className="bg-black/25 border border-white/15 rounded-2xl p-5 sm:p-6 mb-10 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            {/* Year Filter */}
            <div>
              <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-cream/90 mb-2.5">
                <Filter className="w-3.5 h-3.5" />
                <span>{t.archive.filterByYear}</span>
              </div>
              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Filter projects by year"
              >
                {yearOptions.map((year) => {
                  const active = selectedYear === year;
                  return (
                    <button
                      key={year}
                      type="button"
                      onClick={() => setSelectedYear(year)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-heading font-bold tracking-wider uppercase transition-all ${
                        active
                          ? "bg-cream text-dark shadow-md scale-105"
                          : "bg-white/10 text-light/85 hover:bg-white/20"
                      }`}
                    >
                      {year === "All" ? t.archive.all : year}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-cream/90 mb-2.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.archive.filterByCategory}</span>
              </div>
              <div
                className="flex flex-wrap gap-2"
                role="group"
                aria-label="Filter projects by category"
              >
                {categoryOptions.map((category) => {
                  const active = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-heading font-bold tracking-wider uppercase transition-all ${
                        active
                          ? "bg-navy text-cream border border-cream/50 shadow-md scale-105"
                          : "bg-white/10 text-light/85 hover:bg-white/20"
                      }`}
                    >
                      {category === "All" ? t.archive.all : category}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Filter Summary & Reset */}
          <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-cream/85">
            <span>
              {t.archive.showing}{" "}
              <strong className="text-white font-bold">
                {filteredProjects.length}
              </strong>{" "}
              {t.archive.of}{" "}
              <strong className="text-white font-bold">
                {projects.length}
              </strong>{" "}
              {t.archive.projectsCountSuffix}
            </span>
            {(selectedYear !== "All" || selectedCategory !== "All") && (
              <button
                type="button"
                onClick={() => {
                  setSelectedYear("All");
                  setSelectedCategory("All");
                }}
                className="underline text-cream hover:text-white font-semibold"
              >
                {t.archive.resetFilter}
              </button>
            )}
          </div>
        </div>

        {/* Complete Project Archive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group bg-black/25 hover:bg-black/35 border border-white/15 hover:border-cream/40 rounded-xl p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Top Meta Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="w-8 h-8 rounded-lg bg-cream/15 border border-cream/25 flex items-center justify-center text-cream">
                      <FolderGit2 className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-heading font-extrabold px-2.5 py-0.5 rounded-full bg-cream text-dark">
                      {project.year}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-navy text-cream border border-cream/30">
                        {t.archive.featuredBadge}
                      </span>
                    )}
                    {project.demoUrl && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                        {t.archive.demoBadge}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-1 justify-end">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-cream"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="font-heading font-extrabold text-base sm:text-lg text-white group-hover:text-cream transition-colors break-words">
                  {project.displayName}
                </h3>

                {/* Roles */}
                <p className="text-[11px] font-semibold text-cream/90 mt-1">
                  {project.roles.join(" • ")}
                </p>

                {/* Jobdesk Description */}
                <p className="text-xs text-light/85 leading-relaxed mt-3">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack & Action Links (Live Demo + GitHub) */}
              <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] text-light/75 bg-white/5 px-2 py-0.5 rounded border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-heading font-bold text-emerald-300 hover:text-white bg-emerald-500/15 px-2.5 py-1 rounded-md border border-emerald-400/30 transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      {t.archive.demoBadge}
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-heading font-bold text-cream hover:text-white"
                  >
                    GitHub
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================================================================= */}
        {/* TIMELINE PENGALAMAN, PENDIDIKAN & ORGANISASI                       */}
        {/* ================================================================= */}
        <div id="experience" className="pt-12 border-t-2 border-white/20">
          <div className="mb-12">
            <span className="inline-block text-xs font-heading font-extrabold tracking-widest uppercase bg-cream text-dark px-3.5 py-1 rounded-full mb-3">
              {t.archive.journeyBadge}
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white">
              {t.archive.journeyHeading}
            </h3>
            <p className="text-light/80 text-xs sm:text-sm mt-2 max-w-2xl">
              {t.archive.journeySub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 7 Columns: Work & Academic Experience + Education */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2.5 mb-2">
                <Briefcase className="w-5 h-5 text-cream" />
                <h4 className="font-heading font-extrabold text-lg sm:text-xl text-cream uppercase tracking-wide">
                  {t.archive.workAcademicTitle}
                </h4>
              </div>

              <div className="space-y-5 relative before:content-[''] before:absolute before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-cream/30">
                {workAndAcademicExp.map((exp) => (
                  <div key={exp.id} className="relative pl-10">
                    {/* Timeline Node Dot */}
                    <span className="absolute left-2.5 top-5 w-3.5 h-3.5 rounded-full bg-cream border-2 border-maroon shadow" />

                    <div className="bg-black/25 border border-white/15 rounded-xl p-5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-heading font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded bg-navy text-cream">
                          {exp.period}
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-cream/80">
                          {exp.organization}
                        </span>
                      </div>

                      <h5 className="font-heading font-extrabold text-base sm:text-lg text-white mt-2">
                        {exp.role}
                      </h5>

                      <p className="text-xs sm:text-sm text-light/85 leading-relaxed mt-2">
                        {exp.description}
                      </p>

                      {exp.highlights && exp.highlights.length > 0 && (
                        <ul className="mt-3 space-y-1.5 border-t border-white/10 pt-3">
                          {exp.highlights.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-xs text-cream/90"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-cream flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Education Block with Highlighted Coursework */}
              <div className="pt-4">
                <div className="flex items-center gap-2.5 mb-4">
                  <GraduationCap className="w-5 h-5 text-cream" />
                  <h4 className="font-heading font-extrabold text-lg sm:text-xl text-cream uppercase tracking-wide">
                    {t.archive.eduTitle}
                  </h4>
                </div>

                <div className="space-y-4">
                  {education.map((edu) => (
                    <div
                      key={edu.institution}
                      className="bg-black/25 border border-white/15 rounded-xl p-5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h5 className="font-heading font-extrabold text-base sm:text-lg text-white">
                          {edu.institution}
                        </h5>
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-cream text-dark">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-cream mt-1">
                        {edu.degree}
                      </p>

                      <ul className="mt-3 space-y-1.5">
                        {edu.highlights.map((hl) => (
                          <li
                            key={hl}
                            className="flex items-start gap-2 text-xs text-light/85"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-cream flex-shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>

                      {edu.coursework && edu.coursework.length > 0 && (
                        <div className="mt-4 pt-3.5 border-t border-white/10">
                          <p className="flex items-center gap-1.5 text-[11px] font-heading font-bold uppercase tracking-wider text-cream mb-2.5">
                            <BookOpen className="w-3.5 h-3.5" />
                            <span>{t.archive.relevantCoursework}</span>
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {edu.coursework.map((course) => (
                              <span
                                key={course}
                                className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-navy/80 text-cream border border-cream/25"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Leadership Organizations, Awards & Compact Language Info */}
            <div className="lg:col-span-5 space-y-6">
              {/* Organization Leadership */}
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <Users className="w-5 h-5 text-cream" />
                  <h4 className="font-heading font-extrabold text-lg sm:text-xl text-cream uppercase tracking-wide">
                    {t.archive.orgTitle}
                  </h4>
                </div>

                <div className="space-y-3.5">
                  {organizationExp.map((org) => (
                    <div
                      key={org.id}
                      className="bg-black/25 border border-white/15 rounded-xl p-4"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-white/10 text-cream">
                          {org.period}
                        </span>
                        <span className="text-[11px] text-cream/80 font-medium">
                          {org.organization}
                        </span>
                      </div>
                      <h5 className="font-heading font-bold text-sm sm:text-base text-white mt-1.5">
                        {org.role}
                      </h5>
                      <p className="text-xs text-light/80 mt-1 leading-relaxed">
                        {org.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Honors, Awards & Compact Language Note */}
              <div className="pt-2">
                <div className="flex items-center gap-2.5 mb-4">
                  <Trophy className="w-5 h-5 text-cream" />
                  <h4 className="font-heading font-extrabold text-lg sm:text-xl text-cream uppercase tracking-wide">
                    {t.archive.honorsTitle}
                  </h4>
                </div>

                <div className="space-y-3">
                  {awards.map((award) => (
                    <div
                      key={award.title}
                      className="bg-black/25 border border-white/15 rounded-xl p-4 flex items-start justify-between gap-3"
                    >
                      <div>
                        <h5 className="font-heading font-bold text-sm text-white">
                          {award.title}
                        </h5>
                        <p className="text-xs text-cream/80 mt-0.5">
                          {award.category}
                        </p>
                      </div>
                      <span className="text-xs font-heading font-extrabold px-2.5 py-0.5 rounded bg-white/10 text-cream flex-shrink-0">
                        {award.year}
                      </span>
                    </div>
                  ))}

                  {/* Compact, understated Language Proficiency note */}
                  <div className="bg-black/20 border border-white/10 rounded-xl p-4">
                    <p className="text-[11px] font-heading font-bold uppercase tracking-wider text-cream/80 mb-2">
                      {t.archive.langProficiencyTitle}
                    </p>
                    <div className="space-y-1.5 text-xs text-light/85">
                      {certifications.map((cert) => (
                        <div
                          key={cert.title}
                          className="flex items-center justify-between gap-2"
                        >
                          <span>{cert.title}</span>
                          <span className="font-semibold text-cream">
                            {cert.score}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
