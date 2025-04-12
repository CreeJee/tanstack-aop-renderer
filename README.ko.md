# tanstack-aop-renderer

> TanStack Table 을 위한 AOP 기반 테이블 랜더러  
> 수평 레이아웃, 관심사 분리, 모듈화 지원

## 소개

`tanstack-aop-renderer` 는 복잡한 테이블 UI를 관리하기 위해 AOP (Aspect Oriented Programming) 개념을 테이블 렌더링에 도입한 라이브러리입니다.

### 주요 특징

- 수평 (Column 기반) 렌더링
- 관심사 별 모듈 분리
- 확장성 높은 구조
- 이런 케이스에 강력:
  - 컬럼 Drag & Drop
  - Sticky Header / Column
  - Column 별 커스텀 효과
  - 반응형 Column 구성
  - Column Virtualization 대응

---

## 왜 만들었나?

TanStack Table 을 이용한 테이블 개발에서 기능이 많아질수록 renderer 하나가 너무 많은 책임을 떠안게 됩니다.

> _"이 로직들... 파일 나눠서 관리하고 싶지 않아?"_

이 고민에서 시작된게 `tanstack-aop-renderer` 입니다.

`TableComposition` 이라는 레이어를 두고  
Header, Body, Custom Module 을 관심사 별로 독립 시켜서 합쳐주는 방식입니다.

---

## 설치

```bash
pnpm add tanstack-aop-renderer
```

---

## 사용 방법

```tsx
<TableComposition>
  <$TanstackAopTableHead />
  <$TanstackAopTableBody />
  {/* 원하면 custom module 도 추가 가능 */}
</TableComposition>
```

TanStack Table 의 `useReactTable()` 는 그대로 사용합니다.

---

## 예제 코드

https://github.com/CreeJee/tanstack-aop-renderer/tree/main/examples/react

---

## 라이센스

MIT
