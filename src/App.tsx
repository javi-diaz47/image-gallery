import React from "react";
import { Header } from "./components/Header/Header";

export const App = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center py-24">
      <Header />
    </div>
  );
};
