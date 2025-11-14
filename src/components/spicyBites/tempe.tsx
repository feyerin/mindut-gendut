"use client";

import { motion } from "framer-motion";

export default function Tempe() {
  return (
    <section
      id="tempe"
      className="w-full min-h-screen flex flex-col justify-between items-center pb-20 relative"
      style={{
        backgroundImage: `url('/background/main.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔹 Bagian utama */}
      <div className="flex flex-col md:flex-row items-start justify-start flex-1 w-full md:px-8 px-8 pt-16 md:pt-20 gap-10">
        {/* Gambar kiri */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-start">
          <motion.img
            src="/spicyBites/Tempe.png"
            alt="kripik kentang"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl w-full max-w-2xl object-contain"
          />
        </div>

        {/* Deskripsi kanan */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-start items-start h-full"
          style={{ color: "#f5b74b" }}
        >
 <h2
            className="text-[35px] font-black mb-2 uppercase font-['Bookman-Old-Style']"
            style={{
              textShadow: "0.8px 0 0 currentColor, -0.8px 0 0 currentColor"
            }}
          >            Tempe Bacem
          </h2>
          <p className="mb-20 text-[23px] font-[Arial] leading-tight">
            Tempe Bacem Mindut Gendut — dibuat dari kedelai pilihan dan dimasak perlahan dengan bumbu bacem tradisional khas Jawa. Rasanya manis gurih, lembut, dan meresap sampai ke dalam, menghadirkan cita rasa rumahan yang autentik. Dijamin beda dari tempe bacem biasa — sekali coba, pasti ketagihan!
          </p>

          {/* Ukuran */}
          <div className="mb-6">
            <h3 className="font-semibold text-[18px] mb-3" style={{
              textShadow: "0.5px 0 0 currentColor, -0.5px 0 0 currentColor"
            }}>Isi :</h3>
            <div className="flex flex-wrap gap-12">
              <button
                className="px-2 py-1 text-lg border rounded-lg"
                style={{
                  backgroundColor: "#f5b74b",
                  color: "#990001",
                  borderColor: "#f5b74b",
                }}
              >
                10 pcs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Bagian bawah - rata tengah */}
      <div
        className="w-full grid grid-cols-1 md:grid-cols-[1.3fr_0.8fr_1.3fr] items-center justify-items-center text-center md:text-left px-8 md:px-20 gap-6 mt-20"
        style={{
          color: "#f5b74b",
          minHeight: "240px",
        }}
      >
        {/* 🔸 Kiri: Resep Warisan */}
        <div className="flex items-center justify-center md:justify-start gap-6">
          <img
            src="/Ikon bahan baku pilihan_Kuning.png"
            alt="Resep Warisan"
            className="w-20 h-20 object-contain flex-shrink-0"
          />
          <div>
            <h3 className="font-bold text-[25px] mb-1">BAHAN BAKU PILIHAN</h3>
            <p className="text-[16px] max-w-[320px]">
              Bahan baku pilihan. Segar, dan alami rahasia kelezatan Mindut Gendut.
            </p>
          </div>
        </div>

        {/* 🔸 Tengah: Halal */}
        <div className="flex flex-col items-center justify-center">
          <img
            src="/Ikon Halal_Kuning.png"
            alt="Halal Logo"
            className="w-24 h-24 md:w-28 md:h-28 object-contain"
          />
        </div>

        {/* 🔸 Kanan: Produk Info */}
        <div
          className="flex items-center gap-6 justify-center md:justify-start"
          style={{
            color: "#f5b74b",
          }}
        >
          <img
            src="/Ikon siap santap_Kuning.png"
            alt="Produk Beku"
            className="w-20 h-20 object-contain flex-shrink-0"
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