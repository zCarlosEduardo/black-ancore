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
        className="w-full text-left py-4 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{question}</span>
        <span className="text-sm bg-red-700 rounded-md w-8 h-8 flex items-center justify-center text-white">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-300">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function QuestionsSection() {
  return (
    <section className="container py-16 px-4 mx-auto flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {/* Left Column: Contact Support */}
        <div className="flex flex-col justify-center items-center  bg-slate-700/40 rounded-md px-6 md:px-8 gap-6 text-center max-w-md lg:max-w-lg h-96">
          <Image
            src="/AncoreLogo.svg"
            alt="Ancore Logo"
            width={120}
            height={56}
            className="md:w-[140px] lg:w-40"
          />
          <p className="max-w-md text-gray-300">
            Se você tiver alguma dúvida sobre a Black Ancore, estamos à
            disposição no WhatsApp. Nossa equipe responderá diretamente a todas
            as suas perguntas.
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight bg-linear-to-r from-emerald-600 to-green-600 py-4 px-10 rounded-md text-sm hover:from-emerald-800 hover:to-green-700 transition-colors flex gap-3 items-center "
          >
            <span> <PhoneCall></PhoneCall> </span>
            FALAR COM O SUPORTE
          </a>
        </div>
        
        {/* Right Column: FAQ */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold mb-4">Perguntas Frequentes</h3>
          {[
            {
              question: "Alguma dúvida sobre a Black Ancore?",
              answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident excepturi ex ab quisquam rerum nesciunt, asperiores ipsam mollitia fugiat eius possimus veniam, debitis corporis et officia explicabo beatae corrupti molestias."
            },
            {
              question: "Alguma dúvida sobre a Black Ancore?",
              answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident excepturi ex ab quisquam rerum nesciunt, asperiores ipsam mollitia fugiat eius possimus veniam, debitis corporis et officia explicabo beatae corrupti molestias."
            },
            {
              question: "Alguma dúvida sobre a Black Ancore?",
              answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident excepturi ex ab quisquam rerum nesciunt, asperiores ipsam mollitia fugiat eius possimus veniam, debitis corporis et officia explicabo beatae corrupti molestias."
            },
            {
              question: "Alguma dúvida sobre a Black Ancore?",
              answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident excepturi ex ab quisquam rerum nesciunt, asperiores ipsam mollitia fugiat eius possimus veniam, debitis corporis et officia explicabo beatae corrupti molestias."
            }
          ].map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}