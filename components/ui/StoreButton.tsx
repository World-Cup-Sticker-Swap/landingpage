import { Apple, Play } from "lucide-react";
import { cn } from "@/lib/cn";

type Store = "google" | "apple";

const labels: Record<Store, { small: string; big: string }> = {
  google: { small: "BAIXAR NA", big: "Google Play" },
  apple: { small: "BAIXAR NA", big: "App Store" },
};

export function StoreButton({
  store,
  className,
}: {
  store: Store;
  className?: string;
}) {
  const Icon = store === "google" ? Play : Apple;
  return (
    <a
      href="#"
      className={cn(
        "group inline-flex items-center gap-3 rounded-2xl bg-surface-dark px-[22px] py-[14px] text-white transition hover:bg-surface-darker",
        className
      )}
    >
      <Icon className="h-6 w-6" aria-hidden />
      <span className="flex flex-col leading-none">
        <span className="text-[10px] font-medium uppercase tracking-[1px] text-ink-subtle">
          {labels[store].small}
        </span>
        <span className="font-display text-lg font-bold">
          {labels[store].big}
        </span>
      </span>
    </a>
  );
}
