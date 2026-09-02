import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Image from "next/image";

type HeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image?: { src: string; alt: string };
  badges?: string[];
  stats?: { value: string; label: string }[];
};

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  image,
  badges,
  stats,
}: HeroProps) {
  return (
    <AuroraBackground className="!h-auto pt-32 pb-20 md:pt-40 md:pb-28">
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

            {badges && badges.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="flex items-center gap-2 text-sm text-fg/70"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {badge}
                  </span>
                ))}
              </div>
            )}

            {stats && stats.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-semibold tracking-tight md:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}
          </Reveal>
        </div>

        {image && (
          <Reveal delay={0.25}>
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
    </AuroraBackground>
  );
}