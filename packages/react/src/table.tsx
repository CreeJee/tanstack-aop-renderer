import { Table } from "@tanstack/react-table";
import { FC, useState, PropsWithChildren } from "react";
import {
  RenderCompositionProvider,
  RendererCompositionVariant,
  RendererCompositionDefaultValue,
} from "./context/RendererComposition";
import { RendererCompositionSetProvider } from "./context/RendererCompositionSet";

type TableRendererModuleProps<TData> = { table: Table<TData> };
type TableRendererModule<TData> = FC<TableRendererModuleProps<TData>>;

export type TableCompositionProps<TData> = {
  table: Table<TData>;
  modules: TableRendererModule<TData>[];
};

// render as composition
export const TableComposition = <TData,>({
  table,
  modules,
  children,
}: PropsWithChildren<TableCompositionProps<TData>>) => {
  const [state, setState] = useState<RendererCompositionVariant>(
    RendererCompositionDefaultValue
  );
  return (
    <>
      <RendererCompositionSetProvider value={setState}>
        {modules.map((Renderer, key) => (
          <Renderer table={table} key={key} />
        ))}
      </RendererCompositionSetProvider>

      <RenderCompositionProvider value={state}>
        {children}
      </RenderCompositionProvider>
    </>
  );
};
