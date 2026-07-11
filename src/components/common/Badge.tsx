import { cn } from "@/utils";
import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "destructive" | "secondary" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold transition-colors",
        {
          "bg-primary text-primary-foreground": variant === "default",
          "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400": variant === "success",
          "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400": variant === "warning",
          "bg-destructive text-destructive-foreground": variant === "destructive",
          "bg-secondary text-secondary-foreground": variant === "secondary",
          "text-foreground border border-border bg-background": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}
