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
  socialLinks?: SocialLink[];
};

export function Footer({
  photographerName = defaultPhotographerName,
  socialLinks = defaultSocialLinks,
}: FooterProps) {
  return (
    <footer className="border-t border-text-ink-black/10 px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-3">
          <p className="font-display text-2xl font-normal tracking-[-0.02em] text-text-ink-black">
            {photographerName.toLowerCase()}
          </p>
          <p className="max-w-xl text-sm leading-relaxed text-text-ink-black/68">
            {defaultFooterCopy}
          </p>
        </div>
        <div className="space-y-5 text-sm text-text-ink-black/70">
          <nav className="flex flex-col gap-3 lowercase tracking-[0.18em] lg:items-end">
            <Link href="/">главная</Link>
            <Link href="/weddings">свадьбы</Link>
            <Link href="/family">семья</Link>
            <Link href="/portraits">портреты</Link>
            <Link href="/about">about</Link>
          </nav>
          <SocialLinks links={socialLinks} />
        </div>
      </div>
    </footer>
  );
}
