import Hero from "../components/hero";
import Services from "../components/services";
import { MapPin, Clock } from "lucide-react";
import SpicyBites from "../components/spicyBites";

export default function Home() {
  return (
    <div>
      <Hero />
      <SpicyBites />
      <Services/>
      <section
        id="lokasi"
        style={{
          backgroundImage: "url('/background/secondary.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}   
        >
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl md:text-5xl font-[Playfair-Display] font-bold text-center text-[#9a0906] mb-12">
            Lokasi & Jam Operasional
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Google Maps */}
            <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.200785500937!2d106.6293311!3d-6.237245199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb7583899d55%3A0x102c438d77e2bcda!2sNasi%20Bakar%20%26%20Sambal%20Bakar%20Mindut%20Gendut!5e0!3m2!1sen!2sid!4v1759894088729!5m2!1sen!2sid" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>

            {/* Info */}
            <div className="space-y-6 text-[#9a0906]">
              <div className="flex items-start gap-4">
                <MapPin className="w-12 h-12 text-[#9a0906]" />
                <p className="text-lg leading-relaxed">
                  Jl. Klp. Gading Sel. Blok AH10 No.19, RT.8/RW.12, West Pakulonan, Kelapa Dua, Tangerang Regency, Banten 15810
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-[#9a0906]" />
                <div>
                  <p className="text-lg font-semibold">Jam Operasional:</p>
                  <ul className="mt-2 space-y-1">
                    <li>Senin – Minggu: 09.00 – 20.00</li>
                  </ul>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/DTxGovvqDdk6pvMCA"
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