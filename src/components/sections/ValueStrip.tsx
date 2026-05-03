import { LayoutGrid, Sparkles, TrendingUp, type LucideIcon } from "lucide-react";

type Item = {
  icon: LucideIcon;
  label: string;
  bg: string;
  color: string;
};

const items: Item[] = [
  {
    icon: LayoutGrid,
    label: "Organize sem caos",
    bg: "bg-brand-soft",
    color: "text-brand-dark",
  },
  {
    icon: Sparkles,
    label: "Trocas que fazem sentido",
    bg: "bg-accent-teal/15",
    color: "text-accent-teal",
  },
  {
    icon: TrendingUp,
    label: "Progresso com clareza",
    bg: "bg-accent-pink/15",
    color: "text-accent-pink",
  },
];

export function ValueStrip() {
  return (
    <section className="bg-surface-card px-5 py-8 sm:px-8 md:px-12 md:py-10 lg:px-30">
      <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-8">
        {items.map(({ icon: Icon, label, bg, color }) => (
          <div key={label} className="flex items-center gap-3">
            <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${bg}`}>
              <Icon className={`h-[18px] w-[18px] ${color}`} aria-hidden />
            </span>
            <span className="font-display text-[15px] font-bold text-ink">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
