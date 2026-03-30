import Link from "next/link";

import type { PortfolioImage } from "@/lib/images";

import { MasonryGrid } from "./masonry-grid";
import { Navigation } from "./navigation";
import { PageReveal } from "./page-reveal";

type GalleryPageProps = {
  title: string;
  description: string;
  images: PortfolioImage[];
};

export function GalleryPage({
  title,
  description,
  images,
}: GalleryPageProps) {
  return (
    <PageReveal className="min-h-screen bg-bg-warm-paper text-text-ink-black">
      <Navigation />
      <main className="px-10 pb-24 pt-8 lg:px-32 lg:pb-32">
        <section className="mx-auto grid max-w-[1600px] grid-cols-12 gap-y-8 border-b border-text-ink-black/10 pb-14 pt-10 lg:pb-20">
          <div className="col-span-12 lg:col-span-5">
            <h1 className="font-display text-5xl font-normal leading-none tracking-[-0.02em] text-text-ink-black sm:text-7xl">
              {title}
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <p className="text-base leading-relaxed text-text-ink-black/68">
              {description}
            </p>
            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-2 text-[11px] lowercase tracking-[0.25em] text-text-ink-black/55 transition-colors hover:text-accent-dark-red"
            >
              about
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] pt-12 lg:pt-16">
          <MasonryGrid images={images} />
        </section>
      </main>
    </PageReveal>
  );
}
