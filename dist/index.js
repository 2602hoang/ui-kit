"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  Text: () => Text,
  useBoolean: () => useBoolean
});
module.exports = __toCommonJS(index_exports);

// src/components/button.tsx
var import_react_slot = require("@radix-ui/react-slot");

// src/lib/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/button.tsx
var import_react = __toESM(require("react"));
var Button = ({ className, asChild = false, ...props }) => {
  const Comp = asChild ? import_react_slot.Slot : "button";
  return /* @__PURE__ */ import_react.default.createElement(
    Comp,
    {
      className: cn("px-4 py-2 text-white bg-black rounded", className),
      ...props
    }
  );
};

// src/components/text.tsx
var import_react_slot2 = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var import_react2 = __toESM(require("react"));
var textVariants = (0, import_class_variance_authority.cva)(
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
      }
    },
    defaultVariants: {
      variant: "text11-500",
      color: "text-accent-2"
    }
  }
);
var Text = ({ children, variant, color, asChild = false, className, tag, ...props }) => {
  const Comp = asChild ? import_react_slot2.Slot : tag ??= "span";
  return /* @__PURE__ */ import_react2.default.createElement(Comp, { className: cn(textVariants({ variant, className, color })), ...props }, children);
};

// src/hooks/useBoolean.ts
var import_react3 = require("react");
var sharedState = {};
var listeners = {};
var useBoolean = (key) => {
  const [value, setValue] = (0, import_react3.useState)(sharedState[key] ?? false);
  if (!listeners[key]) {
    listeners[key] = /* @__PURE__ */ new Set();
  }
  listeners[key].add(setValue);
  const notifyAll = (newVal) => {
    sharedState[key] = newVal;
    listeners[key].forEach((listener) => listener(newVal));
  };
  const setTrue = (0, import_react3.useCallback)(() => notifyAll(true), [key]);
  const setFalse = (0, import_react3.useCallback)(() => notifyAll(false), [key]);
  const toggle = (0, import_react3.useCallback)(() => notifyAll(!sharedState[key]), [key]);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Text,
  useBoolean
});
