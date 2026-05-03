import { StoreButton } from "@/components/ui/StoreButton";

export function FinalCTA() {
  return (
    <section
      id="download"
      className="px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-25 lg:px-30"
    >
      <div className="flex flex-col items-center gap-5 rounded-3xl bg-brand px-6 py-12 text-center sm:gap-7 sm:px-10 sm:py-16 md:px-15 md:py-20">
        <span className="text-[12px] font-bold uppercase tracking-[2px] text-yellow-300 sm:text-[13px]">
          Baixe agora
        </span>
        <h2 className="max-w-[800px] font-display text-3xl font-extrabold leading-[1.05] text-white sm:text-4xl lg:text-[56px]">
          Pronto pra fechar o álbum?
        </h2>
        <p className="max-w-[560px] text-base leading-relaxed text-purple-100 sm:text-lg">
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
