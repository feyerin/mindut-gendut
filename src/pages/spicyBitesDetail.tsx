"use client";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { menuData } from "../data/spicyBites";

export default function SpicyBitesDetail() {
  const { category } = useParams();
  const item = menuData.find((m) => m.category === category);

  const [selectedImage, setSelectedImage] = useState(item?.image);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});

  useEffect(() => {
    if (item) setSelectedImage(item.image);
  }, [item]);

  if (!item) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        Produk tidak ditemukan 😢
      </div>
    );
  }

  const handleSelectVariant = (groupName: string, variant: any) => {
    setSelectedVariants((prev) => ({ ...prev, [groupName]: variant.name }));
    if (variant.image) setSelectedImage(variant.image);
  };

  return (
    <section
      className="min-h-screen w-full bg-[#FFF4F1] flex justify-center items-start pt-32 pb-20"
      style={{
        backgroundImage: "url('/background/secondary.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 px-6">
        {/* LEFT: Product Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.div
            key={selectedImage}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full h-auto max-w-md rounded-3xl overflow-hidden"
          >
            <img
              src={selectedImage}
              alt={item.name}
              className="w-full object-cover rounded-2xl"
            />
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 text-[#9a0906] flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-6 font-[Playfair-Display] text-[#420606]">
            {item.name}
          </h1>

          <p className="text-gray-700 leading-relaxed mb-8">
            Nikmati kelezatan{" "}
            <span className="font-semibold text-[#420606]">{item.name}</span> —
            pilih varian favoritmu di bawah ini dan rasakan sensasi pedasnya
            yang menggoda!
          </p>

          <div className="space-y-8 mb-8">
            {item.variantGroups?.map((group, i) => (
              <div key={i}>
                <h3 className="font-semibold text-xl mb-3 text-[#420606]">
                  {group.groupName}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {group.options.map((variant, j) => (
                    <div
                      key={j}
                      onClick={() =>
                        handleSelectVariant(group.groupName, variant)
                      }
                      className={`cursor-pointer flex flex-col items-center transition-all ${
                        selectedVariants[group.groupName] === variant.name
                          ? "scale-105"
                          : "opacity-80 hover:opacity-100"
                      }`}
                    >
                      <div
                        className={`w-24 h-24 rounded-xl overflow-hidden border-4 transition-all ${
                          selectedVariants[group.groupName] === variant.name
                            ? "border-[#9a0906]"
                            : "border-transparent"
                        }`}
                      >
                        <img
                          src={variant.image || "/placeholder.jpg"}
                          alt={variant.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="mt-2 text-sm font-medium text-[#420606] text-center">
                        {variant.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button
            className="px-6 py-3 bg-[#9a0906] text-white rounded-full font-semibold text-lg shadow-md hover:bg-[#7a0704] transition-all w-fit"
            onClick={() =>
              window.open(
                `https://wa.me/628119938180?text=Halo%20saya%20mau%20pesan%20${encodeURIComponent(
                  item.name
                )}%20dengan%20varian:%20${Object.entries(selectedVariants)
                  .map(([group, choice]) => `${group}: ${choice}`)
                  .join(", ")}`,
                "_blank"
              )
            }
          >
            Pesan Sekarang
          </button>
        </div>
      </div>
    </section>
  );
}