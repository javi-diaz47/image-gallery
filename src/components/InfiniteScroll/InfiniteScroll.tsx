import React, { useEffect, useRef, useState } from "react";

interface State<S> {
  state: S[];
  dispatch: (prev: S[]) => S[];
}

export function InfiniteScroll<S>({ state, dispatch }: State<S>): JSX.Element {
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
      console.log("observing");
    }

    return () => {
      observer.current?.disconnect();
    };
  });

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center py-24 gap-32">
      <li className="flex flex-col gap-24">
        {items.map((_, i) => {
          if (i + 1 === items.length) {
            return (
              <div
                key={i}
                ref={lastItemRef}
                className="rounded-xl w-80 h-80 grid place-items-center text-6xl font-bold text-white bg-rose-500"
              >
                {i + 1} Me
              </div>
            );
          }

          return (
            <div
              key={i}
              className="rounded-xl w-80 h-80 grid place-items-center text-6xl font-bold text-white bg-rose-500"
            >
              {i + 1}
            </div>
          );
        })}
      </li>
    </div>
  );
}
