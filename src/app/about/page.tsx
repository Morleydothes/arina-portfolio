import type { PortableTextBlock } from "@portabletext/react";
import Image from "next/image";

import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { PageReveal } from "@/components/page-reveal";
import { PortableTextContent } from "@/components/portable-text-content";
import { Reveal } from "@/components/reveal";
import { SocialLinks } from "@/components/social-links";
import { getAboutPageData } from "@/sanity/lib/fetch";

export const revalidate = 60;

export default async function AboutPage() {
  const data = await getAboutPageData();

  return (
    <>
      <PageReveal className="min-h-screen bg-bg-warm-paper text-text-ink-black">
        <Navigation />
        <main className="px-6 pb-20 pt-12 sm:px-10 lg:px-16 lg:pb-24">
          <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <Reveal className="space-y-8 lg:sticky lg:top-28">
              <div>
                <p className="mb-4 text-[11px] lowercase tracking-[0.45em] text-accent-dark-red">
                  about
                </p>
                <h1 className="font-display text-5xl font-normal leading-none tracking-[-0.02em] sm:text-7xl">
                  арина
                  <br />
                  зырянова
                </h1>
              </div>
              {data.bioText ? (
                <PortableTextContent value={data.bioText as PortableTextBlock[]} />
              ) : (
                <p className="max-w-xl text-base leading-relaxed text-text-ink-black/72 sm:text-lg">
                  {data.fallbackBioText}
                </p>
              )}
              <div className="space-y-4 border border-text-ink-black/10 bg-white/55 p-6 backdrop-blur">
                <p className="text-[11px] lowercase tracking-[0.4em] text-text-ink-black/55">
                  contact
                </p>
                <SocialLinks links={data.socialLinks} />
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2">
              {data.travelPhotos.map((image, index) => (
                <Reveal
                  key={`${image.src}-${index}`}
                  delay={index * 0.08}
                  className={index === 0 ? "sm:col-span-2" : ""}
                >
                  <div className="grain-frame overflow-hidden border border-text-ink-black/8 bg-white p-3 shadow-soft">
                    <div className="relative overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        placeholder={image.blurDataURL ? "blur" : "empty"}
                        blurDataURL={image.blurDataURL}
                        className={`h-auto w-full object-cover ${
                          index === 0 ? "aspect-[16/10]" : "aspect-[3/4]"
                        }`}
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </main>
      </PageReveal>
      <Footer
        photographerName={data.photographerName}
        socialLinks={data.socialLinks}
      />
    </>
  );
}
