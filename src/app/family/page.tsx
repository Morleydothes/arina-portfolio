import { Footer } from "@/components/footer";
import { GalleryPage } from "@/components/gallery-page";
import { galleryImages } from "@/lib/images";

export default function FamilyPage() {
  return (
    <>
      <GalleryPage
        eyebrow="family"
        title="семья"
        description="Неспешные кадры про тепло, дом, прогулки и ту близость, которая читается в руках, в расстоянии между людьми и в том, как они смотрят друг на друга."
        images={galleryImages.family}
      />
      <Footer />
    </>
  );
}
