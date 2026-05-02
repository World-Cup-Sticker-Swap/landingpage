import { ShieldCheck } from "lucide-react";
import { StoreButton } from "@/components/ui/StoreButton";
import { PhoneMockup } from "@/components/sections/PhoneMockup";

export function Hero() {
  return (
    <section className="grid grid-cols-1 items-center gap-16 px-30 py-20 lg:grid-cols-2">
      <div className="flex flex-col gap-7">
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-soft px-3.5 py-2 text-[13px] font-semibold text-brand-dark">
          <span className="h-2 w-2 rounded-full bg-brand" />
          Para colecionadores de figurinhas
        </span>

        <h1 className="font-display text-[60px] font-extrabold leading-[1.05] tracking-tight text-ink">
          Complete seu álbum mais rápido com trocas inteligentes
        </h1>

        <p className="text-lg leading-relaxed text-ink-muted">
          Cadastre o que falta e o que sobra, encontre quem faz match com você e
          termine o álbum sem depender de papel ou grupos no WhatsApp.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <StoreButton store="google" />
          <StoreButton store="apple" />
        </div>

        <div className="flex items-center gap-2 text-[13px] font-medium text-ink-muted">
          <ShieldCheck className="h-4 w-4 text-accent-teal" aria-hidden />
          Grátis para baixar &nbsp;·&nbsp; Sem cadastro &nbsp;·&nbsp; +50 mil
          colecionadores
        </div>
      </div>

      <div className="flex justify-center lg:justify-end">
        <PhoneMockup />
      </div>
    </section>
  );
}
