import { Dispatch, PropsWithChildren, SetStateAction, useRef } from "react";
import { createSafeContext } from "../utils/createSafeContext";
import { RendererCompositionVariant } from "./RendererComposition";
import { debounce } from "es-toolkit";

type RendererCompositionSetContextValue = Dispatch<
  SetStateAction<RendererCompositionVariant>
>;
const [_RendererCompositionSetProvider, _useRendererCompositionSet] =
  createSafeContext<RendererCompositionSetContextValue>(
    "RendererCompositionSet"
  );

export const RendererCompositionSetProvider = ({
  children,
  value: setState,
}: PropsWithChildren<{ value: RendererCompositionSetContextValue }>) => {
  const updateQueueRef = useRef<SetStateAction<RendererCompositionVariant>[]>(
    []
  );
  const debouncedSetterRef = useRef(
    debounce(() => {
      if (updateQueueRef.current.length > 0) {
        setState((prevState) => {
          let newState = prevState;
          updateQueueRef.current.forEach((updateFn) => {
            newState =
              typeof updateFn === "function" ? updateFn(newState) : updateFn;
          });
          return newState;
        });
      }
    }, 0)
  );
  const enqueueUpdate = (
    valueOrSetter: SetStateAction<RendererCompositionVariant>
  ) => {
    updateQueueRef.current.push(valueOrSetter);
    debouncedSetterRef.current();
  };

  return (
    <_RendererCompositionSetProvider value={enqueueUpdate}>
      {children}
    </_RendererCompositionSetProvider>
  );
};
export const useRendererCompositionSet = _useRendererCompositionSet;
