import React from "react";
import { Header } from "./components/Header/Header";
import { InfiniteScroll } from "./components/InfiniteScroll/InfiniteScroll";

export const App = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center py-24 gap-32">
      <Header />
      <InfiniteScroll
        state={[0, 0, 0]}
        dispatch={(prev: number[]) => [...prev, ...prev]}
      />
    </div>
  );
};
