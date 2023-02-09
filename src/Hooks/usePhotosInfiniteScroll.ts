import { useIntersectionObserver } from "./useIntersectionObserver";
import { usePhotos } from "./usePhotos";
import type { Photo } from "../types";

interface UsePhotosInfiniteScroll {
  photos: Photo[];
  error: boolean;
  loading: boolean;
  lastRef: React.MutableRefObject<HTMLDivElement | null>;
}

export const usePhotosInfiniteScroll = (): UsePhotosInfiniteScroll => {
  const { photos, requestNextPhotos, error, loading } = usePhotos();

  const { lastRef } = useIntersectionObserver({
    dispatch: requestNextPhotos,
  });

  return {
    photos,
    error,
    loading,
    lastRef,
  };
};
