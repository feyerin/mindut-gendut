import { motion } from "framer-motion";

export default function AboutUs() {
  const gallery = [
    "/aboutUs/1.png",
    "/aboutUs/2.png",
    "/aboutUs/3.png",
    "/aboutUs/4.png",
    "/aboutUs/5.png",
    "/aboutUs/6.png",
    "/aboutUs/7.png",
    "/aboutUs/8.png",
  ];

  // Fungsi untuk random small offset dan rotate
  const getRandomStyle = () => {
    const marginTop = Math.floor(Math.random() * 30) - 15; // -15px sampai 15px
    const rotate = Math.floor(Math.random() * 10) - 5; // -5deg sampai 5deg
    const scale = 1 + Math.random() * 0.05; // 1 - 1.05
    return { marginTop, rotate, scale };
  };

  return (
    <section
      className="relative"
      style={{
        backgroundImage: "url('/background/secondary.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Hero Title */}
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.h2
          className="text-6xl md:text-7xl font-[Playfair-Display] font-bold text-[#1B3F33]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Tentang <br /> Mindut Gendut
        </motion.h2>
      </div>

      {/* Deskripsi + Foto side by side */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 py-24">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[#1B3F33] text-lg md:text-xl leading-relaxed">
            Mindut Gendut adalah restoran katering yang berfokus pada kualitas dan
            rasa. Kami menyediakan berbagai jenis hidangan untuk acara kantor,
            pernikahan, ulang tahun, hingga event spesial lainnya. Setiap hidangan
            dibuat dengan bahan segar dan resep terbaik agar setiap momenmu
            spesial dan berkesan.
          </p>
        </motion.div>

        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/aboutUs/1.png"
            alt="Restoran Mindut Gendut"
            className="w-full h-auto rounded-3xl shadow-lg object-cover"
          />
        </motion.div>
      </div>

      {/* Galeri */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <h3 className="text-4xl font-[Playfair-Display] font-bold mb-10 text-center text-[#1B3F33]">
          Galeri Mindut
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((img, i) => {
            const { marginTop, rotate, scale } = getRandomStyle();
            return (
              <motion.div
                key={i}
                className="overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                style={{
                  marginTop: `${marginTop}px`,
                  transform: `rotate(${rotate}deg) scale(${scale})`,
                  zIndex: 10 - i, // layering agar tumpuk natural
                }}
              >
                <img
                  src={img}
                  alt={`Galeri ${i + 1}`}
                  className="w-full h-[250px] md:h-[300px] lg:h-[280px] object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}