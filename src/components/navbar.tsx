"use client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // pastikan pakai react-router

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#f1eedd] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
        >
          <h1
            className={`text-2xl font-bold transition-colors ${
              scrolled ? "text-[#9a0906]" : "text-white"
            }`}
          >
            Mindut Gendut
          </h1>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 font-medium">
            <li>
              <Link
                to="/menu"
                className={`transition-colors ${
                  scrolled
                    ? "text-[#9a0906] hover:text-green-800"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/aboutUs"
                className={`transition-colors ${
                  scrolled
                    ? "text-[#9a0906] hover:text-green-800"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <a
                href="#kontak"
                className={`transition-colors ${
                  scrolled
                    ? "text-[#9a0906] hover:text-green-800"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                Kontak
              </a>
            </li>
          </ul>

          {/* Button Pesan Sekarang */}
          <a
            href="https://wa.me/6281234567890?text=Halo%20saya%20mau%20pesan%20catering"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full font-semibold transition-colors"
            style={{
              backgroundColor: "#f5b74b",
              color: "#9a0906",
            }}
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </nav>
  );
}