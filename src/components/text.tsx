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
        "text-accent-1": "text_accent_1",
        "text-accent-2": "text_accent_2",
        "text-contrast": "text_contrast",
        "text-main-secondary": "text_main_secondary",
        "text-main-primary": "text_main_primary",
        "text-main-tertiary": "text_main_tertiary",
        "text-accent-accent-3-stroke": "text-accent_accent_3_stroke",
        "text-alert-success": "text_alert_success",
        "text-alert-error": "text_alert_error",
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

