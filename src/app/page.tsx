import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { PageReveal } from "@/components/page-reveal";
import { PreviewGrid } from "@/components/preview-grid";
import { heroImage } from "@/lib/images";

export default function Home() {
  return (
    <>
      <PageReveal className="bg-bg-warm-paper text-text-ink-black">
        <main>
          <Hero image={heroImage} name="Arina Zyryanova" />
          <PreviewGrid />
        </main>
      </PageReveal>
      <Footer />
    </>
  );
}
