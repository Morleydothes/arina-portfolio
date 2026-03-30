import type {
  GalleryCategory,
  HomeCategoryCard,
  PortfolioImage,
  SocialLink,
} from "@/lib/images";
import {
  aboutImages,
  bioText,
  defaultFooterCopy,
  defaultPhotographerName,
  defaultSiteIntro,
  defaultSocialLinks,
  galleryImages,
  galleryPageCopy,
  heroImage,
  homeCategories,
} from "@/lib/images";

import { hasSanityEnv } from "../env";
import { sanityClient } from "./client";
import { mapSanityImage, type SanityImageLike } from "./image";
import {
  aboutPageQuery,
  galleryPageQuery,
  homePageQuery,
} from "./queries";

type SanityPhotoDocument = {
  _id?: string;
  title?: string;
  alt?: string;
  image?: SanityImageLike;
};

type HomePageResult = {
  siteSettings?: {
    photographerName?: string;
    heroIntro?: string;
    footerCopy?: string;
    telegramUrl?: string;
    instagramUrl?: string;
    heroPhoto?: SanityPhotoDocument;
  };
  categories?: Array<{
    title?: string;
    slug?: { current?: string };
    description?: string;
    previewPhoto?: SanityPhotoDocument;
  }>;
};

type GalleryPageResult = {
  category?: {
    title?: string;
    slug?: { current?: string };
    description?: string;
  };
  photos?: SanityPhotoDocument[];
};

type AboutPageResult = {
  aboutPage?: {
    bioText?: unknown[];
    travelPhotos?: SanityImageLike[];
    socialLinks?: SocialLink[];
  };
  siteSettings?: {
    photographerName?: string;
    footerCopy?: string;
    telegramUrl?: string;
    instagramUrl?: string;
  };
};

export async function sanityFetch<T>(
  query: string,
  params?: Record<string, string>,
) {
  if (!hasSanityEnv) {
    return null;
  }

  try {
    return await sanityClient.fetch<T>(query, params ?? {}, {
      next: { revalidate: 60, tags: ["sanity"] },
    });
  } catch {
    return null;
  }
}

export async function getHomePageData() {
  const data = await sanityFetch<HomePageResult>(homePageQuery);

  const hero =
    mapSanityImage(data?.siteSettings?.heroPhoto?.image, "Главный кадр портфолио") ||
    heroImage;

  const categoriesFromSanity: HomeCategoryCard[] =
    data?.categories
      ?.map((category) => {
        const slug = category.slug?.current;
        if (!slug || !(slug in galleryImages)) {
          return null;
        }

        const preview =
          mapSanityImage(
            category.previewPhoto?.image,
            category.previewPhoto?.alt || category.title || "Фотография из галереи",
          ) || galleryImages[slug as keyof typeof galleryImages][0];

        return {
          href: `/${slug}`,
          label:
            category.title?.toLowerCase() ||
            galleryPageCopy[slug as keyof typeof galleryPageCopy].title,
          image: preview,
        };
      })
      .filter((value): value is HomeCategoryCard => Boolean(value)) || [];

  const socialLinks = buildSocialLinks(
    data?.siteSettings?.telegramUrl,
    data?.siteSettings?.instagramUrl,
  );

  return {
    photographerName:
      data?.siteSettings?.photographerName || defaultPhotographerName,
    heroIntro: data?.siteSettings?.heroIntro || defaultSiteIntro,
    footerCopy: data?.siteSettings?.footerCopy || defaultFooterCopy,
    hero,
    categories:
      categoriesFromSanity.length > 0 ? categoriesFromSanity : homeCategories,
    socialLinks,
  };
}

export async function getGalleryPageData(slug: GalleryCategory) {
  const data = await sanityFetch<GalleryPageResult>(galleryPageQuery, { slug });

  const imagesFromSanity =
    data?.photos
      ?.map((photo) =>
        mapSanityImage(
          photo.image,
          photo.alt || photo.title || "Фотография из портфолио",
        ),
      )
      .filter((value): value is PortfolioImage => Boolean(value)) || [];

  return {
    title: data?.category?.title?.toLowerCase() || galleryPageCopy[slug].title,
    description: data?.category?.description || galleryPageCopy[slug].description,
    images: imagesFromSanity.length > 0 ? imagesFromSanity : galleryImages[slug],
  };
}

export async function getAboutPageData() {
  const data = await sanityFetch<AboutPageResult>(aboutPageQuery);

  const travelPhotos =
    data?.aboutPage?.travelPhotos
      ?.map((image, index) =>
        mapSanityImage(image, `Путешествие и природа ${index + 1}`),
      )
      .filter((value): value is PortfolioImage => Boolean(value)) || [];

  return {
    photographerName:
      data?.siteSettings?.photographerName || defaultPhotographerName,
    footerCopy: data?.siteSettings?.footerCopy || defaultFooterCopy,
    bioText: data?.aboutPage?.bioText || null,
    fallbackBioText: bioText,
    travelPhotos: travelPhotos.length > 0 ? travelPhotos : aboutImages,
    socialLinks:
      data?.aboutPage?.socialLinks?.length
        ? data.aboutPage.socialLinks
        : buildSocialLinks(
            data?.siteSettings?.telegramUrl,
            data?.siteSettings?.instagramUrl,
          ),
  };
}

function buildSocialLinks(telegramUrl?: string, instagramUrl?: string) {
  return [
    {
      platform: "telegram",
      url: telegramUrl || defaultSocialLinks[0].url,
    },
    {
      platform: "instagram",
      url: instagramUrl || defaultSocialLinks[1].url,
    },
  ];
}
