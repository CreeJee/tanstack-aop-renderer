# FAQ - tanstack-aop-renderer

## 왜 `TableLayout` 은 항상 마지막에 넣어야 하나요?

`TableLayout` 은 `<table>` 태그를 최종적으로 그려주는 컴포넌트입니다.

Header, Body, Custom Module 같은 구성 요소들이 먼저 배치되고,  
마지막에 Layout 이 그걸 감싸면서 완성됩니다.

> 한 줄 요약  
> "레이어 먼저, 테이블은 마지막"

렌더 순서가 꼬이면 DOM 구조나 ref 연결 문제가 생길 수 있어요.

---

## 왜 `useRef` 를 쓰면 안 되나요?

이 라이브러리는 내부에서 `TanstackAopTableTableRow` 같은 Wrapper 컴포넌트가  
먼저 랜더링되고, `<tr>` / `<td>` 같은 진짜 DOM은 그 다음에 나옵니다.

그래서 `useRef` 로 ref를 잡으면 Wrapper 만 잡히거나 타이밍 이슈가 생깁니다.

> 정답은 `refCallback`  
> → 진짜 DOM이 생긴 후 호출되기 때문에 안전합니다.

나중에 `useCompositionRef()` 같은 Hook 을 제공할 예정입니다.

---

## Module 을 여러 개 넣어도 되나요?

네, 몇 개든 가능합니다.

렌더 순서 = 코드 순서 그대로 동작합니다.

예시)

```tsx
<TanstackAopTableComposition>
  <BackgroundEffectModule />
  <BorderEffectModule />
  <TableLayout table={table} />
</TanstackAopTableComposition>
```

위 코드는  
Background → Border → Layout 순서로 렌더링 됩니다.

---

## TanStack Table 기능은 그대로 쓸 수 있나요?

네, 전부 그대로 사용합니다.

이 라이브러리는 렌더링만 다룰 뿐,  
데이터 처리나 상태관리는 전부 TanStack Table 에 맡깁니다.

---

## Drag & Drop, Sticky, Virtualization 도 되나요?

네, 직접 구성하면 됩니다.

라이브러리 자체에서 기능을 제공하진 않지만  
쉽게 구현할 수 있도록 구조를 열어놨습니다.

예시:

- Drag & Drop → Head Module 에 DnD 라이브러리 붙이기
- Sticky Column → CSS 또는 Layout 조정
- Virtual Column → Module 조합으로 처리

추후 Examples & Guide 를 제공할 예정입니다.
