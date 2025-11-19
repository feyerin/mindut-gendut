"use client";

import { motion } from "framer-motion";

export default function AyamUngkep() {
  return (
    <section
      id="ayam-ungkep"
      className="w-full min-h-screen flex flex-col justify-between items-center relative pb-12 md:pb-0"
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
            src="/spicyBites/Ayam Ungkep.png"
            alt="Bumbu Ungkep"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[530px] rounded-[50px] shadow-lg object-contain"
          />
        </div>

        {/* Deskripsi kanan */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-start items-start h-full"
          style={{ color: "#f5b74b" }}
        >
          <h2
            className="text-2xl sm:text-3xl md:text-[35px] font-black mb-2 uppercase font-['Bookman-Old-Style']"
            style={{
              textShadow: "0.8px 0 0 currentColor, -0.8px 0 0 currentColor"
            }}
          >
            Ayam Ungkep Pejantan
          </h2>
          <p className="mb-6 sm:mb-8 text-[16px] sm:text-[20px] md:text-[23px] font-[Arial] leading-snug sm:leading-tight">
            Ayam Frozen Pejantan Mindut Gendut bukan ayam ungkep biasa. Dibuat dari ayam pejantan pilihan dan bumbu kaldu alami warisan nenek, tersedia dalam dua varian: Bumbu Kalasan dan Bumbu Kuning. Tanpa pengawet, praktis tinggal goreng — nikmati cita rasa rumahan yang autentik dan bergizi.
          </p>

          {/* Ukuran */}
          <div className="mb-5">
            <h3 className="font-semibold text-[16px] sm:text-[18px] mb-2 sm:mb-3"
              style={{ textShadow: "0.5px 0 0 currentColor, -0.5px 0 0 currentColor" }}
            >
              Ukuran :
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full max-w-sm">
              {["1/2 ekor", "1 ekor"].map((size) => (
                <button
                  key={size}
                  className="px-2 py-1 text-sm sm:text-lg w-full font-semibold border rounded-lg"
                  style={{
                    backgroundColor: "#f5b74b",
                    color: "#990001",
                    borderColor: "#f5b74b",
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Varian */}
          <div className="w-full">
            <h3 className="font-semibold text-[16px] sm:text-[18px] mb-2 sm:mb-3"
              style={{ textShadow: "0.5px 0 0 currentColor, -0.5px 0 0 currentColor" }}
            >
              Varian :
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-4 justify-start items-start">
              {[
                { name: "Kalasan", img: "/spicyBites/Ayam Ungkep Kalasan.png" },
                { name: "Kuning", img: "/spicyBites/Ayam Ungkep Kuning.png" },
              ].map((variant, i) => (
                <motion.div
                  key={variant.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="flex flex-col items-start"
                >
                  <div
                    className="px-2 py-1 w-[100px] text-center rounded-lg text-sm sm:text-lg mb-2 sm:mb-3 border"
                    style={{
                      backgroundColor: "#f5b74b",
                      color: "#990001",
                      borderColor: "#f5b74b",
                    }}
                  >
                    {variant.name}
                  </div>
                  <img
                    src={variant.img}
                    alt={variant.name}
                    className="w-20 sm:w-28 object-contain rounded-[12px]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Bagian bawah */}
      <div
        className="hidden lg:grid w-full grid-cols-[1.0fr_0.1fr_1.0fr] items-center justify-items-center text-center md:text-left"
        style={{
          color: "#f5b74b",
          minHeight: "240px",
        }}
      >
        {/* Kiri */}
        <div className="flex items-center justify-center lg:justify-start gap-6">
          <img
            src="/Ikon Resep Warisan_Kuning.png"
            alt="Resep Warisan"
            className="w-16 h-16 object-contain flex-shrink-0"
          />
          <div>
            <h3 className="font-bold text-[23px] mb-1">RESEP WARISAN</h3>
            <p className="text-[16px] max-w-[400px]">
              Resep warisan nusantara yang <br/> tetap dijaga keaslian dan cara masaknya.
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
            src="/Ikon Frozen_Kuning.png"
            alt="Produk Beku"
            className="w-16 h-16 object-contain flex-shrink-0"
          />
          <div className="text-left">
            <h3 className="font-bold text-[25px] mb-1">PRODUK BEKU</h3>
            <p className="text-[16px] max-w-[400px]">
              Segera bekukan setelah diterima.<br/> Pindahkan ke chiller semalam sebelum dimasak.
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