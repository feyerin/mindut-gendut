import HeroCarousel from "./heroCarousel";
import QualitySection from "./qualitySection";
import HeroCarousel2 from "./heroCarousel2";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden w-full bg-primary" 
    //   style={{
    //     backgroundImage: "url('/background/main.png')",
    //     backgroundSize: "cover",
    // backgroundRepeat: "no-repeat",
    //   }}
    >
      <HeroCarousel />
      <HeroCarousel2 />
      <QualitySection />
    </section>
  );
}