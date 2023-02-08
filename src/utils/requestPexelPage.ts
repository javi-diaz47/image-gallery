import { db } from "../components/PexelInfiniteScroll/db";
import type { Photo } from "../types";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const requestPexelPage = async (): Promise<Photo[]> => {
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
