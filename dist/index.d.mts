import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
}
declare const Button: ({ className, asChild, ...props }: ButtonProps) => React.JSX.Element;

export { Button, type ButtonProps };
