import { PluginTableHead } from "@tanstack-table-aop/react";
import { useState, useLayoutEffect, RefCallback, useCallback } from "react";

export const HeadBoldIntervalModule = () => {
  const [state, setState] = useState<boolean>(false);
  useLayoutEffect(() => {
    const timer = setInterval(() => {
      setState((prev) => !prev);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  const ref: RefCallback<HTMLTableSectionElement> = useCallback((ref) => {
    console.log(ref);
  }, []);

  return (
    <PluginTableHead
      className={`bold ${state === true ? "check" : "not-check"}`}
      ref={ref}
    />
  );
};
