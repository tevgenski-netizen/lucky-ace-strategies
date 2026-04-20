import { Link } from "@tanstack/react-router";
import { Spade } from "lucide-react";

const nav = [
  { to: "/", label: "Главная" },
  { to: "/games", label: "Игры" },
  { to: "/about", label: "О казино" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-gold shadow-gold">
            <Spade className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight">
            Casino<span className="text-gradient-gold">Strat</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
