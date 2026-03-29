"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";

import { defaultSiteIntro } from "@/lib/images";

import { Navigation } from "./navigation";

type HeroProps = {
  image: {
    src: string | StaticImport;
    alt: string;
    blurDataURL?: string;
  };
  name: string;
  intro?: string;
};

export function Hero({ image, name, intro = defaultSiteIntro }: HeroProps) {
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 500], [0, 60]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.06]);

  return (
    <section className="grain-frame relative min-h-screen overflow-hidden">
      <Navigation heroMode />
      <motion.div
        style={{ y: translateY, scale }}
        className="absolute inset-0 origin-center"
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          placeholder={image.blurDataURL ? "blur" : "empty"}
          blurDataURL={image.blurDataURL}
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-bg-warm-paper/95" />
      <div className="paper-grid absolute inset-y-0 right-0 hidden w-[34vw] border-l border-white/15 bg-white/5 lg:block" />

      <div className="relative z-20 flex min-h-screen items-start justify-between px-6 pb-10 pt-24 sm:px-10 sm:pt-28 lg:px-16">
        <div className="max-w-2xl self-start">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-white/75">
            photography portfolio
          </p>
          <h1 className="font-display text-5xl leading-[0.95] text-white sm:text-7xl lg:text-[6.5rem]">
            {name}
          </h1>
        </div>

        <div className="hidden max-w-xs self-end rounded-[2rem] border border-white/20 bg-white/10 p-6 text-sm leading-7 text-white/80 backdrop-blur-md lg:block">
          {intro}
        </div>
      </div>
    </section>
  );
}
