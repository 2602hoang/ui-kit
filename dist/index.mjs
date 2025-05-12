// src/components/button.tsx
import { Slot } from "@radix-ui/react-slot";

// src/lib/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/button.tsx
import React from "react";
var Button = ({ className, asChild = false, ...props }) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ React.createElement(
    Comp,
    {
      className: cn("px-4 py-2 text-white bg-black rounded", className),
      ...props
    }
  );
};

// src/components/text.tsx
import { Slot as Slot2 } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import React2 from "react";
var textVariants = cva(
  "leading-[140%]",
  {
    variants: {
      variant: {
        "text11-500": "text_11  font-medium",
        "text12-600": "text_12  font-semibold",
        "text10-600": "text_10 leading-[120%] font-semibold",
        "text14-600": "text_14  font-semibold",
        "text14-700": "text_14  !font-boild",
        "text13-500": "text_13  font-medium"
      },
      color: {
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
      }
    },
    defaultVariants: {
      variant: "text11-500",
      color: "text-accent-2"
    }
  }
);
var Text = ({ children, variant, color, asChild = false, className, tag, ...props }) => {
  const Comp = asChild ? Slot2 : tag ??= "span";
  return /* @__PURE__ */ React2.createElement(Comp, { className: cn(textVariants({ variant, className, color })), ...props }, children);
};

// src/hooks/useBoolean.ts
import { useState, useCallback } from "react";
var sharedState = {};
var listeners = {};
var useBoolean = (key) => {
  const [value, setValue] = useState(sharedState[key] ?? false);
  if (!listeners[key]) {
    listeners[key] = /* @__PURE__ */ new Set();
  }
  listeners[key].add(setValue);
  const notifyAll = (newVal) => {
    sharedState[key] = newVal;
    listeners[key].forEach((listener) => listener(newVal));
  };
  const setTrue = useCallback(() => notifyAll(true), [key]);
  const setFalse = useCallback(() => notifyAll(false), [key]);
  const toggle = useCallback(() => notifyAll(!sharedState[key]), [key]);
  return {
    value,
    setValue: (val) => {
      const newValue = typeof val === "function" ? val(sharedState[key] ?? false) : val;
      notifyAll(newValue);
    },
    setTrue,
    setFalse,
    toggle
  };
};
export {
  Button,
  Text,
  useBoolean
};
