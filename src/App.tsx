import React from "react";
import { Header } from "./components/Header/Header";
import { PexelInfiniteScroll } from "./components/PexelInfiniteScroll/PexelInfiniteScroll";

export const App = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center py-24 gap-32">
      <Header />
      <PexelInfiniteScroll />
    </div>
  );
};
