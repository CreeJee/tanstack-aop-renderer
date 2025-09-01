import { createSafeContext } from "../utils/createSafeContext";
import {
  Dispatch,
  JSX,
  SetStateAction,
  useEffect,
  useId,
  useMemo,
} from "react";
import { isEqual, omit, uniqBy } from "es-toolkit";

type WithDefaultPluginOptions<T> = T & {
  pluginId: string;
};

export type PluginOption =
  | {
      type: "table";
      props: JSX.IntrinsicElements["table"];
    }
  | {
      type: "caption";
      props: JSX.IntrinsicElements["caption"];
    }
  | {
      type: "head";
      props: JSX.IntrinsicElements["thead"];
    }
  | {
      type: "headCell";
      props: JSX.IntrinsicElements["th"];
    }
  | {
      type: "body";
      props: JSX.IntrinsicElements["tbody"];
    }
  | {
      type: "row";
      props: JSX.IntrinsicElements["tr"];
    }
  | {
      type: "dataCell";
      props: JSX.IntrinsicElements["td"];
    }
  | {
      type: "foot";
      props: JSX.IntrinsicElements["tfoot"];
    }
  | {
      type: "colGroup";
      props: JSX.IntrinsicElements["colgroup"];
    }
  | {
      type: "col";
      props: JSX.IntrinsicElements["col"];
    };
export type PluginTypes = PluginOption["type"];

export type PluginItem = WithDefaultPluginOptions<PluginOption>;

export type PickPluginOption<Type extends PluginTypes> = Extract<
  PluginOption,
  { type: Type }
>;

export type PluginResultProps<Type extends PluginTypes> =
  PickPluginOption<Type>["props"];

export type PluginContext = {
  value: PluginItem[];
  setValue: Dispatch<SetStateAction<PluginItem[]>>;
};
const [_Plugin, usePlugin] = createSafeContext<PluginContext>(
  "@aop-tanstack-table"
);
export const usePluginId = useId;

export const usePluginRenderQueue = <Type extends PluginTypes>(type: Type) => {
  const { value } = usePlugin();
  return useMemo(() => {
    return value.filter(
      (option): option is Extract<PluginItem, { type: Type }> =>
        option.type === type
    );
  }, [value, type]);
};

export const useRegisterPlugin = (pluginOption: PluginOption) => {
  const { setValue } = usePlugin();
  const pluginId = usePluginId();
  //등록 절차,
  useEffect(() => {
    setValue((prev) => {
      const found = prev.find((option) => option.pluginId === pluginId);
      if (found && isEqual(found.props, pluginOption.props)) {
        return prev;
      }
      return uniqBy(
        [
          ...prev,
          {
            ...pluginOption,
            pluginId,
          },
        ],
        (option) => option.pluginId
      );
    });

    return () => {
      setValue((prev) => prev.filter((option) => option.pluginId !== pluginId));
    };
  }, []);
  // 수정절차
  useEffect(() => {
    setValue((prev) => {
      const found = prev.find((option) => option.pluginId === pluginId);
      if (found) {
        const originalProps = omit(found.props, ["ref", "children"]);
        const newProps = omit(pluginOption.props, ["ref", "children"]);
        if (isEqual(originalProps, newProps)) {
          return prev;
        }
        return [
          ...prev.filter((option) => option.pluginId !== pluginId),
          {
            ...found,
            ...pluginOption,
            props: {
              ...found.props,
              ...pluginOption.props,
            },
          } as PluginItem,
        ];
      }
      return uniqBy(
        [
          ...prev,
          {
            ...pluginOption,
            pluginId,
          },
        ],
        (option) => option.pluginId
      );
    });
  }, [pluginOption]);
};
export const PluginProvider = _Plugin;
