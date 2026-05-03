import { Instagram, Mail } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { ContactModal } from "@/components/ui/ContactModal";
import { TikTokIcon } from "@/components/ui/TikTokIcon";

const productLinks = [
  { label: "Como funciona", href: "#how" },
  { label: "Recursos", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  const [contactOpen, setContactOpen] = useState(false);

  const companyLinks: {
    label: string;
    href?: string;
    onClick?: () => void;
  }[] = [
    { label: "Termos", href: "#" },
    { label: "Privacidade", href: "#" },
    { label: "Contato", onClick: () => setContactOpen(true) },
  ];

  return (
    <footer className="bg-surface-card px-5 pb-8 pt-12 sm:px-8 sm:pt-15 md:px-12 lg:px-30">
      <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:gap-12">
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

        <div className="flex gap-12 sm:gap-20">
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
            {companyLinks.map((l) =>
              l.onClick ? (
                <button
                  key={l.label}
                  type="button"
                  onClick={l.onClick}
                  className="text-left text-sm font-medium text-ink-muted transition hover:text-ink"
                >
                  {l.label}
                </button>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm font-medium text-ink-muted transition hover:text-ink"
                >
                  {l.label}
                </a>
              )
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-surface-raised pt-6 sm:mt-10 md:flex-row md:items-center">
        <p className="text-[12px] text-ink-subtle sm:text-[13px]">
          © 2026 Troca Figurinhas. Todos os direitos reservados.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://www.instagram.com/worldstickerswap"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-9 w-9 place-items-center rounded-full bg-surface-raised text-ink-soft transition hover:bg-brand-soft hover:text-brand-dark"
            aria-label="Instagram"
          >
            <Instagram className="h-[18px] w-[18px]" aria-hidden />
          </a>
          <a
            href="https://www.tiktok.com/@worldcupstickerswap"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-9 w-9 place-items-center rounded-full bg-surface-raised text-ink-soft transition hover:bg-brand-soft hover:text-brand-dark"
            aria-label="TikTok"
          >
            <TikTokIcon className="h-[18px] w-[18px]" />
          </a>
          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className="grid h-9 w-9 place-items-center rounded-full bg-surface-raised text-ink-soft transition hover:bg-brand-soft hover:text-brand-dark"
            aria-label="Abrir formulário de contato"
          >
            <Mail className="h-[18px] w-[18px]" aria-hidden />
          </button>
        </div>
      </div>

      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
      />
    </footer>
  );
}
