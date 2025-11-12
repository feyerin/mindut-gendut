"use client";

import { motion } from "framer-motion";

export default function SambalLauk() {
  return (
    <section
      id="sambal-lauk"
      className="w-full min-h-screen flex flex-col justify-between items-center pb-20 relative"
      style={{
        backgroundImage: `url('/background/main.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔹 Bagian utama */}
      <div className="flex flex-col md:flex-row items-start justify-start flex-1 w-full md:px-20 px-8 pt-16 md:pt-20 gap-10">
        {/* Gambar kiri */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-start">
          <motion.img
            src="/spicyBites/Sambal Lauk.png"
            alt="Bumbu Ungkep"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl shadow-lg w-full max-w-2xl object-contain"
          />
        </div>

        {/* Deskripsi kanan */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-start items-start h-full"
          style={{ color: "#f5b74b" }}
        >
          <h2 className="text-[35px] font-extrabold mb-4 uppercase font-[Playfair-Display]">
            Sambal Lauk
          </h2>
          <p className="mb-6 text-[23px] font-[Arial]">
            Praktisnya lauk pedas khas rumahan, dibuat tanpa pengawet dari bahan segar berkualitas. Tersedia 2 varian favorit: Sambal Baby Cumi & Sambal Pete dengan sambal mercon yang menggugah selera.
          </p>

          {/* Ukuran */}
          <div className="mb-6">
            <h3 className="font-semibold text-[18px] mb-3">Ukuran :</h3>
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">  
              <div className="w-28">        
              <button
                className="px-3 py-1 text-lg font-semibold border rounded-lg"
                style={{
                  backgroundColor: "#f5b74b",
                  color: "#990001",
                  borderColor: "#f5b74b",
                }}
              >
                50 gr
              </button>
              </div>
              <div>
              <button
                className="px-2 py-1 text-lg font-semibold border rounded-lg"
                style={{
                  backgroundColor: "#f5b74b",
                  color: "#990001",
                  borderColor: "#f5b74b",
                }}
              >
                200 gr
              </button>
              </div>
            </div>
          </div>

          {/* 🔹 Varian */}
          <div className="w-full">
            <h3 className="font-semibold text-[18px] mb-3">Varian :</h3>
            <div className="flex flex-wrap gap-4 justify-start items-start">
              {/* Varian 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-start"
              >
                <div
                  className="px-2 py-1 rounded-lg font-semibold text-lg mb-3 border"
                  style={{
                    backgroundColor: "#f5b74b",
                    color: "#990001",
                    borderColor: "#f5b74b",
                  }}
                >
                  Baby Cumi
                </div>

                <img
                  src="/spicyBites/Sambal Baby Cumi.png"
                  alt="kalasan"
                  className="w-28 object-contain"
                  style={{
                    maxWidth: "140px",
                    borderRadius: "12px",
                  }}
                />
              </motion.div>

              {/* Varian 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex flex-col items-start"
              >
                <div
                  className="px-2 py-1 rounded-lg font-semibold text-lg mb-3 border"
                  style={{
                    backgroundColor: "#f5b74b",
                    color: "#990001",
                    borderColor: "#f5b74b",
                  }}
                >
                  Pete
                </div>

                <img
                  src="/spicyBites/Sambal Pete.png"
                  alt="Kuning"
                  className="w-28 object-contain"
                  style={{
                    maxWidth: "140px",
                    borderRadius: "12px",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Bagian bawah - rata tengah */}
      <div
        className="w-full grid grid-cols-1 md:grid-cols-3 items-center justify-items-center text-center md:text-left px-8 md:px-20 gap-6 mt-20"
        style={{
          color: "#f5b74b",
          minHeight: "240px",
        }}
      >
        {/* 🔸 Kiri: Resep Warisan */}
        <div className="flex items-center justify-center md:justify-start gap-6">
          <img
            src="/Ikon Resep Warisan_Kuning.png"
            alt="Resep Warisan"
            className="w-20 h-20 object-contain flex-shrink-0"
          />
          <div>
            <h3 className="font-bold text-[25px] mb-1">RESEP WARISAN</h3>
            <p className="text-[16px] max-w-[320px]">
              Resep warisan nusantara yang tetap dijaga keaslian dan cara
              masaknya.
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
            src="/Ikon Frozen_Kuning.png"
            alt="Produk Beku"
            className="w-20 h-20 object-contain flex-shrink-0"
          />
          <div className="text-left">
            <h3 className="font-bold text-[25px] mb-1">PRODUK BEKU</h3>
            <p className="text-[16px] max-w-[320px]">
              Segera bekukan setelah diterima. Pindahkan ke chiller semalam
              sebelum dimasak.
            </p>
            <p className="text-[16px] mt-1 font-medium">
              Tahan: 1 tahun (freezer) & 3 hari (chiller)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}