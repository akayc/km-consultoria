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

        <div className={cn("mt-12 grid grid-cols-1 gap-6", colClasses[columns])}>
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={Math.min(i * 0.12, 0.6)}>
                <div
                  className={cn(
                    "h-full rounded-2xl border p-6 transition-colors",
                    decor
                      ? "border-white/50 bg-bg/60 backdrop-blur-md hover:bg-bg/80"
                      : "border-border bg-bg"
                  )}
                >
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
                    <Icon className="mb-4 h-6 w-6 text-primary" strokeWidth={1.5} />
                  )}
                  <h3 className="text-lg font-medium">{item.title}</h3>
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