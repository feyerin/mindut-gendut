"use client";

import { motion } from "framer-motion";

export default function BumbuUngkep() {
  return (
    <section
      id="bumbu-ungkep"
      className="w-full min-h-screen flex flex-col justify-between items-center pb-16 relative"
      style={{
        backgroundImage: `url('/background/secondary.png')`,
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
            src="/spicyBites/Bumbu ungkep.png"
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
          style={{ color: "#990001" }}
        >
          <h2 className="text-[35px] font-bold mb-6 uppercase font-[Playfair-Display] leading-tight">
            Bumbu Ungkep Kaldu
          </h2>

          <p className="mb-8 text-[23px] leading-relaxed font-sans">
            Bumbu Ungkep Kaldu Mindut Gendut bukan sekadar bumbu ungkep biasa. Diracik dari resep tradisional warisan nenek, bumbu ini sudah mengandung kaldu alami sehingga bisa langsung digunakan tanpa tambahan bumbu lain. Praktis, sehat, dan bergizi — menghadirkan rasa gurih autentik khas masakan rumahan.
          </p>

          {/* Ukuran */}
          <div className="mb-10">
            <h3 className="font-semibold text-[18px] mb-3">Ukuran :</h3>
            <div className="flex flex-wrap gap-6">
              <button
                className="px-2 py-1 text-[18px] font-semibold border rounded-lg"
                style={{
                  backgroundColor: "#990001",
                  color: "#fff",
                  borderColor: "#990001",
                }}
              >
                500 ml
              </button>
              <button
                className="px-2 py-1 text-[18px] font-semibold border rounded-lg"
                style={{
                  backgroundColor: "#990001",
                  color: "#fff",
                  borderColor: "#990001",
                }}
              >
                1 liter
              </button>
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
                  className="px-2 py-1 rounded-lg font-semibold text-[18px] mb-3 border"
                  style={{
                    backgroundColor: "#990001",
                    color: "#fff",
                    borderColor: "#990001",
                  }}
                >
                  Kalasan
                </div>
                <img
                  src="/spicyBites/Kalasan.png"
                  alt="Kalasan"
                  className="h-28 object-contain"
                  style={{
                    maxWidth: "160px",
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
                  className="px-2 py-1 rounded-lg font-semibold text-[18px] mb-3 border"
                  style={{
                    backgroundColor: "#990001",
                    color: "#fff",
                    borderColor: "#990001",
                  }}
                >
                  Kuning
                </div>
                <img
                  src="/spicyBites/Kuning.png"
                  alt="Kuning"
                  className="h-28 object-contain"
                  style={{
                    maxWidth: "160px",
                    borderRadius: "12px",
                  }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Bagian bawah */}
      <div
        className="w-full grid grid-cols-1 md:grid-cols-3 items-center justify-items-center text-center md:text-left px-8  mt-20"
        style={{
          color: "#990001",
          minHeight: "200px",
        }}
      >
        {/* 🔸 Kiri: Resep Warisan */}
        <div className="flex items-center justify-center md:justify-start gap-4">
          <img
            src="/Ikon Resep Warisan.png"
            alt="Resep Warisan"
            className="w-20 h-20 object-contain flex-shrink-0"
          />
          <div>
            <h3 className="font-bold text-[25px] mb-1 uppercase">
              RESEP WARISAN
            </h3>
            <p className="text-[16px] max-w-[280px] leading-snug">
              Resep warisan nusantara yang tetap dijaga keaslian dan cara
              masaknya.
            </p>
          </div>
        </div>

        {/* 🔸 Tengah: Halal */}
        <div className="flex flex-col items-center justify-center">
          <img
            src="/Ikon Halal.png"
            alt="Halal Logo"
            className="w-28 h-28 object-contain"
          />
        </div>

        {/* 🔸 Kanan: Produk Info */}
        <div
          className="flex items-center gap-4 justify-center md:justify-start"
          style={{
            color: "#990001",
          }}
        >
          <img
            src="/Ikon Frozen.png"
            alt="Produk Beku"
            className="w-20 h-20 object-contain flex-shrink-0"
          />
          <div className="text-left">
            <h3 className="font-bold text-[25px] mb-1 uppercase">
              PRODUK BEKU
            </h3>
            <p className="text-[16px] max-w-[280px] leading-snug">
              Segera bekukan setelah diterima. Pindahkan ke chiller semalam
              sebelum dimasak.
            </p>
            <p className="text-[16px] mt-1 font-medium leading-snug">
              Tahan: 1 tahun (freezer) & 3 hari (chiller)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}