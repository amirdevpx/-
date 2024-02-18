import React from "react";
import { cn } from "../../utils/utils";
import { VariantProps, cva } from "class-variance-authority";

const inputVariants = cva("", {
  variants: {
    variant: {
      none: "border-none bg-transparent",
    },
  },
  defaultVariants: {},
});

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

function Input({ type, className, variant, ...props }: InputProps) {
  return <input type={type} className={cn(inputVariants({ className, variant }))} {...props} />;
}

export default Input;
