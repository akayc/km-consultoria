import { MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";

type Stop = { title: string; description: string };

type RouteMapProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  stops: Stop[];
};

export function RouteMap({ id, eyebrow, title, description, stops }: RouteMapProps) {
  return (
    <section id={id} className="relative py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            {eyebrow && <p className="mb-4 text-sm font-medium text-muted">{eyebrow}</p>}
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
            {description && <p className="mt-4 text-muted">{description}</p>}
          </div>
        </Reveal>

        <div className="relative mt-16">
          {/* linha conectora: vertical no mobile, horizontal a partir do md */}
          <div
            aria-hidden
            className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary/40 via-border to-transparent md:left-0 md:top-4 md:h-px md:w-full md:bg-gradient-to-r"
          />

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {stops.map((stop, i) => (
              <Reveal key={stop.title} delay={Math.min(i * 0.15, 0.6)}>
                <div className="relative pl-12 md:pl-0">
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-bg text-primary shadow-sm md:static md:mb-5">
                    <MapPin className="h-4 w-4" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-medium">{stop.title}</h3>
                  <p className="mt-2 text-sm text-muted">{stop.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
