import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#E6DFD5",
        navy: "#153B47",
        maroon: "#651C24",
        dark: "#111111",
        light: "#F8F9FA",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-jakarta)", "sans-serif"],
        poster: ["var(--font-bebas)", "sans-serif"],
        badge: ["var(--font-kanit)", "var(--font-jakarta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
