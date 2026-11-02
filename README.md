# Zidan Irfan Zaky (ZIDZAKY) — Personal Branding & Software Engineering Portfolio

Website Personal Branding & Portofolio produksi (*production-ready*) untuk **Zidan Irfan Zaky (`ZIDZAKY`)**, dibangun menggunakan **Next.js (App Router, TypeScript)**, **Tailwind CSS**, **Google Fonts (`Plus Jakarta Sans`, `Syne`, `Inter`)**, dan **Lucide Icons**, dilengkapi dengan pipeline **CI/CD gratis untuk GitHub Actions dan Vercel**.

---

## Tech Stack & Arsitektur

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Package Manager:** `npm` (dengan `package-lock.json`)
- **Styling:** Tailwind CSS (`tailwind.config.ts` dengan palet warna khusus: `cream` `#E6DFD5`, `navy` `#153B47`, `maroon` `#651C24`, `dark` `#111111`, `light` `#F8F9FA`)
- **Icons:** `lucide-react`
- **CI/CD:** GitHub Actions (`.github/workflows/ci.yml`) + Vercel (`vercel.json`)

---

## Struktur Direktori Utama

```text
├── .github/workflows/
│   └── ci.yml                        # GitHub Actions CI Pipeline (Lint, Typecheck, Build)
├── public/images/
│   ├── zidan-bw.png                  # Foto potret hitam-putih untuk Hero Section
│   └── zidan-full.jpg                # Foto full-body untuk Services Section
├── src/
│   ├── app/
│   │   ├── globals.css               # Global CSS, tipografi outline & optimasi rendering
│   │   ├── layout.tsx                # Root Layout, Google Fonts & SEO Metadata
│   │   └── page.tsx                  # Halaman Utama Single-Page Portfolio
│   ├── components/
│   │   ├── Navbar.tsx                # Navigasi responsif dengan menu mobile
│   │   ├── HeroSection.tsx           # Hero editorial "MY PORTFOLIO" + potret B&W
│   │   ├── FeaturedProjects.tsx      # 3 Proyek Unggulan (Section Navy #153B47)
│   │   ├── ServicesSection.tsx       # 3 Pilar Layanan & Statistik Akademik (IPK 3.96, TOEIC 915)
│   │   ├── AllProjectsAndJourney.tsx # Arsip 24 Proyek GitHub Interaktif + Timeline Pengalaman
│   │   └── Footer.tsx                # Kontak Lengkap, Sosial Media & Kutipan Personal
│   └── data/
│       └── portfolioData.ts          # Sumber data terstruktur lengkap (Profil, 24 Proyek, Pengalaman)
├── package.json
├── tailwind.config.ts
└── vercel.json
```

---

## Menjalankan Proyek Secara Lokal

1. **Instalasi Dependensi:**
   ```bash
   npm install
   ```

2. **Menjalankan Server Development:**
   ```bash
   npm run dev
   ```
   Buka `http://localhost:3000` di browser Anda.

3. **Verifikasi Kualitas Kode & Build Produksi:**
   ```bash
   npm run typecheck
   npm run lint
   npm run build
   ```

---

## Panduan Deployment Gratis (GitHub Actions + Vercel Hobby Tier)

Proyek ini telah dikonfigurasi agar terintegrasi otomatis dengan **GitHub Actions** dan **Vercel (Free Hobby Tier)**:

1. **Inisialisasi & Push ke GitHub:**
   Buat repositori baru di GitHub (misalnya `zidzaky-portfolio`), lalu jalankan perintah berikut di terminal:
   ```bash
   git init
   git add .
   git commit -m "feat: initial production release of ZIDZAKY portfolio"
   git branch -M main
   git remote add origin https://github.com/ZidZaky/zidzaky-portfolio.git
   git push -u origin main
   ```
   Setiap kali ada `push` atau `pull_request` ke branch `main`, workflow `.github/workflows/ci.yml` akan otomatis menjalankan `npm ci`, `npm run lint`, `npm run typecheck`, dan `npm run build`.

2. **Hubungkan ke Vercel (Gratis):**
   - Buka [Vercel Dashboard](https://vercel.com/dashboard) dan masuk menggunakan akun GitHub Anda.
   - Klik **Add New...** -> **Project**.
   - Pilih repositori `zidzaky-portfolio` lalu klik **Import**.
   - Vercel akan otomatis mendeteksi konfigurasi dari `vercel.json` (`framework: "nextjs"`, `buildCommand: "npm run build"`, `installCommand: "npm install"`).
   - Klik **Deploy**. Setiap kali Anda melakukan `git push origin main`, situs portofolio Anda akan otomatis diperbarui di produksi setelah lolos pengecekan CI.

