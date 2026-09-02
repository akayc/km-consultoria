import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type TagGroup = { label: string; description?: string; tags: string[] };

type TagListProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  groups: TagGroup[];
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

        <div className="mt-14 space-y-10">
          {groups.map((group, i) => (
            <Reveal key={group.label} delay={Math.min(i * 0.15, 0.6)}>
              <div className="overflow-hidden rounded-2xl border border-border bg-bg">
                <div className="border-b border-border bg-surface px-6 py-5 md:px-8">
                  <h3 className="text-lg font-semibold">{group.label}</h3>
                  {group.description && (
                    <p className="mt-1 text-sm text-muted">{group.description}</p>
                  )}
                </div>
                <ul className="grid grid-cols-1 gap-x-8 gap-y-3 px-6 py-6 sm:grid-cols-2 md:px-8 lg:grid-cols-3">
                  {group.tags.map((tag) => (
                    <li key={tag} className="flex items-center gap-2.5 text-sm text-fg/85">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}