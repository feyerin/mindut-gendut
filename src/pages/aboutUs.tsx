import { motion } from "framer-motion";

export default function AboutUs() {
  const gallery = [
    "/aboutUs/1.jpg",
    "/aboutUs/2.jpg",
    "/aboutUs/3.jpg",
    "/aboutUs/4.jpg",
    "/aboutUs/5.jpg",
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
        backgroundImage: "url('/background/secondary.jpeg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
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

      {/* Deskripsi + Foto side by side */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 py-24">
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

        <motion.div
          className="lg:w-1/2 leading-5 text-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[#1B3F33] leading-relaxed">
            “Mindut” ialah panggilan sayang Nenek untuk dan karena badanku yang gempal sejak kecil selalu dipanggil Mindut Gendut. Setiap pulang sekolah, aroma nasi bakar buatan Nenek selalu menyambutku dengan hangat. Saat Nenek tiada, almarhumah kakak langsung sosok yang sangat berarti.
          </p>
          <br/>
          <p className="text-[#1B3F33] leading-relaxed">
            Untuk mengenang Nenek, aku mulai membuka PO nasi bakar dari rumah tempatku di tahun 2020. Dimulai dari dapur kecil di rumah, tak disangka kini banyak yang menyukai nasi bakar buatanku. Kini, Mindut Gendut sudah dipercaya untuk berbagai acara seperti acara kantoran, ulang tahun maupun pernikahan.          
          </p>
            <br/>
          <p className="text-[#1B3F33] leading-relaxed">
            Terima kasih untuk para pelanggan yang sudah memberikan kesempatan untuk warisan resep Mindut tetap hidup dan dapat dinikmati banyak orang.
          </p>
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
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}