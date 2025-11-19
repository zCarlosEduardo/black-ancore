import { memo } from "react";
import Image from "next/image";
import CTAButton from "./CTAButton";

const HeroSection = memo(() => {
  return (
    <section className="mt-20 flex items-center justify-center px-4 min-h-0">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-16 xl:gap-20 w-full max-w-7xl">
        <Image
          src="/IconHome.svg"
          alt="Ilustração Black Ancore"
          width={600}
          height={550}
          loading="eager"
          priority
          fetchPriority="high"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto aspect-600/550"
        />
        <div className="flex flex-col gap-4 lg:gap-5 xl:gap-6 lg:mt-10 xl:mt-12 max-w-sm md:max-w-md lg:max-w-lg text-center lg:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold ">
            Não é desconto de fachada. <br />
            <span className="text-red-600">É bônus de verdade!</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-extralight max-w-sm md:max-w-md lg:max-w-lg leading-relaxed">
            Feche sua proteção durante a{" "}
            <span className="font-bold">Black Ancore</span> e garanta vários benefícios!
          </p>
          <CTAButton
            text="QUERO ATIVAR AGORA!"
            extraClasses="py-3 md:py-4 lg:py-5 xl:py-6 px-6 lg:px-8 text-base md:text-lg will-change-transform"
          />
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
