import React from "react";

export const Header = (): JSX.Element => {
  return (
    <header className="max-w-4xl italic text-white text-9xl">
      <h2 className=" w-fit font-medium">Intersection</h2>
      <div className="flex justify-between">
        <h2 className=" font-bold text-transparent-with-border">Observer</h2>
        <h2 className=" font-thin ">&</h2>
      </div>
      <div className="capitalize marquee bg-white text-black">
        <div className="flex marquee__inner">
          <h2>pexel</h2>
          <h2>pexel</h2>
          <h2>pexel</h2>
          <h2>pexel</h2>
        </div>
      </div>
    </header>
  );
};
