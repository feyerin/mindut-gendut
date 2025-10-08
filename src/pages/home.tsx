import Hero from "../components/hero";
import Services from "../components/services";
import { MapPin, Clock } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services/>
      <section
        id="lokasi"
        style={{
          backgroundImage: "url('/background/main.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}   
        >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <h2 className="text-4xl md:text-5xl font-[Playfair-Display] font-bold text-center text-white mb-12">
            Lokasi & Jam Operasional
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Google Maps */}
            <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.2099654189093!2d110.36948921543291!3d-7.803249979284892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57837c7a2a4d%3A0x1234567890abcdef!2sMindut%20Gendut!5e0!3m2!1sid!2sid!4v1699999999999"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>

            {/* Info */}
            <div className="space-y-6 text-white">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#f5b74b]" />
                <p className="text-lg leading-relaxed">
                  Jl. Contoh No. 123, Yogyakarta, Indonesia
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-[#f5b74b]" />
                <div>
                  <p className="text-lg font-semibold">Jam Operasional:</p>
                  <ul className="mt-2 space-y-1">
                    <li>Senin – Jumat: 09.00 – 21.00</li>
                    <li>Sabtu – Minggu: 10.00 – 22.00</li>
                  </ul>
                </div>
              </div>

              <a
                href="https://goo.gl/maps/xxxx"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-[#f5b74b] text-[#9a0906] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#e0a841] transition-colors"
              >
                Lihat di Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}