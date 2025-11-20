"use client";

import { motion } from "framer-motion";

export default function Tahu() {
  return (
    <section
      id="tahu"
      className="w-full min-h-screen flex flex-col justify-between items-center relative pb-12 lg:pb-0"
      style={{
        backgroundImage: `url('/background/secondary.png')`,
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
            src="/spicyBites/Tahu.png"
            alt="Tahu"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[530px] rounded-3xl shadow-lg object-contain"
          />
        </div>

        {/* Deskripsi kanan */}
        <div className="w-full md:w-1/2 flex flex-col justify-start items-start h-full" style={{ color: "#990001" }}>
          <h2
            className="text-2xl sm:text-3xl md:text-[35px] font-black mb-2 uppercase font-['Bookman-Old-Style']"
            style={{ textShadow: "0.8px 0 0 currentColor, -0.8px 0 0 currentColor" }}
          >
            Tahu
          </h2>
          <p className="mb-6 sm:mb-8 text-[16px] sm:text-[20px] md:text-[23px] font-[Arial] leading-snug sm:leading-tight">
            Tahu Susu Spesial Mindut Gendut — dibuat fresh setiap hari dari bahan berkualitas, menghasilkan tekstur lembut dan rasa gurih alami yang khas. Tanpa pengawet, bisa langsung digoreng atau dijadikan lauk sesuai selera.
            <br /><br />
            Untuk penyimpanan lebih lama, setelah diterima ganti airnya dengan air panas, lalu simpan di kulkas — tahan hingga 1 minggu. Praktis, segar, dan lezat setiap hari!
          </p>

          {/* Isi */}
          <div className="mb-6">
            <h3
              className="font-semibold text-[16px] sm:text-[18px] mb-2 sm:mb-3"
              style={{ textShadow: "0.5px 0 0 currentColor, -0.5px 0 0 currentColor" }}
            >
              Isi :
            </h3>
            <div className="flex gap-4 flex-wrap max-w-xs">
              <button
                className="px-3 py-1 text-sm sm:text-lg border rounded-lg"
                style={{ backgroundColor: "#990001", color: "#fff", borderColor: "#990001" }}
              >
                10 pcs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Bagian bawah */}
      <div
        className="hidden lg:grid w-full grid-cols-[1.0fr_0.1fr_1.0fr] items-center justify-items-center text-center md:text-left"
        style={{ color: "#990001", minHeight: "240px" }}
      >
        {/* Kiri */}
        <div className="flex items-center justify-center lg:justify-start gap-6">
          <img src="/Ikon bahan baku pilihan.png" alt="Bahan Baku Pilihan" className="w-16 h-16 object-contain flex-shrink-0" />
          <div>
            <h3 className="font-bold text-[25px] mb-1">BAHAN BAKU PILIHAN</h3>
            <p className="text-[16px] max-w-[320px]">
              Bahan baku pilihan. Segar, dan alami rahasia kelezatan Mindut Gendut.
            </p>
          </div>
        </div>

        {/* Tengah */}
        <div className="flex flex-col items-center justify-center">
          <img src="/Ikon Halal.png" alt="Halal Logo" className="w-24 h-24 object-contain" />
        </div>

        {/* Kanan */}
        <div className="flex items-center gap-6 justify-center lg:justify-start">
          <img src="/Ikon siap santap.png" alt="Produk Siap Santap" className="w-16 h-16 object-contain flex-shrink-0" />
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