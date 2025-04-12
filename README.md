# tanstack-aop-renderer

> Aspect-Oriented Renderer for TanStack Table  
> Modular, Horizontal Table Rendering Architecture

>

## Introduction

`tanstack-aop-renderer` allows developers to break down complex table UIs into composable, independent rendering modules — especially useful when working with [TanStack Table](https://tanstack.com/table).

This library focuses on:

- Horizontal (column-oriented) rendering
- Separating rendering concerns
- Better scalability for complex features like:
  - Column Drag & Drop
  - Sticky Columns / Headers
  - Custom Background / Effects per Column
  - Responsive or Virtualized Columns

## Motivation

Normally, adding features like column drag or sticky behavior requires placing all event handlers & logic inside a single renderer. This quickly becomes hard to maintain.

This project introduces a new idea:

> _"What if table rendering could follow AOP (Aspect Oriented Programming) ideas?"_

Renderers become like isolated "aspects", and `TableComposition` acts as the weaving layer.

---

## Installation

```bash
pnpm add tanstack-aop-renderer
```

---

## Basic Usage

```tsx
<TableComposition>
  <$TanstackAopTableHead />
  <$TanstackAopTableBody />
  {/* Optional: Add your own modules */}
</TableComposition>
```

The usual `useReactTable()` from TanStack Table is used as-is.

---

## Example

See working example:  
https://github.com/CreeJee/tanstack-aop-renderer/tree/main/examples/react

---

## License

MIT
