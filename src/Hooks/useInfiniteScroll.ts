import { useEffect, useState } from "react";
import { useIntersectionObserver } from "./useIntersectionObserver";
interface ReturnType<S> {
  lastItemRef: React.MutableRefObject<HTMLDivElement | null>;
  items: S[];
}

export const useInfiniteScroll = <S>({
  req,
}: {
  req: () => Promise<S[]>;
}): ReturnType<S> => {
  const [items, setItems] = useState<S[]>([]);

  const dispatchUpdate = (): void => {
    void req().then((newItems) => {
      setItems([...items, ...newItems]);
    });
  };

  const { lastRef: lastItemRef } = useIntersectionObserver({
    dispatch: dispatchUpdate,
  });

  useEffect(() => {
    dispatchUpdate();
  }, []);

  return {
    lastItemRef,
    items,
  };
};
