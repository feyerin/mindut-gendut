"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat({
  phone = "6281234567890",
  message = "Halo! Saya mau pesan catering.",
}: {
  phone?: string;
  message?: string;
}) {
  const encoded = encodeURIComponent(message);
  const href = `https://wa.me/${phone}?text=${encoded}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed right-6 bottom-6 z-50 flex items-center justify-center"
    >
      <div
        className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg animate-bounce"
        style={{ backgroundColor: "#25D366" }} // WhatsApp green
      >
        <FaWhatsapp className="text-white text-3xl md:text-4xl" />
      </div>
    </a>
  );
}