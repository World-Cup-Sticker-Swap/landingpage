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
      className="flex flex-col items-center gap-15 px-30 py-25"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent-teal">
          Perguntas frequentes
        </span>
        <h2 className="max-w-[720px] font-display text-5xl font-extrabold leading-[1.1] text-ink">
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
                className="flex w-full items-center justify-between p-6 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-lg font-bold text-ink">
                  {item.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-ink-muted transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>
              {isOpen && (
                <p className="px-6 pb-6 text-[15px] leading-relaxed text-ink-muted">
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
