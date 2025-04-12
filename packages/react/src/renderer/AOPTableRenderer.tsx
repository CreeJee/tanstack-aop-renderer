/* eslint-disable react-hooks/rules-of-hooks */

import { JSX, useEffect } from "react";
import type { RendererCompositionVariant } from "../context/RendererComposition";
import { useRendererCompositionSet } from "../context/RendererCompositionSet";

export type AOPTableRendererProps = {
  $TanstackAopTable: JSX.IntrinsicElements["table"];
  $TanstackAopTableCaption: JSX.IntrinsicElements["caption"];
  $TanstackAopTableHead: JSX.IntrinsicElements["thead"];
  $TanstackAopTableHeadRow: JSX.IntrinsicElements["th"];
  $TanstackAopTableBody: JSX.IntrinsicElements["tbody"];
  $TanstackAopTableRow: JSX.IntrinsicElements["tr"];
  $TanstackAopTableCell: JSX.IntrinsicElements["td"];
  $TanstackAopTableFoot: JSX.IntrinsicElements["tfoot"];
  $TanstackAopTableColGroup: JSX.IntrinsicElements["colgroup"];
  $TanstackAopTableCol: JSX.IntrinsicElements["col"];
};
const useMergeComposition = <Type extends keyof RendererCompositionVariant>(
  type: Type,
  props: RendererCompositionVariant[Type]
) => {
  const applyEffect = useRendererCompositionSet();
  useEffect(() => {
    return applyEffect((variant) => {
      return {
        ...variant,
        [type]: {
          ...variant[type],
          ...props,
        },
      };
    });
  }, [props, applyEffect, type]);
};

export const $TanstackAopTable = ({
  children,
  ...props
}: AOPTableRendererProps["$TanstackAopTable"]) => {
  useMergeComposition("tableProps", props);
  return children;
};
export const $TanstackAopTableCaption = ({
  children,
  ...props
}: AOPTableRendererProps["$TanstackAopTableCaption"]) => {
  useMergeComposition("captionProps", props);
  return children;
};
export const $TanstackAopTableHead = ({
  children,
  ...props
}: AOPTableRendererProps["$TanstackAopTableHead"]) => {
  useMergeComposition("headProps", props);
  return children;
};
export const $TanstackAopTableHeadRow = ({
  children,
  ...props
}: AOPTableRendererProps["$TanstackAopTableHeadRow"]) => {
  useMergeComposition("headRowProps", props);
  return children;
};
export const $TanstackAopTableBody = ({
  children,
  ...props
}: AOPTableRendererProps["$TanstackAopTableBody"]) => {
  useMergeComposition("bodyProps", props);
  return children;
};
export const $TanstackAopTableRow = ({
  children,
  ...props
}: AOPTableRendererProps["$TanstackAopTableRow"]) => {
  useMergeComposition("rowProps", props);
  return children;
};
export const $TanstackAopTableCell = ({
  children,
  ...props
}: AOPTableRendererProps["$TanstackAopTableCell"]) => {
  useMergeComposition("cellProps", props);
  return children;
};
export const $TanstackAopTableFoot = ({
  children,
  ...props
}: AOPTableRendererProps["$TanstackAopTableFoot"]) => {
  useMergeComposition("footProps", props);
  return children;
};
export const $TanstackAopTableColGroup = ({
  children,
  ...props
}: AOPTableRendererProps["$TanstackAopTableColGroup"]) => {
  useMergeComposition("colGroupProps", props);
  return children;
};
export const $TanstackAopTableCol = ({
  children,
  ...props
}: AOPTableRendererProps["$TanstackAopTableCol"]) => {
  useMergeComposition("colProps", props);
  return children;
};
