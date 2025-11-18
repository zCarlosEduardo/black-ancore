import Image from "next/image";
import PowerCRMForm from "./PowerCRMForm";
import QuestionsSection from "./Questions";

export default function RaffleSection() {
  return (
    <div className="relative">
      {/* Background otimizado */}
      <div className="absolute right-0 top-0 bottom-0 pointer-events-none w-full lg:w-[calc(100%-240px)]">
        <Image
          src="/BackgroundBall.svg"
          alt=""
          fill
          className="object-contain object-right"
          loading="lazy"
          aria-hidden="true"
        />
      </div>

      <section
        id="sorteios"
        className="relative z-10 flex flex-col lg:flex-row items-center justify-center text-center gap-8 lg:gap-20 px-4 py-12 lg:py-16"
      >
        {/* Imagem ilustrativa */}
        <Image
          src="/IconSorteio.svg"
          alt="Ilustração de sorteio"
          width={600}
          height={550}
          className="w-full max-w-md sm:max-w-xl md:max-w-4xl lg:w-[700px] xl:w-[960px] h-auto"
          loading="lazy"
        />

        {/* Conteúdo textual */}
        <div className="text-center lg:text-start flex flex-col gap-4 lg:gap-6 max-w-2xl lg:max-w-none lg:-translate-x-[168px] lg:-translate-y-12">
          <h2 className="font-bold mb-6 lg:mb-12 text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-xl md:max-w-2xl lg:max-w-[496px]">
            E tem mais: Concorra a sorteios de{" "}
            <span className="text-red-600">5 PIX de R$1.000,00!</span>
          </h2>
          <p className="text-xl md:text-2xl lg:text-2xl xl:text-3xl font-light max-w-xl md:max-w-2xl lg:max-w-[568px]">
            Durante o período da{" "}
            <span className="font-bold">Black Ancore,</span> todo novo
            associado concorre automaticamente a{" "}
            <span className="font-bold">5 PIX de R$1.000,00.</span> Nada de
            cupom, nada de sorteio enrolado,{" "}
            <span className="font-bold">fechou, tá dentro!</span>
          </p>
        </div>
      </section>

      <section id="formulario" className="relative z-10">
      {/* <PowerCRMForm /> */}
      </section>

      <QuestionsSection />
    </div>
  );
}
