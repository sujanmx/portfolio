import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const typographyVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "text-5xl md:text-8xl font-bold tracking-tighter leading-[1] mb-4",
      h2: "text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] mb-4",
      h3: "text-xl md:text-2xl font-medium tracking-tight leading-snug",
      p: "text-base md:text-lg text-secondary leading-relaxed tracking-normal",
      small: "text-[10px] md:text-xs text-secondary/50 uppercase tracking-[0.25em] font-bold",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
}

const Typography = ({
  className,
  variant,
  as: Component = "p",
  ...props
}: TypographyProps) => {
  return (
    <Component
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  );
};

export { Typography };
