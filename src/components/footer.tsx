"use client";
import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#f9c433] text-[#000] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo + Deskripsi */}
        <div>
          <img
            src="/logo.png"
            alt="Mindut Gendut"
            className="h-14 mb-6"
          />
          <p className="text-sm leading-relaxed">
            Berdiri sejak 2020, Mindut Gendut dikenal sebagai pelopor Nasi Bakar Cobek pertama di Indonesia.
          </p>
          <p className="text-sm leading-relaxed">
            Kami selalu mengutamakan kualitas bahan pilihan, bumbu autentik nusantara, dan proses produksi yang higienis. Dengan sertifikasi halal resmi, Mindut Gendut bukan hanya menjamin kehalalan, tapi juga kebersihan dan keamanan di setiap sajian.          
          </p>
          <p className="text-sm leading-relaxed">
            Mindut Gendut siap menghadirkan cita rasa khas nasi bakar yang unik, lezat, dan autentik untuk menemani momen spesial Anda.          
          </p>
          <a
            href="https://wa.me/628119938180?text=Halo%20saya%20mau%20pesan%20catering"
            target="_blank"
            rel="noreferrer"
          >
          <button className="mt-2 px-6 py-2 bg-[#990001] text-white rounded-full">
            Pesan Sekarang
            </button>
          </a>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Information</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/menu" className="hover:underline">
                Menu
              </a>
            </li>
            <li>
              <a href="/aboutUs" className="hover:underline">
                Tentang Kami
              </a>
            </li>
            <li>
              <Link to="/#lokasi">
                Outlet
              </Link>
            </li>
            <li>
              <Link to="/kontak/#faqs">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter + Sosmed */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Ayo berlangganan untuk mendapatkan penawaran eksklusif dan informasi
            menarik dari Mindut Gendut dimanapun kamu berada!
          </p>
          <form className="flex items-center mb-6 gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-full text-black w-full bg-white" 
            />
            <button
              type="submit"
              className="bg-[#990001] px-4 py-2 rounded-full text-white font-semibold transition"
            >
              Subscribe
            </button>
          </form>

          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4 text-2xl">
            <a href="https://www.instagram.com/mindutgendut.id?igsh=bDJla2FucnN1YWE3" className="hover:text-red-700">
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/628119938180?text=Halo%20saya%20mau%20pesan%20catering"
              target="_blank"
              rel="noreferrer"
              className="hover:text-red-700"
            >
              <FaWhatsapp />
            </a>
            <a href="https://www.tiktok.com/@mindutgendut.id?_t=ZS-90witXDZDQm&_r=1" className="hover:text-red-700">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}