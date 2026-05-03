import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";

const navItems = [
  { label: "Como funciona", href: "#how" },
  { label: "Recursos", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  return (
    <header className="relative flex items-center justify-between px-5 py-4 sm:px-8 md:px-12 md:py-5 lg:px-30">
      <a href="#top" onClick={() => setOpen(false)}>
        <Logo />
      </a>

      <nav className="hidden items-center gap-8 md:flex">
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

      <div className="flex items-center gap-2">
        <a
          href="#download"
          className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark sm:inline-flex"
        >
          <Download className="h-4 w-4" aria-hidden />
          Instalar app
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl text-ink transition hover:bg-surface-card md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden />
          ) : (
            <Menu className="h-5 w-5" aria-hidden />
          )}
        </button>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full z-40 mx-5 mt-2 flex flex-col gap-1 rounded-2xl border border-surface-raised bg-white p-3 shadow-2xl md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-ink-soft transition hover:bg-surface-card hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#download"
            onClick={() => setOpen(false)}
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            <Download className="h-4 w-4" aria-hidden />
            Instalar app
          </a>
        </div>
      )}
    </header>
  );
}
