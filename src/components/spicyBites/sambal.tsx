"use client";

import { motion } from "framer-motion";

export default function Sambal() {
  return (
    <section
      id="sambal"
      className="w-full min-h-screen flex flex-col justify-between items-center pb-20 relative"
      style={{
        backgroundImage: `url('/background/secondary.png')`,
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
            src="/spicyBites/Sambal.png"
            alt="Bumbu Ungkep"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-[50px] shadow-lg w-full max-w-2xl object-contain"
          />
        </div>

        {/* Deskripsi kanan */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-start items-start h-full"
          style={{ color: "#990001" }}
        >
 <h2
            className="text-[35px] font-black mb-2 uppercase font-['Bookman-Old-Style']"
            style={{
              textShadow: "0.8px 0 0 currentColor, -0.8px 0 0 currentColor"
            }}
          >            
          Sambal Mindut Gendut
          </h2>
          <p className="mb-6 text-[23px] font-[Arial] leading-tight">
            Sambal rumahan autentik tanpa pengawet, dibuat dari bahan segar pilihan dengan cita rasa khas Indonesia. 
            <br/> <br/>Tersedia 4 varian rasa sesuai level pedas favoritmu: 
            <br/> Gami: pedas manis gurih, Terasi: pedas sedang, 
            <br/>Korek: pedas gurih yang bikin nagih & Mercon: super pedas
          </p>

          {/* Ukuran */}
         <div className="mb-6">
            <h3 className="font-semibold text-[18px] mb-3"
            style={{
              textShadow: "0.5px 0 0 currentColor, -0.5px 0 0 currentColor"
            }}
            >Ukuran :</h3>

            {/* ✅ Hanya ubah jadi grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              <div className="w-28">

              <button
                className="px-4 py-1 text-lg border rounded-lg"
                style={{
                  backgroundColor: "#990001",
                  color: "#fff",
                  borderColor: "#990001",
                }}
              >
                50 gr
              </button>
              </div>
              
              <div>

              <button
                className="px-2 py-1 text-[18px] border rounded-lg"
                style={{
                  backgroundColor: "#990001",
                  color: "#fff",
                  borderColor: "#990001",
                }}
              >
                200 gr
              </button>
              </div>

            </div>
          </div>

          {/* 🔹 Varian */}
          <div className="w-full">
            <h3 className="font-semibold text-lg mb-3"
            style={{
              textShadow: "0.5px 0 0 currentColor, -0.5px 0 0 currentColor"
            }}>Varian :</h3>
            <div className="flex flex-wrap gap-4 justify-start items-start">
              {/* Varian 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-start"
              >
                <div
                  className="px-2 py-1 rounded-lg text-lg mb-3 border"
                  style={{
                    backgroundColor: "#990001",
                    color: "#fff",
                    borderColor: "#990001",
                  }}
                >
                  Gami
                </div>

                <img
                  src="/spicyBites/Sambal Gami.png"
                  alt="gami"
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
                  className="px-2 py-1 rounded-lg text-lg mb-3 border"
                  style={{
                    backgroundColor: "#990001",
                    color: "#fff",
                    borderColor: "#990001",
                  }}
                >
                  Terasi
                </div>

                <img
                  src="/spicyBites/Sambal Terasi.png"
                  alt="terasi"
                  className="w-28 object-contain"
                  style={{
                    maxWidth: "140px",
                    borderRadius: "12px",
                  }}
                />
              </motion.div>

              {/* Varian 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex flex-col items-start"
              >
                <div
                  className="px-2 py-1 rounded-lg text-lg mb-3 border"
                  style={{
                    backgroundColor: "#990001",
                    color: "#fff",
                    borderColor: "#990001",
                  }}
                >
                  Korek
                </div>

                <img
                  src="/spicyBites/Sambal korek.png"
                  alt="korek"
                  className="h-28 object-contain"
                  style={{
                    maxWidth: "140px",
                    borderRadius: "12px",
                  }}
                />
              </motion.div>

              {/* Varian 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex flex-col items-start"
              >
                <div
                  className="px-2 py-1 rounded-lg text-lg mb-3 border"
                  style={{
                    backgroundColor: "#990001",
                    color: "#fff",
                    borderColor: "#990001",
                  }}
                >
                  Mercon
                </div>

                <img
                  src="/spicyBites/Sambal Mercon.png"
                  alt="mercon"
                  className="h-28 object-contain"
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
        className="w-full grid grid-cols-1 md:grid-cols-[1.3fr_0.8fr_1.3fr] items-center justify-items-center text-center md:text-left px-8 md:px-8 gap-6 mt-20"
        style={{
          color: "#990001",
          minHeight: "240px",
        }}
      >
        {/* 🔸 Kiri: Resep Warisan */}
        <div className="flex items-center justify-center md:justify-start gap-6">
          <img
            src="/Ikon Resep Warisan.png"
            alt="Resep Warisan"
            className="w-20 h-20 object-contain flex-shrink-0"
          />
          <div>
            <h3 className="font-bold text-[25px] mb-1">RESEP WARISAN</h3>
            <p className="text-[16px] max-w-[400px]">
              Resep warisan nusantara yang <br/>tetap dijaga keaslian dan cara
              masaknya.
            </p>
          </div>
        </div>

        {/* 🔸 Tengah: Halal */}
        <div className="flex flex-col items-center justify-center">
          <img
            src="/Ikon Halal.png"
            alt="Halal Logo"
            className="w-24 h-24 md:w-28 md:h-28 object-contain"
          />
        </div>

        {/* 🔸 Kanan: Produk Info */}
        <div
          className="flex items-center gap-6 justify-center md:justify-start"
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
            <h3 className="font-bold text-[25px] mb-1">PRODUK BEKU</h3>
            <p className="text-[16px] max-w-[400px]">
              Segera bekukan setelah diterima. <br/>Pindahkan ke chiller semalam
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