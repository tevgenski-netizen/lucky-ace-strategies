export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-muted-foreground">
        <p className="font-serif text-base text-foreground">
          Casino<span className="text-gradient-gold">Strat</span>
        </p>
        <p className="mt-3 max-w-3xl leading-relaxed">
          Сайт публикует образовательные материалы о математике и стратегии игр
          казино. Мы не призываем играть на деньги. Азартные игры могут привести
          к зависимости и серьёзным финансовым потерям. Если игра перестала быть
          развлечением — обратитесь за помощью на горячую линию психологической
          поддержки.
        </p>
        <p className="mt-4 text-xs">
          © {new Date().getFullYear()} CasinoStrat. Только для лиц старше 18 лет.
        </p>
      </div>
    </footer>
  );
}
