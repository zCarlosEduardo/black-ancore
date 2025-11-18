import Image from "next/image";
import CTAButton from "./CTAButton";

export default function HeroSection() {
  return (
    <section className="mt-20 flex items-center justify-center px-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-20 w-full max-w-6xl">
        <Image
          src="/IconHome.svg"
          alt="Ilustração Black Ancore"
          width={600}
          height={550}
          priority
          className="w-full max-w-md lg:max-w-xl h-auto"
        />
        <div className="flex flex-col gap-4 lg:gap-6 lg:mt-12 max-w-md text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            Não é desconto de fachada. <br />
            <span className="text-red-600">É bônus de verdade!</span>
          </h1>
          <p className="text-xl md:text-2xl xl:text-3xl font-extralight max-w-md lg:max-w-96">
            Feche sua proteção durante a{" "}
            <span className="font-bold">Black Ancore</span> e garanta vários benefícios!
          </p>
          <CTAButton
            text="QUERO ATIVAR AGORA!"
            extraClasses="py-4 lg:py-5 xl:py-7 px-6 lg:px-8 text-base md:text-lg"
          />
        </div>
      </div>
    </section>
  );
}
