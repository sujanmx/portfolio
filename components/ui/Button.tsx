"use client";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-background hover:bg-primary/90 px-6 py-3 shadow-[0_0_20px_rgba(255,255,255,0.1)]",
        outline: "border border-white/20 bg-transparent hover:bg-white/10 text-foreground px-6 py-3",
        ghost: "hover:bg-white/5 text-secondary hover:text-foreground px-6 py-3",
      },
      size: {
        default: "h-auto",
        sm: "h-8 rounded-full px-3 text-xs",
        lg: "h-12 md:h-auto px-8 md:px-10 py-3 md:py-4 text-sm md:text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  "aria-label"?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, "aria-label": ariaLabel, type = "button", ...props }, ref) => {
    return (
      <motion.button
        whileHover={{ scale: 1.03, y: -1 }}
        whileTap={{ scale: 0.97 }}
        ref={ref}
        type={type}
        aria-label={ariaLabel}
        className={cn(buttonVariants({ variant, size, className }))}
        {...(props as any)}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
