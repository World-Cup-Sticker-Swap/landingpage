const press = ["CBN", "Diário do Litoral", "Meio News"];

export function ROI() {
  return (
    <section className="flex flex-col items-center gap-10 bg-surface-dark px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:gap-15 md:py-25 lg:px-30">
      <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
        <span className="text-[12px] font-bold uppercase tracking-[2px] text-accent-yellow sm:text-[13px]">
          A matemática não mente
        </span>
        <h2 className="max-w-[720px] font-display text-3xl font-extrabold leading-[1.05] text-white sm:text-4xl lg:text-[56px]">
          A conta do álbum
        </h2>
        <p className="max-w-[640px] text-base leading-relaxed text-white/60 sm:text-lg">
          Quanto custa completar o álbum só comprando pacotinhos vs. trocando
          com quem coleciona junto.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        <article className="flex flex-col gap-3 rounded-3xl bg-surface-darker p-6 sm:gap-4 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-[2px] text-red-300">
            Sem trocas
          </span>
          <span className="font-display text-5xl font-extrabold leading-none text-white sm:text-6xl lg:text-[64px]">
            ~R$ 7.000
          </span>
          <p className="text-sm leading-relaxed text-white/60">
            Pacotinho atrás de pacotinho até completar 960 figurinhas.
            Estimativa do matemático Frederico Torres.
          </p>
        </article>

        <article className="flex flex-col gap-3 rounded-3xl bg-brand p-6 sm:gap-4 sm:p-10">
          <span className="text-xs font-bold uppercase tracking-[2px] text-yellow-300">
            Com o app
          </span>
          <span className="font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            até 80% menos
          </span>
          <p className="text-sm leading-relaxed text-purple-100">
            Trocando o que sobra pelo que falta com quem está perto, você fecha
            o álbum por uma fração do preço.
          </p>
        </article>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
        <span className="text-xs font-semibold uppercase tracking-wide text-white/50">
          Vistos em
        </span>
        {press.map((name) => (
          <span
            key={name}
            className="font-display text-base font-extrabold text-white sm:text-xl"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
