import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Backdrop } from "@/components/ui/Backdrop";
import Image from "next/image";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: { src: string; alt: string };
};

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <Backdrop variant="hero" />

      <Container
        className={image ? "grid items-center gap-12 md:grid-cols-2" : undefined}
      >
        <div>
          <Reveal>
            {eyebrow && (
              <p className="mb-4 text-sm font-medium text-muted">{eyebrow}</p>
            )}
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">{description}</p>

            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-wrap gap-4">
                {primaryCta && (
                  <Button href={primaryCta.href}>{primaryCta.label}</Button>
                )}
                {secondaryCta && (
                  <Button href={secondaryCta.href} variant="outline">
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}
          </Reveal>
        </div>

        {image && (
          <Reveal delay={0.15}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                className="object-contain object-bottom drop-shadow-2xl"
              />
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
