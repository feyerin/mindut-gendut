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

        {/* Right section */}
        <div className="flex items-center gap-6">
          {/* Desktop & Tablet Menu */}
          <ul className="hidden sm:flex gap-5 font-semibold text-white relative">
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

            {/* Spicy Bites Dropdown */}
            <li className="relative group">
              <div className="flex items-center gap-1 cursor-pointer">
                <a
                  href="/spicyBites"
                  className="transition-colors text-white hover:text-gray-300"
                >
                  Spicy Bites
                </a>
                <ChevronDown
                  size={16}
                  className="group-hover:rotate-180 transition-transform"
                />
              </div>

              {/* Dropdown */}
              <div className="absolute left-0 top-full pt-2 group-hover:block hidden z-50">
                <ul className="flex flex-col bg-[#5c0b0b] text-white rounded-md shadow-md w-56 overflow-hidden transition-all duration-200 transform origin-top scale-y-95 group-hover:scale-y-100 opacity-0 group-hover:opacity-100">
                  <li>
                    <Link
                      to="/spicyBites/bumbu-ungkep"
                      className="block px-4 py-2 hover:bg-[#7a1212]"
                    >
                      Bumbu Ungkep
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/spicyBites/ayam-ungkep"
                      className="block px-4 py-2 hover:bg-[#7a1212]"
                    >
                      Ayam Ungkep
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/spicyBites/sambal"
                      className="block px-4 py-2 hover:bg-[#7a1212]"
                    >
                      Sambal
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/spicyBites/sambal-lauk"
                      className="block px-4 py-2 hover:bg-[#7a1212]"
                    >
                      Sambal Lauk
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/spicyBites/sapi"
                      className="block px-4 py-2 hover:bg-[#7a1212]"
                    >
                      Sapi
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/spicyBites/kripik-kentang"
                      className="block px-4 py-2 hover:bg-[#7a1212]"
                    >
                      Kripik Kentang
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/spicyBites/tahu"
                      className="block px-4 py-2 hover:bg-[#7a1212]"
                    >
                      Tahu
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/spicyBites/tempe"
                      className="block px-4 py-2 hover:bg-[#7a1212]"
                    >
                      Tempe
                    </Link>
                  </li>
                </ul>
              </div>
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

          {/* Desktop/Tablet Button */}
          <a
            href="https://wa.me/628119938180?text=Halo%20saya%20mau%20pesan%20catering"
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

          {/* Tablet Icon */}
          <a
            href="https://wa.me/628119938180?text=Halo%20saya%20mau%20pesan%20catering"
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

          {/* Mobile Spicy Bites Dropdown */}
          <div className="flex flex-col items-center w-full">
            <button
              onClick={() => setSpicyOpen(!spicyOpen)}
              className="flex items-center gap-1"
            >
              Spicy Bites
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  spicyOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {spicyOpen && (
              <div className="flex flex-col items-center mt-2 text-sm gap-2">
                <Link to="/spicyBites/bumbu-ungkep" onClick={() => setMenuOpen(false)}>
                  Bumbu Ungkep
                </Link>
                <Link to="/spicyBites/ayam-ungkep" onClick={() => setMenuOpen(false)}>
                  Ayam Ungkep
                </Link>
                <Link to="/spicyBites/sambal" onClick={() => setMenuOpen(false)}>
                  Sambal
                </Link>
                <Link to="/spicyBites/sambal-lauk" onClick={() => setMenuOpen(false)}>
                  Sambal Lauk
                </Link>
                <Link to="/spicyBites/sapi" onClick={() => setMenuOpen(false)}>
                  Sapi
                </Link>
                <Link to="/spicyBites/kripik-kentang" onClick={() => setMenuOpen(false)}>
                  Kripik Kentang
                </Link>
                <Link to="/spicyBites/tahu-tempe" onClick={() => setMenuOpen(false)}>
                  Tahu Tempe
                </Link>
              </div>
            )}
          </div>

          <Link to="/kontak" onClick={() => setMenuOpen(false)}>
            Kontak
          </Link>
          <a
            href="https://wa.me/628119938180?text=Halo%20saya%20mau%20pesan%20catering"
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