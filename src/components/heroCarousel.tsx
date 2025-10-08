"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const foods = [
  { title: "NASBAK", subtitle: "TELOR GIMBAL", img: "/food/telorgimbal.jpg" },
  { title: "NASBAK", subtitle: "KULIT KEMANGI", img: "/food/2.png" },
  { title: "NASBAK", subtitle: "AYAM SUWIR KEMANGI", img: "/food/suwirkemangi.jpg" },
  { title: "NASBAK", subtitle: "BABY CUMI", img: "/food/2.png" },
  { title: "NASBAK", subtitle: "CUMI PETE", img: "/food/cumipete.jpg" },
  { title: "NASBAK", subtitle: "PARU WARISAN", img: "/food/paruwarisan.jpg" },
  { title: "NASBAK", subtitle: "AYAM GORENG KALASAN", img: "/food/ayamgorengkalasan.jpg" },
  { title: "NASBAK", subtitle: "IGA WARISAN", img: "/food/igawarisan.jpg" },
  { title: "NASBAK", subtitle: "RENDANG SAPI", img: "/food/rendangsapi.jpg" },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % foods.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + foods.length) % foods.length);

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
      {/* Gambar carousel */}
      <div className="relative w-[60vw] max-w-[400px] h-[60vw] max-h-[400px] md:w-[33vw] md:max-w-[500px] md:h-[33vw] md:max-h-[500px] mb-6">
        <AnimatePresence mode="wait">
          <motion.img
            key={foods[index].img}
            src={foods[index].img}
            alt={`${foods[index].title} ${foods[index].subtitle}`}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full object-contain"
          />
        </AnimatePresence>

        {/* Tombol navigasi */}
        <button
          onClick={prevSlide}
          className="absolute -left-10 md:-left-20 top-1/2 -translate-y-1/2 p-2 md:p-4"
        >
          <FaChevronLeft className="text-4xl md:text-6xl text-amber-400" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-10 md:-right-20 top-1/2 -translate-y-1/2 p-2 md:p-4"
        >
          <FaChevronRight className="text-4xl md:text-6xl text-amber-400" />
        </button>
      </div>

      {/* Text bawah gambar */}
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
    </section>
  );
}