/* eslint-disable react-hooks/rules-of-hooks */

import { JSX, useEffect } from "react";
import type { RendererCompositionVariant } from "../context/RendererComposition";
import { useRendererCompositionSet } from "../context/RendererCompositionSet";

export type AOPTableRendererProps = {
  TanstackAopTableTable: JSX.IntrinsicElements["table"];
  TanstackAopTableTableCaption: JSX.IntrinsicElements["caption"];
  TanstackAopTableTableHead: JSX.IntrinsicElements["thead"];
  TanstackAopTableTableHeadRow: JSX.IntrinsicElements["th"];
  TanstackAopTableTableBody: JSX.IntrinsicElements["tbody"];
  TanstackAopTableTableRow: JSX.IntrinsicElements["tr"];
  TanstackAopTableTableCell: JSX.IntrinsicElements["td"];
  TanstackAopTableTableFoot: JSX.IntrinsicElements["tfoot"];
  TanstackAopTableTableColGroup: JSX.IntrinsicElements["colgroup"];
  TanstackAopTableTableCol: JSX.IntrinsicElements["col"];
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

export const TanstackAopTableTable = ({
  children,
  ...props
}: AOPTableRendererProps["TanstackAopTableTable"]) => {
  useMergeComposition("tableProps", props);
  return children;
};
export const TanstackAopTableTableCaption = ({
  children,
  ...props
}: AOPTableRendererProps["TanstackAopTableTableCaption"]) => {
  useMergeComposition("captionProps", props);
  return children;
};
export const TanstackAopTableTableHead = ({
  children,
  ...props
}: AOPTableRendererProps["TanstackAopTableTableHead"]) => {
  useMergeComposition("headProps", props);
  return children;
};
export const TanstackAopTableTableHeadRow = ({
  children,
  ...props
}: AOPTableRendererProps["TanstackAopTableTableHeadRow"]) => {
  useMergeComposition("headRowProps", props);
  return children;
};
export const TanstackAopTableTableBody = ({
  children,
  ...props
}: AOPTableRendererProps["TanstackAopTableTableBody"]) => {
  useMergeComposition("bodyProps", props);
  return children;
};
export const TanstackAopTableTableRow = ({
  children,
  ...props
}: AOPTableRendererProps["TanstackAopTableTableRow"]) => {
  useMergeComposition("rowProps", props);
  return children;
};
export const TanstackAopTableTableCell = ({
  children,
  ...props
}: AOPTableRendererProps["TanstackAopTableTableCell"]) => {
  useMergeComposition("cellProps", props);
  return children;
};
export const TanstackAopTableTableFoot = ({
  children,
  ...props
}: AOPTableRendererProps["TanstackAopTableTableFoot"]) => {
  useMergeComposition("footProps", props);
  return children;
};
export const TanstackAopTableTableColGroup = ({
  children,
  ...props
}: AOPTableRendererProps["TanstackAopTableTableColGroup"]) => {
  useMergeComposition("colGroupProps", props);
  return children;
};
export const TanstackAopTableTableCol = ({
  children,
  ...props
}: AOPTableRendererProps["TanstackAopTableTableCol"]) => {
  useMergeComposition("colProps", props);
  return children;
};
