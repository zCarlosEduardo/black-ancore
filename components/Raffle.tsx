'use client';

import { memo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import QuestionsSection from "./Questions";

// Lazy load do formulário com SSR desabilitado para melhor performance inicial
const PowerCRMForm = dynamic(() => import("./PowerCRMForm"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[200px] bg-black/5 rounded-lg animate-pulse" 
         aria-label="Carregando formulário" 
    />
  ),
});

const RaffleSection = memo(() => {
  return (
    <div className="relative">
      {/* Background decorativo - Container fixo para evitar reflow */}
      <div 
        className="absolute right-0 top-0 bottom-0 pointer-events-none w-full lg:w-[calc(100%-240px)] -z-10"
        role="presentation"
        aria-hidden="true"
      >
        <div className="relative w-full h-full">
          <Image
            src="/BackgroundBall.svg"
            alt="" 
            fill
            className="object-contain object-right"
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, calc(100vw - 240px)"
            quality={75}
          />
        </div>
      </div>

      {/* Seção de Sorteios */}
      <section
        id="sorteios"
        className="relative z-10 flex flex-col lg:flex-row items-center justify-center text-center gap-8 xl:gap-20 px-4 py-12 xl:py-16"
        aria-labelledby="raffle-title"
      >
        {/* Imagem principal com container otimizado */}
        <div className="relative w-full max-w-md sm:max-w-xl md:max-w-4xl xl:w-[700px] 2xl:w-[960px] aspect-600/550">
          <Image
            src="/IconSorteio.svg"
            alt="Ilustração de sorteio PIX Black Ancore com prêmios de R$1.000,00"
            fill
            className="object-contain"
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 50vw, 960px"
            quality={85}
          />
        </div>
        
        {/* Conteúdo textual */}
        <article className="text-center lg:text-start flex flex-col gap-4 lg:gap-6 max-w-2xl lg:max-w-none lg:-translate-x-[168px] lg:-translate-y-12">
          <h2 
            id="raffle-title"
            className="font-bold mb-6 lg:mb-12 text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl max-w-xl md:max-w-2xl lg:max-w-[496px]"
          >
            E tem mais: Concorra a sorteios de{" "}
            <span className="text-red-600">5 PIX de R$1.000,00!</span>
          </h2>
          
          <p className="text-xl md:text-2xl xl:text-2xl 2xl:text-3xl font-light max-w-xl md:max-w-2xl lg:max-w-[568px]">
            Durante o período da{" "}
            <strong className="font-bold">Black Ancore,</strong> todo novo associado
            concorre automaticamente a{" "}
            <strong className="font-bold">5 PIX de R$1.000,00.</strong> Nada de
            cupom, nada de sorteio enrolado,{" "}
            <strong className="font-bold">fechou, tá dentro!</strong>
          </p>
        </article>
      </section>

      {/* Seção de Formulário */}
      <section 
        id="formulario" 
        className="relative z-10"
        aria-labelledby="form-title"
      >
        <h3 id="form-title" className="sr-only">Formulário de Inscrição para Sorteios</h3>
        <PowerCRMForm />
      </section>

      {/* Seção de Perguntas */}
      <QuestionsSection />
    </div>
  );
});

RaffleSection.displayName = "RaffleSection";

export default RaffleSection;