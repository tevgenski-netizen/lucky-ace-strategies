import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AlertTriangle, ArrowLeft, CheckCircle2, Clock, Wallet } from "lucide-react";
import { getGame, type GameSlug } from "@/data/games";
import { strategies } from "@/data/strategies";

export const Route = createFileRoute("/games/$slug")({
  loader: ({ params }) => {
    const game = getGame(params.slug);
    if (!game) throw notFound();
    return { game };
  },
  head: ({ loaderData }) => {
    const game = loaderData?.game;
    if (!game) return { meta: [{ title: "Стратегия не найдена" }] };
    const s = strategies[game.slug];
    return {
      meta: [
        { title: `${game.title}: ${s.headline} | CasinoStrat` },
        { name: "description", content: s.summary.slice(0, 160) },
        { property: "og:title", content: `Стратегия: ${game.title}` },
        { property: "og:description", content: s.summary.slice(0, 160) },
      ],
    };
  },
  component: StrategyPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-serif text-3xl">Стратегия не найдена</h1>
      <p className="mt-4 text-muted-foreground">
        Такой игры пока нет в нашем каталоге.
      </p>
      <Link
        to="/games"
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-gold px-5 py-3 text-sm font-semibold text-primary-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> К списку игр
      </Link>
    </div>
  ),
});

function StrategyPage() {
  const { game } = Route.useLoaderData();
  const strategy = strategies[game.slug as GameSlug];

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
      <Link
        to="/games"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
      >
        <ArrowLeft className="h-4 w-4" /> Все игры
      </Link>

      <header className="mt-8">
        <div className="flex items-center gap-4">
          <span className="font-serif text-6xl text-gold/60">{game.accent}</span>
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-gold">
              {game.title} · стратегия
            </p>
            <p className="mt-1 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" /> Обновлено: {strategy.updated}
            </p>
          </div>
        </div>
        <h1 className="mt-6 font-serif text-3xl leading-tight sm:text-4xl">
          {strategy.headline}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          {strategy.summary}
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <Stat label="RTP / шанс" value={game.rtp} />
          <Stat label="Сложность" value={game.difficulty} />
          <Stat label="Тип игры" value={game.tagline} />
        </div>
      </header>

      {/* Sections */}
      <div className="mt-14 space-y-12">
        {strategy.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-serif text-2xl text-foreground sm:text-3xl">
              {section.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {section.body}
            </p>
            {section.bullets && (
              <ul className="mt-5 space-y-3">
                {section.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 rounded-lg border border-border/60 bg-card/40 p-4 text-sm leading-relaxed"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {/* Bankroll */}
      <section className="mt-14 rounded-xl border border-gold/30 bg-gradient-felt p-6 shadow-card-elegant sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-gold">
            <Wallet className="h-5 w-5 text-primary-foreground" />
          </span>
          <h2 className="font-serif text-2xl">Управление банкроллом</h2>
        </div>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {strategy.bankroll}
        </p>
      </section>

      {/* Pitfalls */}
      <section className="mt-10 rounded-xl border border-destructive/30 bg-destructive/5 p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/20">
            <AlertTriangle className="h-5 w-5 text-destructive" />
          </span>
          <h2 className="font-serif text-2xl">Чего избегать</h2>
        </div>
        <ul className="mt-5 space-y-2 text-sm">
          {strategy.pitfalls.map((p) => (
            <li key={p} className="flex items-start gap-2 text-muted-foreground">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-destructive" />
              {p}
            </li>
          ))}
        </ul>
      </section>

      {/* Final disclaimer */}
      <section className="mt-12 border-t border-border/60 pt-8 text-sm leading-relaxed text-muted-foreground">
        <p>
          <strong className="text-foreground">Напоминание о рисках.</strong>{" "}
          Никакая стратегия не гарантирует выигрыш. Каждая ставка — это решение
          игрока, и он несёт за неё полную финансовую ответственность. Если вы
          замечаете, что игра вышла из-под контроля, остановитесь и обратитесь
          за помощью к специалистам.
        </p>
      </section>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border/60 bg-card/40 p-4">
      <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 font-serif text-lg text-foreground">{value}</p>
    </div>
  );
}
