"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

import type { GalleryImage } from "@/lib/images";

type LightboxProps = {
  images: GalleryImage[];
  currentIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

export function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  useEffect(() => {
    if (currentIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowRight") {
        onNext();
      }
      if (event.key === "ArrowLeft") {
        onPrev();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [currentIndex, onClose, onNext, onPrev]);

  const activeImage = currentIndex === null ? null : images[currentIndex];

  return (
    <AnimatePresence>
      {activeImage ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-4 py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full border border-white/25 px-4 py-2 text-sm uppercase tracking-[0.25em] text-white transition-colors hover:border-white/60"
          >
            close
          </button>
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/25 px-4 py-3 text-white transition-colors hover:border-white/60"
            aria-label="Предыдущее изображение"
          >
            ←
          </button>
          <button
            type="button"
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/25 px-4 py-3 text-white transition-colors hover:border-white/60"
            aria-label="Следующее изображение"
          >
            →
          </button>
          <motion.div
            key={activeImage.src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.28 }}
            className="relative h-full max-h-[88vh] w-full max-w-5xl"
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              sizes="100vw"
              placeholder="blur"
              blurDataURL={activeImage.blurDataURL}
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
