'use client';

import { memo, useCallback, useState } from "react";
import { ChevronDown, ChevronUp, PhoneCall } from "lucide-react";
import Image from "next/image";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = memo(({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const faqId = `faq-${question.replace(/\s+/g, '-').toLowerCase()}`;

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <article className="bg-gray-800/20 rounded-md px-4 transition-all duration-300">
      <button
        className="w-full text-left py-4 flex justify-between items-center gap-4"
        onClick={toggleOpen}
        aria-expanded={isOpen}
        aria-controls={faqId}
        aria-label={`Expandir ou recolher a resposta para: ${question}`}
      >
        <span className="font-medium">{question}</span>
        <span 
          className="text-sm bg-red-700 rounded-md w-8 h-8 flex items-center justify-center text-white shrink-0"
          aria-hidden="true"
        >
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </span>
      </button>
      {isOpen && (
        <div 
          id={faqId}
          className="pb-4 text-gray-300 animate-in slide-in-from-top-2 duration-200"
          role="region"
          aria-labelledby={`heading-${faqId}`}
        >
          <h3 id={`heading-${faqId}`} className="sr-only">{question}</h3>
          {answer}
        </div>
      )}
    </article>
  );
});

FAQItem.displayName = "FAQItem";

const FAQ_DATA = [
  {
    question: "Quando começa e termina a Black Ancore?",
    answer: "A Black Ancore começa no dia 17 de novembro e termina no dia 30 de novembro."
  },
  {
    question: "Como funciona o sorteio dos R$1.000?",
    answer: "Serão sorteados 5 PIX de R$1.000 entre os novos associados que fecharem a proteção durante o período da Black Ancore, de 17 a 30 de novembro. O sorteio será realizado no dia 10 de dezembro, às 17h."
  },
  {
    question: "Os benefícios são válidos por quanto tempo?",
    answer: "Os brindes especiais da Black já estarão vigentes no momento da ativação da proteção. Os benefícios do plano de proteção seguem válidos durante toda a vigência da filiação, conforme contratado."
  },
] as const;

const QuestionsSection = memo(() => {
  return (
    <section 
      id="perguntas-frequentes"
      className="container py-16 px-4 mx-auto"
      aria-labelledby="faq-main-title"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
        <aside className="flex flex-col justify-center items-center bg-slate-700/40 rounded-md px-6 md:px-8 py-8 lg:py-12 gap-6 text-center max-w-md lg:max-w-lg mx-auto lg:mx-0 lg:sticky lg:top-24">
          <Image
            src="/AncoreLogo.svg"
            alt="Logo da Ancore - Empresa de proteção e seguros"
            width={120}
            height={56}
            className="md:w-[140px] lg:w-40 h-auto"
            loading="lazy"
          />
          <p className="max-w-md text-gray-300 text-sm md:text-base">
            Se você tiver alguma dúvida sobre a Black Ancore, estamos à
            disposição no WhatsApp. Nossa equipe responderá diretamente a todas
            as suas perguntas.
          </p>
          <a 
            href="https://wa.me/5562993193427"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium bg-linear-to-r from-emerald-600 to-green-600 py-3 md:py-4 px-8 md:px-10 rounded-md text-sm hover:from-emerald-700 hover:to-green-700 transition-all flex gap-3 items-center hover:scale-105 active:scale-95"
            aria-label="Entrar em contato com o suporte via WhatsApp para dúvidas sobre Black Ancore"
          >
            <PhoneCall className="w-5 h-5" aria-hidden="true" />
            <span>FALAR COM O SUPORTE</span>
          </a>
        </aside>
        
        <div className="flex flex-col gap-4" role="region" aria-labelledby="faq-main-title">
          <h2 
            id="faq-main-title"
            className="text-2xl md:text-3xl font-bold mb-2 md:mb-4"
          >
            Perguntas Frequentes sobre Black Ancore
          </h2>
          {FAQ_DATA.map((faq, index) => (
            <FAQItem 
              key={`faq-${index}`} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>
      </div>
    </section>
  );
});

QuestionsSection.displayName = "QuestionsSection";

export default QuestionsSection;
