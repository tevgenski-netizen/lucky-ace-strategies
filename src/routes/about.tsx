import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Что такое казино и как там можно выигрывать — CasinoStrat" },
      {
        name: "description",
        content:
          "Объясняем простыми словами, как устроено казино, что такое RTP и преимущество казино, и в каких играх у игрока есть реальные шансы.",
      },
      { property: "og:title", content: "Что такое казино — CasinoStrat" },
      {
        property: "og:description",
        content: "Простое объяснение, как устроено казино и почему стратегия имеет значение.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <header>
        <p className="text-sm font-medium uppercase tracking-wider text-gold">
          Основы
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
          Что такое казино и можно ли там <span className="text-gradient-gold">выиграть</span>?
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Прежде чем переходить к конкретным стратегиям, важно понять, как
          устроена сама бизнес-модель казино. Это не магия и не заговор — это
          математика, и она прозрачна для каждого, кто хочет в неё разобраться.
        </p>
      </header>

      <Section title="1. Казино — это бизнес, а не лотерея">
        <p>
          Любое казино, наземное или онлайн, — это коммерческое предприятие.
          Его прибыль формируется из заложенного в каждую игру{" "}
          <strong className="text-foreground">математического преимущества</strong>{" "}
          («house edge»). Это не значит, что игры «нечестные»: правила прозрачны,
          вероятности известны. Просто на длинной дистанции казино всегда
          выигрывает определённый процент от каждой поставленной суммы.
        </p>
        <p>
          Например, преимущество казино в европейской рулетке — 2.7%. Это
          значит: с каждых поставленных 1000$ казино в среднем оставляет себе
          27$. Не у конкретного игрока за вечер, а суммарно по всем игрокам за
          месяцы и годы.
        </p>
      </Section>

      <Section title="2. Что такое RTP и почему это самая важная цифра">
        <p>
          RTP (Return to Player) — процент денег, который игра возвращает
          игрокам в долгой дистанции. RTP 96% означает, что из каждых 100$
          поставленных всеми игроками 96$ возвращается, а 4$ остаётся казино.
        </p>
        <p>
          Принципиально важно: RTP работает на миллионах раздач, а не на вашей
          сессии. За одну сессию вы можете уйти в плюс или в большой минус
          независимо от RTP. Но выбор игры с RTP 97% вместо 94% за десятки
          сессий радикально меняет ваш итоговый баланс.
        </p>
      </Section>

      <Section title="3. Игры удачи vs игры навыка">
        <p>
          Все игры казино делятся на две категории:
        </p>
        <ul className="mt-4 space-y-3 text-base">
          <li>
            <strong className="text-foreground">Игры чистой удачи</strong> —
            рулетка, баккара, слоты. Каждое событие независимо. Никакая
            «система» не меняет вероятность следующего исхода. Стратегия здесь
            сводится к выбору ставок с минимальным преимуществом казино и
            управлению банком.
          </li>
          <li>
            <strong className="text-foreground">Игры навыка</strong> — покер,
            блэкджек (с подсчётом карт). В покере вы играете не против казино,
            а против других игроков; казино берёт фиксированную комиссию (рейк).
            В блэкджеке базовая стратегия снижает преимущество казино до 0.5%, а
            подсчёт карт может дать игроку математический перевес.
          </li>
        </ul>
      </Section>

      <Section title="4. Так можно ли «выиграть»?">
        <p>
          Краткий честный ответ:
        </p>
        <ul className="mt-4 space-y-3 text-base">
          <li>
            <strong className="text-foreground">На одной сессии</strong> —
            конечно, да. Дисперсия (случайные колебания) делает возможными
            крупные выигрыши даже в играх с высоким преимуществом казино.
          </li>
          <li>
            <strong className="text-foreground">Стабильно в долгой дистанции</strong>{" "}
            — только в покере и теоретически в блэкджеке с подсчётом карт. Во
            всех остальных играх грамотная стратегия лишь продлевает игру и
            снижает скорость потерь, но не превращает её в плюс.
          </li>
        </ul>
        <p className="mt-6">
          Поэтому относитесь к казино как к платному развлечению. Стратегии на
          этом сайте помогут вам играть умнее, дольше и осознаннее — но они не
          гарантия прибыли.
        </p>
      </Section>

      <Section title="5. Принципы ответственной игры">
        <ul className="mt-4 space-y-3 text-base">
          <li>Играйте только на деньги, потеря которых не повлияет на жизнь.</li>
          <li>Установите лимит сессии до того, как сядете играть.</li>
          <li>Никогда не «отыгрывайтесь» — это самая дорогая ошибка.</li>
          <li>Делайте перерывы. Длинные сессии всегда работают против вас.</li>
          <li>Если игра перестала быть развлечением — обратитесь за помощью.</li>
        </ul>
      </Section>

      <div className="mt-16 rounded-xl border border-gold/30 bg-gradient-felt p-8 shadow-card-elegant">
        <h2 className="font-serif text-2xl">Готовы перейти к стратегиям?</h2>
        <p className="mt-3 text-muted-foreground">
          Выберите игру и изучите свежий разбор: математика, банкролл,
          типичные ошибки.
        </p>
        <Link
          to="/games"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-gold px-5 py-3 text-sm font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.02]"
        >
          Выбрать игру <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-serif text-2xl sm:text-3xl">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}
