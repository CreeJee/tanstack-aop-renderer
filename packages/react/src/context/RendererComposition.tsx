import { JSX } from "react";
import { createSafeContext } from "../utils/createSafeContext";

export type RendererCompositionVariant = {
  tableProps: JSX.IntrinsicElements["$TanstackAopTable"];
  captionProps: JSX.IntrinsicElements["$TanstackAopTableCaption"];
  headProps: JSX.IntrinsicElements["$TanstackAopTableHead"];
  headRowProps: JSX.IntrinsicElements["$TanstackAopTableHeadRow"];
  bodyProps: JSX.IntrinsicElements["$TanstackAopTableBody"];
  rowProps: JSX.IntrinsicElements["$TanstackAopTableRow"];
  cellProps: JSX.IntrinsicElements["$TanstackAopTableCell"];
  footProps: JSX.IntrinsicElements["$TanstackAopTableFoot"];
  colGroupProps: JSX.IntrinsicElements["$TanstackAopTableColGroup"];
  colProps: JSX.IntrinsicElements["$TanstackAopTableCol"];
};

export const RendererCompositionDefaultValue: RendererCompositionVariant = {
  tableProps: {},
  captionProps: {},
  headProps: {},
  headRowProps: {},
  bodyProps: {},
  rowProps: {},
  cellProps: {},
  footProps: {},
  colGroupProps: {},
  colProps: {},
};
export type RendererCompositionContext = RendererCompositionVariant;
const [_RendererComposition, _useRenderComposition] =
  createSafeContext<RendererCompositionContext>("@aop-tanstack-table");

// eslint-disable-next-line react-refresh/only-export-components
export const useCompositionProps = _useRenderComposition;
export const RenderCompositionProvider = _RendererComposition;
