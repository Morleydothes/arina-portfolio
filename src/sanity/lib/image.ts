import { createImageUrlBuilder } from "@sanity/image-url";

import type { PortfolioImage } from "@/lib/images";

import { projectId, dataset, hasSanityEnv } from "../env";
import { sanityClient } from "./client";

const builder =
  hasSanityEnv && projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset })
    : createImageUrlBuilder(sanityClient);

type SanityAssetWithMetadata = {
  metadata?: {
    lqip?: string;
    dimensions?: {
      width?: number;
      height?: number;
    };
  };
};

export type SanityImageLike = {
  alt?: string;
  asset?: SanityAssetWithMetadata;
  crop?: unknown;
  hotspot?: unknown;
};

export function urlForImage(source: SanityImageLike) {
  return builder.image(source).auto("format").fit("max");
}

export function mapSanityImage(
  image: SanityImageLike | null | undefined,
  fallbackAlt: string,
): PortfolioImage | null {
  const width = image?.asset?.metadata?.dimensions?.width;
  const height = image?.asset?.metadata?.dimensions?.height;

  if (!image || !width || !height) {
    return null;
  }

  return {
    src: urlForImage(image).width(width).height(height).url(),
    alt: image.alt || fallbackAlt,
    width,
    height,
    blurDataURL: image.asset?.metadata?.lqip,
  };
}
