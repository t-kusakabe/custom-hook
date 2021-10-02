import { useState } from 'react';

export const usePageHistory = (
  topPage: number,
  lastPage: number,
): [number, () => void, () => void, () => void, () => void, () => void] => {
  const initHistory: number[] = [topPage];
  const [history, setHistory] = useState<number[]>(initHistory);

  const currentPage = history[history.length - 1];

  const Top = (): void => {
    if (currentPage === topPage) {
      return;
    }

    const nextHistory = [...history, topPage];
    setHistory(nextHistory);
  };

  const Next = (): void => {
    const nextPage = currentPage + 1;

    if (lastPage < nextPage) {
      return;
    }

    const nextHistory = [...history, nextPage];
    setHistory(nextHistory);
  };

  const Back = (): void => {
    if (history.length <= 1) {
      return;
    }

    const nextHistory = [...history.slice(0, history.length - 1)];
    setHistory(nextHistory);
  };

  const Last = (): void => {
    if (currentPage === lastPage) {
      return;
    }
    
    const nextHistory = [...history, lastPage];
    setHistory(nextHistory);
  };

  const Reset = (): void => {
    setHistory(initHistory);
  };

  return [
    currentPage,
    Top,
    Next,
    Back,
    Last,
    Reset,
  ];
};

