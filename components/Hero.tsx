import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center text-center mt-8 lg:mt-12 gap-8 lg:gap-20 px-4">
        <Image
          src="/IconHome.svg"
          alt="Ilustração Black Ancore"
          width={600}
          height={550}
          loading="eager"
          priority
          className="w-full max-w-md lg:max-w-xl h-auto"
        />

        {/* Conteúdo textual */}
        <div className="text-center lg:text-left flex flex-col gap-4 lg:gap-6 lg:mt-12 max-w-md">
          <div className="flex flex-col gap-4 lg:gap-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center lg:text-start">
              Não é desconto de fachada. <br />
              <span className="text-red-600">É bônus de verdade!</span>
            </h1>
            <p className="text-center lg:text-start text-xl md:text-2xl lg:text-2xl xl:text-3xl font-extralight max-w-md lg:max-w-96">
              Feche sua proteção durante a{" "}
              <span className="font-bold">Black Ancore</span> e garanta vários
              benefícios!
            </p>
          </div>
          <a
            href="#formulario"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 lg:py-5 xl:py-7 px-6 lg:px-8 rounded-full transition-colors text-base md:text-lg inline-block text-center"
          >
            QUERO ATIVAR AGORA!
          </a>
        </div>
      </div>

    </section>
  );
}