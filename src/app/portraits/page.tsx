import { Footer } from "@/components/footer";
import { GalleryPage } from "@/components/gallery-page";
import { galleryImages } from "@/lib/images";

export default function PortraitsPage() {
  return (
    <>
      <GalleryPage
        eyebrow="portraits"
        title="портреты"
        description="Портреты без лишнего шума: зерно, воздух, мягкий свет и внимание к состоянию человека. Неброско, близко и с характером."
        images={galleryImages.portraits}
      />
      <Footer />
    </>
  );
}
