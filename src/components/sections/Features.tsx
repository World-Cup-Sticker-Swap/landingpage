import {
  LayoutGrid,
  MapPin,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  bg: string;
  color: string;
};

const features: Feature[] = [
  {
    icon: LayoutGrid,
    title: "Coleção num lugar só",
    description:
      "Cadastre seu álbum, marque o que falta, registre o que sobra. Tudo sincronizado e sempre à mão.",
    bg: "bg-brand-soft",
    color: "text-brand-dark",
  },
  {
    icon: MapPin,
    title: "Match inteligente por região",
    description:
      "Encontre quem tem o que falta no seu álbum e está perto de você. Menos correio, mais encontros.",
    bg: "bg-accent-teal/15",
    color: "text-accent-teal",
  },
  {
    icon: TrendingUp,
    title: "Progresso em tempo real",
    description:
      "Acompanhe o avanço por seleção, página e raridade. Sabe exatamente onde está e o que falta.",
    bg: "bg-accent-pink/15",
    color: "text-accent-pink",
  },
  {
    icon: ShieldCheck,
    title: "Comunidade segura",
    description:
      "Perfil verificado, histórico de trocas e avaliação entre colecionadores. Trocar com quem você confia.",
    bg: "bg-accent-yellow/20",
    color: "text-yellow-600",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="flex flex-col items-center gap-10 bg-surface-card px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:gap-15 md:py-25 lg:px-30"
    >
      <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
        <span className="text-[12px] font-bold uppercase tracking-[2px] text-accent-pink sm:text-[13px]">
          Feito pra quem coleciona
        </span>
        <h2 className="max-w-[720px] font-display text-3xl font-extrabold leading-[1.1] text-ink sm:text-4xl lg:text-5xl">
          Por que usar o app
        </h2>
        <p className="max-w-[720px] text-base leading-relaxed text-ink-muted sm:text-lg">
          Feito pra quem coleciona — não pra quem quer mais um app no celular.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        {features.map(({ icon: Icon, title, description, bg, color }) => (
          <article
            key={title}
            className="flex flex-col gap-4 rounded-3xl bg-white p-6 sm:p-9 sm:gap-5"
          >
            <span className={`grid h-12 w-12 place-items-center rounded-2xl sm:h-14 sm:w-14 ${bg}`}>
              <Icon className={`h-6 w-6 sm:h-7 sm:w-7 ${color}`} aria-hidden />
            </span>
            <h3 className="font-display text-xl font-extrabold leading-tight text-ink sm:text-2xl">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-ink-muted sm:text-[15px]">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
