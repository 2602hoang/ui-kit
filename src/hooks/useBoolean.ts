import { useState, useCallback } from "react";

type BooleanState = {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
};

const sharedState: Record<string, boolean> = {};
const listeners: Record<
  string,
  Set<React.Dispatch<React.SetStateAction<boolean>>>
> = {};

export const useBoolean = (key: string): BooleanState => {
  const [value, setValue] = useState(sharedState[key] ?? false);

  if (!listeners[key]) {
    listeners[key] = new Set();
  }
  listeners[key].add(setValue);

  const notifyAll = (newVal: boolean) => {
    sharedState[key] = newVal;
    listeners[key].forEach((listener) => listener(newVal));
  };

  const setTrue = useCallback(() => notifyAll(true), [key]);
  const setFalse = useCallback(() => notifyAll(false), [key]);
  const toggle = useCallback(() => notifyAll(!sharedState[key]), [key]);

  return {
    value,
    setValue: (val) => {
      const newValue =
        typeof val === "function"
          ? (val as (prev: boolean) => boolean)(sharedState[key] ?? false)
          : val;
      notifyAll(newValue);
    },
    setTrue,
    setFalse,
    toggle,
  };
};
