import { groq } from "next-sanity";

export const homePageQuery = groq`
{
  "siteSettings": *[_type == "siteSettings"][0]{
    photographerName,
    telegramUrl,
    instagramUrl,
    heroPhoto->{
      title,
      alt,
      image{
        ...,
        asset->{
          ...,
          metadata{
            lqip,
            dimensions
          }
        }
      }
    }
  },
  "categories": *[_type == "category"] | order(order asc){
    title,
    slug,
    order,
    "previewPhoto": *[_type == "photo" && references(^._id)] | order(order asc)[0]{
      title,
      alt,
      image{
        ...,
        asset->{
          ...,
          metadata{
            lqip,
            dimensions
          }
        }
      }
    }
  }
}`;

export const galleryPageQuery = groq`
*[_type == "photo" && category->slug.current == $slug] | order(order asc){
  _id,
  title,
  alt,
  featured,
  image{
    ...,
    asset->{
      ...,
      metadata{
        lqip,
        dimensions
      }
    }
  },
  category->{
    title,
    slug
  }
}`;

export const aboutPageQuery = groq`
{
  "aboutPage": *[_type == "aboutPage"][0]{
    bioText,
    travelPhotos[]{
      ...,
      asset->{
        ...,
        metadata{
          lqip,
          dimensions
        }
      }
    },
    socialLinks[]{
      platform,
      url
    }
  },
  "siteSettings": *[_type == "siteSettings"][0]{
    photographerName,
    telegramUrl,
    instagramUrl
  }
}`;
