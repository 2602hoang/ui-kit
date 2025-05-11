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
export {
  Button
};
