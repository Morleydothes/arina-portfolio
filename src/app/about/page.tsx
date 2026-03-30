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
        <main className="px-10 pb-24 pt-12 lg:px-32 lg:pb-32">
          <section className="mx-auto grid max-w-[1600px] grid-cols-12 gap-y-12 lg:gap-x-24 lg:gap-y-20">
            <Reveal className="col-span-12 lg:col-span-4 lg:col-start-3">
              <div>
                <p className="mb-4 text-[11px] lowercase tracking-[0.25em] text-text-ink-black/55">
                  about
                </p>
                <h1 className="font-display text-5xl font-normal leading-none tracking-[-0.02em] text-text-ink-black sm:text-7xl">
                  арина
                  <br />
                  зырянова
                </h1>
              </div>

              <div className="mt-10 space-y-5">
                {data.bioText ? (
                  <PortableTextContent value={data.bioText as PortableTextBlock[]} />
                ) : (
                  <p className="max-w-md text-base leading-relaxed text-text-ink-black/72 indent-8">
                    {data.fallbackBioText}
                  </p>
                )}
              </div>

              <div className="mt-10 h-px w-full bg-text-ink-black/10" />

              <div className="mt-6">
                <SocialLinks links={data.socialLinks} />
              </div>
            </Reveal>

            <div className="col-span-12 grid grid-cols-12 gap-y-10 sm:gap-x-8 lg:col-span-5 lg:col-start-8 lg:gap-x-12 lg:gap-y-16">
              {data.travelPhotos.map((image, index) => (
                <Reveal
                  key={`${image.src}-${index}`}
                  delay={index * 0.08}
                  className={
                    index === 0
                      ? "col-span-12"
                      : index % 2 === 0
                        ? "col-span-12 sm:col-span-5"
                        : "col-span-12 sm:col-span-7"
                  }
                >
                  <div className="grain-frame overflow-hidden">
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
                </Reveal>
              ))}
            </div>
          </section>
        </main>
      </PageReveal>
      <Footer
        photographerName={data.photographerName}
        footerCopy={data.footerCopy}
        socialLinks={data.socialLinks}
      />
    </>
  );
}
