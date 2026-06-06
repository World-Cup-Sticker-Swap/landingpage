import { Apple, Play } from "lucide-react";
import { cn } from "@/lib/cn";

type Store = "google" | "apple";

const labels: Record<Store, { small: string; big: string; href: string }> = {
  google: {
    small: "BAIXAR NA",
    big: "Google Play",
    href: "https://play.google.com/store/apps/details?id=com.worldcupstickerswap.app",
  },
  apple: {
    small: "BAIXAR NA",
    big: "App Store",
    href: "https://apps.apple.com/app/id6774602691",
  },
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
      href={labels[store].href}
      target="_blank"
      rel="noopener noreferrer"
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
