"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { menuData } from "../data/spicyBites";

export default function SpicyBitesPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          const yOffset = -200;
          const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 300);
      }
    }
  }, []);

  const sectionIds: Record<string, string> = {
    "bumbu-ungkep": "bumbu-ungkep",
    "ayam-ungkep": "ayam-ungkep",
    sambal: "sambal",
    "sambal-lauk": "sambal-lauk",
    sapi: "sapi",
    "kripik-kentang": "kripik-kentang",
    tahu: "tahu",
    tempe: "tempe",
  };

  return (
    <section className="w-full">
      {menuData.map((item) => {
        const isOdd = item.id % 2 !== 0;
        const bgImage = isOdd
          ? "/background/secondary.png"
          : "/background/main.png";
        const mainColor = isOdd ? "#990001" : "#f5b74b";
        const secondaryColor = isOdd ? "#fff" : "#990001";
        const textColor = isOdd ? "#990001" : "#f5b74b";
        const iconSuffix = !isOdd ? "_Kuning" : "";

        // 🔹 Info produk default
        let productInfo = {
          title: "PRODUK BEKU",
          desc: "Segera bekukan setelah diterima. Pindahkan ke chiller semalam sebelum dimasak.",
          duration: "Tahan: 1 tahun (freezer) & 3 hari (chiller)",
          icon: `/Ikon Frozen${iconSuffix}.png`,
          bgColor: "transparent",
          textColor,
        };

        // 🔹 Override info produk
        if (["kentang", "kripik-kentang"].includes(item.category)) {
          productInfo = {
            title: "PRODUK SIAP SANTAP",
            desc: "Produk siap proses, bisa langsung dimasak dengan atau tanpa bumbu tambahan.",
            duration: "Tahan: 1 Minggu (chiller)",
            icon: `/Ikon siap santap${iconSuffix}.png`,
            bgColor: "#990001",
            textColor: "#f5b74b",
          };
        } else if (["tahu", "tempe"].includes(item.category)) {
          productInfo = {
            title: "PRODUK SIAP MASAK",
            desc: "Produk siap proses, bisa langsung dimasak dengan atau tanpa bumbu tambahan.",
            duration: "Tahan: 1 Minggu (chiller)",
            icon: `/Ikon siap masak${iconSuffix}.png`,
            bgColor: "none",
            textColor: item.category === "tahu" ? "#990001" : "#f5b74b",
          };
        }

        const isBahanBaku = [
          "kentang",
          "kripik-kentang",
          "tahu",
          "tempe",
        ].includes(item.category);

        return (
          <section
            key={item.id}
            id={sectionIds[item.category] || item.category}
            className="w-full min-h-screen flex flex-col justify-between items-center pb-20"
            style={{
              backgroundImage: `url('${bgImage}')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* 🔹 Bagian utama */}
            <div className="flex flex-col md:flex-row items-start justify-start flex-1 w-full md:px-20 px-8 pt-16 md:pt-20 gap-10">
              {/* Gambar */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-end items-start">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl shadow-lg w-full max-w-2xl object-contain"
                />
              </div>

              {/* Teks */}
              <div
                className="w-full md:w-1/2 flex flex-col justify-start items-start h-full"
                style={{ color: textColor }}
              >
                <h2 className="text-3xl font-extrabold mb-4 uppercase font-[Playfair-Display]">
                  {item.name}
                </h2>

                <p className="mb-6 text-xl leading-relaxed">{item.description}</p>

                {/* 🔸 Ukuran / Isi */}
                {Array.isArray(item.sizes) && item.sizes.length > 0 && (
                  <div className="mb-6">
                    <h3 className="font-semibold text-lg mb-3">
                      {["tahu", "tempe"].includes(item.category)
                        ? "Isi :"
                        : "Ukuran :"}
                    </h3>

                    <div className="flex flex-wrap gap-3">
                      {item.sizes.map((size, i) => (
                        <button
                          key={i}
                          className="px-5 py-2 text-sm font-semibold border rounded-lg"
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

                {/* 🔸 Varian + Gambar */}
                {item.category !== "kripik-kentang" &&
                  Array.isArray(item.variants) &&
                  item.variants.length > 0 && (
                    <div className="mb-8 w-full">
                      <h3 className="font-semibold text-lg mb-3">Varian :</h3>

                      {/* Tombol Varian */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        {item.variants.map((variant, i) => (
                          <button
                            key={i}
                            className="px-2 py-2 text-sm font-semibold border rounded-lg"
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

                      {/* 🔹 Gambar varian dari variantGroups */}
                      {Array.isArray(item.variantGroups) &&
                        item.variantGroups.length > 0 &&
                        item.variantGroups[0].options?.length > 0 && (
                          <div className="flex flex-wrap gap-2 justify-start mt-6">
                            {item.variantGroups[0].options.map((opt, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: i * 0.1,
                                }}
                                className="flex flex-col items-center"
                              >
                                <img
                                  src={opt.image}
                                  alt={opt.name || `Varian ${i + 1}`}
                                  className="h-24 md:h-32 object-contain rounded-xl"
                                  style={{
                                    maxWidth: "100px",
                                    transition: "transform 0.25s ease",
                                  }}
                                />
                              </motion.div>
                            ))}
                          </div>
                        )}
                    </div>
                  )}
              </div>
            </div>

            {/* 🔹 Bagian bawah */}
            <div
              className="w-full grid grid-cols-1 md:grid-cols-3 items-start text-center md:text-left px-6 md:px-16 gap-8 mt-20"
              style={{ color: textColor }}
            >
              {/* 🔹 Kiri: Ikon Bahan Baku / Resep Warisan */}
              <div className="flex items-start justify-center md:justify-start gap-6">
                <img
                  src={
                    isBahanBaku
                      ? `/Ikon bahan baku pilihan${iconSuffix}.png`
                      : `/Ikon Resep Warisan${iconSuffix}.png`
                  }
                  alt={
                    isBahanBaku
                      ? "Bahan Baku Pilihan Icon"
                      : "Resep Warisan Icon"
                  }
                  className="w-12 h-12 object-contain flex-shrink-0"
                />
                <div>
                  <h3 className="font-bold text-lg mb-1">
                    {isBahanBaku
                      ? "BAHAN BAKU PILIHAN"
                      : "RESEP WARISAN"}
                  </h3>
                  <p className="text-sm max-w-[320px]">
                    {isBahanBaku
                      ? "Kami menggunakan bahan baku terbaik untuk menjaga cita rasa dan kualitas produk."
                      : "Resep warisan nusantara yang tetap dijaga keaslian dan cara masaknya."}
                  </p>
                </div>
              </div>

              {/* 🔹 Tengah: Halal */}
              <div className="flex flex-col items-center justify-start">
                <img
                  src={`/Ikon Halal${iconSuffix}.png`}
                  alt="Halal Logo"
                  className="w-14 md:w-16 mb-2"
                />
              </div>

              {/* 🔹 Kanan: Info Produk */}
              <div
                className="flex items-start gap-6 p-4 rounded-xl justify-center md:justify-start"
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
                  <h3 className="font-bold text-lg mb-1">
                    {productInfo.title}
                  </h3>
                  <p className="text-sm max-w-[320px]">
                    {productInfo.desc}
                  </p>
                  <p className="text-sm mt-1 font-medium">
                    {productInfo.duration}
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </section>
  );
}