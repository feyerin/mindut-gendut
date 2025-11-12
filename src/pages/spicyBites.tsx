"use client";

import { useEffect } from "react";
import BumbuUngkep from "../components/spicyBites/bumbuUngkep";
import AyamUngkep from "../components/spicyBites/ayamUngkep";
import Sambal from "../components/spicyBites/sambal";
import SambalLauk from "../components/spicyBites/sambalLauk";
import IgaMercon from "../components/spicyBites/igaMerconWarisan";
import KripikKentang from "../components/spicyBites/kripikKentang";
import Tahu from "../components/spicyBites/tahu";
import Tempe from "../components/spicyBites/tempe";

export default function SpicyBitesPage() {
  // Auto scroll ke hash di URL
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          const yOffset = -200;
          const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 300);
      }
    }
  }, []);

  return (
    <div className="w-full">
      <BumbuUngkep />
      <AyamUngkep />
      <Sambal />
      <SambalLauk />
      <IgaMercon />
      <KripikKentang />
      <Tahu />
      <Tempe />
    </div>
  );
}