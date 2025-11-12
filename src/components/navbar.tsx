"use client";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [spicyOpen, setSpicyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll untuk anchor link (#)
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        const el = document.querySelector(target.hash);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth" });
          setMenuOpen(false);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
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
          <img src="/logo.png" alt="Mindut Gendut" className="h-14" />
        </Link>

        {/* Desktop / Tablet Menu */}
        <div className="flex items-center gap-6">
          <ul className="hidden sm:flex gap-5 font-semibold text-white relative">
            <li>
              <Link to="/menu" className="hover:text-gray-300 transition-colors">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/aboutUs" className="hover:text-gray-300 transition-colors">
                Tentang Mindut
              </Link>
            </li>
            <li>
              <a href="/#catering" className="hover:text-gray-300 transition-colors">
                Catering
              </a>
            </li>

            {/* Spicy Bites Dropdown */}
            <li className="relative group">
              <div className="flex items-center gap-1 cursor-pointer select-none">
                <a href="/spicyBites" className="hover:text-gray-300 transition-colors">
                  Spicy Bites
                </a>
                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
              </div>

              {/* Dropdown */}
              <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50">
                <ul className="flex flex-col bg-[#5c0b0b] text-white rounded-md shadow-lg w-56 overflow-hidden">
                  {[
                    "bumbu-ungkep",
                    "ayam-ungkep",
                    "sambal",
                    "sambal-lauk",
                    "iga-mercon",
                    "kripik-kentang",
                    "tahu",
                    "tempe",
                  ].map((id) => (
                    <li key={id}>
                      <Link
                        to={`/spicyBites#${id}`}
                        className="block px-4 py-2 hover:bg-[#7a1212] transition-colors"
                      >
                        {id
                          .split("-")
                          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                          .join(" ")}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <Link to="/kontak" className="hover:text-gray-300 transition-colors">
                Kontak
              </Link>
            </li>
          </ul>

          {/* Desktop/Tablet Button */}
          <a
            href="https://wa.me/628119938180?text=Halo%20saya%20mau%20pesan%20catering"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-block px-4 py-2 rounded-full font-semibold bg-[#f5b74b] text-[#9a0906] hover:bg-[#e0a841] transition-colors"
          >
            Pesan Sekarang
          </a>

          {/* Tablet Icon */}
          <a
            href="https://wa.me/628119938180?text=Halo%20saya%20mau%20pesan%20catering"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-block md:hidden"
          >
            <MessageCircle className="text-[#f5b74b]" size={26} />
          </a>

          {/* Mobile Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-[#420606] text-white flex flex-col items-center gap-4 py-4 font-semibold">
          <Link to="/menu" onClick={() => setMenuOpen(false)}>Menu</Link>
          <Link to="/aboutUs" onClick={() => setMenuOpen(false)}>Tentang Mindut</Link>
          <a href="/#catering" onClick={() => setMenuOpen(false)}>Catering</a>

          {/* Mobile Dropdown */}
          <div className="flex flex-col items-center w-full">
            <button
              onClick={() => setSpicyOpen(!spicyOpen)}
              className="flex items-center gap-1"
            >
              Spicy Bites
              <ChevronDown
                size={16}
                className={`transition-transform ${spicyOpen ? "rotate-180" : ""}`}
              />
            </button>
            {spicyOpen && (
              <div className="flex flex-col items-center mt-2 text-sm gap-2">
                {[
                  "bumbu-ungkep",
                  "ayam-ungkep",
                  "sambal",
                  "sambal-lauk",
                  "sapi",
                  "kripik-kentang",
                  "tahu",
                  "tempe",
                ].map((id) => (
                  <Link key={id} to={`/spicyBites#${id}`} onClick={() => setMenuOpen(false)}>
                    {id
                      .split("-")
                      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                      .join(" ")}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/kontak" onClick={() => setMenuOpen(false)}>Kontak</Link>

          <a
            href="https://wa.me/628119938180?text=Halo%20saya%20mau%20pesan%20catering"
            target="_blank"
            rel="noreferrer"
            className="mt-2 px-4 py-2 rounded-full font-semibold bg-[#f5b74b] text-[#9a0906] hover:bg-[#e0a841] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Pesan Sekarang
          </a>
        </div>
      )}
    </nav>
  );
}