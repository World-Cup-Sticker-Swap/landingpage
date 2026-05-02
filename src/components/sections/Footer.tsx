import { Instagram, Mail, Music } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

const productLinks = [
  { label: "Como funciona", href: "#how" },
  { label: "Recursos", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

const companyLinks = [
  { label: "Termos", href: "#" },
  { label: "Privacidade", href: "#" },
  { label: "Contato", href: "mailto:contato@trocafigurinhas.app" },
];

export function Footer() {
  return (
    <footer className="bg-surface-card px-30 pb-8 pt-15">
      <div className="flex flex-col items-start justify-between gap-12 md:flex-row">
        <div className="flex flex-col gap-4">
          <a href="#top">
            <Logo />
          </a>
          <p className="max-w-[240px] text-sm leading-relaxed text-ink-muted">
            Trocas mais inteligentes
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-brand-soft px-3 py-1.5 text-xs font-semibold text-brand-dark">
              Organize
            </span>
            <span className="rounded-full bg-accent-teal/15 px-3 py-1.5 text-xs font-semibold text-accent-teal">
              Encontre
            </span>
            <span className="rounded-full bg-accent-pink/15 px-3 py-1.5 text-xs font-semibold text-accent-pink">
              Troque
            </span>
          </div>
        </div>

        <div className="flex gap-20">
          <div className="flex flex-col gap-3.5">
            <span className="font-display text-sm font-extrabold text-ink">
              Produto
            </span>
            {productLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-ink-muted transition hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3.5">
            <span className="font-display text-sm font-extrabold text-ink">
              Empresa
            </span>
            {companyLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-ink-muted transition hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-surface-raised pt-6 md:flex-row md:items-center">
        <p className="text-[13px] text-ink-subtle">
          © 2026 Troca Figurinhas. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-3">
          {[Instagram, Music, Mail].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="grid h-9 w-9 place-items-center rounded-full bg-surface-raised text-ink-soft transition hover:bg-brand-soft hover:text-brand-dark"
              aria-label="social"
            >
              <Icon className="h-[18px] w-[18px]" aria-hidden />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
