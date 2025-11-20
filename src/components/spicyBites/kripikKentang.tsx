"use client";

import { motion } from "framer-motion";

export default function KripikKentang() {
  return (
    <section
      id="kripik-kentang"
      className="w-full min-h-screen flex flex-col justify-between items-center relative pb-12 lg:pb-0"
      style={{
        backgroundImage: `url('/background/main.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔹 Bagian utama */}
      <div className="flex flex-col md:flex-row items-start justify-start flex-1 w-full px-4 sm:px-8 md:px-8 pt-16 md:pt-20 gap-6 md:gap-10">
        {/* Gambar kiri */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-start">
          <motion.img
            src="/spicyBites/Keripik kentang.png"
            alt="Kripik Kentang"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[530px] rounded-3xl object-contain"
          />
        </div>

        {/* Deskripsi kanan */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start h-full" style={{ color: "#f5b74b" }}>
          <h2
            className="text-2xl sm:text-3xl md:text-[35px] font-black mb-2 uppercase font-['Bookman-Old-Style']"
            style={{ textShadow: "0.8px 0 0 currentColor, -0.8px 0 0 currentColor" }}
          >
            Keripik Kentang
          </h2>
          <p className="mb-6 sm:mb-8 text-[16px] sm:text-[20px] md:text-[23px] font-[Arial] leading-snug sm:leading-tight">
            Keripik Kentang Sambal Mindut Gendut — keripik kentang renyah dengan coating sambal pedas manis gurih khas Mindut Gendut. Dibuat dari kentang pilihan tanpa pengawet, rasanya nagih banget! Dikemas dalam toples praktis yang memudahkan penyimpanan.
            <br /> <br /> Cocok dimakan langsung, jadi lauk pendamping nasi, atau teman nasi goreng & mi instan favoritmu!
          </p>

          {/* Ukuran */}
          <div className="mb-6">
            <h3
              className="font-semibold text-[16px] sm:text-[18px] mb-2 sm:mb-3"
              style={{ textShadow: "0.5px 0 0 currentColor, -0.5px 0 0 currentColor" }}
            >
              Ukuran :
            </h3>
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              <button
                className="px-2 py-1 text-sm sm:text-lg w-full border rounded-lg"
                style={{
                  backgroundColor: "#f5b74b",
                  color: "#990001",
                  borderColor: "#f5b74b",
                }}
              >
                80 gr
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Bagian bawah */}
      <div
        className="hidden lg:grid w-full grid-cols-[1.0fr_0.1fr_1.0fr] items-center justify-items-center text-center md:text-left"
        style={{ color: "#f5b74b", minHeight: "240px" }}
      >
        {/* Kiri */}
        <div className="flex items-center justify-center lg:justify-start gap-6">
          <img
            src="/Ikon bahan baku pilihan_Kuning.png"
            alt="Bahan Baku Pilihan"
            className="w-20 h-20 object-contain flex-shrink-0"
          />
          <div>
            <h3 className="font-bold text-[25px] mb-1">BAHAN BAKU PILIHAN</h3>
            <p className="text-[16px] max-w-[320px]">
              Bahan baku pilihan. Segar, dan alami rahasia kelezatan Mindut Gendut.
            </p>
          </div>
        </div>

        {/* Tengah */}
        <div className="flex flex-col items-center justify-center">
          <img
            src="/Ikon Halal_Kuning.png"
            alt="Halal Logo"
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Kanan */}
        <div className="flex items-center gap-6 justify-center lg:justify-start">
          <img
            src="/Ikon siap santap_Kuning.png"
            alt="Produk Siap Santap"
            className="w-16 h-16 object-contain flex-shrink-0"
          />
          <div className="text-left">
            <h3 className="font-bold text-[25px] mb-1">PRODUK SIAP SANTAP</h3>
            <p className="text-[16px] max-w-[400px]">
              Produk siap proses, bisa langsung dimasak dengan atau tanpa bumbu tambahan.
            </p>
            <p className="text-[16px] mt-1 font-medium">
              Tahan: 1 Minggu (chiller)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}