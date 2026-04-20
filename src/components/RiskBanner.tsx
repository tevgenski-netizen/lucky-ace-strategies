import { AlertTriangle } from "lucide-react";

export function RiskBanner() {
  return (
    <div className="border-b border-destructive/40 bg-destructive/15 text-destructive-foreground">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2 text-xs sm:text-sm">
        <AlertTriangle className="h-4 w-4 shrink-0 text-destructive" aria-hidden />
        <p className="leading-snug">
          <span className="font-semibold">Внимание:</span> азартные игры связаны с
          реальными финансовыми рисками. Игрок несёт полную ответственность за
          возможные потери. Материалы сайта носят информационный характер. 18+.
        </p>
      </div>
    </div>
  );
}
