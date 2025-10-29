import { useState } from "react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Catering Kantor",
      desc: "Ucap selamat tinggal pada menu catering kantoran yang itu-itu saja",
      img: "/services/catering.jpg",
    },
    {
      title: "Catering Acara Lainnya",
      desc: "Apapun acaranya, kami siap sajikan nasi kotak, tumpeng, atau pilihan nasi lainnya",
      img: "/services/lainnya.jpg",
    },
  ];

  const [loaded, setLoaded] = useState<boolean[]>(Array(services.length).fill(false));

  const handleLoad = (index: number) => {
    setLoaded((prev) => {
      const copy = [...prev];
      copy[index] = true;
      return copy;
    });
  };

  const handleWhatsApp = (serviceTitle: string) => {
    const message = `Halo, saya tertarik dengan layanan ${serviceTitle}. Bisa dibantu untuk informasi lebih lanjut?`;
    const waLink = `https://wa.me/628119938180?text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank");
  };

  return (
    <section id="catering" className="relative py-28 overflow-hidden">
      {/* Background daun pisang */}
      <motion.img
        src="/background/main.png"
        alt="Banana leaf background"
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-[Playfair-Display] text-[#f9c433] font-bold mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Layanan Catering
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="bg-white/95 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-96 md:h-[28rem] overflow-hidden rounded-t-3xl">
                {/* Skeleton shimmer */}
                {!loaded[i] && (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-pulse" />
                )}

                {/* Gambar utama */}
                <motion.img
                  src={s.img}
                  alt={s.title}
                  onLoad={() => handleLoad(i)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: loaded[i] ? 1 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl uppercase font-[Playfair-Display] font-semibold mb-3 text-[#9a0906]">
                  {s.title}
                </h3>
                <p className="text-black mb-6 flex-1 text-sm text-justify leading-relaxed">
                  {s.desc}
                </p>
                <button
                  onClick={() => handleWhatsApp(s.title)}
                  className="mt-auto inline-block px-6 py-3 rounded-full text-[#9a0906] font-medium transition-all duration-300 bg-[#f9c433] hover:bg-[#f8b400]"
                >
                  Pesan Sekarang
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}