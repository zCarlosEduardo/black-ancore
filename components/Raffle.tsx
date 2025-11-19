import { memo } from "react";
import Image from "next/image";
import PowerCRMForm from "./PowerCRMForm";
import QuestionsSection from "./Questions";

const RaffleSection = memo(() => {
  return (
    <div className="relative">
      {/* Background decorativo - Otimizado para performance com lazy loading */}
      <div 
        className="absolute right-0 top-0 bottom-0 pointer-events-none w-full lg:w-[calc(100%-240px)]"
        role="presentation"
        aria-hidden="true"
      >
        <Image
          src="/BackgroundBall.svg"
          alt="" 
          fill
          className="object-contain object-right"
          loading="lazy"
          sizes="(max-width: 1024px) 100vw, calc(100vw - 240px)"
        />
      </div>

      <section
        id="sorteios"
        className="relative z-10 flex flex-col lg:flex-row items-center justify-center text-center gap-8 xl:gap-20 px-4 py-12 xl:py-16"
        aria-labelledby="raffle-title"
      >
        <Image
          src="/IconSorteio.svg"
          alt="Ilustração de sorteio PIX Black Ancore com prêmios de R$1.000,00"
          width={600}
          height={550}
          className="w-full max-w-md sm:max-w-xl md:max-w-4xl xl:w-[700px] 2xl:w-[960px] h-auto"
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw, 960px"
        />
        
        <article className="text-center lg:text-start flex flex-col gap-4 lg:gap-6 max-w-2xl lg:max-w-none lg:-translate-x-[168px] lg:-translate-y-12 ">
          <h2 
            id="raffle-title"
            className="font-bold mb-6 lg:mb-12 text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl max-w-xl md:max-w-2xl lg:max-w-[496px]"
          >
            E tem mais: Concorra a sorteios de{" "}
            <span className="text-red-600">5 PIX de R$1.000,00!</span>
          </h2>
          <p className="text-xl md:text-2xl xl:text-2xl 2xl:text-3xl font-light max-w-xl md:max-w-2xl lg:max-w-[568px]">
            Durante o período da{" "}
            <span className="font-bold">Black Ancore,</span> todo novo associado
            concorre automaticamente a{" "}
            <span className="font-bold">5 PIX de R$1.000,00.</span> Nada de
            cupom, nada de sorteio enrolado,{" "}
            <span className="font-bold">fechou, tá dentro!</span>
          </p>
        </article>
      </section>

      <section 
        id="formulario" 
        className="relative z-10"
        aria-labelledby="form-title"
      >
        <h3 id="form-title" className="sr-only">Formulário de Inscrição para Sorteios</h3>
        <PowerCRMForm />
      </section>

      <QuestionsSection />
    </div>
  );
});

RaffleSection.displayName = "RaffleSection";

export default RaffleSection;
