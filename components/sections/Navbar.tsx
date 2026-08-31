"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type NavLink = { label: string; href: string };

type NavbarProps = {
  logo: React.ReactNode;
  links: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
};

export function Navbar({ logo, links, ctaLabel, ctaHref }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors",
        scrolled ? "bg-bg/90 backdrop-blur border-b border-border" : "bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <div className="text-lg font-semibold">{logo}</div>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-fg/80 transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
          {ctaLabel && ctaHref && (
            <Button href={ctaHref} className="px-4 py-2">
              {ctaLabel}
            </Button>
          )}
        </nav>

        <button
          className="md:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-border bg-bg md:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-fg/80"
              >
                {link.label}
              </a>
            ))}
            {ctaLabel && ctaHref && (
              <Button href={ctaHref} className="w-full">
                {ctaLabel}
              </Button>
            )}
          </Container>
        </div>
      )}
    </header>
  );
}
