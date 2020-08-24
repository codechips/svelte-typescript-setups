import { readable } from 'svelte/store';

export const enum Intervals {
  OneSec = 1,
  FiveSec = 5,
  TenSec = 10
}

export const init = (intervals: Intervals = Intervals.OneSec) => {
  return readable(0, set => {
    let current = 0;

    const timerId = setInterval(() => {
      current++;
      set(current);
    }, intervals * 1000);

    return () => clearTimeout(timerId);
  });
};
