import { useEffect, useRef, useState } from "react";

export interface State<S> {
  update: () => Promise<S[]>;
}

interface ReturnType<S> {
  lastItemRef: React.MutableRefObject<HTMLDivElement | null>;
  items: S[];
}

export const useInfiniteScroll = <S>({ update }: State<S>): ReturnType<S> => {
  const [items, setItems] = useState<S[]>([]);

  const lastItemRef = useRef<HTMLDivElement | null>(null);

  const observer = useRef<IntersectionObserver>();

  const dispatchUpdate = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    update().then((newItems) => {
      setItems([...items, ...newItems]);
    });
  };

  useEffect(() => {
    dispatchUpdate();
  }, []);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && lastItemRef.current !== null) {
        dispatchUpdate();
        console.log("done");
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
