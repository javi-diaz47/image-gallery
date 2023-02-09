import React from "react";
import { Header } from "./components/Header/Header";
import { InfiniteGallery } from "./components/InfiniteGallery/InfiniteGallery";

export const App = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center py-24 gap-32">
      <Header />
      <InfiniteGallery />
    </div>
  );
};
