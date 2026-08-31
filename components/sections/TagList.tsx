import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type TagListProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  groups: { label: string; tags: string[] }[];
  tone?: "default" | "surface";
};

export function TagList({
  id,
  eyebrow,
  title,
  description,
  groups,
  tone = "default",
}: TagListProps) {
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

        <div className="mt-10 space-y-8">
          {groups.map((group, i) => (
            <Reveal key={group.label} delay={Math.min(i * 0.08, 0.3)}>
              <div>
                <p className="mb-3 text-sm font-medium text-fg/70">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-bg px-4 py-1.5 text-sm text-fg/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
