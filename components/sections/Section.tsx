import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Backdrop } from "@/components/ui/Backdrop";
import { cn } from "@/lib/utils";
import Image from "next/image";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  image?: { src: string; alt: string };
  imageSide?: "left" | "right";
  tone?: "default" | "surface" | "primary";
  decor?: boolean; // blobs de gradiente + grid de pontos, no lugar do fundo cinza chapado
};

const tones = {
  default: "bg-bg text-fg",
  surface: "bg-surface text-fg",
  primary: "bg-primary text-primary-foreground",
};

export function Section({
  id,
  eyebrow,
  title,
  children,
  image,
  imageSide = "right",
  tone = "default",
  decor = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden py-20 md:py-28", tones[tone], decor && "bg-dot-grid")}
    >
      {decor && <Backdrop />}

      <Container
        className={cn(
          image && "grid items-center gap-12 md:grid-cols-2",
          image && imageSide === "left" && "md:[&>*:first-child]:order-2"
        )}
      >
        <Reveal>
          <div>
            {eyebrow && <p className="mb-4 text-sm font-medium opacity-70">{eyebrow}</p>}
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {title}
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-base opacity-85">
              {children}
            </div>
          </div>
        </Reveal>

        {image && (
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
