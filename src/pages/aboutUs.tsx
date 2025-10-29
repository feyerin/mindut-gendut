import { useState } from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const gallery = [
    "/aboutUs/1.jpg",
    "/aboutUs/2.jpg",
    "/aboutUs/3.jpg",
    "/aboutUs/4.jpg",
    "/aboutUs/5.jpg",
    "/aboutUs/6.jpg",
  ];

  const getRandomStyle = () => {
    const marginTop = Math.floor(Math.random() * 30) - 15;
    const rotate = Math.floor(Math.random() * 10) - 5;
    const scale = 1 + Math.random() * 0.05;
    return { marginTop, rotate, scale };
  };

  const [mainLoaded, setMainLoaded] = useState(false);
  const [galleryLoaded, setGalleryLoaded] = useState<boolean[]>(
    Array(gallery.length).fill(false)
  );

  const handleGalleryLoad = (i: number) => {
    setGalleryLoaded((prev) => {
      const copy = [...prev];
      copy[i] = true;
      return copy;
    });
  };

  return (
    <section className="relative overflow-hidden">
        <title>Tentang Mindut | Mindut Gendut</title>
        <meta
          name="description"
          content="Kenali kisah di balik Mindut Gendut — warisan resep keluarga yang kini hadir untukmu dengan cita rasa autentik dan penuh kehangatan."
        />

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/background/secondary.png')",
          transform: "translateZ(0)",
        }}
      />
      <div className="absolute inset-0 bg-white/10 pointer-events-none" />

      <div className="relative z-10">
        {/* Hero Title */}
        <div className="flex flex-col justify-center items-center text-center px-6 lg:pt-26 pt-32">
          <motion.h2
            className="text-5xl md:text-6xl font-[Playfair-Display] text-[#9a0906] font-bold mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Tentang <br /> Mindut Gendut
          </motion.h2>
        </div>

        {/* Deskripsi + Foto */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 py-10">
          <motion.div
            className="lg:w-1/2 flex justify-center relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {!mainLoaded && (
              <div className="absolute inset-0 bg-[#f1eedd] animate-pulse rounded-3xl" />
            )}
            <motion.img
              src="/aboutUs/7.jpg"
              alt="Restoran Mindut Gendut"
              onLoad={() => setMainLoaded(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: mainLoaded ? 1 : 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-96 rounded-3xl shadow-lg object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="lg:w-1/2 text-[#9a0906] leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>
              “Mindut” ialah panggilan sayang Nenek untukku. Karena badanku yang
              gempal sejak kecil, aku selalu dipanggil Mindut Gendut. Setiap
              pulang sekolah, aroma nasi bakar buatan Nenek selalu menyambutku
              dengan hangat.
            </p>
            <br />
            <p>
              Untuk mengenang Nenek, aku mulai membuka PO nasi bakar dari rumah
              pada tahun 2020. Bermula dari dapur kecil, kini Mindut Gendut
              telah dipercaya untuk berbagai acara seperti kantor, ulang tahun,
              dan pernikahan.
            </p>
            <br />
            <p>
              Terima kasih untuk para pelanggan yang sudah memberikan
              kesempatan agar warisan resep Mindut tetap hidup dan dapat
              dinikmati banyak orang.
            </p>
          </motion.div>
        </div>

        {/* Galeri */}
        <div className="max-w-7xl mx-auto px-6 py-24">
          <h3 className="text-4xl font-[Playfair-Display] font-bold mb-10 text-center text-[#9a0906]">
            Galeri Mindut
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {gallery.map((img, i) => {
              const { marginTop, rotate, scale } = getRandomStyle();
              return (
                <motion.div
                  key={i}
                  className="relative overflow-hidden rounded-2xl"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  style={{
                    marginTop: `${marginTop}px`,
                    transform: `rotate(${rotate}deg) scale(${scale})`,
                    zIndex: 10 - i,
                  }}
                >
                  {!galleryLoaded[i] && (
                    <div className="absolute inset-0 bg-[#f1eedd] animate-pulse rounded-2xl" />
                  )}
                  <motion.img
                    src={img}
                    alt={`Galeri ${i + 1}`}
                    onLoad={() => handleGalleryLoad(i)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: galleryLoaded[i] ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}