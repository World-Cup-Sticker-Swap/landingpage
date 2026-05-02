const press = ["CBN", "Diário do Litoral", "Meio News"];

export function ROI() {
  return (
    <section className="flex flex-col items-center gap-15 bg-surface-dark px-30 py-25">
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent-yellow">
          A matemática não mente
        </span>
        <h2 className="max-w-[720px] font-display text-[56px] font-extrabold leading-[1.05] text-white">
          A conta do álbum
        </h2>
        <p className="max-w-[640px] text-lg leading-relaxed text-white/60">
          Quanto custa completar o álbum só comprando pacotinhos vs. trocando
          com quem coleciona junto.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        <article className="flex flex-col gap-4 rounded-3xl bg-surface-darker p-10">
          <span className="text-xs font-bold uppercase tracking-[2px] text-red-300">
            Sem trocas
          </span>
          <span className="font-display text-[64px] font-extrabold leading-none text-white">
            ~R$ 7.000
          </span>
          <p className="text-sm leading-relaxed text-white/60">
            Pacotinho atrás de pacotinho até completar 670 figurinhas.
            Estimativa do matemático Frederico Torres.
          </p>
        </article>

        <article className="flex flex-col gap-4 rounded-3xl bg-brand p-10">
          <span className="text-xs font-bold uppercase tracking-[2px] text-yellow-300">
            Com o app
          </span>
          <span className="font-display text-5xl font-extrabold leading-tight text-white">
            até 80% menos
          </span>
          <p className="text-sm leading-relaxed text-purple-100">
            Trocando o que sobra pelo que falta com quem está perto, você fecha
            o álbum por uma fração do preço.
          </p>
        </article>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8">
        <span className="text-xs font-semibold uppercase tracking-wide text-white/50">
          Vistos em
        </span>
        {press.map((name) => (
          <span
            key={name}
            className="font-display text-xl font-extrabold text-white"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
