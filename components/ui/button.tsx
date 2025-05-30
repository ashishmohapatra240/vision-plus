import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-[88px] font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
          {
            "bg-pink-600 text-white hover:bg-pink-700": variant === "primary",
            "bg-transparent  border border-gray-300":
              variant === "outline",
            "bg-white text-zinc-900 hover:bg-gray-100": variant === "secondary",
          },
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-8 py-4 text-base": size === "md",
            "px-10 py-5 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
