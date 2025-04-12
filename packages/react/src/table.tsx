import { useState, PropsWithChildren } from "react";
import {
  RenderCompositionProvider,
  RendererCompositionVariant,
  RendererCompositionDefaultValue,
} from "./context/RendererComposition";
import { RendererCompositionSetProvider } from "./context/RendererCompositionSet";

// render as composition
export const TableComposition = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<RendererCompositionVariant>(
    RendererCompositionDefaultValue
  );
  return (
    <RendererCompositionSetProvider value={setState}>
      <RenderCompositionProvider value={state}>
        {children}
      </RenderCompositionProvider>
    </RendererCompositionSetProvider>
  );
};
