import React$1 from 'react';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';

interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
}
declare const Button: ({ className, asChild, ...props }: ButtonProps) => React$1.JSX.Element;

type PropText = {
    children: React$1.ReactNode;
    asChild?: boolean;
    tag?: React$1.ElementType;
} & React$1.HTMLProps<HTMLParagraphElement> & React$1.HTMLAttributes<HTMLElement> & VariantProps<typeof textVariants>;
declare const textVariants: (props?: ({
    variant?: "text11-500" | "text12-600" | "text10-600" | "text14-600" | "text14-700" | "text13-500" | null | undefined;
    color?: "text-accent-1" | "text-accent-2" | "text-contrast" | "text-main-secondary" | "text-main-primary" | "text-main-tertiary" | "text-accent-accent-3-stroke" | "text-alert-success" | "text-alert-error" | "text-fff" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
declare const Text: ({ children, variant, color, asChild, className, tag, ...props }: PropText) => React$1.JSX.Element;

type BooleanState = {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
    setTrue: () => void;
    setFalse: () => void;
    toggle: () => void;
};
declare const useBoolean: (key: string) => BooleanState;

export { Button, type ButtonProps, type PropText, Text, useBoolean };
