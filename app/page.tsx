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
      <div className="relative w-full h-48 sm:h-60 -mt-32 sm:-mt-40 lg:-mt-48 z-50 pointer-events-none sm:translate-y-32 lg:translate-y-28">
        <Image
          src="/Faixas.svg"
          alt=""
          fill
          className="object-cover"
          priority={false}
          aria-hidden="true"
        />
      </div>

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
    <header className="relative overflow-hidden h-[115vh] sm:h-[95vh] xl:h-[110vh] lg:h-[120vh]">
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
      </div>
    </header>
  );
}