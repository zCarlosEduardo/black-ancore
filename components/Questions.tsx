'use client';

import { ChevronDown, ChevronUp, PhoneCall } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800/20 rounded-md px-4 transition-all duration-300">
      <button
        className="w-full text-left py-4 flex justify-between items-center gap-4"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-${question.slice(0, 20)}`}
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
          id={`faq-${question.slice(0, 20)}`}
          className="pb-4 text-gray-300 animate-in slide-in-from-top-2 duration-200"
        >
          {answer}
        </div>
      )}
    </div>
  );
}

// Dados movidos para fora do componente (não recriam a cada render)
const FAQ_DATA = [
  {
    question: "Quando começa e termina a Black Ancore?",
    answer: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    question: "Como funciona o sorteio dos R$1.000?",
    answer: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    question: "Os benefícios são válidos por quanto tempo?",
    answer: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    question: "Posso parcelar o pagamento?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
] as const;

export default function QuestionsSection() {
  return (
    <section className="container py-16 px-4 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
        {/* Left Column: Contact Support */}
        <div className="flex flex-col justify-center items-center bg-slate-700/40 rounded-md px-6 md:px-8 py-8 lg:py-12 gap-6 text-center max-w-md lg:max-w-lg mx-auto lg:mx-0 lg:sticky lg:top-24">
          <Image
            src="/AncoreLogo.svg"
            alt="Ancore Logo"
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
            aria-label="Entrar em contato via WhatsApp"
          >
            <PhoneCall className="w-5 h-5" aria-hidden="true" />
            <span>FALAR COM O SUPORTE</span>
          </a>
        </div>
        
        {/* Right Column: FAQ */}
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4">Perguntas Frequentes</h2>
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
}