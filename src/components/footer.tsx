import Link from "next/link";

import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <footer className="border-t border-text-ink-black/10 px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-3">
          <p className="font-display text-2xl text-text-ink-black">
            Arina Zyryanova
          </p>
          <p className="max-w-xl text-sm leading-7 text-text-ink-black/70">
            Свадьбы, семьи и портреты. Тихие истории с воздухом, светом и
            вниманием к человеку.
          </p>
        </div>
        <div className="space-y-4 text-sm text-text-ink-black/70">
          <nav className="flex flex-wrap gap-4 uppercase tracking-[0.25em]">
            <Link href="/">главная</Link>
            <Link href="/weddings">свадьбы</Link>
            <Link href="/family">семья</Link>
            <Link href="/portraits">портреты</Link>
            <Link href="/about">about</Link>
          </nav>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
