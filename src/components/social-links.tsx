import { defaultSocialLinks, type SocialLink } from "@/lib/images";

type SocialLinksProps = {
  links?: SocialLink[];
};

export function SocialLinks({ links = defaultSocialLinks }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap items-center gap-6 text-[11px] lowercase tracking-[0.25em] text-text-ink-black/55">
      {links.map((link) => (
        <a
          key={`${link.platform}-${link.url}`}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-300 hover:text-accent-dark-red"
        >
          {link.platform}
        </a>
      ))}
    </div>
  );
}
