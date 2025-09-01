# tanstack-aop-renderer

> Aspect-Oriented Renderer for TanStack Table  
> Modular, Horizontal Table Rendering Architecture

>

## Introduction

`tanstack-aop-renderer` helps developers build complex table UIs by composing independent rendering modules — especially useful when working with [TanStack Table](https://tanstack.com/table).

This library focuses on:

- Horizontal (column-oriented) rendering
- Separating rendering concerns
- scalable architecture for complex features like:
  - Column Drag & Drop
  - Sticky Columns / Headers
  - Custom Background / Effects per Column
  - Responsive or Virtualized Columns

## Motivation

Normally, adding features like column drag or sticky behavior requires placing all event handlers & logic inside a single renderer. This quickly becomes hard to maintain.

This project introduces a new idea:

> _"Wouldn't it be better if each concern had its own module?"_

By introducing `TanstackAopTableComposition`, you can build your table layout by composing independent modules like Head, Body, Effects, etc.

---

## Installation

```bash
pnpm add tanstack-aop-renderer
```

---

## Basic Usage

```tsx
import {
  PluginEntryPoint,
  RenderTableDataCell,
  RenderTableRow,
  RenderTable,
  RenderTableBody,
  RenderTableFoot,
  RenderTableHead,
  RenderTableHeadCell,
} from "@tanstack-table-aop/react";

function App() {
  // define tanstack data and columns

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <PluginEntryPoint>
      <HeadBoldIntervalModule />
      <BodyBoldModule />
      <BodyBGModule />
      <BodyUnderlineIntervalModule />
      <TableLayout table={table} />
    </PluginEntryPoint>
  );

  const TableLayout = <TData,>({
    table,
  }: React.PropsWithChildren<{ table: Table<TData> }>) => {
    return (
      <RenderTable>
        <RenderTableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <RenderTableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <RenderTableHeadCell key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </RenderTableHeadCell>
              ))}
            </RenderTableRow>
          ))}
        </RenderTableHead>
        <RenderTableBody>
          {table.getRowModel().rows.map((row) => (
            <RenderTableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <RenderTableDataCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </RenderTableDataCell>
              ))}
            </RenderTableRow>
          ))}
        </RenderTableBody>
        <RenderTableFoot>
          {table.getFooterGroups().map((footerGroup) => (
            <RenderTableRow key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <RenderTableHeadCell key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </RenderTableHeadCell>
              ))}
            </RenderTableRow>
          ))}
        </RenderTableFoot>
      </RenderTable>
    );
  };
}
```

## Example

See working example:  
https://github.com/CreeJee/tanstack-aop-renderer/tree/main/examples/react

---

## License

MIT
