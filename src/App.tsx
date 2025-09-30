import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Shop from "./pages/shop";
import WhatsAppFloat from "./components/whatsappFloat";
import AboutUs from "./pages/aboutUs";
import MenuPage from "./pages/menu";
import ContactUs from "./pages/contactUs";

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // scroll ke element section
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // scroll top biasa
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <ScrollHandler />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Menu" element={<MenuPage />} />
          <Route path="/kontak" element={<ContactUs />} />
        </Routes>
        <WhatsAppFloat phone="6281234567890" message="Halo, saya mau pesan catering untuk 50 orang, kapan bisa?" />
      </main>
      
      <Footer />
    </div>
  );
}