"use client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors uppercase duration-300 ${
        scrolled ? "bg-[#420606] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-extrabold transition-colors text-white">
            Mindut Gendut
          </h1>
        </Link>

        {/* Right section (menu + button) */}
        <div className="flex items-center gap-6">
          {/* Desktop & Tablet Menu */}
          <ul className="hidden sm:flex gap-5 font-semibold text-white">
            <li>
              <Link
                to="/menu"
                className="transition-colors text-white hover:text-gray-300"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/aboutUs"
                className="transition-colors text-white hover:text-gray-300"
              >
                Tentang Mindut
              </Link>
            </li>
            <li>
              <Link
                to="/#catering"
                className="transition-colors text-white hover:text-gray-300"
              >
                Catering
              </Link>
            </li>
            <li>
              <a
                href="#spicy-bites"
                className="transition-colors text-white hover:text-gray-300"
              >
                Spicy Bites
              </a>
            </li>
            <li>
              <Link
                to="/kontak"
                className="transition-colors text-white hover:text-gray-300"
              >
                Kontak
              </Link>
            </li>
          </ul>

          {/* Tablet & Desktop Button */}
          <a
            href="https://wa.me/6281234567890?text=Halo%20saya%20mau%20pesan%20catering"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-block px-4 py-2 rounded-full font-semibold transition-colors"
            style={{
              backgroundColor: "#f5b74b",
              color: "#9a0906",
            }}
          >
            Pesan Sekarang
          </a>

          {/* Tablet only: small icon instead of full button */}
          <a
            href="https://wa.me/6281234567890?text=Halo%20saya%20mau%20pesan%20catering"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-block md:hidden"
          >
            <MessageCircle className="text-[#f5b74b]" size={26} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-white"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="sm:hidden bg-[#420606] text-white flex flex-col items-center gap-4 py-4 font-semibold">
          <Link to="/menu" onClick={() => setMenuOpen(false)}>
            Menu
          </Link>
          <Link to="/aboutUs" onClick={() => setMenuOpen(false)}>
            Tentang Mindut
          </Link>
          <Link to="/#catering" onClick={() => setMenuOpen(false)}>
            Catering
          </Link>
          <a href="#spicy-bites" onClick={() => setMenuOpen(false)}>
            Spicy Bites
          </a>
          <Link to="/kontak" onClick={() => setMenuOpen(false)}>
            Kontak
          </Link>
          <a
            href="https://wa.me/6281234567890?text=Halo%20saya%20mau%20pesan%20catering"
            target="_blank"
            rel="noreferrer"
            className="mt-2 px-4 py-2 rounded-full font-semibold transition-colors"
            style={{
              backgroundColor: "#f5b74b",
              color: "#9a0906",
            }}
            onClick={() => setMenuOpen(false)}
          >
            Pesan Sekarang
          </a>
        </div>
      )}
    </nav>
  );
}