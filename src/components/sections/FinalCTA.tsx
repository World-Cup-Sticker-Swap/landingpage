import { StoreButton } from "@/components/ui/StoreButton";

export function FinalCTA() {
  return (
    <section id="download" className="px-30 py-25">
      <div className="flex flex-col items-center gap-7 rounded-[32px] bg-brand px-15 py-20 text-center">
        <span className="text-[13px] font-bold uppercase tracking-[2px] text-yellow-300">
          Baixe agora
        </span>
        <h2 className="max-w-[800px] font-display text-[56px] font-extrabold leading-[1.05] text-white">
          Pronto pra fechar o álbum?
        </h2>
        <p className="max-w-[560px] text-lg leading-relaxed text-purple-100">
          Instale grátis. Em 2 minutos sua coleção está cadastrada e os
          primeiros matches já aparecem.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <StoreButton store="google" />
          <StoreButton store="apple" />
        </div>
      </div>
    </section>
  );
}
