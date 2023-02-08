import { useEffect, useRef } from "react";

interface ReturnType {
  lastRef: React.MutableRefObject<HTMLDivElement | null>;
}

export const useIntersectionObserver = ({
  dispatch,
}: {
  dispatch: () => void;
}): ReturnType => {
  const lastRef = useRef<HTMLDivElement | null>(null);

  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && lastRef.current !== null) {
        dispatch();
        console.log("done");
        observer.current?.unobserve(lastRef.current);
      }
    });

    if (lastRef.current !== null) {
      observer.current.observe(lastRef.current);
    }

    return () => {
      observer.current?.disconnect();
    };
  });

  return {
    lastRef,
  };
};
