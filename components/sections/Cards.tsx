import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Backdrop } from "@/components/ui/Backdrop";
import { cn } from "@/lib/utils";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

export type CardItem = {
  title: string;
  description?: string;
  icon?: LucideIcon;
  photo?: { src: string; alt: string };
};

type CardsProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  items: CardItem[];
  columns?: 2 | 3 | 4;
  tone?: "default" | "surface";
  decor?: boolean; // blobs de gradiente + cards em glass, no lugar do fundo chapado
};

const colClasses = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function Cards({
  id,
  eyebrow,
  title,
  description,
  items,
  columns = 3,
  tone = "default",
  decor = false,
}: CardsProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-20 md:py-28",
        tone === "surface" && "bg-surface",
        decor && "bg-dot-grid"
      )}
    >
      {decor && <Backdrop />}

      <Container>
        <Reveal>
          <div className="max-w-2xl">
            {eyebrow && <p className="mb-4 text-sm font-medium text-muted">{eyebrow}</p>}
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
            {description && <p className="mt-4 text-muted">{description}</p>}
          </div>
        </Reveal>

        <div className={cn("mt-12 grid grid-cols-1 gap-5 md:gap-6", colClasses[columns])}>
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={Math.min(i * 0.12, 0.6)}>
                <div
                  className={cn(
                    "group relative h-full overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(16,43,61,0.10)]",
                    decor
                      ? "border-white/70 bg-bg/75 backdrop-blur-md hover:bg-bg/95"
                      : "border-border bg-bg hover:border-primary/25"
                  )}
                >
                  <div aria-hidden className="absolute left-0 top-0 h-1 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
                  {item.photo && (
                    <div className="relative mb-4 aspect-square w-16 overflow-hidden rounded-full">
                      <Image
                        src={item.photo.src}
                        alt={item.photo.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  {Icon && !item.photo && (
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                  {item.description && (
                    <p className="mt-2 text-sm text-muted">{item.description}</p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
