import React from "react";
import { usePhotosInfiniteScroll } from "../../Hooks/usePhotosInfiniteScroll";

export const InfiniteGallery = (): JSX.Element => {
  const { photos, lastRef } = usePhotosInfiniteScroll();
  return (
    <>
      <li className="flex flex-col gap-32">
        {photos.map(({ src: { large } }, i) => {
          const src = large;
          if (i + 1 === photos.length) {
            return (
              <figure
                key={i}
                ref={lastRef}
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
