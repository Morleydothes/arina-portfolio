import Link from "next/link";

import {
  defaultFooterCopy,
  defaultPhotographerName,
  defaultSocialLinks,
  type SocialLink,
} from "@/lib/images";

import { SocialLinks } from "./social-links";

type FooterProps = {
  photographerName?: string;
  footerCopy?: string;
  socialLinks?: SocialLink[];
};

export function Footer({
  photographerName = defaultPhotographerName,
  footerCopy = defaultFooterCopy,
  socialLinks = defaultSocialLinks,
}: FooterProps) {
  return (
    <footer className="border-t border-text-ink-black/10 bg-bg-warm-paper px-10 py-12 lg:px-32 lg:py-14">
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-y-8">
        <div className="col-span-12 lg:col-span-4">
          <p className="font-display text-2xl font-normal tracking-[-0.02em] text-text-ink-black">
            {photographerName.toLowerCase()}
          </p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-text-ink-black/68">
            {footerCopy}
          </p>
        </div>
        <div className="col-span-12 lg:col-span-3 lg:col-start-10">
          <nav className="flex flex-col gap-4 text-[11px] lowercase leading-relaxed tracking-[0.25em] text-text-ink-black">
            <Link href="/">главная</Link>
            <Link href="/weddings">свадьбы</Link>
            <Link href="/family">семья</Link>
            <Link href="/portraits">портреты</Link>
            <Link href="/about">about</Link>
          </nav>
          <div className="mt-8">
            <SocialLinks links={socialLinks} />
          </div>
        </div>
      </div>
    </footer>
  );
}
