import React from "react";
import { useInfiniteScroll } from "../../Hooks/useInfiniteScroll";
import type { State } from "../../Hooks/useInfiniteScroll";

export function InfiniteScroll<S>(props: State<S>): JSX.Element {
  const { items, lastItemRef } = useInfiniteScroll<S>(props);

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
