"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const foods = [
  { title: "NASI KREMES", subtitle: "TELOR GIMBAL", img: "/food/Nasi kremes Telor Gimbal_Box.png" },
  { title: "NASI KREMES", subtitle: "AYAM GORENG KALASAN", img: "/food/Nasi kremes Ayam Bakar Kalasan_Box.png" },
  { title: "NASI KREMES", subtitle: "AYAM BAKAR KALASAN", img: "/food/Nasi kremes Ayam Bakar Kalasan_Box.png" },
  { title: "NASI KREMES", subtitle: "PARU WARISAN", img: "/food/Nasi kremes Paru Warisan_Box.png" },
];

export default function HeroCarousel2() {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const nextSlide = () => {
    setIsLoading(true);
    setIndex((prev) => (prev + 1) % foods.length);
  };

  const prevSlide = () => {
    setIsLoading(true);
    setIndex((prev) => (prev - 1 + foods.length) % foods.length);
  };

  const textContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const textItem = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative z-10 text-center py-16 text-white px-6 flex flex-col items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={foods[index].title + foods[index].subtitle}
          variants={textContainer}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="mb-4"
        >
          <motion.div
            variants={textItem}
            className="text-xl md:text-3xl font-extrabold text-amber-400"
          >
            {foods[index].title}
          </motion.div>
          <motion.div
            variants={textItem}
            className="text-3xl md:text-4xl font-bold text-white drop-shadow-md font-playfair"
          >
            {foods[index].subtitle}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="relative w-[60vw] max-w-[400px] h-[60vw] max-h-[400px] 
                      md:w-[33vw] md:max-w-[500px] md:h-[33vw] md:max-h-[500px] mb-6 rounded-2xl">

        <div className="absolute inset-0 overflow-hidden rounded-2xl ">
          <AnimatePresence mode="wait">
            <motion.div
              key={foods[index].img}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center rounded-2xl">
                  <div className="w-10 h-10 border-4 border-t-transparent rounded-full animate-spin" />
                </div>
              )}
              <img
                src={foods[index].img}
                alt={`${foods[index].title} ${foods[index].subtitle}`}
                onLoad={() => setIsLoading(false)}
                className={`w-full h-full object-contain transition-opacity duration-500 ${
                  isLoading ? "opacity-0" : "opacity-100"
                }`}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={prevSlide}
          className="absolute -left-10 md:-left-20 top-1/2 -translate-y-1/2 p-2 md:p-4"
        >
          <FaChevronLeft className="text-4xl md:text-6xl text-amber-400 drop-shadow-lg" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute -right-10 md:-right-20 top-1/2 -translate-y-1/2 p-2 md:p-4"
        >
          <FaChevronRight className="text-4xl md:text-6xl text-amber-400 drop-shadow-lg" />
        </button>
      </div>

    </section>
  );
}