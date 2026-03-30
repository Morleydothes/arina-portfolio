import Image from "next/image";
import Link from "next/link";

import type { HomeCategoryCard } from "@/lib/images";

import { Reveal } from "./reveal";

type PreviewGridProps = {
  categories: HomeCategoryCard[];
};

export function PreviewGrid({ categories }: PreviewGridProps) {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-[11px] lowercase tracking-[0.45em] text-accent-dark-red">
              selected work
            </p>
            <h2 className="font-display text-4xl font-normal tracking-[-0.02em] text-text-ink-black sm:text-5xl">
              галереи
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-relaxed text-text-ink-black/68 sm:text-base">
            Камерное портфолио с разными ритмами: свадебные истории, семейные
            прогулки и портреты, где можно задержаться взглядом.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal key={category.href} delay={index * 0.1}>
              <Link
                href={category.href}
                className="group grain-frame block overflow-hidden border border-text-ink-black/8 bg-white/45 p-4 shadow-soft transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={category.image.src}
                    alt={category.image.alt}
                    fill
                    placeholder={category.image.blurDataURL ? "blur" : "empty"}
                    blurDataURL={category.image.blurDataURL}
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex items-end justify-between gap-4 px-1 pb-1 pt-5">
                  <div>
                    <p className="mb-2 text-[10px] lowercase tracking-[0.5em] text-accent-dark-red">
                      {category.eyebrow}
                    </p>
                    <p className="text-2xl lowercase tracking-[-0.01em] text-text-ink-black">
                      {category.label}
                    </p>
                  </div>
                  <span className="text-[11px] lowercase tracking-[0.32em] text-text-ink-black/45 transition-colors group-hover:text-accent-dark-red">
                    open
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
