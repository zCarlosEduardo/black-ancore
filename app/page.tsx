import BenefitsSection from "@/components/Benefits";
import FooterSection from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navigation from "@/components/Nav";
import RaffleSection from "@/components/Raffle";
import VideoSection from "@/components/Video";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      
      {/* FAIXAS AQUI FORA DO HEADER! */}
      <div className="relative w-full h-48 sm:h-60 -mt-32 sm:-mt-40 lg:-mt-48 z-50 pointer-events-none sm:translate-y-16 lg:translate-y-28">
        <Image
          src="/Faixas.svg"
          alt=""
          fill
          className="object-cover"
          priority={false}
          aria-hidden="true"
        />
      </div>

      <main className="relative">
        <VideoSection />
        <BenefitsSection />
        <RaffleSection />
      </main>
      <FooterSection />
    </>
  );
}

/**
 * Componente do Header
 * Contém a navegação, logo e hero section
 */
function Header() {
  return (
    <header
      className="relative overflow-hidden"
      style={{
        height: "calc(100vh - 2rem)",
      }}
    >
      {/* Background otimizado com next/image */}
      <Image
        src="/BackgroundHome.webp"
        alt="Background"
        fill
        priority
        quality={85}
        className="object-cover"
        style={{
          filter: "brightness(0.4)",
        }}
      />
      
      {/* Conteúdo sobre o background */}
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
      </div>
    </header>
  );
}