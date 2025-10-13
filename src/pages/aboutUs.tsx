import { useState } from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const gallery = [
    "/aboutUs/1.jpg",
    "/aboutUs/2.jpg",
    "/aboutUs/3.jpg",
    "/aboutUs/4.jpg",
    "/aboutUs/5.jpg",
  ];

  const getRandomStyle = () => {
    const marginTop = Math.floor(Math.random() * 30) - 15;
    const rotate = Math.floor(Math.random() * 10) - 5;
    const scale = 1 + Math.random() * 0.05;
    return { marginTop, rotate, scale };
  };

  const [mainLoaded, setMainLoaded] = useState(false);
  const [galleryLoaded, setGalleryLoaded] = useState<boolean[]>(Array(gallery.length).fill(false));

  const handleGalleryLoad = (i: number) => {
    setGalleryLoaded((prev) => {
      const copy = [...prev];
      copy[i] = true;
      return copy;
    });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background sebagai layer tetap (bukan di inline style) */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: "url('/background/secondary.png')",
          transform: "translateZ(0)", // paksa GPU render
        }}
      ></div>

      {/* Overlay tipis agar transisi halus */}
      <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>

      <div className="relative z-10">
        {/* Hero Title */}
        <div className="flex flex-col justify-center items-center text-center px-6 lg:pt-32 pt-28">
          <motion.h2
            className="font-[Playfair-Display] w-full uppercase text-center font-medium text-4xl md:text-6xl my-auto text-primary mb-4 sm:mb-8"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Tentang <br /> Mindut Gendut
          </motion.h2>
        </div>

        {/* Deskripsi + Foto */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 py-24">
          <motion.div
            className="lg:w-1/2 flex justify-center relative will-change-transform"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {!mainLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse rounded-3xl" />
            )}
            <motion.img
              src="/aboutUs/1.png"
              alt="Restoran Mindut Gendut"
              onLoad={() => setMainLoaded(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: mainLoaded ? 1 : 0 }}
              transition={{ duration: 0.6 }}
              className="w-full h-auto rounded-3xl shadow-lg object-cover"
              style={{ willChange: "opacity, transform" }}
            />
          </motion.div>

          <motion.div
            className="lg:w-1/2 leading-5 text-md text-[#9a0906]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ willChange: "opacity, transform" }}
          >
            <p className="leading-relaxed">
              “Mindut” ialah panggilan sayang Nenek untuk dan karena badanku yang gempal sejak kecil selalu dipanggil Mindut Gendut...
            </p>
            <br />
            <p className="leading-relaxed">
              Untuk mengenang Nenek, aku mulai membuka PO nasi bakar dari rumah tempatku di tahun 2020...
            </p>
            <br />
            <p className="leading-relaxed">
              Terima kasih untuk para pelanggan yang sudah memberikan kesempatan...
            </p>
          </motion.div>
        </div>

        {/* Galeri */}
        <div className="max-w-7xl mx-auto px-6 pb-24">
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
                    willChange: "transform, opacity",
                  }}
                >
                  {!galleryLoaded[i] && (
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse rounded-2xl" />
                  )}
                  <motion.img
                    src={img}
                    alt={`Galeri ${i + 1}`}
                    onLoad={() => handleGalleryLoad(i)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: galleryLoaded[i] ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    style={{ willChange: "transform, opacity" }}
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