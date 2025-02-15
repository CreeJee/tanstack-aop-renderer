import { useEffect, useRef } from "react";

import { debounce, DebouncedFunction } from "es-toolkit";

export function useDebounceCallback<
  T extends (...args: unknown[]) => ReturnType<T>
>(func: T, delay = 500, options?: Parameters<typeof debounce>[2]) {
  const debouncedFunc = useRef<DebouncedFunction<T>>(
    debounce(func, delay, options)
  );

  useEffect(() => {
    return () => {
      if (debouncedFunc.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        debouncedFunc.current.cancel();
      }
    };
  }, []);

  return debouncedFunc;
}
