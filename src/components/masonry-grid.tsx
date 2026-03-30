"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import type { PortfolioImage } from "@/lib/images";

import { Lightbox } from "./lightbox";

type MasonryGridProps = {
  images: PortfolioImage[];
};

const spans = [
  "col-span-12 md:col-span-7",
  "col-span-12 md:col-span-5",
  "col-span-12 md:col-span-4",
  "col-span-12 md:col-span-8",
  "col-span-12 md:col-span-6",
];

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
      <div className="grid grid-cols-12 gap-y-12 md:gap-x-12 lg:gap-x-20 lg:gap-y-24">
        {images.map((image, index) => (
          <motion.button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => open(index)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className={`group block overflow-hidden text-left ${spans[index % spans.length]}`}
          >
            <div className="grain-frame relative overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                placeholder={image.blurDataURL ? "blur" : "empty"}
                blurDataURL={image.blurDataURL}
                className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.015]"
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
