export function delayedImport<T>(importFunc: () => Promise<T>, delay = 1000): Promise<T> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(importFunc());
      }, delay);
    });
  }

export const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
