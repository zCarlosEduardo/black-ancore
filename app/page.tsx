import BenefitsSection from "@/components/Benefits";
import FooterSection from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Navigation from "@/components/Nav";
import RaffleSection from "@/components/Raffle";
import VideoSection from "@/components/Video";

export default function Home() {
  return (
    <>
      <Header />
      <main >
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
      className="bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: "url('/BackgroundHome.jpg')",
        height: "calc(100vh - 2rem)",
        boxShadow: "inset 0 0 500px rgba(0, 0, 0, 100)",
      }}
    >
      <Navigation />
      <HeroSection />
    </header>
  );
}
