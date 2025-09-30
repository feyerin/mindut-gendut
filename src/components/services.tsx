import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "Catering Kantor",
      desc: "Layanan katering untuk kebutuhan makan siang dan acara kantor, praktis dan sehat.",
      img: "/services/catering.jpg",
    },
    {
      title: "Catering Acara Lainnya",
      desc: "Cocok untuk ulang tahun, arisan, gathering, hingga event besar lainnya.",
      img: "/services/lainnya.jpg",
    },
  ];

    return (
    <section id="catering" className="relative py-28 overflow-hidden">
      {/* Background daun pisang tetap */}
      <motion.img
        src="/background/secondary.png"
        alt="Banana leaf background"
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Overlay ringan agar card lebih kontras */}
      <div className="absolute inset-0 bg-white/20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-5xl md:text-6xl font-[Playfair-Display] text-[#1B3F33] font-bold mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Layanan Catering
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12 max-w-3xl mx-auto">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="bg-white/95 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-t-3xl">
                <motion.img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-96 md:h-[28rem] object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl uppercase font-[Playfair-Display] font-semibold mb-3 text-[#1B3F33]">
                  {s.title}
                </h3>
                <p className="text-gray-700 mb-6 flex-1 text-sm text-justify eading-relaxed">{s.desc}</p>
                <Link
                  to="/order"
                  className="mt-auto inline-block px-6 py-3 rounded-full text-white font-medium transition-all duration-300 hover:bg-[#2a5b43]"
                  style={{ backgroundColor: "rgb(27, 63, 51)" }}
                >
                  Pesan Sekarang
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}