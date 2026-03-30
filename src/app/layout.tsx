import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "../styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Arina Zyryanova Photography Portfolio",
  description: "Портфолио фотографа Арины Зыряновой",
  openGraph: {
    title: "Arina Zyryanova Photography Portfolio",
    description: "Портфолио фотографа Арины Зыряновой",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${playfairDisplay.variable} h-full`}
    >
      <body className="min-h-full bg-bg-warm-paper text-text-ink-black font-sans">
        {children}
      </body>
    </html>
  );
}
