import { type Provider, createContext, useContext } from "react";

const NullSymbol = Symbol.for("NullSymbol");

type NullSymbolType = typeof NullSymbol;
export type CreateContextOptions = {
  hookName?: string;
  providerName?: string;
  name?: string;
};

export type CreateContextReturn<T> = [Provider<T>, () => T];

export function createSafeContext<T>(
  displayName?: string
): CreateContextReturn<T> {
  const Context = createContext<T | NullSymbolType>(NullSymbol);
  Context.displayName = displayName ?? "SafeContext";

  function useSafeContext() {
    const context = useContext(Context);

    if (context === NullSymbol) {
      const error = new Error(
        `[${Context.displayName}]: Provider를 찾을 수 없습니다.`
      );
      error.name = "[Error] Context";
      throw error;
    }

    return context;
  }

  return [Context.Provider as Provider<T>, useSafeContext];
}
