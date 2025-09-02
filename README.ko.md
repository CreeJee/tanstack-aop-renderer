# tanstack-aop-renderer

> TanStack Table을 위한 AOP 기반 테이블 렌더러  
> 수평 레이아웃, 관심사 분리, 모듈화 지향

## 소개

`tanstack-aop-renderer` 는 [TanStack Table](https://tanstack.com/table)을 사용할 때,  
복잡해지기 쉬운 테이블 UI 렌더링 구조를 AOP (Aspect Oriented Programming) 방식으로 나눠서 관리할 수 있게 도와주는 라이브러리입니다.

### 어떤 특징이 있나요?

- 수평(Column 중심) 렌더링 방식
- 관심사별 모듈화
- 복잡한 테이블 UI 에 강한 확장성
- 특히 이런 경우에 유용합니다:
  - 컬럼 Drag & Drop
  - Sticky Header / Column
  - Column 별 커스텀 렌더링
  - 반응형 Column 구성
  - Column Virtualization 적용

---

## 왜 만들었나요?

TanStack Table 은 본질적으로 Headless 구조라 렌더링을 직접 구현해야 하는데,  
여기에 기능이 많이 추가되면 어느새 렌더러 하나가 너무 많은 책임을 떠안게 됩니다.

> _"이런 로직들... 따로 나눠서 관리하면 더 좋지 않을까?"_

`tanstack-aop-renderer` 는 바로 이런 생각에서 출발했습니다.

`TanstackAopTableComposition` 이라는 레이어를 기준으로  
Header, Body, Custom Module 들을 독립적으로 나눠서 구성하고,  
최종적으로 `TableLayout` 이 전체를 그려주는 구조입니다.

---

## 설치

```bash
pnpm add tanstack-aop-renderer
```

---

## 기본 사용법

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
  // 이하 생략

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <PluginEntryPoint>
      <PluginTableBody className="bg-green" />
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

TanStack Table 의 `useReactTable()` 은 그대로 사용하면 됩니다.

---

## 예제 코드

작동 예시는 여기에서 확인할 수 있어요:

https://github.com/CreeJee/tanstack-aop-renderer/tree/main/examples/react

---

## 라이선스

MIT
