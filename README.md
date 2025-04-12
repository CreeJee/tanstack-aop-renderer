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
<TanstackAopTableComposition>
  <TanstackAopTableTableHead />
  <TanstackAopTableTableBody />
  {/* Optional: Add your custom modules */}
</TanstackAopTableComposition>
```

The usual `useReactTable()` from TanStack Table is used as-is.

---

## Example

See working example:  
https://github.com/CreeJee/tanstack-aop-renderer/tree/main/examples/react

---

## License

MIT
