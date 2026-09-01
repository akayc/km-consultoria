"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
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
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <div
        className={cn(
          "mx-auto flex h-16 w-full max-w-4xl items-center justify-between rounded-full border px-4 pl-6 transition-all duration-300",
          scrolled
            ? "border-border/60 bg-bg/70 shadow-lg shadow-black/5 backdrop-blur-xl"
            : "border-white/40 bg-bg/40 backdrop-blur-md"
        )}
      >
        <div className="text-base font-semibold">{logo}</div>

        <nav className="hidden items-center gap-7 md:flex">
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
            <Button href={ctaHref} className="rounded-full px-4 py-2">
              {ctaLabel}
            </Button>
          )}
        </nav>

        <button
          className="md:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-auto mt-2 w-full max-w-4xl rounded-3xl border border-border/60 bg-bg/90 p-6 shadow-lg backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
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
              <Button href={ctaHref} className="w-full rounded-full">
                {ctaLabel}
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
