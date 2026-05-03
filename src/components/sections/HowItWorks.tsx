type Step = {
  number: string;
  title: string;
  description: string;
  bg: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Cadastre o que falta e o que sobra",
    description:
      "Marque cada figurinha do álbum em segundos. Sua coleção fica organizada num lugar só, sem planilha e sem papelzinho.",
    bg: "bg-brand",
  },
  {
    number: "02",
    title: "Veja quem faz sentido pra trocar",
    description:
      "O app cruza o que você tem com o que outros precisam e mostra os melhores matches por proximidade.",
    bg: "bg-accent-teal",
  },
  {
    number: "03",
    title: "Chegue nas trocas com clareza",
    description:
      "Combine direto pelo chat, marque o ponto de encontro e finalize a troca sem ruído. Tudo registrado.",
    bg: "bg-accent-pink",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="flex flex-col items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:gap-15 md:py-25 lg:px-30"
    >
      <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
        <span className="text-[12px] font-bold uppercase tracking-[2px] text-brand sm:text-[13px]">
          Como funciona
        </span>
        <h2 className="max-w-[720px] font-display text-3xl font-extrabold leading-[1.1] text-ink sm:text-4xl lg:text-5xl">
          Como funciona na prática
        </h2>
        <p className="max-w-[720px] text-base leading-relaxed text-ink-muted sm:text-lg">
          Encurte o caminho entre o álbum incompleto e a próxima troca certa.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
        {steps.map((step) => (
          <article
            key={step.number}
            className="flex flex-col gap-4 rounded-3xl bg-surface-card p-6 sm:p-8 sm:gap-5"
          >
            <span
              className={`grid h-12 w-12 place-items-center rounded-2xl ${step.bg}`}
            >
              <span className="font-display text-lg font-extrabold text-white">
                {step.number}
              </span>
            </span>
            <h3 className="font-display text-xl font-extrabold leading-tight text-ink sm:text-[22px]">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink-muted sm:text-[15px]">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
