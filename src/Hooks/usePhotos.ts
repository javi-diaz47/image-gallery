import { useEffect, useState } from "react";
import type { Photo } from "../types";

interface UsePhotos {
  photos: Photo[];
  error: boolean;
  loading: boolean;
  requestNextPhotos: () => Promise<void>;
}

export const usePhotos = (): UsePhotos => {
  const DEFAULT_QUERY = "https://api.pexels.com/v1/curated?page=1&per_page=8";

  const [photos, setPhotos] = useState<Photo[]>([]);
  const [nextPage, setNextPage] = useState(DEFAULT_QUERY);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const requestNextPhotos = async (): Promise<void> => {
    try {
      setLoading(true);
      const res = await fetch(nextPage, {
        headers: {
          Authorization: import.meta.env.VITE_PEXEL_API_KEY,
        },
      });

      if (!res.ok) {
        throw new Error(res.statusText);
      }

      const page = await res.json();
      setNextPage(page.next_page);
      setPhotos([...photos, ...page.photos]);

      if (error) setError(false);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void requestNextPhotos();
  }, []);

  return {
    photos,
    requestNextPhotos,
    error,
    loading,
  };
};
