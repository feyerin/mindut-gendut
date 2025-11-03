"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuPage() {
  const categories = [
    { name: "NASI BAKAR", img: "/menu/2.png" },
    { name: "NASI KREMES", img: "/menu/1.png" },
    { name: "ADD ON", img: "/menu/3.png" },
  ];

  const [active, setActive] = useState(categories[0]);

  return (
    <>
      <section
        className="relative min-h-screen border-t border-[#9a0906]/30 pt-24"
        style={{
          backgroundImage: "url('/background/secondary.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-[Playfair-Display] font-bold text-[#9a0906]">
            Menu Kami
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-10 flex-wrap px-4">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActive(cat)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                active.name === cat.name
                  ? "bg-[#9a0906] text-white shadow-md"
                  : "bg-white text-[#9a0906] border border-[#9a0906] hover:bg-[#f1eedd]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gambar Menu */}
        <div className="max-w-6xl mx-auto px-6 pb-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-xl flex justify-center"
            >
              <img
                src={active.img}
                alt={active.name}
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}