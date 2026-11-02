import React from "react";
import { personalProfile } from "@/data/portfolioData";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Instagram,
  Linkedin,
  MessageCircle,
  Quote,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="deferred-footer bg-navy text-light pt-20 pb-12 px-5 sm:px-8 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Favorite Quote Banner (Attributed to Loki Season 2) */}
        <div className="bg-maroon/90 border border-white/15 rounded-2xl p-6 sm:p-8 mb-14 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-black/25 text-cream flex-shrink-0">
              <Quote className="w-6 h-6" />
            </div>
            <div>
              <blockquote className="font-heading font-bold italic text-lg sm:text-xl md:text-2xl text-white leading-snug">
                &ldquo;{personalProfile.quote}&rdquo;
              </blockquote>
              <p className="text-xs sm:text-sm text-cream/85 mt-2 font-medium">
                — {personalProfile.quoteSource}
              </p>
            </div>
          </div>

          <a
            href={personalProfile.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cream text-dark font-heading font-extrabold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-full hover:bg-white transition-all flex-shrink-0 shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-maroon" />
            Let&apos;s Collaborate
          </a>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/15">
          {/* Column 1: Brand & Core Skills */}
          <div className="md:col-span-5">
            <a
              href="#home"
              className="inline-block text-2xl tracking-tight text-light"
            >
              <span className="font-normal">{personalProfile.brandFirst}</span>
              <span className="font-extrabold">
                {personalProfile.brandSecond}
              </span>
            </a>
            <p className="text-xs sm:text-sm text-cream font-semibold mt-1.5">
              {personalProfile.title}
            </p>
            <p className="text-xs text-light/75 leading-relaxed mt-3">
              Lulusan S1 Rekayasa Perangkat Lunak Telkom University Surabaya
              (IPK 3.96/4.00) dengan fokus pada rekayasa aplikasi Full-Stack,
              desain UI/UX modern, dan jaminan kualitas perangkat lunak.
            </p>

            {/* Core Skills Pills */}
            <div className="mt-5">
              <p className="text-[11px] font-heading font-bold uppercase tracking-widest text-cream/80 mb-2.5">
                Core Competencies
              </p>
              <div className="flex flex-wrap gap-1.5">
                {personalProfile.coreSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] font-medium px-2.5 py-1 rounded-md bg-white/10 text-light/90 border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Direct Contact Details (Single Primary Email) */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-heading font-extrabold text-sm uppercase tracking-widest text-cream">
              Contact Information
            </h3>

            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cream flex-shrink-0 mt-1" />
                <span className="text-light/85 leading-relaxed">
                  {personalProfile.location}
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cream flex-shrink-0" />
                <a
                  href={`mailto:${personalProfile.primaryEmail}`}
                  className="text-light/90 hover:text-cream transition-colors break-all font-medium"
                >
                  {personalProfile.primaryEmail}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cream flex-shrink-0" />
                <a
                  href={personalProfile.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light/90 hover:text-cream transition-colors font-medium"
                >
                  {personalProfile.phone} (WhatsApp)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Links & Quick Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-heading font-extrabold text-sm uppercase tracking-widest text-cream">
              Social &amp; Channels
            </h3>

            <div className="flex flex-col space-y-2.5 text-xs sm:text-sm">
              <a
                href={personalProfile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-maroon border border-white/10 transition-colors"
              >
                <span className="flex items-center gap-2.5 font-medium">
                  <Github className="w-4 h-4 text-cream" />
                  GitHub (@ZidZaky)
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cream" />
              </a>

              <a
                href={personalProfile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-maroon border border-white/10 transition-colors"
              >
                <span className="flex items-center gap-2.5 font-medium">
                  <Linkedin className="w-4 h-4 text-cream" />
                  LinkedIn ({personalProfile.socials.linkedinHandle})
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cream" />
              </a>

              <a
                href={personalProfile.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-maroon border border-white/10 transition-colors"
              >
                <span className="flex items-center gap-2.5 font-medium">
                  <Instagram className="w-4 h-4 text-cream" />
                  Instagram ({personalProfile.socials.instagramHandle})
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cream" />
              </a>

              <a
                href={personalProfile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-maroon border border-white/10 transition-colors"
              >
                <span className="flex items-center gap-2.5 font-medium">
                  <MessageCircle className="w-4 h-4 text-cream" />
                  WhatsApp Direct
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cream" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-light/65">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <strong className="text-light font-semibold">
              {personalProfile.fullName} ({personalProfile.brandName})
            </strong>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-cream transition-colors">
              Home
            </a>
            <a href="#services" className="hover:text-cream transition-colors">
              Services
            </a>
            <a href="#projects" className="hover:text-cream transition-colors">
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-cream transition-colors"
            >
              Experience
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
