import Image from "next/image";
import Link from "next/link";

import { homeCategories } from "@/lib/images";

import { Reveal } from "./reveal";

export function PreviewGrid() {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-accent-dark-red/75">
              selected work
            </p>
            <h2 className="font-display text-4xl text-text-ink-black sm:text-5xl">
              галереи
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-text-ink-black/65 sm:text-base">
            Камерное портфолио с разными ритмами: свадебные истории, семейные
            прогулки и портреты, где можно задержаться взглядом.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {homeCategories.map((category, index) => (
            <Reveal key={category.href} delay={index * 0.1}>
              <Link
                href={category.href}
                className="group grain-frame block overflow-hidden rounded-[2rem] bg-white/70 p-4 shadow-soft transition-transform duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={category.image.src}
                    alt={category.image.alt}
                    fill
                    placeholder="blur"
                    blurDataURL={category.image.blurDataURL}
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex items-end justify-between gap-4 px-2 pb-2 pt-5">
                  <div>
                    <p className="mb-2 text-xs uppercase tracking-[0.45em] text-accent-dark-red/70">
                      {category.eyebrow}
                    </p>
                    <p className="text-2xl lowercase text-text-ink-black">
                      {category.label}
                    </p>
                  </div>
                  <span className="text-sm uppercase tracking-[0.35em] text-text-ink-black/45 transition-colors group-hover:text-accent-dark-red">
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
