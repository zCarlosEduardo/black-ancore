import CTAButton from "./CTAButton";
import Image from "next/image";

const BLUR_EFFECTS = [
  {
    className:
      "hidden md:block absolute top-1/3 left-0 -translate-x-1/4 -translate-y-1/5 bg-red-600 opacity-10 blur-3xl w-[800px] h-[700px] rounded-full pointer-events-none will-change-transform",
  },
  {
    className:
      "md:hidden absolute top-1/4 right-0 bg-red-600 opacity-20 blur-xl w-48 h-48 rounded-full pointer-events-none will-change-transform"
  },
  {
    className:
      "md:hidden absolute bottom-5 -left-12 -translate-x-1/4 bg-red-600 opacity-20 blur-xl w-72 h-72 rounded-full pointer-events-none will-change-transform ", 
  },
];

export default function VideoSection() {
  return (
    <section className="flex flex-col gap-8 md:gap-12 justify-center items-center pt-16 md:pt-32 lg:pt-40 pb-16 md:pb-24 lg:pb-32 relative px-4 md:min-h-screen overflow-visible min-h-0 "> 

      <div className="absolute top-0 left-0 w-full h-48 sm:h-60 -mt-32 sm:-mt-40 lg:-mt-48 z-50 pointer-events-none sm:translate-y-32 lg:translate-y-28">
        <Image
          src="/Faixas.svg"
          alt=""
          fill
          className="object-cover"
          loading="eager"
          priority
          aria-hidden="true"
        />
      </div>

      {BLUR_EFFECTS.map((effect, i) => (
        <div key={i} className={effect.className} />
      ))}

      {/* Título da seção */}
      <div className="relative max-w-4xl text-center px-4">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">
          Confira tudo que você vai receber na Black Ancore:
        </h2>
      </div>

      {/* Container para vídeo */}
      <div className="bg-stone-950/40 w-full max-w-sm md:max-w-2xl lg:max-w-5xl h-64 md:h-96 lg:h-[520px] rounded-xl relative flex items-center justify-center overflow-hidden">
        <iframe
          className="w-full h-full rounded-xl"
          src="https://www.youtube-nocookie.com/embed/H9SNBFqXBU8?si=WmjERUK-eN3lNKdY&vq=hd720"
          title="Vídeo Black Ancore"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* CTA */}
      <div className="relative">
        <CTAButton
          text="QUERO ATIVAR AGORA!"
          extraClasses="px-12 md:px-24 lg:px-32 text-base md:text-lg"
        />
      </div>
    </section>
  );
}