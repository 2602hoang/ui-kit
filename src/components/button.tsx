import { Slot } from "@radix-ui/react-slot"
import { cn } from "../lib/cn"
import React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export const Button = ({ className, asChild = false, ...props }: ButtonProps) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn("px-4 py-2 text-white bg-black rounded", className)}
      {...props}
    />
  )
}
