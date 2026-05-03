import { ChevronDown } from "lucide-react";
import { useState } from "react";

type QA = { q: string; a: string };

const items: QA[] = [
  {
    q: "O app é gratuito?",
    a: "Sim. Baixar, organizar a coleção e ver matches é grátis. Recursos premium (chat ilimitado, prioridade nos matches) ficam num plano opcional.",
  },
  {
    q: "Como o algoritmo encontra trocas?",
    a: "Cruzamos as figurinhas que faltam pra você com as que sobram pra outros colecionadores e priorizamos os matches por proximidade.",
  },
  {
    q: "Preciso compartilhar minha localização?",
    a: "Não é obrigatório, mas ajuda muito a encontrar trocas presenciais. Você define o raio e pode ocultar o endereço exato.",
  },
  {
    q: "Funciona pra qualquer álbum?",
    a: "Suportamos os álbuns mais populares no momento e adicionamos novos toda temporada. Você pode pedir o seu pelo app.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="flex flex-col items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:gap-15 md:py-25 lg:px-30"
    >
      <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
        <span className="text-[12px] font-bold uppercase tracking-[2px] text-accent-teal sm:text-[13px]">
          Perguntas frequentes
        </span>
        <h2 className="max-w-[720px] font-display text-3xl font-extrabold leading-[1.1] text-ink sm:text-4xl lg:text-5xl">
          Tire suas dúvidas
        </h2>
      </div>

      <div className="flex w-full max-w-[800px] flex-col gap-3">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={item.q}
              className="overflow-hidden rounded-2xl bg-surface-card"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-6"
                aria-expanded={isOpen}
              >
                <span className="font-display text-base font-bold text-ink sm:text-lg">
                  {item.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-ink-muted transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>
              {isOpen && (
                <p className="px-4 pb-4 text-sm leading-relaxed text-ink-muted sm:px-6 sm:pb-6 sm:text-[15px]">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
