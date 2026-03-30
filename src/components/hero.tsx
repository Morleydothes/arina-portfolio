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
  const translateY = useTransform(scrollY, [0, 500], [0, 34]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.02]);

  return (
    <section className="grain-frame relative min-h-screen overflow-hidden bg-bg-warm-paper">
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

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-warm-paper/88" />
      <div className="paper-grid absolute inset-y-0 right-0 hidden w-[32vw] bg-white/4 lg:block" />

      <div className="relative z-20 flex min-h-screen items-start justify-between px-10 pb-12 pt-24 sm:pt-28 lg:px-32">
        <div className="max-w-5xl self-start">
          <p className="mb-3 text-[11px] lowercase tracking-[0.32em] text-white/76">
            photography portfolio
          </p>
          <h1 className="font-display text-[4.8rem] leading-[0.86] tracking-[-0.05em] text-white sm:text-[6.8rem] lg:text-[8.8rem] xl:text-[9.4rem]">
            {name.toLowerCase()}
          </h1>
        </div>

        <div className="hidden max-w-sm self-end text-[11px] lowercase tracking-[0.25em] text-white/82 lg:block">
          <p className="max-w-[28ch] leading-[1.95]">{intro}</p>
        </div>
      </div>
    </section>
  );
}
