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
    "bg-primary text-primary-foreground hover:opacity-90",
  outline:
    "border border-border text-fg hover:bg-surface",
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
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-colors",
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
