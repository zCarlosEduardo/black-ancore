'use client';

import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import CTAButton from './CTAButton';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { href: "#inicio", label: "Início", isActive: true },
    { href: "#beneficios", label: "Benefícios", isActive: false },
    { href: "#sorteios", label: "Sorteios", isActive: false },
    { href: "#formulario", label: "Formulário", isActive: false },
  ];

  return (
    <section className="pt-8 lg:pt-18 scroll-smooth">
      {/* Desktop Navigation (apenas para telas grandes) */}
      <div className="hidden lg:flex flex-row items-center gap-8 xl:gap-12 p-4 justify-center w-full">
        {/* Logo */}
        <img
          src="/AncoreLogo.svg"
          alt="Ancore Logo"
          className="w-[140px] xl:w-40 h-auto"
        />

        {/* Menu de navegação */}
        <nav className="flex space-x-4 border rounded-full border-red-600 backdrop-blur">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`py-3 px-4 xl:py-4 xl:px-6 hover:text-gray-400 transition-colors text-base xl:text-lg ${
                link.isActive ? "" : "text-gray-300"
              } ${link.href === "#inicio" ? "ml-4 xl:ml-6" : ""} ${
                link.href === "#formulario" ? "mr-4 xl:mr-6" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
            <a
      href="#formulario"
      className={`bg-red-600 hover:bg-red-700 text-white font-extrabold py-4.5 px-12 rounded-full transition-colors text-sm inline-block text-center `}
    >
      QUERO MEU DESCONTO!
    </a>
      </div>

      {/* Mobile & Tablet Navigation */}
      <div className="lg:hidden flex flex-col items-center w-full px-4">
        {/* Header com Logo e Toggle */}
        <div className="flex items-center justify-between w-full p-4 border border-red-600 rounded-full backdrop-blur bg-black/40 relative z-50">
          {/* Logo */}
          <img
            src="/AncoreLogo.svg"
            alt="Ancore Logo"
            className="w-24 md:w-32 h-auto"
          />

          {/* Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-sm bg-red-700 rounded-md w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white hover:bg-red-800 transition-colors"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        {/* Backdrop Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Menu Mobile & Tablet (Dropdown com position absolute) */}
        <div
          className={`fixed top-24 left-4 right-4 z-50 transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col border border-red-600 rounded-2xl backdrop-blur bg-black/80 overflow-hidden shadow-2xl shadow-red-600/20">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-4 md:py-5 px-6 md:px-8 hover:bg-red-600/20 transition-colors text-base md:text-lg ${
                  link.isActive ? "text-white font-semibold" : "text-gray-300"
                } ${index !== navLinks.length - 1 ? "border-b border-red-600/30" : ""}`}
              >
                {link.label}
              </a>
            ))}
            
            {/* CTA Button dentro do menu mobile */}
            <div className="p-4 md:p-6">
              <CTAButton 
                text="QUERO MEU DESCONTO!" 
                extraClasses="text-sm md:text-base px-4 md:px-6 py-3 md:py-4 w-full" 
              />
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}