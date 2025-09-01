import React from "react";
import { usePluginId, usePluginRenderQueue } from "../plugin/Context";
import type { PluginTypes, PluginResultProps } from "../plugin/Context";
import { uniq } from "es-toolkit";

const uniqueClassName = (className1?: string, className2?: string) => {
  return [
    ...uniq([
      ...(className1?.split(" ") ?? []),
      ...(className2?.split(" ") ?? []),
    ]),
  ].join(" ");
};

const useRenderProps = <Type extends PluginTypes>(
  type: Type,
  props: PluginResultProps<Type>
) => {
  const pluginId = usePluginId();
  const queue = usePluginRenderQueue(type);
  if (queue.length === 0) return props;
  if (queue.length > 0) {
    console.log(queue);
  }
  return (
    queue.reduce((acc, curr) => {
      return {
        ...acc,
        ...curr.props,
        className:
          pluginId !== curr.pluginId
            ? uniqueClassName(acc.className, curr.props.className)
            : curr.props.className,
      } as PluginResultProps<Type>;
    }, props) ?? props
  );
};

export const RenderTable = ({
  children,
  ...props
}: PluginResultProps<"table">) => {
  const mergedProps = useRenderProps("table", props);
  return <table {...mergedProps}>{children}</table>;
};
export const RenderTableCaption = ({
  children,
  ...props
}: PluginResultProps<"caption">) => {
  const mergedProps = useRenderProps("caption", props);
  return <caption {...mergedProps}>{children}</caption>;
};
export const RenderTableHead = ({
  children,
  ...props
}: PluginResultProps<"head">) => {
  const mergedProps = useRenderProps("head", props);
  return <thead {...mergedProps}>{children}</thead>;
};
export const RenderTableHeadCell = ({
  children,
  ...props
}: PluginResultProps<"headCell">) => {
  const mergedProps = useRenderProps("headCell", props);
  return <th {...mergedProps}>{children}</th>;
};
export const RenderTableBody = ({
  children,
  ...props
}: PluginResultProps<"body">) => {
  const mergedProps = useRenderProps("body", props);
  return <tbody {...mergedProps}>{children}</tbody>;
};
export const RenderTableRow = ({
  children,
  ...props
}: PluginResultProps<"row">) => {
  const mergedProps = useRenderProps("row", props);
  return <tr {...mergedProps}>{children}</tr>;
};
export const RenderTableDataCell = ({
  children,
  ...props
}: PluginResultProps<"dataCell">) => {
  const mergedProps = useRenderProps("dataCell", props);
  return <td {...mergedProps}>{children}</td>;
};
export const RenderTableFoot = ({
  children,
  ...props
}: PluginResultProps<"foot">) => {
  const mergedProps = useRenderProps("foot", props);
  return <tfoot {...mergedProps}>{children}</tfoot>;
};
export const RenderTableColGroup = ({
  children,
  ...props
}: PluginResultProps<"colGroup">) => {
  const mergedProps = useRenderProps("colGroup", props);
  return <colgroup {...mergedProps}>{children}</colgroup>;
};
export const RenderTableCol = ({
  children,
  ...props
}: PluginResultProps<"col">) => {
  const mergedProps = useRenderProps("col", props);
  return <col {...mergedProps}>{children}</col>;
};
