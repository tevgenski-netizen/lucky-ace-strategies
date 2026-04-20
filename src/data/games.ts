export type GameSlug = "poker" | "baccarat" | "roulette" | "slots";

export interface Game {
  slug: GameSlug;
  title: string;
  tagline: string;
  rtp: string;
  difficulty: string;
  accent: string;
  intro: string;
}

export const games: Game[] = [
  {
    slug: "poker",
    title: "Покер",
    tagline: "Игра навыка против соперников",
    rtp: "Зависит от мастерства",
    difficulty: "Высокая",
    accent: "♠",
    intro:
      "Единственная классическая игра казино, где ваше преимущество над соперниками решает всё. Математика, психология и дисциплина важнее удачи.",
  },
  {
    slug: "baccarat",
    title: "Баккара",
    tagline: "Минимальное преимущество казино",
    rtp: "98.94% (Banker)",
    difficulty: "Низкая",
    accent: "♦",
    intro:
      "Простая по правилам игра с одним из лучших RTP в казино. Правильный выбор ставок — ключ к минимизации проигрыша.",
  },
  {
    slug: "roulette",
    title: "Рулетка",
    tagline: "Вероятности и контроль банка",
    rtp: "97.3% (European)",
    difficulty: "Средняя",
    accent: "●",
    intro:
      "Чистая математика вероятностей. Правильный выбор стола (европейская vs американская) и контроль банкролла важнее любой «системы».",
  },
  {
    slug: "slots",
    title: "Слоты",
    tagline: "Чистая удача с управлением риском",
    rtp: "94–98%",
    difficulty: "Низкая",
    accent: "▲",
    intro:
      "Игра, полностью основанная на ГСЧ. Стратегия здесь — это выбор слота с высоким RTP, управление сессией и понимание волатильности.",
  },
];

export const getGame = (slug: string): Game | undefined =>
  games.find((g) => g.slug === slug);
