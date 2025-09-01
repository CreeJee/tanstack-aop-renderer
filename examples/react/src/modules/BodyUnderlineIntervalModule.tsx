import { PluginTableBody } from "@tanstack-table-aop/react";
import { useLayoutEffect, useState } from "react";

export const BodyUnderlineIntervalModule = () => {
  const [state, setState] = useState<boolean>(false);
  useLayoutEffect(() => {
    const timer = setInterval(() => {
      setState((prev) => !prev);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <PluginTableBody className={`${state === true ? "underline" : ""}`} />;
};
