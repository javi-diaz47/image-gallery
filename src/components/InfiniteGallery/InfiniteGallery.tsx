import React from "react";
import { motion } from "framer-motion";
import { usePhotosInfiniteScroll } from "../../Hooks/usePhotosInfiniteScroll";
import { figureReveal, imageReveal } from "../../assets/animation/photoReveal";

export const InfiniteGallery = (): JSX.Element => {
  const { photos, lastRef } = usePhotosInfiniteScroll();
  return (
    <>
      <motion.li className="grid gap-24">
        {photos.map(({ src: { large } }, i) => {
          const src = large;
          if (i + 1 === photos.length) {
            return (
              <motion.figure
                variants={figureReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                key={i}
                ref={lastRef}
                className="w-full overflow-hidden"
              >
                <motion.img
                  variants={imageReveal}
                  src={src}
                  className="w-full object-fit"
                />
              </motion.figure>
            );
          }
          return (
            <motion.figure
              variants={figureReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              key={i}
              className="w-full overflow-hidden"
            >
              <motion.img
                variants={imageReveal}
                src={src}
                className=" w-full object-fit"
              />
            </motion.figure>
          );
        })}
      </motion.li>
    </>
  );
};
