import React from "react";
import { db } from "./db";
import { useInfiniteScroll } from "../../Hooks/useInfiniteScroll";
import type { Photo } from "../../types";

export const PexelInfiniteScroll = (): JSX.Element => {
  const update = async (): Promise<Photo[]> => {
    // const res = await fetch(query, {
    //   headers: {
    //     Authorization: import.meta.env.VITE_PEXEL_API_KEY,
    //   },
    // });
    // return await res.json();
    // eslint-disable-next-line promise/param-names
    return await new Promise((res, rej) => {
      res(db.photos);
    });
  };

  const { items, lastItemRef } = useInfiniteScroll<Photo>({ update });

  return (
    <>
      <li className="flex flex-col gap-32">
        {items.map(({ src: { medium } }, i) => {
          const src = medium;
          if (i + 1 === items.length) {
            return (
              <figure
                key={i}
                ref={lastItemRef}
                className="rounded-xl grid place-items-center text-6xl font-bold "
              >
                <img src={src} />
              </figure>
            );
          }

          return (
            <figure key={i} className="rounded-xl grid place-items-center ">
              <img src={src} />
            </figure>
          );
        })}
      </li>
    </>
  );
};
