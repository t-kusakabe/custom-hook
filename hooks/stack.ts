import { useReducer } from 'react';

type StackState<T> = T[];

type StackAction<T> =
  | { type: 'ACTION_POP' }
  | { type: 'ACTION_PUSH'; value: T }
  | { type: 'ACTION_RESET'; initStack: T[] };

const stackReducer = <T>() => (
  stack: StackState<T>,
  action: StackAction<T>
): StackState<T> => {
  switch(action.type) {
    case 'ACTION_POP':
      if (stack.length === 0) {
        return stack;
      }

      return [...stack.slice(0, stack.length - 1)];

    case 'ACTION_PUSH':
      return [...stack, action.value];

    case 'ACTION_RESET':
      return action.initStack;
  }
};

export interface Stack<T> {
  Pop: () => void;
  Push: (v: T) => void;
  Reset: () => void;
  Length: () => number;
}

export const useStack = <T>(init?: T[]): [T, Stack<T>] => {
  const initStack: T[] = init ?? [];
  const [stack, dispatch] = useReducer(stackReducer<T>(), initStack);

  const Pop = (): void => dispatch({ type: 'ACTION_POP' });
  const Push = (value: T): void => dispatch({ type: 'ACTION_PUSH', value });
  const Reset = (): void => dispatch({ type: 'ACTION_RESET', initStack });
  const Length = (): number => stack.length;

  return [stack[stack.length - 1], { Pop, Push, Reset, Length }];
};
