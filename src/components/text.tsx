import type { VariantProps } from 'class-variance-authority';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import React from 'react';
import { cn } from 'lib/cn';

export type PropText = {
  children: React.ReactNode;
  asChild?: boolean;
  tag?: React.ElementType;
  // showSkeleton?: boolean;
} & React.HTMLProps<HTMLParagraphElement> & React.HTMLAttributes<HTMLElement> & VariantProps<typeof textVariants>;

const textVariants = cva(
  'leading-[140%]',
  {
    variants: {
      variant: {
        "text11-500": "text_11  font-medium",
        "text12-600": "text_12  font-semibold",
        "text10-600": "text_10 leading-[120%] font-semibold", 
        "text14-600": "text_14  font-semibold",
        "text14-700": "text_14  !font-boild",
        "text13-500": "text_13  font-medium",

      },
      color:{
        "text-accent-1": "text-[#a3a3a3]",
        "text-accent-2": "text-[#6b7271]",
        "text-contrast": "text-[#121212]",
        "text-main-secondary": "text-[#bbf49c]",
        "text-main-primary": "text-[#1e4841]",
        "text-main-tertiary": "text-[#ecf4e9]",
        "text-accent-accent-3-stroke": "text-[#e5e6e6]",
        "text-alert-success": "text-[#1ea031]",
        "text-alert-error": "text-[#ff434e]",
        "text-fff": "text-[#fff]"
      },
    },
    defaultVariants: {
      variant: 'text11-500',
      color: "text-accent-2"
    },
  },
);

export const Text = ({ children, variant , color, asChild = false, className, tag, ...props }: PropText) => {
  const Comp = asChild ? Slot : tag ??= 'span';

 

  return ( <Comp className={cn(textVariants({ variant, className, color }))} {...props}>{children}</Comp>
  );
};

