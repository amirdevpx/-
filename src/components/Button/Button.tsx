import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils/utils";

export const buttonVariants = cva("inline-flex items-center justify-center gap-x-2", {
  variants: {
    variant: {
      default: "",
      success: "border border-green-500 bg-green-500 text-white",
      "outline-success": "border border-green-500 bg-white text-green-500 hover:bg-green-50",
      icon: "border-none",
      link: "border-none hover:text-gray-700"
    },
    size: {
      default: "py-1 px-3",
    },
    rounded: {
      default: "rounded-md",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    rounded: "default",
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function Button({ className, variant, size, rounded, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({className, variant, size, rounded }))} {...props} />;
}

export default Button;
