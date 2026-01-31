"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ImageRounded from "./ImageRounded";

export interface CarouselImage {
  src: string;
  alt: string;
  className?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  objectPosition?: string;
}

export interface CarouselProps {
  images: CarouselImage[];
  aspectRatio?: string;
  width?: string;
  height?: string;
}

const Carousel = ({
  images,
  aspectRatio = "aspect-video",
  width = "w-full",
  height = "h-full",
}: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div
      className={`relative group ${width} ${height} mx-auto overflow-hidden rounded-2xl shadow-2xl isolate`}
    >
      <div
        className={`relative ${aspectRatio} bg-gray-100 dark:bg-card-dark overflow-hidden rounded-2xl`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-center p-0"
          >
            <ImageRounded
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className={`rounded-none shadow-none! w-full h-full ${
                images[currentIndex].objectFit === "contain"
                  ? "object-contain"
                  : "object-cover"
              } ${images[currentIndex].objectPosition || "object-center"} ${
                images[currentIndex].className || ""
              }`}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Glassmorphism Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-md flex items-center justify-center text-primary hover:bg-white/50 dark:hover:bg-black/50 transition-colors shadow-lg pointer-events-auto"
          aria-label="Previous slide"
        >
          <span className="material-icons-round">chevron_left</span>
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-md flex items-center justify-center text-primary hover:bg-white/50 dark:hover:bg-black/50 transition-colors shadow-lg pointer-events-auto"
          aria-label="Next slide"
        >
          <span className="material-icons-round">chevron_right</span>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 p-1.5 rounded-full bg-white/30 dark:bg-black/30 backdrop-blur-md">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-primary w-4"
                : "bg-gray-400/50 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
