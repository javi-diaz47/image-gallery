import React from "react";
import { requestPexelPage } from "../../utils/requestPexelPage";
import { useInfiniteScroll } from "../../Hooks/useInfiniteScroll";
import type { Photo } from "../../types";

export const PexelInfiniteScroll = (): JSX.Element => {
  const { items, lastItemRef } = useInfiniteScroll<Photo>({
    req: requestPexelPage,
  });

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
