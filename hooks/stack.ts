import { useState } from 'react';

export interface Stack<T> {
  Pop: () => void;
  Push: (v: T) => void;
  Reset: () => void;
  Length: () => number;
}

export const useStack = <T>(init?: T[]): [T, Stack<T>] => {
  const initStack: T[] = init ?? [];
  const [stack, setStack] = useState<T[]>(initStack);

  const Pop = (): void => {
    if (stack.length === 0) {
      return;
    }

    const newStack = [...stack.slice(0, stack.length - 1)];
    setStack(newStack);
  };

  const Push = (v: T): void => {
    const newStack = [...stack, v];
    setStack(newStack);
  };

  const Reset = (): void => {
    setStack(initStack);
  };

  const Length = (): number => stack.length;

  return [stack[stack.length - 1], { Pop, Push, Reset, Length }];
};
