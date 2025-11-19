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
      <div className="relative">
        <VideoSection />
        <BenefitsSection />
        <RaffleSection />
      </div>
      <FooterSection />
    </>
  );
}

function Header() {
  return (
    <header className="relative overflow-hidden min-h-[calc(100vh+4rem)] sm:min-h-[calc(100vh+4rem)] md:min-h-[calc(85vh)] lg:min-h-[calc(100vh+4rem)] xl:min-h-[calc(100vh+12rem)] header-2xl">
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
      </div>
    </header>
  );
}