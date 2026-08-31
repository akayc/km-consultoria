import { Container } from "@/components/ui/Container";

type FooterProps = {
  logo: React.ReactNode;
  tagline?: string;
  links?: { label: string; href: string }[];
  year?: number;
};

export function Footer({ logo, tagline, links = [], year }: FooterProps) {
  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center justify-between gap-6 text-sm text-muted md:flex-row">
        <div>
          <div className="font-semibold text-fg">{logo}</div>
          {tagline && <p className="mt-1">{tagline}</p>}
        </div>

        {links.length > 0 && (
          <nav className="flex gap-6">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-fg">
                {link.label}
              </a>
            ))}
          </nav>
        )}

        <p>© {year ?? new Date().getFullYear()}. Todos os direitos reservados.</p>
      </Container>
    </footer>
  );
}
