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
            <p className="mb-3 text-[11px] lowercase tracking-[0.48em] text-accent-dark-red">
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

        <div className="grid gap-8 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal key={category.href} delay={index * 0.1}>
              <Link
                href={category.href}
                className="group block overflow-hidden transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={category.image.src}
                    alt={category.image.alt}
                    fill
                    placeholder={category.image.blurDataURL ? "blur" : "empty"}
                    blurDataURL={category.image.blurDataURL}
                    className="object-cover transition duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex items-end justify-between gap-4 pt-4">
                  <p className="text-xl lowercase tracking-[0.02em] text-text-ink-black">
                    {category.label}
                  </p>
                  <span className="text-[11px] lowercase tracking-[0.32em] text-text-ink-black/42 transition-colors group-hover:text-accent-dark-red">
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
