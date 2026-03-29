/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/lib/**/*.{ts,tsx,mdx}",
    "./src/styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-warm-paper": "#F9F7F2",
        "text-ink-black": "#121212",
        "accent-dark-red": "#8B0000",
      },
      fontFamily: {
        display: ["var(--font-playfair)"],
        sans: ["var(--font-inter)"],
      },
      boxShadow: {
        soft: "0 25px 80px rgba(18, 18, 18, 0.12)",
      },
    },
  },
};

module.exports = config;
