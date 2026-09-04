import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
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
    <section className="relative isolate overflow-hidden bg-[#f5f9fb] pt-28 pb-10 md:pt-36 md:pb-20">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,transparent_0%,transparent_49.8%,rgba(7,93,143,0.06)_50%,transparent_50.2%)] bg-[length:56px_56px]" />
      <div aria-hidden className="absolute -top-40 right-[-10rem] -z-10 h-[38rem] w-[38rem] rounded-full bg-primary/15 blur-3xl" />
      <div aria-hidden className="absolute bottom-[-12rem] left-[25%] -z-10 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <Container
        className={image ? "grid items-center gap-6 md:grid-cols-2 md:gap-12" : undefined}
      >
        <div>
          <Reveal>
            {eyebrow && (
              <p className="mb-4 text-sm font-medium text-muted">{eyebrow}</p>
            )}
            <h1 className="max-w-xl text-4xl font-semibold leading-[1.04] tracking-[-0.045em] md:text-6xl lg:text-[4.15rem]">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">{description}</p>

            {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap gap-3">
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
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-l-2 border-accent pl-3">
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
            <div className="relative mx-auto mt-2 h-[22rem] w-full max-w-md md:mt-0 md:h-[32rem]">
              <div aria-hidden className="absolute inset-x-3 bottom-0 h-[85%] rounded-t-[8rem] border border-primary/15 bg-gradient-to-b from-white/60 to-primary/10 shadow-[0_28px_60px_rgba(7,93,143,0.12)]" />
              <div aria-hidden className="absolute right-0 top-8 h-24 w-24 rounded-full border-[10px] border-accent/70 md:h-32 md:w-32" />
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                className="object-contain object-bottom drop-shadow-[0_20px_18px_rgba(16,43,61,0.2)]"
              />
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
