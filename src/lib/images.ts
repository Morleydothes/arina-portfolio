export type PortfolioImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
};

export type GalleryCategory = "weddings" | "family" | "portraits";

export type SocialLink = {
  platform: string;
  url: string;
};

export type HomeCategoryCard = {
  href: string;
  label: string;
  image: PortfolioImage;
};

const createBlur = (start: string, end: string) =>
  `data:image/svg+xml;base64,${Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="${start}" offset="0%"/>
          <stop stop-color="${end}" offset="100%"/>
        </linearGradient>
      </defs>
      <rect width="8" height="8" fill="url(#g)"/>
    </svg>`,
  ).toString("base64")}`;

const sepiaBlur = createBlur("#d6c1a4", "#8a6a5b");
const roseBlur = createBlur("#d6b4ab", "#664846");
const mossBlur = createBlur("#b4c0a0", "#585f4a");

export const defaultPhotographerName = "Arina Zyryanova";

export const defaultSiteIntro =
  "Тихие истории про людей, прикосновения, воздух и свет. Свадьбы, семьи, портреты.";

export const defaultFooterCopy =
  "Свадьбы, семьи и портреты. Тихие истории с воздухом, светом и вниманием к человеку.";

export const galleryImages: Record<GalleryCategory, PortfolioImage[]> = {
  weddings: [
    {
      src: "/images/weddings/wedding-01.jpg",
      alt: "Тёплый свадебный кадр на природе",
      width: 1280,
      height: 1017,
      blurDataURL: sepiaBlur,
    },
    {
      src: "/images/weddings/wedding-02.jpg",
      alt: "Портрет невесты в мягком свете",
      width: 853,
      height: 1280,
      blurDataURL: roseBlur,
    },
    {
      src: "/images/weddings/wedding-03.jpg",
      alt: "Свадебный момент в камерной атмосфере",
      width: 854,
      height: 1280,
      blurDataURL: sepiaBlur,
    },
  ],
  family: [
    {
      src: "/images/family/family-01.jpg",
      alt: "Семейная прогулка, снятая близко и тихо",
      width: 853,
      height: 1280,
      blurDataURL: mossBlur,
    },
    {
      src: "/images/family/family-02.jpg",
      alt: "Семейный портрет в тёплой домашней палитре",
      width: 853,
      height: 1280,
      blurDataURL: roseBlur,
    },
  ],
  portraits: [
    {
      src: "/images/portraits/portrait-01.jpg",
      alt: "Портрет с мягкой зернистой фактурой",
      width: 854,
      height: 1280,
      blurDataURL: sepiaBlur,
    },
    {
      src: "/images/portraits/portrait-02.jpg",
      alt: "Камерный портрет с акцентом на взгляд",
      width: 853,
      height: 1280,
      blurDataURL: mossBlur,
    },
  ],
};

export const aboutImages: PortfolioImage[] = [
  {
    src: "/images/about/about-01.jpg",
    alt: "Путешествие по тихому лесному маршруту",
    width: 1280,
    height: 1017,
    blurDataURL: mossBlur,
  },
  {
    src: "/images/about/about-02.jpg",
    alt: "Дорожный кадр с природой и воздухом",
    width: 853,
    height: 1280,
    blurDataURL: sepiaBlur,
  },
  {
    src: "/images/about/about-03.jpg",
    alt: "Наблюдение за ландшафтом в путешествии",
    width: 853,
    height: 1280,
    blurDataURL: roseBlur,
  },
];

export const homeCategories: HomeCategoryCard[] = [
  {
    href: "/weddings",
    label: "свадьбы",
    image: galleryImages.weddings[1],
  },
  {
    href: "/family",
    label: "семья",
    image: galleryImages.family[0],
  },
  {
    href: "/portraits",
    label: "портреты",
    image: galleryImages.portraits[0],
  },
];

export const heroImage = galleryImages.weddings[0];

export const bioText =
  "Аринка-Кабардинка ака Варя Дымная. Коллекционирую добрые истории, фотографирую людей и ем баклажановую икру. Хожу по лесам, ловлю рыбов, собираю ягодки и разговариваю по душам. Снимаю свадьбы, семьи и портреты — тихо, близко, на плёнку и цифру. Кубань — Алтай — Киргизия — Япония — и дальше.";

export const defaultSocialLinks: SocialLink[] = [
  { platform: "telegram", url: "https://t.me/vangogjiv" },
  { platform: "instagram", url: "https://instagram.com/" },
];

export const galleryPageCopy: Record<
  GalleryCategory,
  { title: string; description: string }
> = {
  weddings: {
    title: "свадьбы",
    description:
      "Истории, где важны не только большие моменты, но и почти незаметные жесты. Тёплые кадры с воздухом, движением и вниманием к близости.",
  },
  family: {
    title: "семья",
    description:
      "Неспешные кадры про тепло, дом, прогулки и ту близость, которая читается в руках, в расстоянии между людьми и в том, как они смотрят друг на друга.",
  },
  portraits: {
    title: "портреты",
    description:
      "Портреты без лишнего шума: зерно, воздух, мягкий свет и внимание к состоянию человека. Неброско, близко и с характером.",
  },
};
