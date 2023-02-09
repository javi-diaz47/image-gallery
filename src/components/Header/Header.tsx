import React from "react";
import { motion } from "framer-motion";

export const Header = (): JSX.Element => {
  return (
    <motion.header className="w-full text-5xl  md:text-8xl overflow-hidden max-w-3xl italic text-white  ">
      <h2 className=" w-fit font-medium">Intersection</h2>
      <div className="flex justify-between">
        <h2 className=" font-bold text-transparent-with-border">Observer</h2>
        <h2 className=" font-thin ">&</h2>
      </div>
      <div className="marquee">
        <div className="marquee__inner">
          <h2>pexel</h2>
          <h2>pexel</h2>
          <h2>pexel</h2>
          <h2>pexel</h2>
        </div>
      </div>
    </motion.header>
  );
};
