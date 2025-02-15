import { Table } from "@tanstack/react-table";
import { FC, PropsWithChildren } from "react";
import { RendererComposer } from "./context";

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
  return (
    <RendererComposer>
      {modules.map((Renderer) => (
        <Renderer table={table} />
      ))}
      {children}
    </RendererComposer>
  );
};
