import type { PluginOption, PluginResultProps } from "./Context";
import { useRegisterPlugin } from "./Context";

const useMergeComposition = <Type extends PluginOption>(option: Type) => {
  useRegisterPlugin(option);
};

export const PluginTable = ({
  children,
  ...props
}: PluginResultProps<"table">) => {
  useMergeComposition({ type: "table", props });
  return children;
};
export const PluginTableCaption = ({
  children,
  ...props
}: PluginResultProps<"caption">) => {
  useMergeComposition({ type: "caption", props });
  return children;
};
export const PluginTableHead = ({
  children,
  ...props
}: PluginResultProps<"head">) => {
  useMergeComposition({ type: "head", props });
  return children;
};
export const PluginTableHeadCell = ({
  children,
  ...props
}: PluginResultProps<"headCell">) => {
  useMergeComposition({ type: "headCell", props });
  return children;
};
export const PluginTableBody = ({
  children,
  ...props
}: PluginResultProps<"body">) => {
  useMergeComposition({ type: "body", props });
  return children;
};
export const PluginTableRow = ({
  children,
  ...props
}: PluginResultProps<"row">) => {
  useMergeComposition({ type: "row", props });
  return children;
};
export const PluginTableDataCell = ({
  children,
  ...props
}: PluginResultProps<"dataCell">) => {
  useMergeComposition({ type: "dataCell", props });
  return children;
};
export const PluginTableFoot = ({
  children,
  ...props
}: PluginResultProps<"foot">) => {
  useMergeComposition({ type: "foot", props });
  return children;
};
export const PluginTableColGroup = ({
  children,
  ...props
}: PluginResultProps<"colGroup">) => {
  useMergeComposition({ type: "colGroup", props });
  return children;
};
export const PluginTableCol = ({
  children,
  ...props
}: PluginResultProps<"col">) => {
  useMergeComposition({ type: "col", props });
  return children;
};
