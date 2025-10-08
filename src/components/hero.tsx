import HeroCarousel from "./heroCarousel";
import SpicyBites from "./spicyBites";
import QualitySection from "./qualitySection";
import HeroCarousel2 from "./heroCarousel2";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden " 
      style={{
        backgroundImage: "url('/background/main.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <HeroCarousel />
      <HeroCarousel2 />
      <SpicyBites />
      <QualitySection />
    </section>
  );
}