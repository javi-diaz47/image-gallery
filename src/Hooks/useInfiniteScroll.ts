import { useEffect, useRef, useState } from "react";

export interface State<S> {
  state: S[];
  dispatch: (prev: S[]) => S[];
}

interface ReturnType<S> {
  lastItemRef: React.MutableRefObject<HTMLDivElement | null>;
  items: S[];
}

export const useInfiniteScroll = <S>({
  state,
  dispatch,
}: State<S>): ReturnType<S> => {
  const [items, setItems] = useState<S[]>(state);

  const lastItemRef = useRef<HTMLDivElement | null>(null);

  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && lastItemRef.current !== null) {
        setItems(dispatch);
        observer.current?.unobserve(lastItemRef.current);
      }
    });

    if (lastItemRef.current !== null) {
      observer.current.observe(lastItemRef.current);
    }

    return () => {
      observer.current?.disconnect();
    };
  });

  return {
    lastItemRef,
    items,
  };
};
