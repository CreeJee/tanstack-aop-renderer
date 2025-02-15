import { JSX, PropsWithChildren } from "react";
import { createSafeContext } from "./utils/createSafeContext";
import { mergeProps } from "@react-aria/utils";

type RendererComposerContext = {
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

const defaultContextValue = {
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
const [RendererComposerInner, _useRenderComposer] =
  createSafeContext<RendererComposerContext>("@aop-tanstack-table");

// eslint-disable-next-line react-refresh/only-export-components
export const useRenderComposer = _useRenderComposer;
export const RendererComposer = ({
  children,
  ...props
}: PropsWithChildren<Partial<RendererComposerContext>>) => {
  return (
    <RendererComposerInner value={mergeProps(defaultContextValue, props)}>
      {children}
    </RendererComposerInner>
  );
};
