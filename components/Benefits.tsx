import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import CTAButton from "./CTAButton";

export default function BenefitsSection() {
  const benefits = [
    { highlight: "10% OFF", text: "na cota de participação" },
    { highlight: "+15 dias", text: "de carro reserva" },
    { highlight: "+R$100 mil", text: "para terceiros" },
    { highlight: "+200 km extras", text: "de guincho" },
    { highlight: "50% OFF", text: "na adesão" },
  ];

  return (
    <section id="beneficios" className="relative">
      {/* Divider superior */}
      <div className="hidden md:block w-full h-1 bg-linear-to-r from-white to-red-600" />

      <div
        className="relative w-full flex items-center justify-center py-12 md:py-16 min-h-[calc(100vh-250px)]"
        style={{
          height: "95vh",
          backgroundImage: "url('/BackgroundBeneficios.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          
        }}
      >
        {/* Background Mobile - carrega apenas em mobile */}
        <Image
          src="/BackgroundBeneficiosMobile.webp"
          alt=""
          fill
          className="object-cover md:hidden"
          sizes="100vw"
          quality={75}
          priority={false}
          style={{
            filter: "brightness(0.5)",
          }}
        />

        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Conteúdo */}
        <div className="relative z-10 flex flex-col justify-between md:justify-center gap-8 md:gap-12 px-4 md:px-8 max-w-2xl md:max-w-none md:-translate-x-20 lg:-translate-x-60 text-center md:text-left items-center md:items-start min-h-[calc(100vh-250px)] md:min-h-screen">
          <div className="flex flex-col gap-8 md:gap-12 items-center md:items-start">
            {/* Título da seção */}
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-extralight max-w-xl md:max-w-2xl lg:max-w-4xl text-center md:text-left">
              <span className="text-red-600 font-extrabold">
                Vai ficar de fora?
              </span>{" "}
              <br /> Se liga nesses benefícios:
            </h2>

            {/* Lista de benefícios */}
            <ul className="gap-2 md:gap-3 flex flex-col items-center md:items-start">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex gap-2 text-xl md:text-2xl lg:text-3xl font-light"
                >
                  <ArrowUpRight
                    className="w-6 h-6 md:w-8 md:h-8 font-extralight shrink-0"
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

          {/* CTA */}
          <CTAButton
            text="QUERO ATIVAR AGORA!"
            extraClasses="px-12 md:px-24 lg:px-32 text-base md:text-lg"
          />
        </div>
      </div>

      {/* Divider inferior */}
      <div className="hidden md:block w-full h-1 bg-linear-to-r from-white to-red-600" />
    </section>
  );
}
