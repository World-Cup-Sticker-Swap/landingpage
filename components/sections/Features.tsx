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
      className="flex flex-col items-center gap-15 bg-surface-card px-30 py-25"
    >
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="text-[13px] font-bold uppercase tracking-[2px] text-accent-pink">
          Feito pra quem coleciona
        </span>
        <h2 className="max-w-[720px] font-display text-5xl font-extrabold leading-[1.1] text-ink">
          Por que usar o app
        </h2>
        <p className="max-w-[720px] text-lg leading-relaxed text-ink-muted">
          Feito pra quem coleciona — não pra quem quer mais um app no celular.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
        {features.map(({ icon: Icon, title, description, bg, color }) => (
          <article
            key={title}
            className="flex flex-col gap-5 rounded-3xl bg-white p-9"
          >
            <span className={`grid h-14 w-14 place-items-center rounded-2xl ${bg}`}>
              <Icon className={`h-7 w-7 ${color}`} aria-hidden />
            </span>
            <h3 className="font-display text-2xl font-extrabold leading-tight text-ink">
              {title}
            </h3>
            <p className="text-[15px] leading-relaxed text-ink-muted">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
