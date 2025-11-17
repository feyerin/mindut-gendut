"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const spicyItems = [
  { name: "Bumbu Ungkep", img: "/spicyBites/Bumbu ungkep.png", category: "bumbu-ungkep" },
  { name: "Ayam Ungkep", img: "/spicyBites/Ayam Ungkep.png", category: "ayam-ungkep" },
  { name: "Sambal", img: "/spicyBites/Sambal.png", category: "sambal" },
  { name: "Sambal Lauk", img: "/spicyBites/Sambal Lauk.png", category: "sambal-lauk" },
  { name: "Iga Mercon", img: "/spicyBites/Sapi.png", category: "iga-mercon" },
  { name: "Kripik Kentang", img: "/spicyBites/Keripik kentang.png", category: "kripik-kentang" },
  { name: "Tahu", img: "/spicyBites/Tahu.png", category: "tahu" },
  { name: "Tempe", img: "/spicyBites/Tempe.png", category: "tempe" },
];

export default function SpicyBites() {
  const [loadedImages, setLoadedImages] = useState<boolean[]>(
    Array(spicyItems.length).fill(false)
  );

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <div
      className="py-20 px-6 md:px-12 w-full bg-center"
      style={{
        backgroundImage: "url('/background/secondary.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-11/12 max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-[Playfair-Display] text-[#9a0906] font-bold mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Spicy Bites
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {spicyItems.map((item, index) => (
            <Link
              to={`/spicyBites#${item.category}`}
              key={item.name}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-42 h-42 mb-3 overflow-hidden rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105">
                {!loadedImages[index] && (
                  <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-xl" />
                )}

                <img
                  src={item.img}
                  alt={item.name}
                  onLoad={() => handleImageLoad(index)}
                  className={`w-full h-full object-cover transition-opacity duration-500 rounded-xl ${
                    loadedImages[index] ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              <p className="font-medium text-[#9a0906]">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}