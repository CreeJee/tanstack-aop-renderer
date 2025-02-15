/* eslint-disable react-hooks/rules-of-hooks */
import { JSX, useEffect } from "react";
import type { RendererCompositionVariant } from "../context/RendererComposition";
import { useRendererCompositionSet } from "../context/RendererCompositionSet";
import { mergeProps } from "@react-aria/utils";

const useMergeComposition = <Type extends keyof RendererCompositionVariant>(
  type: Type,
  props: RendererCompositionVariant[Type]
) => {
  const setState = useRendererCompositionSet();
  useEffect(() => {
    setState((variant) => ({
      ...variant,
      [type]: mergeProps(variant.tableProps, props),
    }));
  }, [props, setState, type]);
};

export const $TanstackAopTable = ({
  children,
  ...props
}: JSX.IntrinsicElements["$TanstackAopTable"]) => {
  useMergeComposition("tableProps", props);
  return children;
};
export const $TanstackAopTableCaption = ({
  children,
  ...props
}: JSX.IntrinsicElements["$TanstackAopTableCaption"]) => {
  useMergeComposition("captionProps", props);
  return children;
};
export const $TanstackAopTableHead = ({
  children,
  ...props
}: JSX.IntrinsicElements["$TanstackAopTableHead"]) => {
  useMergeComposition("headProps", props);
  return children;
};
export const $TanstackAopTableHeadRow = ({
  children,
  ...props
}: JSX.IntrinsicElements["$TanstackAopTableHeadRow"]) => {
  useMergeComposition("headRowProps", props);
  return children;
};
export const $TanstackAopTableBody = ({
  children,
  ...props
}: JSX.IntrinsicElements["$TanstackAopTableBody"]) => {
  useMergeComposition("bodyProps", props);
  return children;
};
export const $TanstackAopTableRow = ({
  children,
  ...props
}: JSX.IntrinsicElements["$TanstackAopTableRow"]) => {
  useMergeComposition("rowProps", props);
  return children;
};
export const $TanstackAopTableCell = ({
  children,
  ...props
}: JSX.IntrinsicElements["$TanstackAopTableCell"]) => {
  useMergeComposition("cellProps", props);
  return children;
};
export const $TanstackAopTableFoot = ({
  children,
  ...props
}: JSX.IntrinsicElements["$TanstackAopTableFoot"]) => {
  useMergeComposition("footProps", props);
  return children;
};
export const $TanstackAopTableColGroup = ({
  children,
  ...props
}: JSX.IntrinsicElements["$TanstackAopTableColGroup"]) => {
  useMergeComposition("colGroupProps", props);
  return children;
};
export const $TanstackAopTableCol = ({
  children,
  ...props
}: JSX.IntrinsicElements["$TanstackAopTableCol"]) => {
  useMergeComposition("colProps", props);
  return children;
};
