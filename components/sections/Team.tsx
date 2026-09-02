import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { User } from "lucide-react";

type Member = {
  name: string;
  role: string;
  bio?: string;
  photo?: { src: string; alt: string; position?: string; zoom?: number };
};

type TeamProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  members: Member[];
  tone?: "default" | "surface";
};

export function Team({ id, eyebrow, title, description, members, tone = "default" }: TeamProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28", tone === "surface" && "bg-surface")}>
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            {eyebrow && <p className="mb-4 text-sm font-medium text-muted">{eyebrow}</p>}
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
            {description && <p className="mt-4 text-muted">{description}</p>}
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-3">
          {members.map((member, i) => (
            <Reveal key={member.name} delay={Math.min(i * 0.15, 0.6)}>
              <div className="text-center sm:text-left">
                <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-2xl bg-bg sm:mx-0 sm:w-full">
                  {member.photo ? (
                    <Image
                      src={member.photo.src}
                      alt={member.photo.alt}
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: member.photo.position ?? "center top",
                        transform: member.photo.zoom ? `scale(${member.photo.zoom})` : undefined,
                      }}
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <User className="h-12 w-12 text-muted" strokeWidth={1.5} />
                    </div>
                  )}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{member.name}</h3>
                <p className="mt-1 text-sm text-muted">{member.role}</p>
                {member.bio && (
                  <p className="mt-3 text-sm leading-relaxed text-fg/70">{member.bio}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}