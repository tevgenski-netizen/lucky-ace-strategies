import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Calculator, ShieldCheck, TrendingUp } from "lucide-react";
import { games } from "@/data/games";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CasinoStrat — Как выигрывать в казино: стратегии и математика" },
      {
        name: "description",
        content:
          "Свежие стратегии для покера, баккара, рулетки и слотов. Объясняем математику игр и принципы ответственной игры.",
      },
      { property: "og:title", content: "CasinoStrat — Стратегии казино" },
      {
        property: "og:description",
        content: "Гайды и стратегии победы в покере, баккаре, рулетке и слотах.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-card/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-gold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Свежие стратегии · Апрель 2026
            </span>
            <h1 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Математика побеждает <span className="text-gradient-gold">удачу</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Подробные образовательные гайды по покеру, баккаре, рулетке и слотам.
              Разбираем RTP, преимущество казино, управление банкроллом и реальные
              стратегии — без обещаний быстрых денег.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/games"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.02]"
              >
                Выбрать игру <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card/40 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-card"
              >
                Что такое казино
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Что вы здесь найдёте */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-12 max-w-2xl">
          <h2 className="font-serif text-3xl sm:text-4xl">
            Что мы исследуем
          </h2>
          <p className="mt-4 text-muted-foreground">
            Каждая игра в казино имеет своё «преимущество казино» — заложенный
            математический перевес. Мы объясняем, где этот перевес минимален и
            как его учитывать.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Calculator,
              title: "Математика игр",
              text: "RTP, преимущество казино, дисперсия и ожидаемая ценность каждой ставки.",
            },
            {
              icon: Brain,
              title: "Поведенческие модели",
              text: "Контроль тилта, психология ставок и распознавание ловушек мозга.",
            },
            {
              icon: TrendingUp,
              title: "Управление банком",
              text: "Стоп-лосс, тейк-профит и размер ставки относительно банкролла.",
            },
            {
              icon: ShieldCheck,
              title: "Ответственная игра",
              text: "Лимиты сессий и признаки, когда пора остановиться.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border/60 bg-card/60 p-6 shadow-card-elegant"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-felt border border-gold/20">
                <f.icon className="h-5 w-5 text-gold" />
              </span>
              <h3 className="mt-4 font-serif text-lg">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Превью игр */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl">Игры и стратегии</h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Выберите игру — откроется свежий гайд с разбором ставок, банкролла
                и типичных ошибок.
              </p>
            </div>
            <Link
              to="/games"
              className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-gold hover:text-gold/80 sm:inline-flex"
            >
              Все игры <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {games.map((g) => (
              <Link
                key={g.slug}
                to="/games/$slug"
                params={{ slug: g.slug }}
                className="group relative overflow-hidden rounded-xl border border-border/60 bg-gradient-felt p-6 shadow-felt transition-all hover:border-gold/50 hover:shadow-gold"
              >
                <span className="font-serif text-5xl text-gold/40 transition-colors group-hover:text-gold/70">
                  {g.accent}
                </span>
                <h3 className="mt-4 font-serif text-2xl">{g.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{g.tagline}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                  Открыть стратегию <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer block */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl">
          Помните о реальных рисках
        </h2>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          Никакая стратегия не превращает казино в источник стабильного дохода.
          В долгой дистанции преимущество всегда у заведения. Все материалы на
          сайте — образовательные. Играйте только на деньги, которые готовы
          потерять без последствий для жизни и близких.
        </p>
      </section>
    </div>
  );
}
