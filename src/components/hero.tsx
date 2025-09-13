"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const foods = [
  { title: "NASI", subtitle: "TUMPENG", img: "/food/1.png" },
  { title: "NASI", subtitle: "BAKAR", img: "/food/2.png" },
  { title: "NASI", subtitle: "UDANG KRISPI", img: "/food/1.png" },
  { title: "NASI", subtitle: "PADANG", img: "/food/2.png" },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % foods.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + foods.length) % foods.length);

  const textContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const textItem = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/background/main.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 text-center py-6 text-white px-6 flex flex-col items-center mt-16">
        {/* Carousel makanan */}
        <div className="relative w-[60vw] max-w-[400px] h-[60vw] max-h-[400px] md:w-[33vw] md:max-w-[500px] md:h-[33vw] md:max-h-[500px] mb-6">
          <AnimatePresence mode="wait">
            <motion.img
              key={foods[index].img}
              src={foods[index].img}
              alt={foods[index].title + " " + foods[index].subtitle}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full object-contain"
            />
          </AnimatePresence>

          {/* Arrow kiri */}
          <button
            onClick={prevSlide}
            className="absolute -left-10 md:-left-20 top-1/2 -translate-y-1/2 p-2 md:p-4"
          >
            <FaChevronLeft className="text-4xl md:text-6xl" style={{ color: "#f5b74b" }} />
          </button>

          {/* Arrow kanan */}
          <button
            onClick={nextSlide}
            className="absolute -right-10 md:-right-20 top-1/2 -translate-y-1/2 p-2 md:p-4"
          >
            <FaChevronRight className="text-4xl md:text-6xl" style={{ color: "#f5b74b" }} />
          </button>
        </div>

        {/* Nama makanan */}
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
              className="text-xl md:text-3xl font-extrabold"
              style={{ color: "#f5b74b" }}
            >
              {foods[index].title}
            </motion.div>
            <motion.div
              variants={textItem}
              className="text-3xl md:text-5xl font-bold text-white drop-shadow-md font-playfair"
            >
              {foods[index].subtitle}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <p className="text-base md:text-lg lg:text-2xl mb-6">
          Catering terbaik untuk setiap momen spesialmu
        </p>

        {/* Button Pesan Sekarang */}
        <a
          href="https://wa.me/6281234567890?text=Halo%20saya%20mau%20pesan%20catering"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-full font-playfair text-white font-medium border border-amber-400 hover:bg-amber-400 transition-colors"
        >
          Pesan Sekarang
        </a>

        {/* Dots */}
        <div className="flex gap-2 mt-6">
          {foods.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "scale-110" : "opacity-70"
              }`}
              style={{ backgroundColor: "#f5b74b" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}