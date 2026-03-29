import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { PageReveal } from "@/components/page-reveal";
import { PreviewGrid } from "@/components/preview-grid";
import { getHomePageData } from "@/sanity/lib/fetch";

export const revalidate = 60;

export default async function Home() {
  const data = await getHomePageData();

  return (
    <>
      <PageReveal className="bg-bg-warm-paper text-text-ink-black">
        <main>
          <Hero image={data.hero} name={data.photographerName} />
          <PreviewGrid categories={data.categories} />
        </main>
      </PageReveal>
      <Footer
        photographerName={data.photographerName}
        socialLinks={data.socialLinks}
      />
    </>
  );
}
