import { PluginTableBody } from "@tanstack-table-aop/react";
import { RefCallback, useCallback } from "react";

export const BodyBoldModule = () => {
  const ref: RefCallback<HTMLTableSectionElement> = useCallback((ref) => {
    console.log(ref);
  }, []);
  return <PluginTableBody className="bold" ref={ref} />;
};
