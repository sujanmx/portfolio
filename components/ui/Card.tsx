"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      ref={ref}
      className={cn(
        "rounded-xl border border-secondary/20 bg-secondary/5 text-foreground shadow-sm backdrop-blur-sm",
        className
      )}
      {...(props as any)}
    />
  )
);
Card.displayName = "Card";

export { Card };
