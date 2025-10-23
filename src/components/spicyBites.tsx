"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const spicyItems = [
  { name: "Bumbu Ungkep", img: "https://boganamaymay.com/storage/storage/images/package/8470415166.png" },
  { name: "Ayam Ungkep", img: "https://boganamaymay.com/storage/storage/images/package/8470415166.png" },
  { name: "Sambal", img: "https://boganamaymay.com/storage/storage/images/package/8470415166.png" },
  { name: "Sambal Lauk", img: "https://boganamaymay.com/storage/storage/images/package/8470415166.png" },
  { name: "Sapi", img: "https://boganamaymay.com/storage/storage/images/package/8470415166.png" },
  { name: "Kripik Kentang", img: "https://boganamaymay.com/storage/storage/images/package/8470415166.png" },
  { name: "Tahu", img: "https://boganamaymay.com/storage/storage/images/package/8470415166.png" },
  { name: "Tempe", img: "https://boganamaymay.com/storage/storage/images/package/8470415166.png" },
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
    <div className="py-20 px-6 md:px-12 w-full bg-center"
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
            <div key={item.name} className="flex flex-col items-center text-center">
              <div className="relative w-32 h-32 mb-3 rounded-xl overflow-hidden">
                {/* Skeleton */}
                {!loadedImages[index] && (
                  <div className="absolute inset-0 bg-gray-800 animate-pulse rounded-xl" />
                )}

                {/* Image */}
                <img
                  src={item.img}
                  alt={item.name}
                  onLoad={() => handleImageLoad(index)}
                  className={`w-full h-full object-cover rounded-xl transition-opacity duration-500 ${
                    loadedImages[index] ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>

              <p className="font-medium text-[#9a0906]">{item.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 text-[#9a0906] rounded-full border border-[#9a0906] hover:border-red-800 transition">
            Lihat Menu Lengkap
          </button>
        </div>
      </div>
    </div>
  );
}