"use client";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { menuData } from "../data/spicyBites";

export default function SpicyBitesDetail() {
  const { category } = useParams();
  const item = menuData.find((m) => m.category === category);

  const [selectedImage, setSelectedImage] = useState(item?.image);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
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

  // 🎨 Tentukan tema berdasarkan ID (ganjil/genap)
  const isOdd = item.id % 2 !== 0;
  const bgImage = isOdd ? "/background/secondary.png" : "/background/main.png";
  const mainColor = isOdd ? "#990001" : "#f5b74b";
  const secondaryColor = isOdd ? "#f5b74b" : "#990001";
  const textColor = isOdd ? "#990001" : "#f5b74b";

  const handleSelectVariantGroup = (groupName: string, variant: any) => {
    setSelectedVariants((prev) => ({ ...prev, [groupName]: variant.name }));
    if (variant.image) setSelectedImage(variant.image);
  };

  const handleSelectSize = (size: string) => setSelectedSize(size);
  const handleSelectVariant = (variant: string) => setSelectedVariant(variant);

  const hideVariants = item.category === "kripik-kentang";

  // 🧊 Tentukan tipe produk untuk bagian bawah
  let productInfo = {
    title: "PRODUK BEKU",
    desc: "Segera bekukan setelah diterima. Pindahkan ke chiller semalam sebelum dimasak.",
    duration: "Tahan: 1 tahun (freezer) & 3 hari (chiller)",
    icon: "/Ikon Frozen.png",
    bgColor: "transparent",
    textColor,
  };

  if (item.category === "kentang") {
    productInfo = {
      title: "PRODUK SIAP SANTAP",
      desc: "Produk siap proses, bisa langsung dimasak dengan atau tanpa bumbu tambahan.",
      duration: "Tahan: 1 Minggu (chiller)",
      icon: "/Ikon siap santap.png",
      bgColor: "#990001",
      textColor: "#f5b74b",
    };
  } else if (item.category === "tahu") {
    productInfo = {
      title: "PRODUK SIAP MASAK",
      desc: "Produk siap proses, bisa langsung dimasak dengan atau tanpa bumbu tambahan.",
      duration: "Tahan: 1 Minggu (chiller)",
      icon: "/Ikon siap masak.png",
      bgColor: "none",
      textColor: "#990001",
    };
  }else if (item.category === "tempe") {
    productInfo = {
      title: "PRODUK SIAP MASAK",
      desc: "Produk siap proses, bisa langsung dimasak dengan atau tanpa bumbu tambahan.",
      duration: "Tahan: 1 Minggu (chiller)",
      icon: "/Ikon siap masak.png",
      bgColor: "none",
      textColor: "#f5b74b",
    };
  }

  return (
    <section
      className="min-h-screen w-full flex flex-col justify-start items-center pt-24 pb-16"
      style={{
        backgroundImage: `url('${bgImage}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-12 px-6 md:px-10">
        {/* LEFT: Product Image */}
        <div className="w-full md:w-1/2 flex justify-center items-start">
          <motion.div
            key={selectedImage}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-md rounded-3xl overflow-hidden shadow-lg"
          >
            <img
              src={selectedImage}
              alt={item.name}
              className="w-full object-cover rounded-2xl"
            />
          </motion.div>
        </div>

        {/* RIGHT: Product Details */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-start"
          style={{ color: textColor }}
        >
          <h1
            className="text-3xl font-extrabold mb-4 font-[Playfair-Display] uppercase"
            style={{ color: textColor }}
          >
            {item.name}
          </h1>

          <p className="leading-relaxed mb-6">{item.description}</p>

          {/* 🔹 SIZE PILLS */}
          {item.sizes && item.sizes.length > 0 && (
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-3" style={{ color: textColor }}>
                Ukuran
              </h3>
              <div className="flex flex-wrap gap-3">
                {item.sizes.map((size, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectSize(size)}
                    className={`px-5 py-2 text-sm font-semibold border transition-all rounded-full ${
                      selectedSize === size ? "scale-105" : ""
                    }`}
                    style={{
                      backgroundColor: mainColor,
                      color: secondaryColor,
                      borderColor: mainColor,
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 🔹 VARIANT PILLS */}
          {!hideVariants && item.variants && item.variants.length > 0 && (
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-3" style={{ color: textColor }}>
                Varian
              </h3>
              <div className="flex flex-wrap gap-3">
                {item.variants.map((variant, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectVariant(variant)}
                    className={`px-5 py-2 text-sm font-semibold border transition-all rounded-full ${
                      selectedVariant === variant ? "scale-105" : ""
                    }`}
                    style={{
                      backgroundColor: mainColor,
                      color: secondaryColor,
                      borderColor: mainColor,
                    }}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* 🔹 VARIANT GROUP PILLS */}
          {!hideVariants &&
            item.variantGroups &&
            item.variantGroups.length > 0 && (
              <div className="space-y-8 mb-8">
                {item.variantGroups.map((group, i) => (
                  <div key={i}>
                    {group.groupName && (
                      <h3 className="font-semibold text-lg mb-3" style={{ color: textColor }}>
                        {group.groupName}
                      </h3>
                    )}
                    <div className="flex flex-wrap gap-4">
                      {group.options.map((variant, j) => {
                        const selected = selectedVariants[group.groupName] === variant.name;
                        return (
                          <div
                            key={j}
                            onClick={() => handleSelectVariantGroup(group.groupName, variant)}
                            className={`cursor-pointer flex flex-col items-center transition-all ${
                              selected ? "scale-105" : "opacity-80 hover:opacity-100"
                            }`}
                          >
                            {!hideVariants && variant.image && (
                              <div
                                className="w-24 h-24 rounded-2xl overflow-hidden border-4 transition-all"
                                style={{
                                  borderColor: selected ? mainColor : "transparent",
                                }}
                              >
                                <img
                                  src={variant.image}
                                  alt={variant.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                            {variant.name && (
                              <p
                                className="mt-2 text-sm font-medium text-center"
                                style={{ color: textColor }}
                              >
                                {variant.name}
                              </p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
        </div>
      </div>

      {/* 🔸 PRODUCT INFO SECTION */}
      <div
        className="mt-20 w-full max-w-7xl pt-10 grid grid-cols-1 md:grid-cols-3 gap-2 items-center text-center md:text-left"
        style={{ color: textColor }}
      >
        <div className="flex items-center justify-center md:justify-start gap-6">
          <img
            src="/Ikon bahan baku pilihan.png"
            alt="Resep Warisan Icon"
            className="w-12 h-12 object-contain flex-shrink-0"
          />
          <div>
            <h3 className="font-bold text-lg mb-1">RESEP WARISAN</h3>
            <p className="text-sm max-w-[320px]">
              Resep warisan nusantara yang tetap dijaga keaslian dan cara masaknya.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src="https://boganamaymay.com/storage/images/halal.png"
            alt="Halal Logo"
            className="w-12 mb-2"
          />
        </div>

        {/* 🧊 Produk Info Dinamis */}
        <div
          className="flex items-center gap-6 p-4 rounded-xl"
          style={{
            backgroundColor: productInfo.bgColor,
            color: productInfo.textColor,
          }}
        >
          <img
            src={productInfo.icon}
            alt={productInfo.title}
            className="w-12 h-12 object-contain flex-shrink-0"
          />
          <div className="text-left">
            <h3 className="font-bold text-lg mb-1">{productInfo.title}</h3>
            <p className="text-sm max-w-[320px]">{productInfo.desc}</p>
            <p className="text-sm mt-1 font-medium">{productInfo.duration}</p>
          </div>
        </div>
      </div>
    </section>
  );
}