import { Footer } from "@/components/footer";
import { GalleryPage } from "@/components/gallery-page";
import { galleryImages } from "@/lib/images";

export default function WeddingsPage() {
  return (
    <>
      <GalleryPage
        eyebrow="weddings"
        title="свадьбы"
        description="Истории, где важны не только большие моменты, но и почти незаметные жесты. Тёплые кадры с воздухом, движением и вниманием к близости."
        images={galleryImages.weddings}
      />
      <Footer />
    </>
  );
}
