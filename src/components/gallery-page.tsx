import Link from "next/link";

import type { GalleryImage } from "@/lib/images";

import { MasonryGrid } from "./masonry-grid";
import { Navigation } from "./navigation";
import { PageReveal } from "./page-reveal";

type GalleryPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  images: GalleryImage[];
};

export function GalleryPage({
  eyebrow,
  title,
  description,
  images,
}: GalleryPageProps) {
  return (
    <PageReveal className="min-h-screen bg-bg-warm-paper text-text-ink-black">
      <Navigation />
      <main className="px-6 pb-20 pt-8 sm:px-10 lg:px-16 lg:pb-24">
        <section className="mx-auto flex max-w-7xl flex-col gap-10 border-b border-text-ink-black/10 pb-12 pt-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.4em] text-accent-dark-red/75">
              {eyebrow}
            </p>
            <h1 className="font-display text-5xl leading-none sm:text-7xl">
              {title}
            </h1>
          </div>
          <div className="max-w-xl space-y-4 text-sm leading-7 text-text-ink-black/70 sm:text-base">
            <p>{description}</p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 uppercase tracking-[0.25em] transition-colors hover:text-accent-dark-red"
            >
              about
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-7xl pt-10">
          <MasonryGrid images={images} />
        </section>
      </main>
    </PageReveal>
  );
}
