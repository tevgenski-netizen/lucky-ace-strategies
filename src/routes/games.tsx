import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { games } from "@/data/games";

export const Route = createFileRoute("/games")({
  head: () => ({
    meta: [
      { title: "Игры казино — выберите стратегию | CasinoStrat" },
      {
        name: "description",
        content:
          "Покер, баккара, рулетка и слоты — выберите игру, чтобы открыть свежую стратегию с разбором ставок и банкролла.",
      },
      { property: "og:title", content: "Игры казино — стратегии" },
      {
        property: "og:description",
        content: "Выберите игру и откройте подробный гайд по стратегии.",
      },
    ],
  }),
  component: GamesLayout,
});

function GamesLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/games/$slug");

  if (isChild) return <Outlet />;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
      <header className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-wider text-gold">
          Каталог
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
          Выберите <span className="text-gradient-gold">игру</span>
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Кликните на карточку — откроется свежая стратегия с математикой,
          практическими советами и предупреждениями о типичных ошибках.
        </p>
      </header>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {games.map((g) => (
          <Link
            key={g.slug}
            to="/games/$slug"
            params={{ slug: g.slug }}
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-felt p-8 shadow-felt transition-all hover:border-gold/50 hover:shadow-gold"
          >
            <div className="flex items-start justify-between">
              <span className="font-serif text-7xl text-gold/30 transition-colors group-hover:text-gold/60">
                {g.accent}
              </span>
              <div className="flex flex-col items-end gap-1 text-right text-xs text-muted-foreground">
                <span>RTP / шанс</span>
                <span className="font-semibold text-foreground">{g.rtp}</span>
                <span className="mt-2">Сложность</span>
                <span className="font-semibold text-foreground">{g.difficulty}</span>
              </div>
            </div>
            <h2 className="mt-6 font-serif text-3xl">{g.title}</h2>
            <p className="mt-1 text-sm text-gold/80">{g.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {g.intro}
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold">
              Открыть стратегию
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
