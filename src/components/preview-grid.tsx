import Image from "next/image";
import Link from "next/link";

import type { HomeCategoryCard } from "@/lib/images";

import { Reveal } from "./reveal";

type PreviewGridProps = {
  categories: HomeCategoryCard[];
};

const spans = [
  "col-span-12 md:col-span-7",
  "col-span-12 md:col-span-5",
  "col-span-12 md:col-span-6 md:col-start-4",
];

export function PreviewGrid({ categories }: PreviewGridProps) {
  return (
    <section className="px-10 py-24 lg:px-32 lg:py-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-14 grid grid-cols-12 gap-y-6 lg:mb-20">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="font-display text-4xl font-normal tracking-[-0.02em] text-text-ink-black sm:text-5xl">
              галереи
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <p className="max-w-2xl text-base leading-relaxed text-text-ink-black/68">
              Камерное портфолио с разными ритмами: свадебные истории, семейные
              прогулки и портреты, где можно задержаться взглядом.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-y-12 md:gap-x-10 lg:gap-x-16 lg:gap-y-20">
          {categories.map((category, index) => (
            <Reveal
              key={category.href}
              delay={index * 0.12}
              className={spans[index % spans.length]}
            >
              <Link
                href={category.href}
                className="group block overflow-hidden transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="grain-frame relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={category.image.src}
                    alt={category.image.alt}
                    fill
                    placeholder={category.image.blurDataURL ? "blur" : "empty"}
                    blurDataURL={category.image.blurDataURL}
                    className="object-cover transition duration-700 group-hover:scale-[1.015]"
                  />
                </div>
                <div className="pt-5">
                  <p className="text-2xl lowercase tracking-[0.01em] text-text-ink-black lg:text-3xl">
                    {category.label}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
