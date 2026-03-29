"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "главная" },
  { href: "/weddings", label: "свадьбы" },
  { href: "/family", label: "семья" },
  { href: "/portraits", label: "портреты" },
  { href: "/about", label: "about" },
];

type NavigationProps = {
  heroMode?: boolean;
};

export function Navigation({ heroMode = false }: NavigationProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navClassName = heroMode
    ? "absolute inset-x-0 top-0 z-30 p-6 sm:p-8"
    : "sticky top-0 z-30 px-6 pt-6 sm:px-10 lg:px-16";

  return (
    <div className={navClassName}>
      <div className="flex items-start justify-between gap-6">
        <div className="hidden lg:flex lg:w-full lg:justify-end">
          <nav className="grain-frame rounded-[2rem] border border-white/35 bg-white/55 p-3 backdrop-blur-xl">
            <ul className="flex flex-col gap-2">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block rounded-full px-4 py-2 text-sm uppercase tracking-[0.25em] transition-colors ${
                        active
                          ? "bg-text-ink-black text-bg-warm-paper"
                          : "text-text-ink-black/75 hover:text-accent-dark-red"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="ml-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/70 text-text-ink-black shadow-soft backdrop-blur lg:hidden"
          aria-expanded={open}
          aria-label="Открыть навигацию"
        >
          <span className="flex flex-col gap-1.5">
            <span className="h-px w-5 bg-current" />
            <span className="h-px w-5 bg-current" />
            <span className="h-px w-5 bg-current" />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mt-4 rounded-[2rem] border border-white/45 bg-white/85 p-6 shadow-soft backdrop-blur lg:hidden"
          >
            <nav>
              <ul className="space-y-3">
                {links.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block text-lg transition-colors ${
                        active
                          ? "text-accent-dark-red"
                            : "text-text-ink-black hover:text-accent-dark-red"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
