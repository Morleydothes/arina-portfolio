"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import type { PortfolioImage } from "@/lib/images";

import { Lightbox } from "./lightbox";

type MasonryGridProps = {
  images: PortfolioImage[];
};

export function MasonryGrid({ images }: MasonryGridProps) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const open = (index: number) => setCurrentIndex(index);
  const close = () => setCurrentIndex(null);
  const next = () =>
    setCurrentIndex((value) =>
      value === null ? 0 : (value + 1) % images.length,
    );
  const prev = () =>
    setCurrentIndex((value) =>
      value === null
        ? images.length - 1
        : (value - 1 + images.length) % images.length,
    );

  return (
    <>
      <div className="columns-1 gap-6 md:columns-2 xl:columns-3">
        {images.map((image, index) => (
          <motion.button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => open(index)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="grain-frame group mb-6 block w-full break-inside-avoid overflow-hidden rounded-[1.8rem] bg-white p-3 text-left shadow-soft"
          >
            <div className="relative overflow-hidden rounded-[1.2rem]">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                placeholder={image.blurDataURL ? "blur" : "empty"}
                blurDataURL={image.blurDataURL}
                className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.035]"
              />
            </div>
          </motion.button>
        ))}
      </div>
      <Lightbox
        images={images}
        currentIndex={currentIndex}
        onClose={close}
        onNext={next}
        onPrev={prev}
      />
    </>
  );
}
