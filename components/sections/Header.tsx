import Link from "next/link";
import { Download, Sparkles } from "lucide-react";

const navItems = [
  { label: "Como funciona", href: "#how" },
  { label: "Recursos", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="flex items-center justify-between px-30 py-5">
      <Link href="/" className="flex items-center gap-2">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand">
          <Sparkles className="h-5 w-5 text-white" aria-hidden />
        </span>
        <span className="font-display text-[22px] font-extrabold text-ink">
          StickerSwap
        </span>
      </Link>

      <nav className="flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-[15px] font-medium text-ink-soft transition hover:text-ink"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <a
        href="#download"
        className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
      >
        <Download className="h-4 w-4" aria-hidden />
        Instalar app
      </a>
    </header>
  );
}
