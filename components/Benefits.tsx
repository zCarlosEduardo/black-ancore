import { memo } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import CTAButton from "./CTAButton";

// Dados estáticos fora do componente para evitar recriação
const BENEFITS = [
  { highlight: "10% OFF", text: "na cota de participação" },
  { highlight: "+15 dias", text: "de carro reserva" },
  { highlight: "+R$100 mil", text: "para terceiros" },
  { highlight: "+200 km extras", text: "de guincho" },
  { highlight: "50% OFF", text: "na adesão" },
] as const;

const BenefitsSection = memo(() => {
  return (
    <section id="beneficios" className="relative" aria-labelledby="benefits-title">
      {/* Divider superior */}
      <div className="hidden md:block w-full h-1 bg-linear-to-r from-white to-red-600" aria-hidden="true" />

      <div className="relative w-full flex items-center justify-center py-12 md:py-16 min-h-screen">
        {/* Background Desktop - CSS background para melhor performance */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/BackgroundBeneficios.webp')",
            willChange: 'transform',
          }}
          aria-hidden="true"
        />

        {/* Background Mobile - Image component otimizado */}
        <div className="md:hidden absolute inset-0" aria-hidden="true">
          <Image
            src="/BackgroundBeneficiosMobile.webp"
            alt=""
            fill
            className="object-cover brightness-50"
            sizes="100vw"
            quality={75}
            loading="lazy"
            priority={false}
          />
        </div>

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none" aria-hidden="true" />

        {/* Conteúdo */}
        <div className="relative z-10 flex flex-col justify-between md:justify-center gap-8 md:gap-12 px-4 md:px-8 max-w-2xl md:max-w-none md:-translate-x-20 lg:-translate-x-60 text-center md:text-left items-center md:items-start min-h-[calc(100vh-250px)] md:min-h-0">
          <div className="flex flex-col gap-8 md:gap-12 items-center md:items-start">
            {/* Título da seção */}
            <h2 
              id="benefits-title"
              className="text-4xl md:text-4xl xl:text-4xl 2xl:text-6xl font-extralight max-w-xl md:max-w-2xl lg:max-w-4xl text-center md:text-left"
            >
              <span className="text-red-600 font-extrabold">
                Vai ficar de fora?
              </span>{" "}
              <br /> Se liga nesses benefícios:
            </h2>

            {/* Lista de benefícios otimizada */}
            <ul 
              className="gap-2 md:gap-3 flex flex-col items-center md:items-start"
              aria-label="Lista de benefícios da Black Ancore"
            >
              {BENEFITS.map((benefit, index) => (
                <li
                  key={index}
                  className="flex gap-2 text-xl md:text-2xl xl:text-xl 2xl:text-3xl font-light"
                >
                  <ArrowUpRight
                    className="w-6 h-6 md:w-8 md:h-8 shrink-0 text-red-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-bold text-red-600">
                      {benefit.highlight}
                    </strong>{" "}
                    {benefit.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <CTAButton
            text="QUERO ATIVAR AGORA!"
            extraClasses="px-12 md:px-24 lg:px-32 text-base md:text-lg will-change-transform"
            aria-label="Ativar benefícios da Black Ancore agora"
          />
        </div>
      </div>

      {/* Divider inferior */}
      <div className="hidden md:block w-full h-1 bg-linear-to-r from-white to-red-600" aria-hidden="true" />
    </section>
  );
});

BenefitsSection.displayName = "BenefitsSection";

export default BenefitsSection;