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
  const translateY = useTransform(scrollY, [0, 500], [0, 40]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.04]);

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

      <div className="absolute inset-0 bg-gradient-to-b from-black/12 via-black/6 to-bg-warm-paper/82" />
      <div className="paper-grid absolute inset-y-0 right-0 hidden w-[31vw] border-l border-white/12 bg-white/5 lg:block" />

      <div className="relative z-20 flex min-h-screen items-start justify-between px-6 pb-10 pt-24 sm:px-10 sm:pt-28 lg:px-16">
        <div className="max-w-3xl self-start">
          <p className="mb-2 text-[11px] lowercase tracking-[0.28em] text-white/78">
            photography portfolio
          </p>
          <h1 className="font-display text-[3.3rem] leading-[0.9] tracking-[-0.03em] text-white sm:text-[5.6rem] lg:text-[6.6rem]">
            {name.toLowerCase()}
          </h1>
        </div>

        <div className="hidden max-w-xs self-end border border-white/18 bg-white/8 p-6 text-sm leading-relaxed text-white/82 backdrop-blur-md lg:block">
          {intro}
        </div>
      </div>
    </section>
  );
}
