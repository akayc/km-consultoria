import { cn } from "@/lib/utils";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
};

const variants = {
  primary:
    "bg-primary text-primary-foreground shadow-[0_8px_18px_rgba(7,93,143,0.22)] hover:-translate-y-0.5 hover:bg-[#064f78] hover:shadow-[0_12px_24px_rgba(7,93,143,0.28)]",
  outline:
    "border border-border bg-white/70 text-fg hover:-translate-y-0.5 hover:border-primary/30 hover:bg-white",
  ghost: "text-fg hover:bg-surface",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  target,
  rel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
