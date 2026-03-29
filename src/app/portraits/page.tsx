import { Footer } from "@/components/footer";
import { GalleryPage } from "@/components/gallery-page";
import { getGalleryPageData, getHomePageData } from "@/sanity/lib/fetch";

export const revalidate = 60;

export default async function PortraitsPage() {
  const [gallery, home] = await Promise.all([
    getGalleryPageData("portraits"),
    getHomePageData(),
  ]);

  return (
    <>
      <GalleryPage
        eyebrow={gallery.eyebrow}
        title={gallery.title}
        description={gallery.description}
        images={gallery.images}
      />
      <Footer
        photographerName={home.photographerName}
        socialLinks={home.socialLinks}
      />
    </>
  );
}
