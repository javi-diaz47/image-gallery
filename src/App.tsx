import React, { useEffect, useRef, useState } from "react";
import { Header } from "./components/Header/Header";

export const App = (): JSX.Element => {
  const [boxes, setBoxes] = useState<number[]>([0, 0]);

  const lastRef = useRef<HTMLDivElement | null>(null);

  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && lastRef.current !== null) {
        setBoxes([...boxes, 0]);
        observer.current?.unobserve(lastRef.current);
      }
    });

    if (lastRef.current !== null) {
      observer.current.observe(lastRef.current);
      console.log("observing");
    }

    return () => {
      observer.current?.disconnect();
    };
  });

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center py-24 gap-32">
      <Header />
      <li className="flex flex-col gap-24">
        {boxes.map((_, i) => {
          if (i + 1 === boxes.length) {
            return (
              <div
                key={i}
                ref={lastRef}
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
};
