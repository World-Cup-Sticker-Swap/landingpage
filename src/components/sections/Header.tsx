import { Download } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const navItems = [
  { label: "Como funciona", href: "#how" },
  { label: "Recursos", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="flex items-center justify-between px-30 py-5">
      <a href="#top">
        <Logo />
      </a>

      <nav className="flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-[15px] font-medium text-ink-soft transition hover:text-ink"
          >
            {item.label}
          </a>
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
