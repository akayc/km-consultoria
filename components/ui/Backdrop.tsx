import { cn } from "@/lib/utils";

type BackdropProps = {
  className?: string;
  variant?: "hero" | "section";
};

// Elemento puramente decorativo (aria-hidden). Blobs de cor da marca com
// blur pesado — dá profundidade/"liquid glass" sem usar fotografia de
// terceiros sem licença.
export function Backdrop({ className, variant = "section" }: BackdropProps) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <div
        className={cn(
          "absolute rounded-full bg-primary/25 blur-3xl",
          variant === "hero" ? "-top-32 -right-24 h-[32rem] w-[32rem]" : "-top-20 -right-16 h-80 w-80"
        )}
      />
      <div
        className={cn(
          "absolute rounded-full bg-accent/20 blur-3xl",
          variant === "hero" ? "top-40 -left-32 h-96 w-96" : "-bottom-24 -left-20 h-72 w-72"
        )}
      />
    </div>
  );
}
