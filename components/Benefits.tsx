import { ArrowUpRight } from "lucide-react";
import CTAButton from "./CTAButton";

export default /**
 * Seção de benefícios da Black Ancore
 */
function BenefitsSection() {
  const benefits = [
    { highlight: "10% OFF", text: "na cota de participação" },
    { highlight: "+15 dias", text: "de carro reserva" },
    { highlight: "+R$100 mil", text: "para terceiros" },
    { highlight: "+200 km extras", text: "de guincho" },
    { highlight: "50% OFF", text: "na adesão" },
  ];

  return (
    <section id="beneficios">
      {/* Divider superior */}
      <div className="hidden md:block w-full h-1 bg-linear-to-r from-white to-red-600" />

      <div
        className="bg-cover bg-center bg-no-repeat relative w-full flex items-center justify-center py-12 md:py-16 shadow-2xl"
        style={{
          backgroundImage: "url('/BackgroundBeneficiosMobile.webp')",
          boxShadow: "inset 0 0 720px rgba(0, 0, 0, 100)",
          minHeight: "calc(100vh - 250px)",
        }}
      >
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
        backgroundImage: "url('/BackgroundBeneficios.webp')",
          }}
        />
        <div
          className="md:items-start flex flex-col justify-between md:justify-center gap-8 md:gap-12 px-4 md:px-8 max-w-2xl md:max-w-none md:-translate-x-20 lg:-translate-x-76 text-center md:text-left z-10 items-center md:min-h-0"
          style={{
            minHeight: "calc(100vh - 250px)",
          }}
        >
            <div className="flex flex-col gap-8 md:gap-12 items-center md:items-start">
            {/* Título da seção */}
            <h3 className="text-3xl md:text-4xl lg:text-6xl font-extralight max-w-xl md:max-w-2xl lg:w-124 text-center md:text-left">
              <span className="text-red-600 font-extrabold">
              Vai ficar de fora?
              </span>{" "}
              <br /> Se liga nesses benefícios:
            </h3>

            {/* Lista de benefícios */}
            <div>
              <ul className="gap-2 md:gap-3 flex flex-col items-center md:items-start">
              {benefits.map((benefit, index) => (
                <li
                key={index}
                className="flex gap-2 text-xl md:text-2xl lg:text-3xl font-light"
                >
                <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 font-extralight shrink-0" />
                <span>
                  <span className="font-bold text-red-600">
                  {benefit.highlight}
                  </span>{" "}
                  {benefit.text}
                </span>
                </li>
              ))}
              </ul>
            </div>
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
