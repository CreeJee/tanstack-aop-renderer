import { createSafeContext } from "../utils/createSafeContext";
import { AOPTableRendererProps } from "../renderer/AOPTableRenderer";

export type RendererCompositionVariant = {
  tableProps: AOPTableRendererProps["TanstackAopTableTable"];
  captionProps: AOPTableRendererProps["TanstackAopTableTableCaption"];
  headProps: AOPTableRendererProps["TanstackAopTableTableHead"];
  headRowProps: AOPTableRendererProps["TanstackAopTableTableHeadRow"];
  bodyProps: AOPTableRendererProps["TanstackAopTableTableBody"];
  rowProps: AOPTableRendererProps["TanstackAopTableTableRow"];
  cellProps: AOPTableRendererProps["TanstackAopTableTableCell"];
  footProps: AOPTableRendererProps["TanstackAopTableTableFoot"];
  colGroupProps: AOPTableRendererProps["TanstackAopTableTableColGroup"];
  colProps: AOPTableRendererProps["TanstackAopTableTableCol"];
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
export const useAopTableCompositionProps = _useRenderComposition;
export const RenderCompositionProvider = _RendererComposition;
