import { useState, PropsWithChildren } from "react";
import { PluginProvider, PluginContext } from "./plugin/Context";

// render as composition
export const PluginEntryPoint = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<PluginContext["value"]>([]);
  return (
    <PluginProvider
      value={{
        value: state,
        setValue: setState,
      }}
    >
      {children}
    </PluginProvider>
  );
};
