import {
  ArrowLeftRight,
  BatteryFull,
  BookOpen,
  MapPin,
  MessageCircle,
  Signal,
  User,
  Wifi,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

const radii = ["2 km", "5 km", "10 km", "25 km"] as const;

type Match = {
  id: string;
  name: string;
  initials: string;
  distance: string;
  inCommon: number;
  receive: string[];
  offer: string[];
  strong?: boolean;
  color: string;
};

const matches: Match[] = [
  {
    id: "1",
    name: "João Silva",
    initials: "JS",
    distance: "2,3 km",
    inCommon: 14,
    receive: ["BRA12", "ARG05"],
    offer: ["GER03", "ESP21"],
    strong: true,
    color: "bg-app-blue",
  },
  {
    id: "2",
    name: "Maria Costa",
    initials: "MC",
    distance: "3,1 km",
    inCommon: 11,
    receive: ["FRA08", "JPN02"],
    offer: ["BRA17", "URU04"],
    strong: true,
    color: "bg-cyan-500",
  },
  {
    id: "3",
    name: "Pedro Alves",
    initials: "PA",
    distance: "4,7 km",
    inCommon: 8,
    receive: ["ITA09", "POR14"],
    offer: ["MEX02", "CRC01"],
    color: "bg-purple-500",
  },
  {
    id: "4",
    name: "Ana Lima",
    initials: "AL",
    distance: "4,9 km",
    inCommon: 7,
    receive: ["ENG03"],
    offer: ["SEN05", "MAR11"],
    color: "bg-pink-500",
  },
];

type Team = {
  flag: string;
  name: string;
  done: number;
  total: number;
};

const teams: Team[] = [
  { flag: "🇧🇷", name: "Brasil", done: 18, total: 26 },
  { flag: "🇦🇷", name: "Argentina", done: 15, total: 26 },
  { flag: "🇩🇪", name: "Alemanha", done: 12, total: 26 },
  { flag: "🇫🇷", name: "França", done: 20, total: 26 },
  { flag: "🇪🇸", name: "Espanha", done: 10, total: 26 },
  { flag: "🇬🇧", name: "Inglaterra", done: 16, total: 26 },
  { flag: "🇵🇹", name: "Portugal", done: 14, total: 26 },
  { flag: "🇯🇵", name: "Japão", done: 9, total: 26 },
];

type Tab = "matches" | "album" | "salas" | "mapa" | "perfil";

const tabs: { id: Tab; icon: LucideIcon; label: string }[] = [
  { id: "matches", icon: ArrowLeftRight, label: "Matches" },
  { id: "album", icon: BookOpen, label: "Album" },
  { id: "salas", icon: MessageCircle, label: "Salas" },
  { id: "mapa", icon: MapPin, label: "Mapa" },
  { id: "perfil", icon: User, label: "Perfil" },
];

export function PhoneMockup() {
  const [tab, setTab] = useState<Tab>("matches");
  const [radius, setRadius] = useState<string>("5 km");
  const [opened, setOpened] = useState<string | null>(null);

  return (
    <div className="relative h-[600px] w-[300px] rounded-[42px] bg-surface-dark p-2.5 shadow-2xl shadow-app-blue/30">
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[34px] bg-app-bg">
        <div className="relative flex shrink-0 items-center justify-between px-4 pb-1.5 pt-2.5 z-10 bg-app-bg">
          <span className="font-display text-xs font-bold text-app-navy">
            9:41
          </span>
          <span className="absolute left-1/2 top-2 h-[18px] w-[78px] -translate-x-1/2 rounded-full bg-surface-dark" />
          <span className="flex items-center gap-1 text-app-navy">
            <Signal className="h-3 w-3" aria-hidden />
            <Wifi className="h-3 w-3" aria-hidden />
            <BatteryFull className="h-3 w-4" aria-hidden />
          </span>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain scroll-smooth">
          {tab === "matches" && (
            <MatchesView
              radius={radius}
              setRadius={setRadius}
              opened={opened}
              setOpened={setOpened}
            />
          )}
          {tab === "album" && <AlbumView />}
          {tab === "salas" && <PlaceholderView title="Salas" subtitle="Em breve: salas de troca em grupo" />}
          {tab === "mapa" && <PlaceholderView title="Mapa" subtitle="Trocas próximas no mapa" />}
          {tab === "perfil" && <PlaceholderView title="Perfil" subtitle="Suas conquistas e histórico" />}
        </div>

        <div className="flex shrink-0 items-center justify-between border-t border-app-border bg-white px-2 pb-4 pt-2">
          {tabs.map(({ id, icon: Icon, label }) => {
            const active = id === tab;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setTab(id)}
                className="flex flex-col items-center gap-0.5 rounded-md px-2 py-1 transition active:scale-95"
              >
                <Icon
                  className={`h-[18px] w-[18px] transition-colors ${
                    active ? "text-app-blue" : "text-app-mute"
                  }`}
                  aria-hidden
                />
                <span
                  className={`text-[8px] transition-colors ${
                    active
                      ? "font-bold text-app-blue"
                      : "font-medium text-app-mute"
                  }`}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MatchesView({
  radius,
  setRadius,
  opened,
  setOpened,
}: {
  radius: string;
  setRadius: (r: string) => void;
  opened: string | null;
  setOpened: (id: string | null) => void;
}) {
  return (
    <div className="flex flex-col gap-3 px-3.5 pb-4 pt-2">
      <h3 className="font-display text-2xl font-extrabold text-app-blue">
        Matches
      </h3>

      <div className="flex gap-1">
        {radii.map((r) => {
          const active = r === radius;
          return (
            <button
              key={r}
              type="button"
              onClick={() => setRadius(r)}
              className={
                active
                  ? "rounded-full bg-app-blue px-2.5 py-1 text-[10px] font-bold text-white transition active:scale-95"
                  : "rounded-full border border-app-border bg-white px-2.5 py-1 text-[10px] font-semibold text-app-slate transition hover:border-app-blue hover:text-app-blue active:scale-95"
              }
            >
              {r}
            </button>
          );
        })}
      </div>

      <span className="text-[10px] font-medium text-app-slate">
        {matches.length} matches encontrados em {radius}
      </span>

      {matches.map((m) => (
        <MatchCard
          key={m.id}
          match={m}
          opened={opened === m.id}
          onToggle={() => setOpened(opened === m.id ? null : m.id)}
        />
      ))}

      <div className="flex items-center gap-2 rounded-xl bg-gradient-to-b from-app-blue to-app-blue-deep px-3 py-2.5">
        <span className="grid h-6 w-6 place-items-center rounded-md bg-app-yellow">
          <Zap className="h-3.5 w-3.5 text-white" aria-hidden />
        </span>
        <div className="flex flex-col">
          <span className="font-display text-[11px] font-extrabold text-white">
            Apareça no topo
          </span>
          <span className="text-[8px] font-medium text-blue-200">
            Compre boosts · a partir de R$ 4,99
          </span>
        </div>
      </div>
    </div>
  );
}

function MatchCard({
  match,
  opened,
  onToggle,
}: {
  match: Match;
  opened: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="flex flex-col gap-2.5 rounded-2xl bg-white p-3 transition hover:shadow-md">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span
            className={`grid h-8 w-8 place-items-center rounded-full ${match.color} font-display text-[11px] font-extrabold text-white`}
          >
            {match.initials}
          </span>
          <div className="flex flex-col">
            <span className="font-display text-[13px] font-bold text-app-navy">
              {match.name}
            </span>
            <span className="text-[9px] font-medium text-app-slate">
              {match.distance} · {match.inCommon} em comum
            </span>
          </div>
        </div>
        {match.strong && (
          <span className="rounded-full bg-app-green-soft px-2 py-0.5 text-[9px] font-bold text-app-green-deep">
            Troca forte
          </span>
        )}
      </div>

      <div className="flex gap-2.5">
        <div className="flex flex-1 flex-col gap-1">
          <span className="text-[9px] font-semibold text-app-slate">
            Você recebe
          </span>
          <div className="flex flex-wrap gap-1">
            {match.receive.map((c) => (
              <span
                key={c}
                className="rounded-full border border-app-green px-1.5 py-0.5 text-[9px] font-bold text-app-green"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <span className="text-[9px] font-semibold text-app-slate">
            Você oferece
          </span>
          <div className="flex flex-wrap gap-1">
            {match.offer.map((c) => (
              <span
                key={c}
                className="rounded-full border border-app-orange px-1.5 py-0.5 text-[9px] font-bold text-app-orange"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-1">
        <button
          type="button"
          onClick={onToggle}
          className="text-[11px] font-bold text-app-blue transition active:scale-95"
        >
          {opened ? "Ocultar" : "Ver mais"}
        </button>
        <button
          type="button"
          className="rounded-[10px] bg-app-blue px-3.5 py-1.5 text-[11px] font-bold text-white transition hover:bg-app-blue-dark active:scale-95"
        >
          Abrir chat
        </button>
      </div>

      {opened && (
        <div className="flex flex-col gap-1 rounded-lg bg-app-bg p-2 text-[10px] text-app-slate">
          <span>
            <strong className="text-app-navy">Última atividade:</strong> há 2h
          </span>
          <span>
            <strong className="text-app-navy">Trocas feitas:</strong>{" "}
            {Math.floor(match.inCommon * 1.5)}
          </span>
          <span>
            <strong className="text-app-navy">Avaliação:</strong> ★ 4,9 / 5,0
          </span>
        </div>
      )}
    </article>
  );
}

function AlbumView() {
  const totalDone = teams.reduce((s, t) => s + t.done, 0);
  const total = 670;
  const percent = Math.round((totalDone / total) * 100);

  return (
    <div className="flex flex-col gap-3 px-3.5 pb-4 pt-2">
      <div className="flex flex-col gap-1">
        <h3 className="font-display text-2xl font-extrabold text-app-navy">
          Meu Álbum
        </h3>
        <span className="text-[10px] font-medium text-app-slate">
          Copa do Mundo 2026 · {totalDone}/{total} figurinhas
        </span>
      </div>

      <div className="flex flex-col gap-1">
        <div className="h-1.5 overflow-hidden rounded-full bg-app-border">
          <div
            className="h-full rounded-full bg-app-blue transition-all"
            style={{ width: `${percent}%` }}
          />
        </div>
        <span className="text-[9px] font-bold text-app-blue">
          {percent}% completo
        </span>
      </div>

      <div className="flex flex-col gap-2.5">
        {teams.map((t) => {
          const teamPct = Math.round((t.done / t.total) * 100);
          return (
            <div key={t.name} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="text-base leading-none">{t.flag}</span>
                  <span className="font-display text-[12px] font-bold text-app-navy">
                    {t.name}
                  </span>
                </div>
                <span className="text-[9px] font-medium text-app-slate">
                  {t.done}/{t.total}
                </span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-app-border">
                <div
                  className="h-full rounded-full bg-app-blue"
                  style={{ width: `${teamPct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PlaceholderView({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-2 px-6 py-12 text-center">
      <h3 className="font-display text-xl font-extrabold text-app-navy">
        {title}
      </h3>
      <p className="text-[11px] font-medium text-app-slate">{subtitle}</p>
    </div>
  );
}
