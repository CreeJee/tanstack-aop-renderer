# FAQ - tanstack-aop-renderer

## Why should `TableLayout` always be the last child?

`TableLayout` is responsible for rendering the final `<table>` element.

Modules like `TanstackAopTableTableHead`, `TanstackAopTableTableBody`, or any custom modules should come first.  
Then `TableLayout` wraps them all together at the end.

> TL;DR:  
> "Layer first, Table last."

This ensures stable DOM structure and correct render order.

---

## Why not use `useRef`?

Because this library renders wrapper components like `TanstackAopTableTableRow` _before_ the real native elements (`<tr>`, `<td>`).

If you use `useRef`, your ref might catch the wrapper — not the actual element.

> Always use `refCallback`.  
> It guarantees the native element exists.

A helper hook like `useCompositionRef()` is planned for future release.

---

## Can I have multiple modules?

Yes — as many as you want.

Render order = your code order.

Example:

```tsx
<TanstackAopTableComposition>
  <BackgroundEffectModule />
  <BorderEffectModule />
  <TableLayout table={table} />
</TanstackAopTableComposition>
```

Rendered order → Background → Border → Layout

---

## Can I still use all TanStack Table features?

Of course.

This library only controls rendering.  
All core features (sorting, filtering, grouping, pagination, etc.) from TanStack Table work as-is.

---

## Does it support Drag & Drop, Sticky, or Virtualization?

It's designed to make those easy — but you build them.

Examples:

- Column Drag & Drop → Add DnD logic in a Head Module
- Sticky Columns → Handle via CSS or Layout adjustments
- Column Virtualization → Combine modules as needed

We plan to provide examples and guides for these patterns soon.
