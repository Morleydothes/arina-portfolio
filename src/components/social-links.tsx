const links = [
  { href: "https://t.me/vangogjiv", label: "telegram" },
  { href: "https://instagram.com/", label: "instagram" },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.35em] text-text-ink-black/70">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="transition-colors duration-300 hover:text-accent-dark-red"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
