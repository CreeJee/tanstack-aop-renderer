import { createSafeContext } from "../utils/createSafeContext";
import { AOPTableRendererProps } from "../renderer/AOPTableRenderer";

export type RendererCompositionVariant = {
  tableProps: AOPTableRendererProps["$TanstackAopTable"];
  captionProps: AOPTableRendererProps["$TanstackAopTableCaption"];
  headProps: AOPTableRendererProps["$TanstackAopTableHead"];
  headRowProps: AOPTableRendererProps["$TanstackAopTableHeadRow"];
  bodyProps: AOPTableRendererProps["$TanstackAopTableBody"];
  rowProps: AOPTableRendererProps["$TanstackAopTableRow"];
  cellProps: AOPTableRendererProps["$TanstackAopTableCell"];
  footProps: AOPTableRendererProps["$TanstackAopTableFoot"];
  colGroupProps: AOPTableRendererProps["$TanstackAopTableColGroup"];
  colProps: AOPTableRendererProps["$TanstackAopTableCol"];
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
